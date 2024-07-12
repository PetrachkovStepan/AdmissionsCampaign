import axios from "axios";
import { $authHost, $host } from "."
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

//GENERATE--GENERATE--GENERATE--GENERATE--GENERATE--
export const generateAdmission = async () => {
    // 1 -- взять всех студентов сортированных по баллу по убыванию
        pb.autoCancellation(false)

        let budgetAdmissionArray = []
        let paidAdmissionArray = []
        let targetAdmissionArray = []

        const enrollees = await pb.collection('enrollee').getFullList({
            sort: '-score',
        });
        // console.log("Enrolles");
        // console.log(enrollees);
        // 2 -- Проитись по каждому студенту
        for(let i = 0; i < enrollees.length; i ++){
            let priorities = await pb.collection('choice').getFullList({
                sort: 'priority',
            });
            console.log("Абитуриент")
            console.log(enrollees[i].id)
            const filteredPriorities = priorities.filter((priority) => priority.enrollee_id === enrollees[i].id);
            // console.log("Приоритет");
            // console.log(filteredPriorities);
            if(enrollees[i].enrolled === false){
            // 3 --  Примеряем специальность
            for(let j = 0; j < filteredPriorities.length; j ++){
                //Получаем специальность
                let speciality = await pb.collection('speciality').getOne(filteredPriorities[j].speciality_id, {});
                console.log("Спефиальность " + (j+1))
                console.log(speciality)
                switch (enrollees[i].education_type) {
                    case "budget":
                        if(speciality.budget_barrier > 0){
                            if(enrollees[i].score > speciality.budget_count){
                                //Зачисление
                                let data = {
                                    "speciality_id": speciality.id,
                                    "enrollee_id": enrollees[i].id,
                                };
                                //СОЗДАЕМ ЗАПИСЬ
                                budgetAdmissionArray.push(data)
                                //Меняем проходной балл и барьер опускается на 1
                                let addScore = speciality.budget_count
                                if(speciality.budget_barrier === 1){
                                    addScore =  enrollees[i].score
                                }
                                let specData = {
                                    "name": speciality.name,
                                    "faculty": speciality.faculty,
                                    "code": speciality.code,
                                    //изменить
                                    "student_count": speciality.student_count + 1,
                                    "budget_count": addScore,
                                    "budget_barrier": speciality.budget_barrier - 1,

                                    "paid_count": speciality.paid_count,
                                    "paid_barrier": speciality.paid_barrier,
                                    "target_count": speciality.target_count,
                                    "target_barrier": speciality.target_barrier,
                                    "approved": speciality.approved,
                                    "benefitMBarrier": speciality.benefitMBarrier,
                                    "benefitOBarrier": speciality.benefitOBarrier
                                };
                                //ОБНОВИТЬ СПЕЦИАЛЬНОСТЬ
                                await pb.collection('speciality').update(speciality.id, specData);
                                
                                const dataX = {
                                    "speciality_id": speciality.id,
                                    "enrollee_id": enrollees[i].id
                                };
                                await pb.collection('admission_list').create(dataX);

                                j = filteredPriorities.length

                            }
                        }
                      break;
                    case "paid":
                        if(speciality.paid_barrier > 0){
                            if(enrollees[i].score > speciality.paid_count){
                                //Зачисление
                                let data = {
                                    "speciality_id": speciality.id,
                                    "enrollee_id": enrollees[i].id,
                                };
                                await pb.collection('admission_list').create(data);
                                //СОЗДАЕМ ЗАПИСЬ
                                paidAdmissionArray.push(data)
                                //Меняем проходной балл и барьер опускается на 1
                                let addScore = speciality.paid_count
                                if(speciality.paid_barrier === 1){
                                    addScore =  enrollees[i].score
                                }
                                let specData = {
                                    "name": speciality.name,
                                    "faculty": speciality.faculty,
                                    "code": speciality.code,
                                    "student_count": speciality.student_count + 1,
                                    "budget_count": speciality.budget_count,
                                    "budget_barrier": speciality.budget_barrier,
                                    //изменить
                                    "paid_count": addScore,
                                    "paid_barrier": speciality.paid_barrier - 1,
                                    "target_count": speciality.target_count,
                                    "target_barrier": speciality.target_barrier,
                                    "approved": speciality.approved,
                                    "benefitMBarrier": speciality.benefitMBarrier,
                                    "benefitOBarrier": speciality.benefitOBarrier
                                };
                                //ОБНОВИТЬ СПЕЦИАЛЬНОСТЬ
                                await pb.collection('speciality').update(speciality.id, specData);
                                j = filteredPriorities.length

                            }
                        }

                      break;
                    case "target":
                        if(speciality.target_barrier > 0){
                            if(enrollees[i].score > speciality.target_count){
                                //Зачисление
                                let data = {
                                    "speciality_id": speciality.id,
                                    "enrollee_id": enrollees[i].id,
                                };
                                await pb.collection('admission_list').create(data);
                                //СОЗДАЕМ ЗАПИСЬ
                                targetAdmissionArray.push(data)
                                //Меняем проходной балл и барьер опускается на 1
                                let addScore = speciality.target_count
                                if(speciality.target_barrier === 1){
                                    addScore =  enrollees[i].score
                                }
                                let specData = {
                                    "name": speciality.name,
                                    "faculty": speciality.faculty,
                                    "code": speciality.code,
                                    "student_count": speciality.student_count + 1,
                                    "budget_count": speciality.budget_count,
                                    "budget_barrier": speciality.budget_barrier,
                                    "paid_count": speciality.paid_count,
                                    "paid_barrier": speciality.paid_barrier,
                                    //изменить
                                    "target_count": addScore,
                                    "target_barrier": speciality.target_barrier - 1,
                                    "approved": speciality.approved,
                                    "benefitMBarrier": speciality.benefitMBarrier,
                                    "benefitOBarrier": speciality.benefitOBarrier
                                };
                                //ОБНОВИТЬ СПЕЦИАЛЬНОСТЬ
                                await pb.collection('speciality').update(speciality.id, specData);
                                j = filteredPriorities.length

                            }
                        }

                      break;
                    default:
                      console.log( "Нет таких значений" );
                  }
            }
        }

        }
    
        let array =[...budgetAdmissionArray, ...paidAdmissionArray, targetAdmissionArray]
        return array;
}

export const generateMilitaryBenefitsAdmission = async () => {
    // 1 -- взять всех студентов сортированных по баллу по убыванию
        pb.autoCancellation(false)

        let budgetAdmissionArray = []
        let paidAdmissionArray = []
        let targetAdmissionArray = []

        const enrollees = await pb.collection('benefit').getFullList({
            expand: 'enrollee_id',
            filter:'type = "military" && enrollee_id.enrolled = false',
            sort: '-enrollee_id.score'
        });
        console.log("Enrollees");
        console.log(enrollees);
        // // 2 -- Проитись по каждому студенту
        for(let i = 0; i < enrollees.length; i ++){
            let priorities = await pb.collection('choice').getFullList({
                sort: 'priority',
            });
            console.log("Абитуриент")
            console.log(enrollees[i].expand.enrollee_id.id)
            const filteredPriorities = priorities.filter((priority) => priority.enrollee_id === enrollees[i].expand.enrollee_id.id);
            // console.log("Приоритет");
            // console.log(filteredPriorities);
            if(enrollees[i].expand.enrollee_id.enrolled === false){
            // 3 --  Примеряем специальность
            for(let j = 0; j < filteredPriorities.length; j ++){
                //Получаем специальность
                let speciality = await pb.collection('speciality').getOne(filteredPriorities[j].speciality_id, {});

                console.log("Спефиальность " + (j+1))
                console.log(speciality)
                if(speciality.approved === true && speciality.benefitMBarrier>0){
                    switch (enrollees[i].expand.enrollee_id.education_type) {
                        case "budget":
                            if(speciality.budget_barrier > 0){
                                if(enrollees[i].expand.enrollee_id.score > speciality.budget_count){
                                    //Зачисление
                                    let data = {
                                        "speciality_id": speciality.id,
                                        "enrollee_id": enrollees[i].expand.enrollee_id.id,
                                    };
                                    await pb.collection('admission_list').create(data);
                                    //СОЗДАЕМ ЗАПИСЬ
                                    budgetAdmissionArray.push(data)
                                    //Меняем проходной балл и барьер опускается на 1
                                    let addScore = speciality.budget_count
                                    if(speciality.budget_barrier === 1){
                                        addScore =  enrollees[i].expand.enrollee_id.score
                                    }
                                    let specData = {
                                        "name": speciality.name,
                                        "faculty": speciality.faculty,
                                        "code": speciality.code,
                                        //изменить
                                        "student_count": speciality.student_count + 1,
                                        "budget_count": speciality.budget_count,
                                        "budget_barrier": speciality.budget_barrier - 1,

                                        "paid_count": speciality.paid_count,
                                        "paid_barrier": speciality.paid_barrier,
                                        "target_count": speciality.target_count,
                                        "target_barrier": speciality.target_barrier,
                                        "approved": speciality.approved,
                                        "benefitMBarrier": speciality.benefitMBarrier -1,
                                        "benefitOBarrier": speciality.benefitOBarrier
                                    };
                                    const enrollData = {
                                        "username": enrollees[i].expand.enrollee_id.username,
                                        "user_password": enrollees[i].expand.enrollee_id.user_password,
                                        "email": enrollees[i].expand.enrollee_id.email,
                                        "education_type": enrollees[i].expand.enrollee_id.education_type,
                                        "speciality_count": enrollees[i].expand.enrollee_id.speciality_count,
                                        "score": enrollees[i].expand.enrollee_id.score,
                                        "applied": true,
                                        "approved": true,
                                        "enrolled": true
                                    };
                                    
                                    await pb.collection('enrollee').update(enrollees[i].expand.enrollee_id.id, enrollData);
                                    

                                    //ОБНОВИТЬ СПЕЦИАЛЬНОСТЬ И СТУДЕНТА
                                    await pb.collection('speciality').update(speciality.id, specData);
                                    j = filteredPriorities.length

                                }
                            }
                          break;
                        case "paid":
                            if(speciality.paid_barrier > 0){
                                if(enrollees[i].expand.enrollee_id.score > speciality.paid_count){
                                    //Зачисление
                                    let data = {
                                        "speciality_id": speciality.id,
                                        "enrollee_id": enrollees[i].expand.enrollee_id.id,
                                    };
                                    await pb.collection('admission_list').create(data);
                                    //СОЗДАЕМ ЗАПИСЬ
                                    paidAdmissionArray.push(data)
                                    //Меняем проходной балл и барьер опускается на 1
                                    let addScore = speciality.paid_count
                                    if(speciality.paid_barrier === 1){
                                        addScore =  enrollees[i].expand.enrollee_id.score
                                    }
                                    let specData = {
                                        "name": speciality.name,
                                        "faculty": speciality.faculty,
                                        "code": speciality.code,
                                        "student_count": speciality.student_count + 1,
                                        "budget_count": speciality.budget_count,
                                        "budget_barrier": speciality.budget_barrier,
                                        //изменить
                                        "paid_count": speciality.paid_count,
                                        "paid_barrier": speciality.paid_barrier - 1,
                                        "target_count": speciality.target_count,
                                        "target_barrier": speciality.target_barrier,
                                        "approved": speciality.approved,
                                        "benefitMBarrier": speciality.benefitMBarrier - 1,
                                        "benefitOBarrier": speciality.benefitOBarrier
                                    };
                                    const enrollData = {
                                        "username": enrollees[i].expand.enrollee_id.username,
                                        "user_password": enrollees[i].expand.enrollee_id.user_password,
                                        "email": enrollees[i].expand.enrollee_id.email,
                                        "education_type": enrollees[i].expand.enrollee_id.education_type,
                                        "speciality_count": enrollees[i].expand.enrollee_id.speciality_count,
                                        "score": enrollees[i].expand.enrollee_id.score,
                                        "applied": true,
                                        "approved": true,
                                        "enrolled": true
                                    };
                                    
                                    await pb.collection('enrollee').update(enrollees[i].expand.enrollee_id.id, enrollData);
                                    //ОБНОВИТЬ СПЕЦИАЛЬНОСТЬ
                                    await pb.collection('speciality').update(speciality.id, specData);
                                    j = filteredPriorities.length

                                }
                            }

                          break;
                        case "target":
                            if(speciality.target_barrier > 0){
                                if(enrollees[i].expand.enrollee_id.score > speciality.target_count){
                                    //Зачисление
                                    let data = {
                                        "speciality_id": speciality.id,
                                        "enrollee_id": enrollees[i].expand.enrollee_id.id,
                                    };
                                    await pb.collection('admission_list').create(data);
                                    //СОЗДАЕМ ЗАПИСЬ
                                    targetAdmissionArray.push(data)
                                    //Меняем проходной балл и барьер опускается на 1
                                    let addScore = speciality.target_count
                                    if(speciality.target_barrier === 1){
                                        addScore =  enrollees[i].expand.enrollee_id.score
                                    }
                                    let specData = {
                                        "name": speciality.name,
                                        "faculty": speciality.faculty,
                                        "code": speciality.code,
                                        "student_count": speciality.student_count + 1,
                                        "budget_count": speciality.budget_count,
                                        "budget_barrier": speciality.budget_barrier,
                                        "paid_count": speciality.paid_count,
                                        "paid_barrier": speciality.paid_barrier,
                                        //изменить
                                        "target_count": speciality.target_count,
                                        "target_barrier": speciality.target_barrier - 1,
                                        "approved": speciality.approved,
                                        "benefitMBarrier": speciality.benefitMBarrier -1,
                                        "benefitOBarrier": speciality.benefitOBarrier
                                    };
                                    const enrollData = {
                                        "username": enrollees[i].expand.enrollee_id.username,
                                        "user_password": enrollees[i].expand.enrollee_id.user_password,
                                        "email": enrollees[i].expand.enrollee_id.email,
                                        "education_type": enrollees[i].expand.enrollee_id.education_type,
                                        "speciality_count": enrollees[i].expand.enrollee_id.speciality_count,
                                        "score": enrollees[i].expand.enrollee_id.score,
                                        "applied": true,
                                        "approved": true,
                                        "enrolled": true
                                    };
                                    
                                    await pb.collection('enrollee').update(enrollees[i].expand.enrollee_id.id, enrollData);
                                    //ОБНОВИТЬ СПЕЦИАЛЬНОСТЬ
                                    await pb.collection('speciality').update(speciality.id, specData);
                                    j = filteredPriorities.length

                                }
                            }

                          break;
                        default:
                          console.log( "Нет таких значений" );
                      }
                }
            }

            }

        }
    console.log(budgetAdmissionArray);
    let array =[...budgetAdmissionArray, ...paidAdmissionArray, targetAdmissionArray]
    return array;
}

export const generateOrphansBenefitsAdmission = async () => {
    // 1 -- взять всех студентов сортированных по баллу по убыванию
        pb.autoCancellation(false)

        let budgetAdmissionArray = []
        let paidAdmissionArray = []
        let targetAdmissionArray = []

        const enrollees = await pb.collection('benefit').getFullList({
            expand: 'enrollee_id',
            filter:'type = "orphans" && enrollee_id.enrolled = false',
            sort: '-enrollee_id.score'
        });
        console.log("Enrollees");
        console.log(enrollees);
        // // 2 -- Проитись по каждому студенту
        for(let i = 0; i < enrollees.length; i ++){
            let priorities = await pb.collection('choice').getFullList({
                sort: 'priority',
            });
            console.log("Абитуриент")
            console.log(enrollees[i].expand.enrollee_id.id)
            const filteredPriorities = priorities.filter((priority) => priority.enrollee_id === enrollees[i].expand.enrollee_id.id);
            // console.log("Приоритет");
            // console.log(filteredPriorities);
            if(enrollees[i].expand.enrollee_id.enrolled === false){
            // 3 --  Примеряем специальность
            for(let j = 0; j < filteredPriorities.length; j ++){
                //Получаем специальность
                let speciality = await pb.collection('speciality').getOne(filteredPriorities[j].speciality_id, {});

                console.log("Спефиальность " + (j+1))
                console.log(speciality)
                if(speciality.approved === true && speciality.benefitOBarrier>0){
                    switch (enrollees[i].expand.enrollee_id.education_type) {
                        case "budget":
                            if(speciality.budget_barrier > 0){
                                if(enrollees[i].expand.enrollee_id.score > speciality.budget_count){
                                    //Зачисление
                                    let data = {
                                        "speciality_id": speciality.id,
                                        "enrollee_id": enrollees[i].expand.enrollee_id.id,
                                    };
                                    await pb.collection('admission_list').create(data);
                                    //СОЗДАЕМ ЗАПИСЬ
                                    budgetAdmissionArray.push(data)
                                    //Меняем проходной балл и барьер опускается на 1
                                    let addScore = speciality.budget_count
                                    if(speciality.budget_barrier === 1){
                                        addScore =  enrollees[i].expand.enrollee_id.score
                                    }
                                    let specData = {
                                        "name": speciality.name,
                                        "faculty": speciality.faculty,
                                        "code": speciality.code,
                                        //изменить
                                        "student_count": speciality.student_count + 1,
                                        "budget_count": addScore,
                                        "budget_barrier": speciality.budget_barrier - 1,

                                        "paid_count": speciality.paid_count,
                                        "paid_barrier": speciality.paid_barrier,
                                        "target_count": speciality.target_count,
                                        "target_barrier": speciality.target_barrier,
                                        "approved": speciality.approved,
                                        "benefitMBarrier": speciality.benefitMBarrier,
                                        "benefitOBarrier": speciality.benefitOBarrier -1
                                    };
                                    const enrollData = {
                                        "username": enrollees[i].expand.enrollee_id.username,
                                        "user_password": enrollees[i].expand.enrollee_id.user_password,
                                        "email": enrollees[i].expand.enrollee_id.email,
                                        "education_type": enrollees[i].expand.enrollee_id.education_type,
                                        "speciality_count": enrollees[i].expand.enrollee_id.speciality_count,
                                        "score": enrollees[i].expand.enrollee_id.score,
                                        "applied": true,
                                        "approved": true,
                                        "enrolled": true
                                    };
                                    
                                    await pb.collection('enrollee').update(enrollees[i].expand.enrollee_id.id, enrollData);
                                    

                                    //ОБНОВИТЬ СПЕЦИАЛЬНОСТЬ И СТУДЕНТА
                                    await pb.collection('speciality').update(speciality.id, specData);
                                    j = filteredPriorities.length

                                }
                            }
                          break;
                        case "paid":
                            if(speciality.paid_barrier > 0){
                                if(enrollees[i].expand.enrollee_id.score > speciality.paid_count){
                                    //Зачисление
                                    let data = {
                                        "speciality_id": speciality.id,
                                        "enrollee_id": enrollees[i].expand.enrollee_id.id,
                                    };
                                    await pb.collection('admission_list').create(data);
                                    //СОЗДАЕМ ЗАПИСЬ
                                    paidAdmissionArray.push(data)
                                    //Меняем проходной балл и барьер опускается на 1
                                    let addScore = speciality.paid_count
                                    if(speciality.paid_barrier === 1){
                                        addScore =  enrollees[i].expand.enrollee_id.score
                                    }
                                    let specData = {
                                        "name": speciality.name,
                                        "faculty": speciality.faculty,
                                        "code": speciality.code,
                                        "student_count": speciality.student_count + 1,
                                        "budget_count": speciality.budget_count,
                                        "budget_barrier": speciality.budget_barrier,
                                        //изменить
                                        "paid_count": addScore,
                                        "paid_barrier": speciality.paid_barrier - 1,
                                        "target_count": speciality.target_count,
                                        "target_barrier": speciality.target_barrier,
                                        "approved": speciality.approved,
                                        "benefitMBarrier": speciality.benefitMBarrier,
                                        "benefitOBarrier": speciality.benefitOBarrier - 1
                                    };
                                    const enrollData = {
                                        "username": enrollees[i].expand.enrollee_id.username,
                                        "user_password": enrollees[i].expand.enrollee_id.user_password,
                                        "email": enrollees[i].expand.enrollee_id.email,
                                        "education_type": enrollees[i].expand.enrollee_id.education_type,
                                        "speciality_count": enrollees[i].expand.enrollee_id.speciality_count,
                                        "score": enrollees[i].expand.enrollee_id.score,
                                        "applied": true,
                                        "approved": true,
                                        "enrolled": true
                                    };
                                    
                                    await pb.collection('enrollee').update(enrollees[i].expand.enrollee_id.id, enrollData);
                                    //ОБНОВИТЬ СПЕЦИАЛЬНОСТЬ
                                    await pb.collection('speciality').update(speciality.id, specData);
                                    j = filteredPriorities.length

                                }
                            }

                          break;
                        case "target":
                            if(speciality.target_barrier > 0){
                                if(enrollees[i].expand.enrollee_id.score > speciality.target_count){
                                    //Зачисление
                                    let data = {
                                        "speciality_id": speciality.id,
                                        "enrollee_id": enrollees[i].expand.enrollee_id.id,
                                    };
                                    await pb.collection('admission_list').create(data);
                                    //СОЗДАЕМ ЗАПИСЬ
                                    targetAdmissionArray.push(data)
                                    //Меняем проходной балл и барьер опускается на 1
                                    let addScore = speciality.target_count
                                    if(speciality.target_barrier === 1){
                                        addScore =  enrollees[i].expand.enrollee_id.score
                                    }
                                    let specData = {
                                        "name": speciality.name,
                                        "faculty": speciality.faculty,
                                        "code": speciality.code,
                                        "student_count": speciality.student_count + 1,
                                        "budget_count": speciality.budget_count,
                                        "budget_barrier": speciality.budget_barrier,
                                        "paid_count": speciality.paid_count,
                                        "paid_barrier": speciality.paid_barrier,
                                        //изменить
                                        "target_count": addScore,
                                        "target_barrier": speciality.target_barrier - 1,
                                        "approved": speciality.approved,
                                        "benefitMBarrier": speciality.benefitMBarrier,
                                        "benefitOBarrier": speciality.benefitOBarrier -1
                                    };
                                    const enrollData = {
                                        "username": enrollees[i].expand.enrollee_id.username,
                                        "user_password": enrollees[i].expand.enrollee_id.user_password,
                                        "email": enrollees[i].expand.enrollee_id.email,
                                        "education_type": enrollees[i].expand.enrollee_id.education_type,
                                        "speciality_count": enrollees[i].expand.enrollee_id.speciality_count,
                                        "score": enrollees[i].expand.enrollee_id.score,
                                        "applied": true,
                                        "approved": true,
                                        "enrolled": true
                                    };
                                    
                                    await pb.collection('enrollee').update(enrollees[i].expand.enrollee_id.id, enrollData);
                                    //ОБНОВИТЬ СПЕЦИАЛЬНОСТЬ
                                    await pb.collection('speciality').update(speciality.id, specData);
                                    j = filteredPriorities.length

                                }
                            }

                          break;
                        default:
                          console.log( "Нет таких значений" );
                      }
                }
            }

            }

        }
    
        let array =[...budgetAdmissionArray, ...paidAdmissionArray, targetAdmissionArray]
        return array;
}


export const createAdmission = async (data) => {
    const record = await pb.collection('admission_list').create(data);
    return record;
}

export const getAllBudjetAddmissions = async () => {
    const rec = await pb.collection('admission_list').getFullList({
        expand: 'enrollee_id, speciality_id',
        filter:'enrollee_id.education_type = "budget"',
        sort: '-speciality_id.id'
    });
    console.log(rec)
    return rec
}

export const getAllPaidAddmissions = async () => {
    const rec = await pb.collection('admission_list').getFullList({
        expand: 'enrollee_id, speciality_id',
        filter:'enrollee_id.education_type = "paid"',
        sort: '-speciality_id.id'
    });
    console.log(rec)
    return rec
}

export const getAllTargetAddmissions = async () => {
    const rec = await pb.collection('admission_list').getFullList({
        expand: 'enrollee_id, speciality_id',
        filter:'enrollee_id.education_type = "target"',
        sort: '-speciality_id.id'
    });
    console.log(rec)
    return rec
}

//СПЕЦИАЛЬНОСТИ
const getAllSpec = async () => {
    let responce = (await axios.get("http://127.0.0.1:8090/api/collections/speciality/records"))
    console.log("ALL SPEC");
    console.log(responce.data.items);
    return responce.data.items
}
//АБИТУРИЕНТЫ
const getEnrolleBySpec = async () => {
    let responce = (await axios.get("http://127.0.0.1:8090/api/collections/speciality/records"))
    console.log("ENROLLEE BY SPEC");
    console.log(responce.data.items);
    return responce
}
//ЛЬГОТЫ
export const getAllBenefits = async (enrollee_id) => {
    pb.autoCancellation(false)
    const response = await pb.send("/applicant-api/benefit/getallbyenrollee/" + enrollee_id, { 

    });
    console.log("BEN" + enrollee_id)
    console.log(response)
    return response
}
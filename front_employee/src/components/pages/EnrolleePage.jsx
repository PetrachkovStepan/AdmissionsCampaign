import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { Context } from "../..";
import {observer} from "mobx-react-lite"

import { getPassport, getEduc, getAllBenefits, getAllCt, createCt, deleteCt, updateEnrollee, getEnrolleProf } from "../http/EnrolleeAPI";
import BenefitList from "../BenefitList";
import CTList from "../CTList";

//Components

const  EmployeePage = observer(() => {
  const boxStyle = " flex items-center justify-center rounded-[5px] h-9 px-3 text-[16px] border-[3px] border-[#2b2b2bad] my-2"
  
  const navigate = useNavigate();
    
  const {user} = useContext(Context)
  const {enrollee} = useContext(Context)
  const [passport, setPassport] = useState({})
  const [educSerc, setEducSerc] = useState({})

  const [score, setScore] = useState(0)
  const [mark, setMark] = useState(0)
  const [subgect, setSubgect] = useState("physics")

  const [benefits, setBenefits] = useState([])
  const [benefitCompList, setBenefitCompList] = useState(<></>)
  const [ctCompList, setCtCompList] = useState(<></>)

  const createct = async (e) => {
    e.preventDefault()
    let allCt = await getAllCt(enrollee.id)
    for(let i=0; i<allCt.length; i++){
      if(allCt[i].subject.toString() === subgect.toString()){
        return
      }
      if((allCt[i].subject.toString() === "russian" && subgect.toString()==="belarussian") 
        || (allCt[i].subject.toString() === "belarussian" && subgect.toString()==="russian")){
        return
      }

    }

    if((score > 0 && score <=100) && (mark > 0 && mark <=10) && subgect !== ""){
        const data = {
        "score": score,
        "subject": subgect,
        "mark": mark,
        "enrollee_id": enrollee.id
        }
        await createCt(data)

        let itemsCT = await getAllCt(enrollee.id)
        setCtCompList(<CTList cts={itemsCT}></CTList>)
    }
  }

  const removeAllSpec = async (e) => {
      e.preventDefault()
      let benToDel = await getAllCt(enrollee.id)
      for(let i=0; i<benToDel.length; i++){
        //console.log(benToDel[i].id);
        await deleteCt(benToDel[i].id)
      }

      let itemsCT = await getAllCt(enrollee.id)
      setCtCompList(<CTList cts={itemsCT}></CTList>)
  }
  const getEnrollee = async (e) => {
    let passport1 = await getPassport(enrollee.id)
    setPassport(passport1)
    let educ1 = await getEduc(enrollee.id)
    setEducSerc(educ1)
  }
  const updateEnrolleProfile = async (e) => {

    let resp = await getEnrolleProf(enrollee.id)
    console.log(resp)
    let score1 = await getEduc(enrollee.id)
    let educ1 = score1.score
    
    console.log(educ1)
    let itemsCT = await getAllCt(enrollee.id)

    if(itemsCT.length !== 3){
        alert("Недостаточно сертификатов ЦТ")
        console.log("МАЛО ЦТ")
        return
    }

    for( let i = 0; i < itemsCT.length; i++){
        educ1 += parseInt(itemsCT[i].score.toString())
        
        console.log(educ1);
    }

    const data = {
        "username": resp.username,
        "user_password": resp.user_password,
        "email": resp.email,
        "education_type": resp.education_type,
        "speciality_count": resp.speciality_count,
        "score": educ1,
        "applied": true,
        "approved": true
    };
    await updateEnrollee(enrollee.id, data)
    
    navigate("/applications")
  }


  useEffect( () => {
    
    async function getComps () {

        const userINFO = JSON.parse(localStorage.getItem('user'))

        const enrollID = JSON.parse(localStorage.getItem('enrollee_id'))

        user.setName(user.username)
        user.setEmail(userINFO._email)
        user.setPassword(userINFO._password)
        user.setId(userINFO._id)
        user.setRole(userINFO._role)

        enrollee.setId(enrollID)


        await getEnrollee()
        let items = await getAllBenefits(enrollee.id)
        setBenefitCompList(<BenefitList benefits={items}></BenefitList>)

        let itemsCT = await getAllCt(enrollee.id)
        setCtCompList(<CTList cts={itemsCT}></CTList>)
    }

    getComps()

   }, [])

  return (
    <div className=" flex items-center bg-slate-200 py-5">
        <div className=" flex flex-col items-center">
            <div className=" text-[22px] mb-4 ">Личная информация</div>

            <div className="flex flex-row">

            <div className=" bg-slate-300 rounded-xl ml-5 p-5 flex flex-col">
               <div className=" m-[5px] flex flex-col">
                    <div className="text-[20px] pb-3">Личность</div>

                    <div className=" flex flex-col justify-around">
                        <div className="text-[14px] ml-3">ФИО</div>
                            <h1 className={boxStyle}
                            >{passport.fio_k}</h1>
    
                        <div className="text-[14px] ml-3">ФИО, латиницей</div>
                            <h1 className={boxStyle}
                            >{passport.fio_l}</h1>
    
                        <div className="text-[14px] ml-3">Дата рождения</div>
                            <h1 className={boxStyle}
                            >{passport.birth_date}</h1>
    
                        <div className="text-[14px] ml-3">Город</div>
                            <h1 className={boxStyle}
                            >{passport.birth_place}</h1>

                        <div className=" flex flex-row justify-between my-2">
                            <div className="text-[14px] ml-3">Пол</div>
                            <h1 className={boxStyle}
                            >{passport.sex}</h1>                                
                        </div>
     
                        <div className=" flex flex-row justify-between my-2">
                            <div className="text-[14px] ml-3 w-[50%]">Семейное положение</div>
                            <h1 className={boxStyle}
                            >{passport.family}</h1>
                        </div>                          
                    </div>

                </div>
            </div>
            
            <div className=" bg-slate-300 rounded-xl mx-5 mr-5 p-5 flex flex-col">
               <div className=" m-[5px] flex flex-col">
                    <div className="text-[20px] pb-3">Паспорт</div>

                    <div className=" flex flex-col justify-around">
                        <div className="text-[14px] ml-3">Идентификационный номер</div>
                            <h1 className={boxStyle}
                            >{passport.id_num}</h1>
    
                        <div className="text-[14px] ml-3">Серия</div>
                            <h1 className={boxStyle}
                            >{passport.series}</h1>
    
                        <div className="text-[14px] ml-3">Номер</div>
                            <h1 className={boxStyle}
                            >{passport.num}</h1>
    
                        <div className="text-[14px] ml-3">Дата выдачи</div>
                            <h1 className={boxStyle}
                            >{passport.given_date}</h1>
        
                        <div className="text-[14px] ml-3">Кем выдан</div>
                            <h1 className={boxStyle}
                            >{passport.given_by_whom}</h1>
                                                 
                    </div>

                </div>
            </div>

            <div className=" bg-slate-300 rounded-xl mx-5 mr-5 p-5 flex flex-col">
               <div className=" m-[5px] flex flex-col">
                    <div className="text-[20px] pb-3">Образование</div>

                    <div className=" flex flex-col justify-around">
                            <div className="text-[14px] ml-3">Учреждение</div>
                            <h1 className={boxStyle}
                            >{educSerc.school_type}</h1>
     
                            <div className="text-[14px] ml-3">Докуммент</div>
                            <h1 className={boxStyle}
                            >{educSerc.doc}</h1>
     
                            <div className="text-[14px] ml-3">Название учреждения</div>
                            <h1 className={boxStyle}
                            >{educSerc.school_name}</h1>
     
                            <div className="text-[14px] ml-3">Номер документа</div>
                            <h1 className={boxStyle}
                            >{educSerc.doc_num}</h1>
     
                            <div className="text-[14px] ml-3">Дата окончания</div>
                            <h1 className={boxStyle}
                            >{educSerc.educ_date}</h1>
     
                            <div className="text-[14px] ml-3">Иностранный язык</div>
                            <h1 className={boxStyle}
                            >{educSerc.foreign_language}</h1>
     
                            <div className="text-[14px] ml-3">Балл документа об образовании</div>
                            <h1 className={boxStyle}
                            >{educSerc.score}</h1>
                                                 
                    </div>

                </div>
            </div>

            </div>
            
            <div className="flex flex-row mt-10">

            <div className=" bg-slate-300 rounded-xl ml-5 p-5 flex flex-col">
               <div className=" m-[5px] flex flex-col">
                    <div className="text-[20px] pb-3">Создание сертификата</div>

                    <div className=" flex flex-col justify-around">
                        <div className="text-[14px] ml-3">Предмет</div>
                            <select className={boxStyle}
                                value={subgect}
                                onChange={e => setSubgect(e.target.value)}
                                >
                                <option value = ""></option>
                                <option value = "physics">Физика</option>
                                <option value = "math">Математика</option>
                                <option value = "russian">Русский</option>
                                <option value = "belarussian">Белорусский</option>
                            </select>
                        <div className="text-[14px] ml-3">Оценка</div>
                            <input className={boxStyle}
                            type="number"
                            value={mark}
                            onChange={e => setMark(e.target.value)}
                            ></input>
                        <div className="text-[14px] ml-3">Балл</div>
                            <input className={boxStyle}
                            type="number"
                            value={score}
                            onChange={e => setScore(e.target.value)}
                            ></input>
                        <button className=" bg-slate-800 opacity-70 hover:opacity-100
                            hover:ease-in-out h-8 mx-[5px] mt-3 select-none  text-base
                            text-white rounded-md 
                            hover:translate-y-[-2px]"
                            onClick={createct}>Добавить</button> 
                                   
                    </div>

                </div>
            </div>
            
            <div className=" bg-slate-300 rounded-xl mx-5 mr-5 p-5 flex flex-col">
               <div className=" m-[5px] flex flex-col">
                    <div className="text-[20px] pb-3">Сертификаты о ЦТ</div>
                        {ctCompList}
                        
                    <button className=" bg-slate-800 opacity-70 hover:opacity-100
                        hover:ease-in-out h-8 mx-[5px] mt-3 select-none  text-base
                        text-white rounded-md 
                        hover:translate-y-[-2px]"
                        onClick={removeAllSpec}>Очистить</button> 
                </div>
            </div>
            </div>

            <div className="flex flex-row mt-10">
            
            <div className=" bg-slate-300 rounded-xl mx-5 mr-5 p-5 flex flex-col">
               <div className=" m-[5px] flex flex-col">
                    <div className="text-[20px] pb-3">Льготы</div>
                        {benefitCompList}
                </div>
            </div>
            </div>
            
            <button className=" bg-slate-800 px-10 opacity-70 hover:opacity-100
                            hover:ease-in-out h-8 mx-[5px] mt-3 select-none  text-base
                            text-white rounded-md 
                            hover:translate-y-[-2px]"
                            onClick={updateEnrolleProfile}>Утвердить</button> 

        </div>
    </div>
  );
});

export default EmployeePage;

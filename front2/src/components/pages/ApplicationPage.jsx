import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";

import { Context } from "../..";
import {observer} from "mobx-react-lite"
import {createChoice, updateChoice, getAllChoice, deleteAllChoice } from "../http/ChoiceAPI";
import {getAllSpec} from "../http/SpecAPI";
import {updateUser} from "../http/userAPI";
import {getPassport } from "../http/userAPI";
import {getEduc } from "../http/EducAPI";

//Components
import EnrolleeSpetialityList from "../EnrolleeSpetialityList"
import SpetialityList from "../SpetialityList"

const  ApplicationPage = observer(() => {

    const {user} = useContext(Context)
    const {educ} = useContext(Context)
    const {passport} = useContext(Context)

    //Spec INFORMATION
    const [faculty, setFaculty] = useState('')
    const [spetiality, setSpetiality] = useState('')
    const [educType, setEducType] = useState('')

    //SPEC List
    const [enrolleeSpetialities, setEnrolleeSpetialities] = useState([])
    const [enrolleeCompSpetialities, setSpecCompList] = useState(<></>)
    
    const [spetialities, setSpetialities] = useState([])
    const [compSpetialities, setCompSpecList] = useState(<></>)

    let benToDel = []

    const removeAllSpec = async (e) => {
        e.preventDefault()
        let benToDel = await getAllChoice(user.id)
        for(let i=0; i<benToDel.length; i++){
            await deleteAllChoice(benToDel[i].id)
        }
        let items = await getAllChoice(user.id)
        setSpecCompList(<EnrolleeSpetialityList enrolleeSpetialities={items}></EnrolleeSpetialityList>)
        user.setSpeciality_count(items.lenth)
    }

    const applyEnrollee = async (e) => {
        
        let choices = await getAllChoice(user.id)
        let passport1 = await getPassport(user.id)
        let educSerc1 = await getEduc(user.id)

        if(choices.length === 0){
            alert("Не выбрано ни одной специальности")
            return
        }
        if(passport1.record.fio_k === "" || passport1.record.fio_l === "" || passport1.record.given_by_whom === "" 
        || passport1.record.birth_place === "" || passport1.record.series === "" || passport1.record.sex === "" 
        || passport1.record.id_num === "" ||  passport1.record.num === "" ||  passport1.record.family === "" 
        ||  passport1.record.birth_date === "" || passport1.record.given_date === ""){

            alert("Не заполнен пасспорт")
            return
        }
        if(educSerc1.records.score === "" || educSerc1.records.level === "" || educSerc1.records.school_type === "" 
        || educSerc1.records.school_name === "" || educSerc1.records.educ_date === "" || educSerc1.records.doc_num === "" 
        || educSerc1.records.foreign_language === "" || educSerc1.records.doc === ""){
            alert("Не заполнен документ об образовании")
            return
        }

        if(educType!==""){
            user.setEducation_type(educType)
            user.setApplied(true)
            let data ={
                "username": user.name,
                "user_password": user.password,
                "email": user.email,
                "education_type": user.education_type,
                "speciality_count": user.speciality_count,
                "score": educ.score,
                "applied": true,
                "approved": false
            }
            await updateUser(user.id, data)
        }else{
            alert("Не выбрана форма обучения")
        }
    }
    
    useEffect( () => {
    
        async function getComps () {

            const userINFO = JSON.parse(localStorage.getItem('user'))
    
            user.setName(userINFO._username)
            user.setEmail(userINFO._email)
            user.setPassword(userINFO._password)
            user.setId(userINFO._id)

            user.setApplied(userINFO._applied)
            user.setEducation_type(userINFO._education_type)
            user.setSpeciality_count(userINFO._speciality_count)
            user.setScore(userINFO._score)

            await getP()

            let items = await getAllChoice(user.id)
            setSpecCompList(<EnrolleeSpetialityList enrolleeSpetialities={items}></EnrolleeSpetialityList>)
            user.setSpeciality_count(items.lenth)

            let items1 =await getAllSpec()
            setCompSpecList(<SpetialityList spetialities={items1}></SpetialityList>)
        }
        const getP = async (e) => {
            const record = await getPassport(user.id)
            passport.setId(record.record.id)
            passport.setSex(record.record.sex)
            passport.setFamily(record.record.family)
            passport.setFioK(record.record.fio_k)
            passport.setFioL(record.record.fio_l)
            passport.setBirth_date(record.record.birth_date)
            passport.setBirth_place(record.record.birth_place)
            passport.setGiven_date(record.record.given_date)
            passport.setGiven_by_whom(record.record.given_by_whom)
            passport.setSeries(record.record.series)
            passport.setId_num(record.record.id_num)
            passport.setNum(record.record.num)
          }
    
        getComps()
    
       }, [])



  return (
    <div className=" flex justify-center items-center bg-slate-200 py-5  w-full">
        <div className=" flex flex-col items-center">
            <div className=" text-[22px] mb-4 ">Заявление</div>

            <div className="flex flex-col  w-full">

            <div className=" bg-slate-300  rounded-xl mx-10 p-5 flex flex-col">
               <div className=" m-[5px] flex flex-col ">
                    <div className="text-[20px] pb-3">Добавление специальности</div>

                        <div className=" flex flex-row justify-between my-2">
                                <div className="text-[14px] ml-3">Форма обучения</div>
                                <select class="flex justify-center items-center rounded-[5px] ml-9 h-9 w-80 text-[16px] border-[3px] border-[#2b2b2bad]" 
                                    value={educType}
                                    onChange={e => setEducType(e.target.value)}
                                    >
                                    <option value="budget">Бюджетная</option>
                                    <option value="paid">Платная</option>
                                    <option value="target">Целевая</option>
                                </select>
                            </div>

                </div>
            </div>

            <div className=" bg-slate-300  rounded-xl my-10 mx-10 p-5 flex flex-col">
            <div className=" m-[5px] flex flex-col ">
                    <div className="text-[20px] pb-3">Ваши специальности</div>

                        {enrolleeCompSpetialities}
                            
                            <div className="flex justify-around">
                                <button className=" bg-slate-800 opacity-70 hover:opacity-100
                                    hover:ease-in-out h-10 w-[30%] mt-3  mx-[5px] select-none  text-bas
                                    text-white rounded-md 
                                    hover:translate-y-[-2px]"
                                    onClick={applyEnrollee}>Подать заявление</button>

                                <button className=" bg-slate-800 opacity-70 hover:opacity-100
                                    hover:ease-in-out h-10 w-[30%] mt-3  mx-[5px] select-none  text-bas
                                    text-white rounded-md 
                                    hover:translate-y-[-2px]"
                                    onClick={removeAllSpec}>Очистить список</button> 
                            </div>

                </div>

            </div>
            

            <div className=" bg-slate-300  rounded-xl  p-5 flex flex-col">
            <div className=" my-[5px] flex flex-col ">
                    <div className="text-[20px] py-3">Все специальности</div>

                        {compSpetialities}

                </div>

            </div>
            </div>


        </div>

    </div>
  );
});

export default ApplicationPage;

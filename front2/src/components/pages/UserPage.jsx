import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";

import { Context } from "../..";
import {observer} from "mobx-react-lite"

import BenefitList from "../BenefitList";
import {getPassport, updatePassport } from "../http/userAPI";
import { createEduc, getEduc } from "../http/EducAPI";
import {createBenefit, getAllBenefits, deleteAllBenefits } from "../http/infoAPI";


const  UserPage = observer(() => {

    const {user} = useContext(Context)
    const {passport} = useContext(Context)
    const {educ} = useContext(Context)

    //USER INFORMATION
    const [fio, setFio] = useState('')
    const [fioL, setFioL] = useState('')
    const [birthDate, setBirthDate] = useState('')
    const [birthPlace, setBirthPlace] = useState('')
    const [sex, setSex] = useState('')
    const [family, setFamily] = useState('')

    //USER Password
    const [pID, setPID] = useState('')
    const [series, setSeries] = useState('')
    const [pNum, setPNum] = useState('')
    const [givenDate, setGivenDate] = useState('')
    const [givenByWhom, setGivenByWhom] = useState('')

    //Benefit List
    const [benefitName, setBenefitName] = useState('')
    const [benefits, setBenefits] = useState([])
    const [benefitCompList, setBenefitCompList] = useState(<></>)
    let benToDel = []

    const addNewBenefit = async (e) => {
        e.preventDefault()
        
        if(benefitName!==""){
        
        const response = await createBenefit(benefitName, user.id)
        console.log(response)

        let items = await getAllBenefits(user.id)
        setBenefitCompList(<BenefitList benefits={items}></BenefitList>)

        }
      }
    const removeAllBenefits = async (e) => {
        e.preventDefault()
        let benToDel = await getAllBenefits(user.id)
        console.log(benToDel)
        
        console.log(benToDel)
        for(let i=0; i<benToDel.length; i++){
            console.log(benToDel[i].id)
            await deleteAllBenefits(benToDel[i].id)
        }
        setBenefits([])

        let items = await getAllBenefits(user.id)
        setBenefitCompList(<BenefitList benefits={items}></BenefitList>)

    }
    useEffect( () => {
    
        async function getComps () {
            
            console.log("USER")

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
            await getE()

            let items = await getAllBenefits(user.id)
            setBenefitCompList(<BenefitList benefits={items}></BenefitList>)
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
        
          const getE = async (e) => {
            const record = await getEduc(user.id)
            educ.setId(record.records.id)
            educ.setDoc(record.records.doc)
            educ.setScore(record.records.score)
            educ.setEnrollee_id(record.records.enrollee_id)
            educ.setSchool_type(record.records.school_type)
            educ.setSchool_name(record.records.school_name)
            educ.setEduc_date(record.records.educ_date)
            educ.setDoc_num(record.records.doc_num)
            educ.setForeign_language(record.records.foreign_language)
          }
    
        getComps()
    
       }, [])
    
  
  const updateP = async (e) => {
    e.preventDefault()
    if(sex!==""){
        passport.setSex(sex)
    }
    if(family!==""){
        passport.setFamily(family)
    }
    if(fio!==""){
        passport.setFioK(fio)
    }
    if(fioL!==""){
        passport.setFioL(fioL)
    }
    if(birthDate!==""){
        passport.setBirth_date(birthDate)
    }
    if(birthPlace!==""){
        passport.setBirth_place(birthPlace)
    }
    if(givenDate!==""){
        passport.setGiven_date(givenDate)
    }
    if(givenByWhom!==""){
        passport.setGiven_by_whom(givenByWhom)
    }
    if(series!=="" && series.length == 2){
        passport.setSeries(series)
    }
    if(pID.toString().length == 14 ){
        passport.setId_num(pID)
    }
    console.log(pNum.toString().length)
    if(pNum.toString().length == 7 ){
        passport.setNum(pNum)
    }
    const data= {
        "fio_k": passport.fio_k,
        "fio_l": passport.fio_l,
        "birth_date": passport.birth_date,
        "given_date": passport.given_date,
        "given_by_whom": passport.given_by_whom,
        "birth_place": passport.birth_place,
        "series": passport.series,
        "sex": passport.sex,
        "id_num": passport.id_num,
        "num": passport.num,
        "family": passport.family
    };
    let rec = await updatePassport(passport.id, data)
    console.log(rec)
  }

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
                            <input className="rounded-[5px] h-9 w-[100%] p-3 text-[16px] border-[3px] border-[#2b2b2bad] my-2"
                            value={fio}
                            placeholder={passport.fio_k}
                            onChange={e => setFio(e.target.value)}
                            ></input>
    
                        <div className="text-[14px] ml-3">ФИО, латиницей</div>
                            <input className="rounded-[5px] h-9 w-[100%] p-3 text-[16px] border-[3px] border-[#2b2b2bad] my-2"
                            value={fioL}
                            placeholder={passport.fio_l}
                            onChange={e => setFioL(e.target.value)}
                            ></input>
    
                        <div className="text-[14px] ml-3">Дата рождения</div>
                            <input className="rounded-[5px] h-9 w-[100%] p-3 text-[16px] border-[3px] border-[#2b2b2bad] my-2"
                            value={birthDate}
                            type="date"
                            placeholder={passport.birth_date}
                            onChange={e => setBirthDate(e.target.value)}
                            ></input>
    
                        <div className="text-[14px] ml-3">Город рождения</div>
                            <input className="rounded-[5px] h-9 w-[100%] p-3 text-[16px] border-[3px] border-[#2b2b2bad] my-2"
                            value={birthPlace}
                            placeholder={passport.birth_place}
                            onChange={e => setBirthPlace(e.target.value)}
                            ></input>

                        <div className=" flex flex-row justify-between my-2">
                            <div className="text-[14px] ml-3">Пол</div>
                                <select class="flex justify-center items-center rounded-[5px] ml-9 h-9 w-30 text-[16px] border-[3px] border-[#2b2b2bad]" 
                                    value={sex}
                                    placeholder={passport.sex}
                                    onChange={e => setSex(e.target.value)}
                                    >
                                    <option value=""></option>
                                    <option value="m">m</option>
                                    <option value="f">f</option>
                                </select>
                        </div>
     
                        <div className=" flex flex-row justify-between my-2">
                            <div className="text-[14px] ml-3">Семейное положение</div>
                                <select class="flex justify-center items-center rounded-[5px] ml-9 h-9 w-50 text-[16px] border-[3px] border-[#2b2b2bad]" 
                                    value={family}
                                    placeholder={passport.family}
                                    onChange={e => setFamily(e.target.value)}
                                    >
                                    <option value=""></option>
                                    <option value="холост">холост</option>
                                    <option value="в браке">в браке</option>
                                </select>
                        </div>                          
                    </div>

                </div>
            </div>
            
            <div className=" bg-slate-300 rounded-xl mx-5 mr-5 p-5 flex flex-col">
               <div className=" m-[5px] flex flex-col">
                    <div className="text-[20px] pb-3">Паспорт</div>

                    <div className=" flex flex-col justify-around">
                        <div className="text-[14px] ml-3">Идентификационный номер</div>
                            <input className="rounded-[5px] h-9 w-[100%] p-3 text-[16px] border-[3px] border-[#2b2b2bad] my-2"
                            value={pID}
                            placeholder={passport._id_num}
                            onChange={e => setPID(e.target.value)}
                            ></input>
    
                        <div className="text-[14px] ml-3">Серия</div>
                            <input className="rounded-[5px] h-9 w-[100%] p-3 text-[16px] border-[3px] border-[#2b2b2bad] my-2"
                            value={series}
                            placeholder={passport.series}
                            onChange={e => setSeries(e.target.value)}
                            ></input>
    
                        <div className="text-[14px] ml-3">Номер</div>
                            <input className="rounded-[5px] h-9 w-[100%] p-3 text-[16px] border-[3px] border-[#2b2b2bad] my-2"
                            value={pNum}
                            type="number"
                            placeholder={passport.num}
                            onChange={e => setPNum(e.target.value)}
                            ></input>
    
                        <div className="text-[14px] ml-3">Дата выдачи</div>
                            <input className="rounded-[5px] h-9 w-[100%] p-3 text-[16px] border-[3px] border-[#2b2b2bad] my-2"
                            value={givenDate}
                            type="date"
                            placeholder={passport.given_date}
                            onChange={e => setGivenDate(e.target.value)}
                            ></input>
        
                        <div className="text-[14px] ml-3">Кем выдан</div>
                            <input className="rounded-[5px] h-9 w-[100%] p-3 text-[16px] border-[3px] border-[#2b2b2bad] my-2"
                            value={givenByWhom}
                            placeholder={passport.given_by_whom}
                            onChange={e => setGivenByWhom(e.target.value)}
                            ></input>
                                                 
                    </div>

                </div>
            </div>

            </div>

            <div className="flex flex-row mt-10">

            <div className=" bg-slate-300 rounded-xl ml-5 p-5 flex flex-col">
               <div className=" m-[5px] flex flex-col">
                    <div className="text-[20px] pb-3">Добавление льготы</div>

                    <div className=" flex flex-col justify-around">
                        <div className="text-[14px] ml-3">Наименование</div>
                            <input className="rounded-[5px] h-9 w-[100%] p-3 text-[16px] border-[3px] border-[#2b2b2bad] my-2"
                            value={benefitName}
                            onChange={e => setBenefitName(e.target.value)}
                            ></input>
     
                        <button className=" bg-slate-800 opacity-70 hover:opacity-100
                            hover:ease-in-out h-8 mx-[5px] select-none  text-base
                            text-white rounded-md 
                            hover:translate-y-[-2px]"
                            onClick={addNewBenefit}>Добавить</button>  
                  
                        <button className=" bg-slate-800 opacity-70 hover:opacity-100
                            hover:ease-in-out h-8 mx-[5px] mt-3 select-none  text-base
                            text-white rounded-md 
                            hover:translate-y-[-2px]"
                            onClick={removeAllBenefits}>Очистить льготы</button> 
                                   
                    </div>

                </div>
            </div>
            
            <div className=" bg-slate-300 rounded-xl mx-5 mr-5 p-5 flex flex-col">
               <div className=" m-[5px] flex flex-col">
                    <div className="text-[20px] pb-3">Ваши льготы</div>
                        {benefitCompList}
                </div>
            </div>
            </div>

            <button className=" bg-slate-800 opacity-70 hover:opacity-100
                  hover:ease-in-out h-10 w-[60%] m-6  mx-[5px] select-none  text-bas
                  text-white rounded-md 
                  hover:translate-y-[-2px]"
                  onClick={updateP}>Сохранить изменения</button>

        </div>

    </div>
  );
});

export default UserPage;

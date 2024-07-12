import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { updateEduc, getEduc } from "../http/EducAPI";
import {getPassport } from "../http/userAPI";

import { Context } from "../..";
import {observer} from "mobx-react-lite"

const  EducPage = observer(() => {

    const {user} = useContext(Context)
    const {educ} = useContext(Context)
    const {passport} = useContext(Context)

    //USER INFORMATION
    const [school_type, setSchool_type] = useState('')
    const [school_name, setSchool_name] = useState('')
    const [educDate, setEducDate] = useState('')
    const [doc_num, setDocNum] = useState('')
    const [doc, setDoc] = useState('')
    const [foreign_language, setForeign_language] = useState('')
    const [score, setScore] = useState('')

    const UpdateEduc = async (e) => {
        e.preventDefault()
        if(score.toString()!=="" && score > 0 && score <= 100){
            educ.setScore(score)
        }        
        if(school_type!==""){
            educ.setSchool_type(school_type)
        }
        if(school_name!==""){
            educ.setSchool_name(school_name)
        }        
        if(educDate!==""){
            educ.setEduc_date(educDate)
        }        
        if(doc!==""){
            educ.setDoc(doc)
        }
        if(doc_num!==""){
            educ.setDoc_num(doc_num)
        }
        if(foreign_language!==""){
            educ.setForeign_language(foreign_language)
        }
        let data = {
            "score": educ.score,
            "enrollee_id": educ.enrollee_id,
            "level": "test",
            "school_type": educ.school_type,
            "school_name":educ.school_name,
            "educ_date": educ.educ_date,
            "doc_num": educ.doc_num,
            "foreign_language": educ.foreign_language,
            "doc": educ.doc
        };
        await updateEduc(data, educ.id)
        
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
            <div className=" text-[22px] mb-4 ">Образование</div>

            <div className="flex flex-row  w-[150%]">

            <div className=" w-[150%] bg-slate-300  rounded-xl mx-10 p-5 flex flex-col">
               <div className=" m-[5px] flex flex-col">
                    <div className="text-[20px] pb-3"></div>
     
                        <div className=" flex flex-row justify-between my-2">
                            <div className="text-[14px] ml-3">Учреждение</div>
                                <input className="rounded-[5px] ml-9 h-9 w-80 p-3 text-[16px] border-[3px] border-[#2b2b2bad]"
                                value={school_type}
                                placeholder={educ.school_type}
                                onChange={e => setSchool_type(e.target.value)}
                                ></input>
                        </div>
     
                        <div className=" flex flex-row justify-between my-2">
                            <div className="text-[14px] ml-3">Докуммент</div>
                                <input className="rounded-[5px] ml-9 h-9 w-80 p-3 text-[16px] border-[3px] border-[#2b2b2bad]"
                                value={doc}
                                placeholder={educ.doc}
                                onChange={e => setDoc(e.target.value)}
                                ></input>
                        </div>
     
                        <div className=" flex flex-row justify-between my-2">
                            <div className="text-[14px] ml-3">Название учреждения</div>
                                <input className="rounded-[5px] ml-9 h-9 w-80 p-3 text-[16px] border-[3px] border-[#2b2b2bad]"
                                value={school_name}
                                placeholder={educ.school_name}
                                onChange={e => setSchool_name(e.target.value)}
                                ></input>
                        </div>
     
                        <div className=" flex flex-row justify-between my-2">
                            <div className="text-[14px] ml-3">Номер документа</div>
                                <input className="rounded-[5px] ml-9 h-9 w-80 p-3 text-[16px] border-[3px] border-[#2b2b2bad]"
                                value={doc_num}
                                placeholder={educ.doc_num}
                                onChange={e => setDocNum(e.target.value)}
                                ></input>
                        </div>
     
                        <div className=" flex flex-row justify-between my-2">
                            <div className="text-[14px] ml-3">Дата окончания</div>
                                <input className="rounded-[5px] ml-9 h-9 w-80 p-3 text-[16px] border-[3px] border-[#2b2b2bad]"
                                value={educDate}
                                type="date"
                                placeholder={educ.educ_date}
                                onChange={e => setEducDate(e.target.value)}
                                ></input>
                        </div>
     
                        <div className=" flex flex-row justify-between my-2">
                            <div className="text-[14px] ml-3">Иностранный язык</div>
                                <input className="rounded-[5px] ml-9 h-9 w-80 p-3 text-[16px] border-[3px] border-[#2b2b2bad]"
                                value={foreign_language}
                                placeholder={educ.foreign_language}
                                onChange={e => setForeign_language(e.target.value)}
                                ></input>
                        </div>
     
                        <div className=" flex flex-row justify-between my-2">
                            <div className="text-[14px] ml-3">Балл документа об образовании</div>
                                <input className="rounded-[5px] ml-9 h-9 w-80 p-3 text-[16px] border-[3px] border-[#2b2b2bad]"
                                value={score}
                                type="number"
                                placeholder={educ.score}
                                onChange={e => setScore(e.target.value)}
                                ></input>
                        </div>

                </div>
            </div>

            </div>

            <button className=" bg-slate-800 opacity-70 hover:opacity-100
                  hover:ease-in-out h-10 w-[60%] m-6  mx-[5px] select-none  text-bas
                  text-white rounded-md 
                  hover:translate-y-[-2px]"
                  onClick={UpdateEduc}>Сохранить изменения</button> 

        </div>

    </div>
  );
});

export default EducPage;

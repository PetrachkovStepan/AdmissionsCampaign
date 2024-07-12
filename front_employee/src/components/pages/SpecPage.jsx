import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";

import { Context } from "../..";
import {observer} from "mobx-react-lite"

//Components
import SpetialityList from "../SpetialityList"
import BenefitList from "../BenefitList";
import {getAllSpec, createSpec, deleteSpec } from "../http/SpecAPI";

const  SpecPage = observer(() => {

    
    const {user} = useContext(Context)
  //Spec INFORMATION
  const [name, setName] = useState('')
  const [approved, setApproved] = useState(false)
  const [faculty, setFaculty] = useState('')
  const [code, setCode] = useState('')
  const [budgetBarrier, setBudgetBarrier] = useState('')
  const [paidBarrier, setPaidBarrier] = useState('')
  const [targetBarrier, setTargetBarrier] = useState('')

  
  const [delCode, setDelCode] = useState('')

  //SPEC List
  const [spetialities, setSpetialities] = useState([])
  const [compSpetialities, setSpecCompList] = useState(<></>)

  const addNewSpec = async (e) => {
    e.preventDefault()

    let allSpec = await getAllSpec()
    for(let i = 0; i < allSpec.length; i++){
        if(allSpec[i].code.toString() === code.toString()){
            return
        }
        if(allSpec[i].faculty.toString() === faculty.toString() && allSpec[i].name.toString() === name.toString()){
            return
        }
    }

    if( name !=="" && faculty !=="" && code.toString().length === 6 && budgetBarrier.toString() !=="" && paidBarrier.toString() !=="" && targetBarrier.toString() !==""){
        const data = {
            "name": name,
            "faculty": faculty,
            "code": code,
            "student_count": 0,
            "budget_count": 0,
            "budget_barrier": budgetBarrier,
            "paid_count": 0,
            "paid_barrier": paidBarrier,
            "target_count": 0,
            "target_barrier": targetBarrier,
            "approved": approved,
            "benefitMBarrier": Math.round(budgetBarrier/3),
            "benefitOBarrier": Math.round(budgetBarrier/3)
        };
        await createSpec(data)

        let items = await getAllSpec()
        setSpecCompList(<SpetialityList spetialities={items}></SpetialityList>)
    }
    else{
        alert("Не введены данные о специальности")
    }
  }
  const removeSpec = async (e) => {
    e.preventDefault()
    try {
        await deleteSpec(delCode)        
    } catch (error) {
        alert("Не найдено такой специальности")
        console.log("NOT FOUND")
    }
    let items = await getAllSpec()
    setSpecCompList(<SpetialityList spetialities={items}></SpetialityList>)
  }
  useEffect( () => {
    
    async function getComps () {
        
        const userINFO = JSON.parse(localStorage.getItem('user'))

        user.setName(user.username)
        user.setEmail(userINFO._email)
        user.setPassword(userINFO._password)
        user.setId(userINFO._id)
        
        user.setRole(userINFO._role)

        let items = await getAllSpec()
        setSpecCompList(<SpetialityList spetialities={items}></SpetialityList>)
    }

    getComps()

   }, [])

  return (
    <div className=" flex items-center bg-slate-200 py-5 w-[80%]">
        <div className=" flex flex-col items-center">
            <div className=" text-[22px] mb-4 ">Специальности</div>
            <div className="flex flex-col">
                <div className=" bg-slate-300 rounded-xl mx-10 p-5 flex flex-col">

                    <div className="flex flex-col items-center">
                        
                        <div className="text-[20px] pb-3">Создание специальности</div>

                        <div className="flex flex-row">
                        
                            <div className="  m-[5px] flex flex-col justify-around">
                                
                                    
                                <div className=" flex flex-row justify-between my-2">
                                    <div className="text-[14px] ml-3">Название</div>
                                        <input className="rounded-[5px] ml-9 h-9 w-60 p-3 text-[16px] border-[3px] border-[#2b2b2bad]"
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                        ></input>
                                </div>
                                <div className=" flex flex-row justify-between my-2">
                                    <div className="text-[14px] ml-3">Факультет</div>
                                        <input className="rounded-[5px] ml-9 h-9 w-60 p-3 text-[16px] border-[3px] border-[#2b2b2bad]"
                                        value={faculty}
                                        onChange={e => setFaculty(e.target.value)}
                                        ></input>
                                </div>
        
                                <div className=" flex flex-row justify-between my-2">
                                    <div className="text-[14px] ml-3">Код специальности</div>
                                        <input className="rounded-[5px] ml-9 h-9 w-60 p-3 text-[16px] border-[3px] border-[#2b2b2bad]"
                                        value={code}
                                        type="number"
                                        onChange={e => setCode(e.target.value)}
                                        ></input>
        
                            </div>

                            </div>
                        
                            <div className=" m-[5px] flex flex-col justify-around">
                                
                                <div className=" flex flex-row justify-between my-2">
                                    <div className="text-[14px] ml-3">Кол-во бюджетных мест</div>
                                        <input className="rounded-[5px] ml-9 h-9 w-60 p-3 text-[16px] border-[3px] border-[#2b2b2bad]"
                                        value={budgetBarrier}
                                        type="number"
                                        onChange={e => setBudgetBarrier(e.target.value)}
                                        ></input>
                                </div>
        
                                <div className=" flex flex-row justify-between my-2">
                                    <div className="text-[14px] ml-3">Кол-во платных мест</div>
                                        <input className="rounded-[5px] ml-9 h-9 w-60 p-3 text-[16px] border-[3px] border-[#2b2b2bad]"
                                        value={paidBarrier}
                                        type="number"
                                        onChange={e => setPaidBarrier(e.target.value)}
                                        ></input>
                                </div>
        
                                <div className=" flex flex-row justify-between my-2">
                                    <div className="text-[14px] ml-3">Кол-во целевых мест</div>
                                        <input className="rounded-[5px] ml-9 h-9 w-60 p-3 text-[16px] border-[3px] border-[#2b2b2bad]"
                                        value={targetBarrier}
                                        type="number"
                                        onChange={e => setTargetBarrier(e.target.value)}
                                        ></input>
        
                            </div>
        
                                <div className=" flex flex-row justify-between my-2">
                                    <div className="text-[14px] ml-3">Военная</div>
                                        <select className="flex justify-center items-center rounded-[5px] ml-9 h-9 w-60 text-[16px] border-[3px] border-[#2b2b2bad]"
                                        value={approved}
                                        type="boolean"
                                        onChange={e => setApproved(e.target.value)}
                                        >
                                        <option value="true">Да</option>
                                        <option value="false">Нет</option>
                                        </select>
        
                            </div>

                            </div>
                        </div>

                        
                        <button className=" bg-slate-800 opacity-70 hover:opacity-100
                            hover:ease-in-out h-10 w-[60%] m-6  mx-[5px] select-none  text-bas
                            text-white rounded-md 
                            hover:translate-y-[-2px]"
                            onClick={addNewSpec}>Добавить специальность</button> 

                    </div>
                </div>

                <div className=" bg-slate-300  rounded-xl my-10 mx-10 p-5 flex flex-col">
                    <div className=" m-[5px] flex flex-col items-center">
                        <div className="text-[20px] pb-3">Список специальностей</div>

                        {compSpetialities}

                    </div>
                </div>

                <div className=" bg-slate-300  rounded-xl mx-10 flex flex-col">
                    <div className=" m-[5px] flex flex-col items-center">

                        <div className=" flex flex-row justify-between items-center w-[70%] my-2 ">
                                    <div className="text-[14px] ml-3">Код специальности</div>
                                        <input className="rounded-[5px] ml-9 h-9 w-60 p-3 text-[16px] border-[3px] border-[#2b2b2bad]"
                                        value={delCode}
                                        type="number"
                                        onChange={e => setDelCode(e.target.value)}
                                        ></input>

                                    <button className=" bg-slate-800 opacity-70 hover:opacity-100
                                        hover:ease-in-out h-10 w-[60%] m-3  mx-[5px] select-none  text-bas
                                        text-white rounded-md 
                                        hover:translate-y-[-2px]"
                                        onClick={removeSpec}>Удалить специальность</button> 
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  );
});

export default SpecPage;

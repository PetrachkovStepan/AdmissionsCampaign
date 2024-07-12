import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import "./myButton.css"

import { Context } from "../..";
import {generateAdmission, generateMilitaryBenefitsAdmission, generateOrphansBenefitsAdmission, createAdmission, getAllBudjetAddmissions, getAllPaidAddmissions, getAllTargetAddmissions} from "../http/AdmissionApi"

import {observer} from "mobx-react-lite"

//Components
import AdmissionList from "../AdmissionList"

const  AdmissionPage = observer(() => {

  const {user} = useContext(Context)

  //Applications List
  const [admissions, setAdmissions] = useState([])

  const createAdmissionList = async (e) => {
    e.preventDefault()

    let addMArray = await generateMilitaryBenefitsAdmission()
    let addOArray = await generateOrphansBenefitsAdmission()
    let addArray = await generateAdmission()

    //let array = [...addMArray, ...addOArray, ...addArray]

    // for(let i = 0; i< array.length; i++){
    //   console.log("IDIDIDID");
    //   console.log(array[i].speciality_id)
    //   console.log(array[i].enrollee_id)
    //   const data = {
    //     "speciality_id": array[i].speciality_id,
    //     "enrollee_id": array[i].enrollee_id
    // };
    //   await createAdmission(data)
    // }
  }

  const getB = async (e) => {
    e.preventDefault()
    let res= await getAllBudjetAddmissions()

    setAdmissions(res)

  }

  const getP = async (e) => {
    e.preventDefault()

    let res= await getAllPaidAddmissions()

    setAdmissions(res)    
  }

  const getT = async (e) => {
    e.preventDefault()

    let res= await getAllTargetAddmissions()

    setAdmissions(res)    
  }
  
  useEffect( () => {
    
    async function getComps () {
        
        const userINFO = JSON.parse(localStorage.getItem('user'))

        user.setName(user.username)
        user.setEmail(userINFO._email)
        user.setPassword(userINFO._password)
        user.setId(userINFO._id)
        
        user.setRole(userINFO._role)
    }

    getComps()

   }, [])


  return (
    <div className=" flex items-center bg-slate-200 py-5">
        <div className=" flex flex-col items-center">
            <div className=" text-[22px] mb-4 ">Списки поступивших</div>
            <div className="flex flex-col items-center">

            <button class="glow-on-hover" type="button"
            onClick={createAdmissionList}>Сформировать списки</button>

            <div className="flex flex-row">
                <button className=" bg-slate-800 opacity-70 hover:opacity-100
                                hover:ease-in-out h-30 w-full px-3 m-6  mx-[5px] select-none  text-bas
                                text-white rounded-md 
                                hover:translate-y-[-2px]"
                onClick={getB}>Бюджетные списки</button>

                <button  className=" bg-slate-800 opacity-70 hover:opacity-100
                                hover:ease-in-out h-30 w-full px-3 m-6  mx-[5px] select-none  text-bas
                                text-white rounded-md 
                                hover:translate-y-[-2px]"
                onClick={getP}>Платные списки</button>

                <button className=" bg-slate-800 opacity-70 hover:opacity-100
                                hover:ease-in-out h-30 w-full px-3 m-6  mx-[5px] select-none  text-bas
                                text-white rounded-md 
                                hover:translate-y-[-2px]"
                onClick={getT}>Целевые списки</button>
            </div>
 

                <div className=" bg-slate-300  rounded-xl my-6 mx-10 p-5 flex flex-col">
                    <div className=" m-[5px] flex flex-col items-center">
                        <div className="text-[20px] pb-3">Студенты</div>

                        <AdmissionList admissions={admissions}></AdmissionList>

                    </div>
                </div>
                
            </div>
        </div>
    </div>
  );
});

export default AdmissionPage;

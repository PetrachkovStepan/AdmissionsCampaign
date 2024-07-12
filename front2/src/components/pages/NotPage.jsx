import React, { useState } from "react";
import  { useEffect } from "react";
import { logIn, registration, createPassport, getPassport, getOneP } from "../http/userAPI";
import { createEduc, getEduc } from "../http/EducAPI";
import { useNavigate } from "react-router-dom";

import { Link, Routes, Route} from "react-router-dom";
import { useContext } from "react";
import { Context } from "../..";
import {observer} from "mobx-react-lite"


const AuthPage  = observer(() => {
  const {user} = useContext(Context)

  
  const [spec, setSpec] = useState('')
  const [faculty, setFaculty] = useState('')



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
    }

    getComps()

   }, [])
  return (
    <div className=" flex flex-col items-center justify-center h-screen w-screen 
     bg-slate-500 bg-no-repeat bg-cover opacity-[100%] absolute bottom-0 left-0">
      
      <div className=" flex flex-col items-center justify-center p-4 bg-white opacity-[95%] rounded-[5px]">
        <div className="text-[24px] mb-5">Поздравляем</div>
        <div>
          <div className="text-[12px] ml-3">Вы поступили на специальность</div>
          <div className="text-[12px] ml-3">{spec}</div>
          <div className="text-[12px] ml-3">Факультет</div>
          <div className="text-[12px] ml-3">{faculty}</div>      
          
        </div>
      </div>
    </div>
  );
});

export default AuthPage;

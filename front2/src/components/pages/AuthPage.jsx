import React, { useState } from "react";
import { logIn, registration, createPassport, getPassport, getOneP } from "../http/userAPI";
import { createEduc, getEduc } from "../http/EducAPI";
import { useNavigate } from "react-router-dom";

import { Link, Routes, Route} from "react-router-dom";
import { useContext } from "react";
import { Context } from "../..";
import {observer} from "mobx-react-lite"


const AuthPage  = observer(() => {
  const {user} = useContext(Context)
  const {passport} = useContext(Context)
  const {educ} = useContext(Context)

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

  const getP = async (e) => {
    const record = await getPassport(user.id)
    console.log(record.record)
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
    console.log(record)
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

  const registrate = async (e) => {  
    
    
    let aaa = await getOneP(login)
    console.log(aaa)
    if(aaa[0].email === login){
        alert("Такой пользователь уже есть")
        return
    }

    await registration(login, password)
    
    const response = await logIn(login, password)
    
    user.setName(login)
    user.setEmail(login)
    user.setPassword(password)
    user.setId(response.id)

    user.setApplied(response.applied)
    user.setEducation_type(response.education_type)
    user.setSpeciality_count(response.speciality_count)
    user.setScore(response.score)

    localStorage.setItem('user', JSON.stringify(user));
    
    await createPassport(response.id)
    await getP()
    await createEduc(response.id)
    await getE()

    navigate("/enrolleeinfo")
  }

  const signIn = async () => {
    try {
      const response = await logIn(login, password)
      // console.log(response)
      user.setName(login)
      user.setEmail(login)
      user.setPassword(password)
      user.setId(response.id)

      user.setApplied(response.applied)
      user.setEducation_type(response.education_type)
      user.setSpeciality_count(response.speciality_count)
      user.setScore(response.score)

      localStorage.setItem('user', JSON.stringify(user));
      
      await getP()
      
      await getE()

      navigate("/enrolleeinfo")
      
    } catch (error) {
      alert("Неверный логин или пароль!")
    }
    // try {
    //   const response = await logIn(login, password)
      
    //   user.setName(login)
    //   user.setEmail(login)
    //   user.setPassword(password)
    //   user.setId(response.id)

    //   user.setApplied(response.applied)
    //   user.setEducation_type(response.education_type)
    //   user.setSpeciality_count(response.speciality_count)
    //   user.setScore(response.score)

    //   localStorage.setItem('user', JSON.stringify(user));
      
    //   await getP()
      
    //   await getE()

    //   navigate("/enrolleeinfo")
      
    // } catch (error) {
    //   alert("Неверный логин или пароль!")      
    // }
  }

  return (
    <div className=" flex flex-col items-center justify-center h-screen w-screen 
     bg-slate-500 bg-no-repeat bg-cover opacity-[100%] absolute bottom-0 left-0">
      
      <div className=" flex flex-col items-center justify-center p-4 bg-white opacity-[95%] rounded-[5px]">
        <div className="text-[24px] mb-5">Вход/Регистрация</div>
        <div>
          <div className="text-[12px] ml-3">Логин</div>
          <input className="rounded-[5px] h-9 w-[100%] p-3 text-[16px] border-[3px] border-[#2b2b2bad]"
          value={login}
          onChange={e => setLogin(e.target.value)}
          ></input>
          
          <div className="text-[12px] ml-3 mt-2">Пароль</div>
          <input className="rounded-[5px] h-9 w-[100%] p-3 text-[16px] border-[3px] border-[#2b2b2bad]"
          value={password}
          type="password"
          onChange={e => setPassword(e.target.value)}
          ></input>

          <button className="ml-3"
          onClick={registrate}
          >Зарегистрироваться</button>
        </div>
        <button  className=" bg-black opacity-70 hover:opacity-100 mt-5
                hover:ease-in-out h-8 w-[50%] mx-[15px] select-none  text-base
                text-white rounded-md 
                hover:translate-y-[-2px]"
                onClick={signIn}
                >Войти</button>
      </div>
    </div>
  );
});

export default AuthPage;

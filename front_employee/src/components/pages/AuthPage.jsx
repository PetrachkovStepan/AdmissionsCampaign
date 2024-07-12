import React, { useState } from "react";
import { logIn, registration } from "../http/userAPI";
import { useNavigate } from "react-router-dom";

import { Link, Routes, Route} from "react-router-dom";
import { useContext } from "react";
import { Context } from "../..";
import {observer} from "mobx-react-lite"


const AuthPage  = observer(() => {
  const {user} = useContext(Context)

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

  const signIn = async () => {
    try {
      const response = await logIn(login, password)
      // console.log(response)

      user.setName(response.user.username)
      user.setEmail(login)
      user.setPassword(password)
      user.setId(response.user.id)
      
      user.setRole(response.user.role)

      
      localStorage.setItem('user', JSON.stringify(user));

      if(user.role){
        navigate("/profiles")
      }else{
        navigate("/spec")
      }
      
    } catch (error) {
      alert("Неверный логин или пароль!")
    }
  }

  return (
    <div className=" flex flex-col items-center justify-center h-screen w-screen 
     bg-slate-500 bg-no-repeat bg-cover opacity-[100%] absolute bottom-0 left-0">
      
      <div className=" w-[30%] flex flex-col items-center justify-center p-4 bg-white opacity-[95%] rounded-[5px]">
        <div className="text-[24px] mb-5">Вход</div>
        <div className="w-[80%]">
          <div className="text-[12px] ml-3">E-mail</div>
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

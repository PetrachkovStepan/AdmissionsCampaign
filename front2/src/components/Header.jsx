
import React, { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { Link, Routes, Route} from "react-router-dom";
import { Context } from "..";
import {observer} from "mobx-react-lite"

const Header = observer(() => {
  
  const navigate = useNavigate();
  const {user} = useContext(Context)
  const {passport} = useContext(Context)

  const logOut = () =>{
    localStorage.clear();
    navigate("/")
  }

  return (
    
    <div >
      <div className=" h-full w-full">
        <div className="flex flex-row h-full w-full items-center justify-between">
            <div className=" flex flex-row justify-around h-full w-[40%]">
              <div  className=" bg-[url('./Assets/User.svg')] h-[80px] w-[80px] bg-no-repeat ml-[1%] ">
              </div>          
              <div className=" flex flex-col justify-start"> 
                <div className="text-[16px] mx-4 text-white">{passport.fio_k}</div>
                <div className="text-[14px] mx-4 text-slate-300">{user.email}</div>
              </div>
            </div>

            <div className="flex flex-row h-full w-full justify-around px-5 ">
              <Link to="/enrolleeinfo" className="text-white">Личная информация</Link>
              <Link to="/enrolleeeducation" className="text-white">Образование</Link>
              <Link to="/application" className="text-white">Заявление</Link>
            </div>
            <div className="items-center justify-center pr-[2%]">
              <button className=" bg-slate-800 opacity-70 hover:opacity-100
                  hover:ease-in-out h-8 w-[120%] mx-[5px] select-none  text-base
                  text-white rounded-md 
                  hover:translate-y-[-2px]" onClick={logOut}>Выйти</button>
            </div>
          </div>
      </div>
    </div>
  );
});

export default Header;


import React, { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { Link, Routes, Route} from "react-router-dom";
import { Context } from "..";
import {observer} from "mobx-react-lite"

const Header = observer(() => {
  
  const navigate = useNavigate();

  const filterButton = (onClickMethod, placeholder) => {
    return (
      <button onClick={onClickMethod} className=' bg-[#4A4A4A] opacity-70 hover:opacity-100 hover:ease-in-out h-full w-full mx-[15px] select-none  text-base
       text-white rounded-md hover:translate-y-[-2px]'>{placeholder}</button>
      )
  }
  const {user} = useContext(Context)

  const logOut = () =>{
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
                <div className="text-[16px] mx-4 text-white">{user.name}</div>
                <div className="text-[14px] mx-4 text-slate-300">{user.email}</div>
              </div>
            </div>

            
              {!user.role?
                <div className="flex flex-row h-full w-full justify-around px-5">
                  <Link to="/spec" className="text-white">Специальности</Link>
                  <Link to="/applications" className="text-white">Заявки абитуриентов</Link>
                  <Link to="/admissionlist" className="text-white">Списки поступивших</Link>
                </div> 
              :
                <div className="flex flex-row h-full w-full  px-[20%]">
                  <Link to="/profiles" className="text-white">Создание профилей</Link>
                </div>

              }
              
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

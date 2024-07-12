import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";

import { Context } from "../..";
import {observer} from "mobx-react-lite"

import { update, getProfile } from "../http/userAPI";

//Components
import ProfileList from "../ProfileList"

const  EmployeePage = observer(() => {
    
  const {user} = useContext(Context)

  //Spec INFORMATION
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('')
  const [phoneNum, setPhoneNum] = useState('')
  const [department, setDepartment] = useState('')
  const [info, setInfo] = useState('')

  
  const{profile} = useContext(Context)

  const updateProfile = async (e) => {
    e.preventDefault()
    console.log(role)
        console.log(profile.email)

        if(name!==""){
            profile.setName(name)
        }
        if(password!==""){
            profile.setPassword(password)
        }
        if(role!==""){
            profile.setRole(role)
        }
        if(phoneNum!==""){
            profile.setPhoneNum(phoneNum)
        }
        if(department!==""){
            profile.setDepartment(department)
        }
        if(info!==""){
            profile.setInfo(info)
        }

        update(profile.name, profile.email,profile.password, profile.role, profile.phoneNum, profile.department, profile.info)
    
  }
  useEffect( () => {
    
    async function getComps () {
        
        const userINFO = JSON.parse(localStorage.getItem('user'))

        await getP()

        user.setName(user.username)
        user.setEmail(userINFO._email)
        user.setPassword(userINFO._password)
        user.setId(userINFO._id)
        
        user.setRole(userINFO._role)
    }
    
    const getP = async (e) => {
        
        const prof = JSON.parse(localStorage.getItem('prof_id'))
        
        console.log("AAAAAAAAAAA")
        console.log(prof)

        const record = await getProfile(prof)
        console.log(record)
        
        profile.setName(record.username)
        profile.setEmail(record.email)
        profile.setPassword(record.user_password)
        profile.setRole(record.role)
        profile.setPhoneNum(record.phone)
        profile.setDepartment(record.department)
        profile.setInfo(record.info)
      }

    getComps()

   }, [])

  return (
    <div className=" flex items-center bg-slate-200 py-5">
        <div className=" flex flex-col items-center">
            <div className=" text-[22px] mb-4 ">Профиль работника</div>
            <div className="flex flex-col">
                <div className=" bg-slate-300 rounded-xl mx-10 p-5 flex flex-col">

                    <div className="flex flex-col items-center">
                        
                        <div className="text-[20px] pb-3">Форма</div>

                        <div className="flex flex-row">
                        
                            <div className="  m-[5px] flex flex-col justify-around">      
                                    
                                <div className=" flex flex-row justify-between my-2">
                                    <div className="text-[14px] ml-3">E-mail</div>
                                        <div className=" flex items-center font-bold rounded-[5px] ml-9 h-9 w-60 px-3 text-[16px] border-[3px] border-[#2b2b2bad] bg-white"
                                        >{profile.email}</div>
                                </div>
                                    
                                <div className=" flex flex-row justify-between my-2">
                                    <div className="text-[14px] ml-3">ФИО</div>
                                        <input className="rounded-[5px] ml-9 h-9 w-60 p-3 text-[16px] border-[3px] border-[#2b2b2bad]"
                                        value={name}
                                        placeholder={profile.name}
                                        onChange={e => setName(e.target.value)}
                                        ></input>
                                </div>  

                                <div className=" flex flex-row justify-between my-2">
                                    <div className="text-[14px] ml-3">Пароль</div>
                                        <input className="rounded-[5px] ml-9 h-9 w-60 p-3 text-[16px] border-[3px] border-[#2b2b2bad]"
                                        value={password}
                                        placeholder={profile.password}
                                        onChange={e => setPassword(e.target.value)}
                                        ></input>
                                </div>
        
                                <div className=" flex flex-row justify-between my-2">
                                    <div className="text-[14px] ml-3">Роль</div>
                                            <select className="flex justify-center items-center rounded-[5px] ml-9 h-9 w-60 text-[16px] border-[3px] border-[#2b2b2bad]" 
                                            value={role}
                                            onChange={e => setRole(e.target.value)}
                                            >
                                            <option value=""></option>
                                            <option value="Отдел кадров">Отдел кадров</option>
                                            <option value="Приемный отдел">Приемный отдел</option>
                                        </select>
        
                            </div>

                            </div>
                        
                            <div className=" m-[5px] flex flex-col justify-around">
                                
                                <div className=" flex flex-row justify-between my-2">
                                    <div className="text-[14px] ml-3">Телефон</div>
                                        <input className="rounded-[5px] ml-9 h-9 w-60 p-3 text-[16px] border-[3px] border-[#2b2b2bad]"
                                        value={phoneNum}
                                        placeholder={profile.phoneNum}
                                        onChange={e => setPhoneNum(e.target.value)}
                                        ></input>
                                </div>
        
                                <div className=" flex flex-row justify-between my-2">
                                    <div className="text-[14px] ml-3">Отделение</div>
                                        <input className="rounded-[5px] ml-9 h-9 w-60 p-3 text-[16px] border-[3px] border-[#2b2b2bad]"
                                        value={department}
                                        placeholder={profile.department}
                                        onChange={e => setDepartment(e.target.value)}
                                        ></input>
                                </div>
        
                                <div className=" flex flex-row justify-between my-2">
                                    <div className="text-[14px] ml-3">Информация</div>
                                        <input className="flex flex-wrap rounded-[5px] ml-9 h-20 w-60 p-3 text-[16px] border-[3px] border-[#2b2b2bad]"
                                        value={info}
                                        placeholder={profile.info}
                                        onChange={e => setInfo(e.target.value)}
                                        ></input>
        
                            </div>

                            </div>
                        </div>

                        
                        <button className=" bg-slate-800 opacity-70 hover:opacity-100
                            hover:ease-in-out h-10 w-[60%] m-6  mx-[5px] select-none  text-bas
                            text-white rounded-md 
                            hover:translate-y-[-2px]"
                            onClick={updateProfile}>Сохранить изменения</button> 

                    </div>
                </div>
                
            </div>
        </div>
    </div>
  );
});

export default EmployeePage;

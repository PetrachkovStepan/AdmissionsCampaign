import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";

import { registration, deleteProfile, getAll, getProfile, getOneP } from "../http/userAPI";

import { Context } from "../..";
import {observer} from "mobx-react-lite"

//Components
import ProfileList from "../ProfileList"
import BenefitList from "../BenefitList";

const  ProfilePage = observer(() => {
    
  const {user} = useContext(Context)
  const {profile} = useContext(Context)

  //Spec INFORMATION
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('')
  const [phoneNum, setPhoneNum] = useState('')
  const [department, setDepartment] = useState('')
  const [info, setInfo] = useState('')

  
  const [delCode, setDelCode] = useState('')

  //SPEC List
  const [profiles, setProfiles] = useState([1,2,3])
  const [profileCompList, setProfileCompList] = useState(<></>)

  const addNewProf = async (e) => {
    e.preventDefault()
    console.log(role)

    if(role!=""){
            const newSpec = {
            id: Date.now(), 
            role: role,
            password: password,
            name: name,
            email: email,
            phoneNum: phoneNum,
            department: department,
            info: info,
        }

        let r = await registrate()
    }
    
  }
  const registrate = async () => {
    let roleX = false
    if(role === "Отдел кадров"){
        roleX = true
    }else{
        roleX = false
    }
    if(name === ""){
        return;
    }
    if(email === ""){
        return;
    }
    if(password === ""){
        return;
    }
    if(phoneNum === ""){
        return;
    }
    if(department === ""){
        return;
    }
    if(info === ""){
        return;
    }
    let aaa = await getOneP(email)
    console.log(aaa)
    const response = await registration(name, email,password, roleX, phoneNum, department, info)

    let {items} = await getAll()
    setProfileCompList(<ProfileList profiles={items}></ProfileList>)
  }
  const deleteProf = async () => {
    
    if(delCode!=="" && user.email !== delCode ){
        try{
            const response = await deleteProfile(delCode)
        }
        catch(e){
            console.log("NOT FOUND");
            return
        }
    
    let {items} = await getAll()
    setProfileCompList(<ProfileList profiles={items}></ProfileList>)

    }
  }

   useEffect( () => {
    
    async function getComps () {

        const userINFO = JSON.parse(localStorage.getItem('user'))

        user.setName(user.username)
        user.setEmail(userINFO._email)
        user.setPassword(userINFO._password)
        user.setId(userINFO._id)
        
        user.setRole(userINFO._role)
        await getP()

        let {items} = await getAll()
        setProfileCompList(<ProfileList profiles={items}></ProfileList>)
    }
    const getP = async (e) => {
        
        const prof = JSON.parse(localStorage.getItem('prof_id'))
        
        console.log("AAAAAAAAAAA")
        console.log(prof)

        const record = await getProfile(prof)
        console.log(record.record)
        
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
    <div className=" flex items-center bg-slate-200 py-5 w-[80%]">
        <div className=" flex flex-col items-center">
            <div className=" text-[22px] mb-4 ">Создание профилей</div>
            <div className="flex flex-col">
                <div className=" bg-slate-300 rounded-xl mx-10 py-5 flex flex-col">

                    <div className="flex flex-col items-center">
                        
                        <div className="text-[20px] pb-3">Форма</div>

                        <div className="flex flex-row">
                        
                            <div className="  m-[5px] flex flex-col justify-around">
                                
                                    
                                <div className=" flex flex-row justify-between my-2">
                                    <div className="text-[14px] ml-3">ФИО</div>
                                        <input className="rounded-[5px] ml-9 h-9 w-60 p-3 text-[16px] border-[3px] border-[#2b2b2bad]"
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                        ></input>
                                </div>           
                                    
                                <div className=" flex flex-row justify-between my-2">
                                    <div className="text-[14px] ml-3">E-mail</div>
                                        <input className="rounded-[5px] ml-9 h-9 w-60 p-3 text-[16px] border-[3px] border-[#2b2b2bad]"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        ></input>
                                </div>
                                <div className=" flex flex-row justify-between my-2">
                                    <div className="text-[14px] ml-3">Пароль</div>
                                        <input className="rounded-[5px] ml-9 h-9 w-60 p-3 text-[16px] border-[3px] border-[#2b2b2bad]"
                                        value={password}
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
                                        onChange={e => setPhoneNum(e.target.value)}
                                        ></input>
                                </div>
        
                                <div className=" flex flex-row justify-between my-2">
                                    <div className="text-[14px] ml-3">Отделение</div>
                                        <input className="rounded-[5px] ml-9 h-9 w-60 p-3 text-[16px] border-[3px] border-[#2b2b2bad]"
                                        value={department}
                                        onChange={e => setDepartment(e.target.value)}
                                        ></input>
                                </div>
        
                                <div className=" flex flex-row justify-between my-2">
                                    <div className="text-[14px] ml-3">Информация</div>
                                        <input className="flex flex-wrap rounded-[5px] ml-9 h-20 w-60 p-3 text-[16px] border-[3px] border-[#2b2b2bad]"
                                        value={info}
                                        onChange={e => setInfo(e.target.value)}
                                        ></input>
        
                            </div>

                            </div>
                        </div>

                        
                        <button className=" bg-slate-800 opacity-70 hover:opacity-100
                            hover:ease-in-out h-10 w-[60%] m-6  mx-[5px] select-none  text-bas
                            text-white rounded-md 
                            hover:translate-y-[-2px]"
                            onClick={addNewProf}>Создать профиль</button> 

                    </div>
                </div>

                <div className=" bg-slate-300  rounded-xl my-10 mx-10 p-5 flex flex-col">
                    <div className=" m-[5px] flex flex-col items-center">
                        <div className="text-[20px] pb-3">Список профилей</div>

                        {profileCompList}

                    </div>
                </div>

                <div className=" bg-slate-300  rounded-xl mx-10 flex flex-col">
                    <div className=" m-[5px] flex flex-col items-center">

                        <div className=" flex flex-row justify-between items-center w-[70%] my-2 ">
                                    <div className="text-[14px] ml-3">Email профиля</div>
                                        <input className="rounded-[5px] ml-9 h-9 w-60 p-3 text-[16px] border-[3px] border-[#2b2b2bad]"
                                        value={delCode}
                                        onChange={e => setDelCode(e.target.value)}
                                        ></input>

                                    <button className=" bg-slate-800 opacity-70 hover:opacity-100
                                        hover:ease-in-out h-10 w-[60%] m-3  mx-[5px] select-none  text-bas
                                        text-white rounded-md 
                                        hover:translate-y-[-2px]"
                                        onClick={deleteProf}>Удалить профиль</button> 
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  );
});

export default ProfilePage;

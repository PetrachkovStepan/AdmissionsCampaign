import React from "react";

import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./..";

const Profile = (props) => {
  const navigate = useNavigate();
  const{profile} = useContext(Context)

  const navigateToProfile = () =>{
    profile.setName(props.profItem.username)
    profile.setEmail(props.profItem.email)
    profile.setPassword(props.profItem.user_password)
    profile.setRole(props.profItem.role)
    profile.setPhoneNum(props.profItem.phone)
    profile.setDepartment(props.profItem.department)
    profile.setInfo(props.profItem.info)
    profile.setId(props.profItem.id)
    
    localStorage.setItem('prof_id', JSON.stringify(profile.id));

    navigate("/employee")
  }

  return (
    <div className=" flex flex-row m-3">
        <div className="flex flex-col">
          <div className="flex flex-row justify-between items-center">
            <button  className=" bg-[url('./Assets/User.svg')] h-[80px] w-[120px] bg-no-repeat m-[1%]"
            onClick={navigateToProfile}></button>  
            <div className=" text-[16px] mr-5">{props.profItem.username}</div>
            <div className=" text-[16px] mr-5">{props.profItem.email}</div>
            <div className=" text-[16px] mr-10 ">Пароль: {props.profItem.user_password}</div>
            {props.profItem.role?
            <div className=" text-[16px] mr-5 ml-10">Отдел кадров</div>
            :
            <div className=" text-[16px] mr-5 ml-10">Приемный отдел</div>
            }
            <div className=" text-[16px] mr-5">{props.profItem.phone}</div>
            <div className=" text-[16px] mr-5">Отделение: {props.profItem.department}</div>
            <div className=" text-[16px] mr-5">{props.profItem.info}</div>
          </div>
        </div>
    </div>
  );
};

export default Profile;

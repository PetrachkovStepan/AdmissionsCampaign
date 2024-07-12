import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import { Context } from "./..";
import {updateEnrollee} from "./http/EnrolleeAPI"

const Application = (props) => {
  
  const navigate = useNavigate();
  
  const {enrollee} = useContext(Context)

  const getToBenefits = async (e) =>{
    e.preventDefault()
    
    localStorage.setItem('enrollee_id', JSON.stringify(props.appItem.id));

    enrollee.setId(props.appItem.id)

    navigate("/benefits")
  }
  const reject = async (e) =>{
    e.preventDefault()
    const data = {
      "username": props.appItem.username,
      "user_password": props.appItem.user_password,
      "email": props.appItem.email,
      "education_type": props.appItem.education_type,
      "speciality_count": props.appItem.speciality_count,
      "score": props.appItem.score,
      "applied": false,
      "approved": false
    };

    await updateEnrollee(props.appItem.id, data)    
  }

  return (
    <div className=" flex flex-row m-3 w-full">
        <div className="flex flex-col">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row ">
              <div className=" text-[16px] mr-5">E-mail: "{props.appItem.email}"</div>
              <div className=" text-[16px] mr-10 ">Обучение: "{props.appItem.education_type}"</div>
          </div>
          <div className="flex flex-row ">
            <button className=" bg-slate-800 opacity-70 hover:opacity-100
               hover:ease-in-out h-10 w-[120px] m-3  mx-[5px] select-none  text-bas
               text-white rounded-md 
               hover:translate-y-[-2px]"
               onClick={getToBenefits}>Рассмотреть</button> 

               <button className=" bg-slate-800 opacity-70 hover:opacity-100
                  hover:ease-in-out h-10 w-[120px] m-3  mx-[5px] select-none  text-bas
                  text-white rounded-md 
                  hover:translate-y-[-2px]"
                  onClick={reject}>Отклонить</button>   
            </div>

          </div>
        </div>
    </div>
  );
};

export default Application;

import React, { useEffect, useState } from "react";
import { Context } from "./..";
import { useContext } from "react";

import {getOneSpec} from "./http/SpecAPI";
import {createChoice, updateChoice, getAllChoice, deleteAllChoice } from "./http/ChoiceAPI";

const Spetiality = (props) => {

  const {user} = useContext(Context)

  const addNewChoice= async (e) => {
    e.preventDefault() 
    let choices = (await getAllChoice(user.id))
    if(choices.length < 15){
      for (let i = 0; i < choices.length; i++) {
        if (choices[i].speciality_id === props.specItem.id) {
          console.log("СОВПАДАЕТ")
          console.log(choices[i])
          return;
        }
      }
      const data = {
        "priority": choices.length + 1,
        "speciality_id": props.specItem.id,
        "enrollee_id": user.id
      };
      let items = await createChoice(data)

    }
  }
  return (
    <div className=" flex flex-row m-3 justify-center">
        <div className="flex flex-col">
          <div className="flex flex-row justify-between items-center">
            <div className=" text-[16px] mr-5 ">Код специальности: "{props.specItem.code}"</div>
            <div className=" text-[16px] mr-5">Факультет: "{props.specItem.faculty}"</div>
            <div className=" text-[16px] mr-5">Специальность: "{props.specItem.name}"</div>

            <button className=" bg-slate-800 opacity-70 hover:opacity-100
                hover:ease-in-out h-10 w-[30%] mt-3  mx-[5px] select-none  text-bas
                text-white rounded-md 
                hover:translate-y-[-2px]"
                onClick={addNewChoice}>Добавить</button> 
          </div>
        </div>
    </div>
  );
};

export default Spetiality;

import React from "react";
import { useEffect, useState } from "react";
import { useContext } from "react";

import { Context } from "./..";
import {updateBenefit} from "./http/EnrolleeAPI"

const Benefit = (props) => {
  const [type, setType] = useState("blank")
  const {enrollee} = useContext(Context)

  
  const update = async (e) =>{
    e.preventDefault()
    const data = {
      "name": props.benefitItem.name,
      "enrollee_id": enrollee.id,
      "type": type
    };

    await updateBenefit(props.benefitItem.id, data)    
  }
  return (
    <div className=" flex flex-row ">
        <div className="flex flex-col">
          <div className="flex flex-row justify-between items-center">
            <div className=" text-[16px] mr-2 w-60">{props.benefitItem.name}</div>
            <div className=" text-[16px] mr-2 w-60">{props.benefitItem.type}</div>
            <select className="rounded-[5px] ml-9 h-9 text-[16px] border-[3px] border-[#2b2b2bad]"
              value={type}
              placeholder={props.benefitItem.type}
              onChange={e => setType(e.target.value)}
              >
              <option value = "blank"></option>
              <option value = "military">military</option>
              <option value = "orphans">orphans</option>
              <option value = "other">other</option>
          </select>
            <button className=" bg-slate-800 opacity-70 hover:opacity-100
                  hover:ease-in-out h-10 px-4 my-3 ml-10 select-none  text-bas
                  text-white rounded-md 
                  hover:translate-y-[-2px]"
                  onClick={update}>Сохранить изменения</button>
          </div>
        </div>
    </div>
  );
};

export default Benefit;

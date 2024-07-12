import React, { useEffect, useState } from "react";
import {getOneSpec } from "./http/SpecAPI";

const EnrolleeSpetiality = (props) => {
  let items ={}
  
  const [faculty, setFaculty] = useState('')
  const [name, setName] = useState('')

  
    async function getComps () {
      let id = props?.specItem.speciality_id
      
    if(typeof(id)!== "undefined"){
       items = await getOneSpec(id)
       setFaculty(items.spec.faculty)
       setName(items.spec.name)
      }
    }

    getComps()
  return (
    <div className=" flex flex-row m-3">
        <div className="flex flex-col">
          <div className="flex flex-row justify-between items-center">
            <div className=" text-[16px] mr-2">{props?.specItem.priority}</div>
            <div className=" text-[16px] mr-2">Факультет: "{faculty}"</div>
            <div className=" text-[16px] mr-2">Специальность: "{name}"</div>
          </div>
        </div>
    </div>
  );
};

export default EnrolleeSpetiality;

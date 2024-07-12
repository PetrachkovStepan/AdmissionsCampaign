import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";

import { Context } from "../..";
import {observer} from "mobx-react-lite"
import {getAllEnrollee, getAllEnrolleeFiltered} from "../http/EnrolleeAPI"

//Components
import ApplicationList from "../ApplicationList"

const  ApplicationPage = observer(() => {
    
    const {user} = useContext(Context)

  //Applications List
  const [applications, setApplications] = useState([])
  const [compApplications, setCompApplications] = useState(<></>)

  const addNewApplication = async (e) => {
    e.preventDefault()
    const newSpec = {
    }
    setApplications([...applications, newSpec])
  }

  useEffect( () => {
  
      async function getComps () {
        
        const userINFO = JSON.parse(localStorage.getItem('user'))

        user.setName(user.username)
        user.setEmail(userINFO._email)
        user.setPassword(userINFO._password)
        user.setId(userINFO._id)
        
        user.setRole(userINFO._role)

          let items = await getAllEnrolleeFiltered()
          setCompApplications(<ApplicationList applications={items}></ApplicationList>)
      }
  
      getComps()
  
     }, [])

  return (
    <div className=" flex items-center bg-slate-200 py-5">
        <div className=" flex flex-col items-center">
            <div className=" text-[22px] mb-4 ">Заявки для рассмотрения</div>
            <div className="flex flex-col">

                <div className=" bg-slate-300  rounded-xl my-10 mx-10 p-5 flex flex-col">
                    <div className=" m-[5px] flex flex-col items-center">
                        <div className="text-[20px] pb-3">Список абитуриентов  рассмотрению</div>

                        {compApplications}

                    </div>
                </div>
                
            </div>
        </div>
    </div>
  );
});

export default ApplicationPage;

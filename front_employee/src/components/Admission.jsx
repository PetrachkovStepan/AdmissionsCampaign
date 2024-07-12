import React from "react";

const Admission = (props) => {
  return (
    <div className=" flex flex-row m-3">
        <div className="flex flex-col">
          <div className="flex flex-row justify-between items-center">
            <div className=" text-[16px] mr-5">E-mail: "{props.admItem.expand.enrollee_id.email}"</div>
            <div className=" text-[16px] mr-10 ">Обучение: "{props.admItem.expand.enrollee_id.education_type}"</div>

            
            <div className=" text-[16px] mr-10 ">Факультет: "{props.admItem.expand.speciality_id.faculty}"</div>
            <div className=" text-[16px] mr-10 ">Специальность: "{props.admItem.expand.speciality_id.name}"</div>

          </div>
        </div>
    </div>
  );
};

export default Admission;

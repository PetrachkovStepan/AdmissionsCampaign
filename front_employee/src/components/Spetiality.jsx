import React from "react";

const Spetiality = (props) => {
  return (
    <div className=" flex flex-row m-3">
        <div className="flex flex-col">
          <div className="flex flex-row justify-between items-center">
            <div className=" text-[16px] mr-5">Специальность: "{props.specItem.name}"</div>
            <div className=" text-[16px] mr-5">Факультет: "{props.specItem.faculty}"</div>
            <div className=" text-[16px] mr-10 ">Код: "{props.specItem.code}"</div>
            <div className=" text-[16px] mr-5 ml-10">Бюджетных мест: {props.specItem.budget_barrier}</div>
            <div className=" text-[16px] mr-5">Платных мест: {props.specItem.paid_barrier}</div>
            <div className=" text-[16px] mr-5">Целевых мест: {props.specItem.target_barrier}</div>
          </div>
        </div>
    </div>
  );
};

export default Spetiality;

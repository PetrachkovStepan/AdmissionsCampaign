import React from "react";

const Benefit = (props) => {
  return (
    <div className=" flex flex-row m-3">
        <div className="flex flex-col">
          <div className="flex flex-row justify-between items-center">
            <div className=" text-[16px] mr-2">{props.benefitItem.num}</div>
            <div className=" text-[16px] mr-2">{props.benefitItem.name}</div>
          </div>
        </div>
    </div>
  );
};

export default Benefit;

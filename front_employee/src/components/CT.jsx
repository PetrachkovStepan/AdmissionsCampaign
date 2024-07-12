import React from "react";

const CT = (props) => {
  return (
    <div className=" flex flex-row ">
        <div className="flex flex-col">
          <div className="flex flex-row justify-around items-center">
            <div className=" text-[16px] mr-2 w-60">{props.ctItem.subject}</div>
            <div className="flex justify-around w-full">
              <div className=" text-[16px] mr-2">{props.ctItem.mark}</div>
              <div className=" text-[16px] mr-2">{props.ctItem.score}</div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default CT;

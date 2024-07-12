import EnrolleeSpetiality from "./EnrolleeSpetiality"
import React, { useEffect } from "react";

const EnrolleeSpetialityList = ({enrolleeSpetialities}) => {

  useEffect(() => {
    console.log(enrolleeSpetialities);
  }, [])

  return (
    <div className="flex flex-col mx-20 justify-center flex-wrap">
        {enrolleeSpetialities.map((specItem) =>
            <EnrolleeSpetiality specItem={specItem}></EnrolleeSpetiality>
            )}
    </div>
  );
};

export default EnrolleeSpetialityList;

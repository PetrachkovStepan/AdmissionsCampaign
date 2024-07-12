import Admission from "./Admission"
import React, { useEffect } from "react";

const AdmissionList = ({admissions}) => {

  useEffect(() => {
    console.log(admissions);
  }, [])

  return (
    <div className="flex flex-col mx-20 justify-center flex-wrap">
        {admissions.map((admItem) =>
            <Admission admItem={admItem}></Admission>
            )}
    </div>
  );
};

export default AdmissionList;

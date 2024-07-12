import Benefit from "./Benefit"
import React, { useEffect } from "react";

const BenefitList = ({benefits}) => {

  useEffect(() => {
    console.log(benefits);
  }, [])

  return (
    <div className="flex flex-col mx-20 justify-center flex-wrap">
        {benefits.map((benefitItem) =>
            <Benefit benefitItem={benefitItem}></Benefit>
            )}
    </div>
  );
};

export default BenefitList;

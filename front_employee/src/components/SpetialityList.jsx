import Spetiality from "./Spetiality"
import React, { useEffect } from "react";

const SpetialityList = ({spetialities}) => {

  useEffect(() => {
    console.log(spetialities);
  }, [])

  return (
    <div className="flex flex-col mx-20 justify-center flex-wrap">
        {spetialities.map((specItem) =>
            <Spetiality specItem={specItem}></Spetiality>
            )}
    </div>
  );
};

export default SpetialityList;

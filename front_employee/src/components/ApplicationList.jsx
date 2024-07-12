import Application from "./Application"
import React, { useEffect } from "react";

const ApplicationList = ({applications}) => {

  useEffect(() => {
    console.log(applications);
  }, [])

  return (
    <div className="flex flex-col mx-20 justify-center flex-wrap">
        {applications.map((appItem) =>
            <Application appItem={appItem}></Application>
            )}
    </div>
  );
};

export default ApplicationList;

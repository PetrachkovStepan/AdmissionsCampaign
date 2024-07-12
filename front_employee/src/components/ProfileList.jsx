import Profile from "./Profile"
import React, { useEffect } from "react";

const ProfileList = ({profiles}) => {

  useEffect(() => {
    console.log("FFFFFFFFFFFFFFFFF" + profiles );
  }, [])

  return (
    <div className="flex flex-col justify-center flex-wrap">
        {profiles.map((profItem) =>
            <Profile profItem={profItem}></Profile>
            )}
    </div>
  );
};

export default ProfileList;

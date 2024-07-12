import CT from "./CT"
import React, { useEffect } from "react";

const CTList = ({cts}) => {

  useEffect(() => {
    console.log(cts);
  }, [])

  return (
    <div className="flex flex-col justify-center flex-wrap">
        {cts.map((ctItem) =>
            <CT ctItem={ctItem}></CT>
            )}
    </div>
  );
};

export default CTList;

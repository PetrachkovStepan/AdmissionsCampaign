import React from "react";
import UserPage from "./pages/UserPage";
import AuthPage from "./pages/AuthPage"
import EducPage from "./pages/EducPage"
import Not from "./pages/NotPage"
import ApplicationPage from "./pages/ApplicationPage"
import Header from "./Header";

import { Link, Routes, Route} from "react-router-dom";

function PageTemp() {
  return (
    <div className=" flex flex-col items-center h-screen w-screen">
      <div className=" w-[79%] bg-slate-500 rounded-b-[10px]">
        <div className=" px-4 pt-1">
          <Header></Header>
        </div>
      </div>
        <div className=" flex justify-center w-[66%] bg-[#FFFFFF] rounded-b-[28px]">
            
            <Routes>
              <Route path="/" element={<AuthPage></AuthPage>}></Route>
              <Route path="/enrolleeinfo" element={<UserPage></UserPage>}></Route>
              <Route path="/enrolleeeducation" element={<EducPage></EducPage>}></Route>
              <Route path="/application" element={<ApplicationPage></ApplicationPage>}></Route>
              <Route path="/notification" element={<Not></Not>}></Route>
              <Route path="*" element={<UserPage></UserPage>}></Route>
            </Routes>
        </div>
    </div>
  );
}

export default PageTemp;

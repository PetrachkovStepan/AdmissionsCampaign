import React from "react";
import SpecPage from "./pages/SpecPage";
import AuthPage from "./pages/AuthPage"
import EmployeePage from "./pages/EmployeePage"
import EnrolleePage from "./pages/EnrolleePage"
import AdmissionPage from "./pages/AdmissionPage"
import ProfilePage from "./pages/ProfilePage"
import Header from "./Header";
import ApplicationPage from "./pages/ApplicationsPage";

import { Link, Routes, Route} from "react-router-dom";

function PageTemp() {
  return (
    <div className=" flex flex-col items-center h-screen w-screen">
      <div className=" w-[79%] bg-slate-500 rounded-b-[10px]">
        <div className=" px-4 pt-1">
          <Header></Header>
        </div>
      </div>
        <div className=" flex justify-center">
            
            <Routes>
              <Route path="/" element={<AuthPage></AuthPage>}></Route>
              <Route path="/admissionlist" element={<AdmissionPage></AdmissionPage>}></Route>
              <Route path="/spec" element={<SpecPage></SpecPage>}></Route>
              <Route path="/applications" element={<ApplicationPage></ApplicationPage>}></Route>
              <Route path="/benefits" element={<EnrolleePage></EnrolleePage>}></Route>

              <Route path="/employee" element={<EmployeePage></EmployeePage>}></Route>
              <Route path="/profiles" element={<ProfilePage></ProfilePage>}></Route>
              <Route path="*" element={<SpecPage></SpecPage>}></Route>
            </Routes>
        </div>
    </div>
  );
}

export default PageTemp;

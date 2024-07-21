import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "../../../components/Sidebar";
import Header from "../../../components/Header";
import Dashboard from "./routes/Dashboard";
import AddFaculty from "./routes/AddFaculty";
import AddDepartment from "./routes/AddDepartment";
import AddStudent from "./routes/AddStudent";
import ViewFaculty from "./routes/ViewFaculty";
import ViewStudent from "./routes/ViewStudent"
import ViewDepartment from "./routes/ViewDepartment";

function Admin() {
  return (
    <div>
      <div className="flex">
        <Sidebar />
        <div className="ml-64 w-full flex flex-grow flex-col">
          <Header />
          <div className="p-4">
            <Routes>
              <Route path="/" element={<Dashboard />} />

              <Route path="addFaculty" element={<AddFaculty />} />
              <Route path="viewFaculty" element={<ViewFaculty />} />

              <Route path="addDepartment" element={<AddDepartment />} />
              <Route path="viewDepartment" element={<ViewDepartment />} />

              <Route path="addStudent" element={<AddStudent />} />
              <Route path="viewStudent" element={<ViewStudent />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;

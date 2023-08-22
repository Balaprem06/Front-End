import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Plist from "./Components/Plist";
import Dlist from "./Components/Dlist";
import Appoinment from "./Components/Appoinment";
import Home from "./Components/Home";
import DoctorAppoinment from "./Components/Doctor-Appoinment";
import PatientAppoinment from "./Components/Patient-Appoinment";
import Doctor from "./Components/Doctor";
import User from "./Components/User";
import LoginForm from "./Components/LoginForm";





function App() {  
  return (
    <BrowserRouter>
      <div className="App">
        <Main />
        <Routes >
              // Admin
              <Route exact path="/" element={<LoginForm />}/>
              <Route exact path="/home" element={<Home />}/>
              <Route path="doctor-list" element={<Dlist />}/>
              <Route path="patient-list" element={<Plist />} />
              <Route path="appointment" element={<Appoinment />} />
              <Route path="/patient-appoinment" element={<PatientAppoinment />} />
              <Route path="/doctor-appoinment" element={<DoctorAppoinment />} />

            doctor
            <Route path="/doctor" element={<Doctor/>}/>


            patient
            <Route path="/patient" element={<User/>}/>

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

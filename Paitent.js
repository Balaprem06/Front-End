import React from "react";
import { useState } from "react";
import {API_URl} from "../Api/Create";
import axios from "axios";

function Paitent() {

    const [patientname,setPatientName]=useState("");
    const [age,setAge]=useState("");
    const [phonenumber,setPhoneNumber]=useState("");
    const [address,setAddress]=useState("");
    const [gender,setGender]=useState("");
    const [problem,setProblem]=useState("");
    
const postData= async ()=>{
 await axios.posta(API_URl,{
    patientname,
    age,
    phonenumber,
    address,
    gender,
    problem
 })
}
 
}
    return (
        <div className="container">
            <form>
                <h1>Patient Information</h1>
                <br></br>
                <div className="row">
                    <div className="col-sm-6">
                        <label for="first name" style={{position:"relative",right:"210px"}}><span style={{ color: "red" }}>*</span><b>Patient Name</b></label>
                        <input type="text" class="form-control" id="Doctor name"
                        value={patientname} onChange={((e)=>setPatientName(e.target.value))} placeholder=" name" />
                    </div>
                    <div className="col-sm-6">
                        <label for="Age" style={{position:"relative",right:"240px"}}><span style={{ color: "red" }}>*</span><b>Age</b></label>
                        <input type="number" class="form-control" id="Degree" 
                        value={age} onChange={((e)=>setAge(e.target.value))}  placeholder="Age" />
                    </div>
                </div>
                <br></br>
                <div className="row">
                    <div className="col-sm-6">
                        <label for="first name" style={{position:"relative",right:"210px"}}><span style={{ color: "red" }}>*</span><b>Phone Number</b></label>
                        <input type="number" class="form-control" id="phone number"
                        value={phonenumber} onChange={((e)=>setPhoneNumber(e.target.value))}  placeholder=" Phone number" />
                    </div>
                    <div className="col-sm-6">
                        <label for="last name" style={{position:"relative",right:"220px"}}><span style={{ color: "red" }}>*</span><b>Address</b></label>
                        <input type="text" class="form-control" id="Address" 
                        value={address} onChange={((e)=>setAddress(e.target.value))}  placeholder="Address" />
                    </div>
                </div>
                <br></br>
                <div className="row">
                    <div className="col-sm-6">
                    <div class="form-group">
                    <lable for="Gender" style={{position:"relative",right:"230px"}}><span style={{ color: "red" }}>*</span><b>Gender</b></lable>
                    <select class="custom-select" value={gender} onChange={((e)=>setGender(e.target.value))} >
                      <option value="selected">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Femelae">Femelae</option>
                      <option value="others">Others</option>
                    </select>
                  </div>
                    </div>
                        <div className="col-sm-6">
                        <label for="problem" style={{position:"relative",right:"220px"}}><span style={{ color: "red" }}>*</span><b>Problem</b></label>
                        <input type="text" class="form-control" id="problem" 
                        value={problem} onChange={((e)=>setProblem(e.target.value))}  placeholder="Problem" />
                    </div>
                </div>
                <br></br>
                <button type="button" class="btn btn-success" onClick={postData}>Submit</button>
            </form>
        </div>
    )


export default Paitent;
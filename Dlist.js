import React from "react";
import DataTable from "react-data-table-component";
import { useState ,useEffect} from "react";
//import { DOC_URl } from "../Api/Create";
import axios from "axios";
import {Link} from 'react-router-dom';

const customStyles = {
  headRow: {
    style: {
      backgroundColor: "blue",
      color: "white"
    }
  },
  headCells: {
    style: {
      fontSize: "16px",
      fontweight: '600',
      textTransform: 'uppercase',
    },
  },
  Cells: {
    style: {
      fontSize: '15px',
    },
  },
};



function Dlist() { 
  const columns = [
    {
      name: 'DoctorName',
      selector: row => row.doctorname,
      sortable: true,
      cell: row => <Link   data-toggle="modal" data-target="#exampleModal" style={{ color: '#5D92F4', fontWeight: "560" }} 
      to={{ state: row }} onClick={ ()=>{userEdit(row?._id) }}>
    <span className='d-block' style={{ fontSize: "14px" }}>{row.doctorname}</span>
    </Link>
    },
    {
      name: 'Degree',
      selector: row => row.degree,
      sortable: true
    },
    {
      name: 'PhoneNumber',
      selector: row => row.phonenumber,
      sortable: true
    },
    {
      name: 'Address',
      selector: row => row.address,
      sortable: true
    },
    {
      name: 'Specilazation',
      selector: row => row.specilazation,
      sortable: true
    },
    {
      name: 'Experience',
      selector: row => row.experience,
      sortable: true
    },
    {
      name: 'Email',
      selector: row => row.email,
      sortable: true
    },
    {
    name: 'Actions',
    cell: row => <button className="btn btn-danger" onClick={ ()=>{userDelete(row?._id) }}>Delete</button>,    
  },
  ];
  

  const handleFillter=(event) =>{
    const newData =records.filter(row => {
      return row.name.toLowerCase().includes(event.target.value.toLowerCase())
    })
    setRecords(newData)
  }
  
  const GEtAPI= async ()=>{
    const res= await axios.get("http://localhost:8080/user/user_list");
    console.log(res.data.data);
    setRecords(res.data.data)
  }
 useEffect(()=>{
  GEtAPI();
 },[])

 const postData= async ()=>{
  if(edit==""){
    console.log("add")
    await  axios.post("http://localhost:8080/user/add_user" ,{
      doctorname,
      degree,
      phonenumber,
      address,
      specilazation,
      experience,
      email,
      password
    })
  }else{
    const updateData = {
      doctorname: edit?.doctorname,
      degree: edit?.degree,
      phonenumber: edit?.phonenumber,
      address: edit?.address,
      specilazation: edit?.specilazation,
      experience: edit?.experience,
      email: edit?.email,
      password: edit?.password,
      
      
    }
    console.log("updateData",updateData)
    await  axios.put(`http://localhost:8080/user/edit_user/${edit._id}`,updateData)
  }
  setDoctorName("");
  setDegree("");
  setPhoneNumber("");
  setAddress("");
  setSpecilazation("");
  setExperience("");
  setEmail("");
  setPassword("");
  GEtAPI();
 }


 const handleChangeDoctorname=(e)=>{
  if(edit==""){
    setDoctorName(e.target.value)
    }
    else{
    const value = {...edit}
    value.doctorname = e.target.value
    setEdit( value)
    }
 }

 const handleChangeDegree=(e)=>{
  if(edit==""){
    setDegree(e.target.value)
    }
    else{
    const value = {...edit}
    value.degree = e.target.value
    setEdit( value)
    }
 }
 const handleChangePhonenumber=(e)=>{
  if(edit==""){
    setPhoneNumber(e.target.value)
    }
    else{
    const value = {...edit}
    value.phonenumber = e.target.value
    setEdit( value)
    }
 }
 const handleChangeAddress=(e)=>{
  if(edit==""){
    setAddress(e.target.value)
    }
    else{
    const value = {...edit}
    value.address = e.target.value
    setEdit( value)
    }
 }
 const handleChangeSpecilazation=(e)=>{
  if(edit==""){
    setSpecilazation(e.target.value)
    }
    else{
    const value = {...edit}
    value.specilazation = e.target.value
    setEdit(value)
    }
 }
 const handleChangeExperience=(e)=>{
  if(edit==""){
    setExperience(e.target.value)
    }
    else{
    const value = {...edit}
    value.experience = e.target.value
    setEdit( value)
    }
 }
 const handleChangeEmail=(e)=>{
  if(edit==""){
    setEmail(e.target.value)
    }
    else{
    const value = {...edit}
    value.email = e.target.value
    setEdit( value)
    }
 }
 const handleChangePassword=(e)=>{
  if(edit==""){
    setPassword(e.target.value)
    }
    else{
    const value = {...edit}
    value.password = e.target.value
    setEdit(value)
    }
 }
    const userDelete= async (id)=>{
      console.log("iddd",id);
      await axios.delete(`http://localhost:8080/user/delete_user/${id}`)  
          GEtAPI();
    }

    const userEdit= async (id)=>{
      console.log("edit",);
     const res= await axios.get(`http://localhost:8080/user/${id}`)
      console.log(res.data.data);
      setEdit(res.data.data);
      // await axios.put(`http://localhost:8080/user/delete_user/${id}`)  
      //     GEtAPI();
    }

  const [records, setRecords] = useState([]);
  const [doctorname,setDoctorName]=useState("");
  const [degree,setDegree]=useState("");
  const [phonenumber,setPhoneNumber]=useState("");
  const [address,setAddress]=useState("");
  const [specilazation,setSpecilazation]=useState("");
  const [experience,setExperience]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [edit ,setEdit]=useState("");
  
  return (
    <div>
      <br></br>
      
      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" style={{position:"relative",left:"480px"}}>
        Add Doctor
      </button>
       
      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog"  aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Add Doctor</h5>
            </div>
            <div class="modal-body">
            <form>
            <h1>Doctor Information</h1>
            <br></br>
            <div className="row">
                <div className="col-sm-6">
                    <label for="first name"><span style={{color:"red"}}>*</span><b>Doctor Name</b></label>
                    <input type="text" class="form-control" id="Doctor name" 
                      value={ edit.doctorname!==undefined? edit.doctorname: doctorname} onChange={(e)=>handleChangeDoctorname(e)} placeholder="Doctor name" />
                </div>
                <div className="col-sm-6">
                    <label for="Degree"><span style={{color:"red"}}>*</span><b>Degeree</b></label>
                    <input type="text" class="form-control" id="Degree" 
                    value={ edit.degree!==undefined? edit.degree: degree}  onChange={(e)=>handleChangeDegree(e)} placeholder="Degree" />
                </div>
            </div>
            <br></br>
            <div className="row">
                <div className="col-sm-6">
                    <label for="first name"><span style={{color:"red"}}>*</span><b>Phone Number</b></label>
                    <input type="number" class="form-control" id="phone number" 
                     value={ edit.phonenumber!==undefined? edit.phonenumber: phonenumber}  onChange={(e)=>handleChangePhonenumber(e)}placeholder=" Phone number" />
                </div>
                <div className="col-sm-6">
                    <label for="last name"><span style={{color:"red"}}>*</span><b>Address</b></label>
                    <input type="text" class="form-control" id="Address" 
                    value={ edit.address!==undefined? edit.address: address}  onChange={(e)=>handleChangeAddress(e)} placeholder="Address" />
                </div>
            </div>
            <br></br>
            <div className="row">
                <div className="col-sm-6">
                    <label for="Specilazation"><span style={{color:"red"}}>*</span><b>Specilazation</b></label>
                    <input type="text" class="form-control" id="Specilazation" 
                   value={ edit.specilazation!==undefined? edit.specilazation: specilazation}  onChange={(e)=>handleChangeSpecilazation(e)}placeholder="Specilazation" />
                </div>
                <div className="col-sm-6">
                    <label for="Experirnce"><span style={{color:"red"}}>*</span><b>Experience</b></label>
                    <input type="text" class="form-control" id="Experirnce" 
                   value={ edit.experience!==undefined? edit.experience: experience} onChange={(e)=>handleChangeExperience(e)} placeholder="Experirnce" />
                </div>
            </div>
            <br></br>
            <div className="row">
            <div className="col-sm-6">
                <label for="Specilazation"><span style={{color:"red"}}>*</span><b>Email</b></label>
                <input type="text" class="form-control" id="email" 
                  value={ edit.email!==undefined? edit.email: email}  onChange={(e)=>handleChangeEmail(e)} placeholder="email" />
            </div>
            <div className="col-sm-6">
                <label for="Experirnce"><span style={{color:"red"}}>*</span><b>Password</b></label>
                <input type="text" class="form-control" id="password" 
                value={ edit.password!==undefined? edit.password: password}  onChange={(e)=>handleChangePassword(e)} placeholder="password" />
            </div>
        </div>
        <br></br>
        </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal" >Close</button>
              <button type="button" class="btn btn-success" onClick={postData}>Submit</button>
            </div>
          </div>
        </div>
        
      </div>
    
           
      <button type="button" class="btn btn-danger" style={{ position: "relative", left: "500px" }} 
      >Delete Doctor</button>
      <br></br>
      <br></br>
      
      <div className="container mt-5">
        <div className="text-end"><input type="text"  onClick={handleFillter} placeholder="search..." /></div>
        <DataTable
          columns={columns}
          data={records}
          selectableRows
          fixedHeader
          pagination
          customStyles={customStyles}
        >
        </DataTable>
      </div>
    </div>
  );
}

export default Dlist;

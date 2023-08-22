import React, { useEffect } from "react";
import DataTable from "react-data-table-component";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";



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

function Plist() {
  const columns = [
    {
      name: 'Patient Name',
      selector: row => row.patientname,
      sortable: true,
      cell: row=> <Link data-toggle="modal" data-target="#exampleModal" style={{color: '#5D92F4', fontWeight: "560"}}
      to={{state:row}}>
      <span className='d-block' style={{ fontSize: "14px" }}>{row.patientname}</span>
      </Link>
    },
    {
      name: 'Age',
      selector: row => row.age,
      sortable: true
    },
    {
      name: 'Phone Number',
      selector: row => row.phonenumber,
      sortable: true
    },
    {
      name: 'Address',
      selector: row => row.address,
      sortable: true
    },
    {
      name: 'Gender',
      selector: row => row.gender,
      sortable: true
    },
    {
      name: 'Problem',
      selector: row => row.problem,
      sortable: true
    },
    {
      name: 'Actions',
      cell: row => <button className="btn btn-danger" onClick={ ()=>{userDelete(row?._id) }}>Delete</button>    
    },
  ];


  const GEtAPI = async () => {

    const res = await axios.get("http://localhost:8080/Plist/Plist_list");
    console.log(res.data.data);
    setApiData(res.data.data);
  }

  useEffect(() => {
    GEtAPI();
  }, [])



  const postData = async () => {
    await axios.post("http://localhost:8080/Plist/add_Plist", {
      patientname,
      age,
      phonenumber,
      address,
      gender,
      problem,
      email,
     password
    })
    setPatientName("");
    setAge("");
    setPhoneNumber("");
    setAddress("");
    setGender("");
    setProblem("");
    setEmail("");
    setPassword("");
    GEtAPI();
  }

  const userDelete= async (id)=>{
    console.log("iddd",id);
    await axios.delete(`http://localhost:8080/Plist/delete_Plist/${id}`)  
        GEtAPI();
  }

  const [apidata, setApiData] = useState([]);
  const [patientname, setPatientName] = useState("");
  const [age, setAge] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [problem, setProblem] = useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  return (
    <div>
      <br></br>

      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" style={{ position: "relative", left: "480px" }}>
        Add Patient
      </button>
      
      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Add Patient</h5>
            </div>
            <div class="modal-body">
              <form>
                <h1>Patient Information</h1>
                <br></br>
                <div className="row">
                  <div className="col-sm-6">
                    <label for="first name"><span style={{ color: "red" }}>*</span><b>Patient Name</b></label>
                    <input type="text" class="form-control" id="patient name"
                      value={patientname} onChange={(e) => setPatientName(e.target.value)} placeholder="patient name" />
                  </div>
                  <div className="col-sm-6">
                    <label for="Age"><span style={{ color: "red" }}>*</span><b>Age</b></label>
                    <input type="number" class="form-control" id="Degree"
                      value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age" />
                  </div>
                </div>
                <br></br>
                <div className="row">
                  <div className="col-sm-6">
                    <label for="first name"><span style={{ color: "red" }}>*</span><b>Phone Number</b></label>
                    <input type="number" class="form-control" id="phone number"
                      value={phonenumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder=" Phone number" />
                  </div>
                  <div className="col-sm-6">
                    <label for="last name"><span style={{ color: "red" }}>*</span><b>Address</b></label>
                    <input type="text" class="form-control" id="Address"
                      value={address} onChange={((e) => setAddress(e.target.value))} placeholder="Address" />
                  </div>
                </div>
                <br></br>
                <div className="row">
                  <div className="col-sm-6">
                    <div class="form-group">
                      <lable for="Gender"><span style={{ color: "red" }}>*</span><b>Gender</b></lable>
                      <select class="custom-select" value={gender} onChange={(e) => setGender(e.target.value)}>
                        <option value="selected">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Femelae">Femelae</option>
                        <option value="others">Others</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <label for="problem"><span style={{ color: "red" }}>*</span><b>Problem</b></label>
                    <input type="text" class="form-control" id="problem"
                      value={problem} onChange={(e) => setProblem(e.target.value)} placeholder="Problem" />
                  </div>
                </div>
                <br></br>
                <div className="row">
                <div className="col-sm-6">
                    <label for="Specilazation"><span style={{color:"red"}}>*</span><b>Email</b></label>
                    <input type="text" class="form-control" id="email" 
                    value={email} onChange={(e)=>setEmail(e.target.value)}placeholder="email" />
                </div>
                <div className="col-sm-6">
                    <label for="Experirnce"><span style={{color:"red"}}>*</span><b>Password</b></label>
                    <input type="text" class="form-control" id="password" 
                    value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="password" />
                </div>
            </div>
            <br></br>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-success" onClick={postData}>Submit</button>
            </div>
          </div>
        </div>
      </div>
      

      <button type="button" class="btn btn-danger" style={{ position: "relative", left: "500px" }}>Delete Patient</button>
      <br></br>
      <br></br>

      <div className="container mt-5">
        <div className="text-end"><input type="text" placeholder="search..." /></div>
        <DataTable
          columns={columns}
          data={apidata}
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

export default Plist;

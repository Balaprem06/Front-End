import React from "react";
import DataTable from "react-data-table-component";
import axios from "axios";
import { useState,useEffect } from "react";
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


function PatientAppoinment() {
  const columns = [
    {
      name: 'Patient Name',
      selector: row => row.Patientname,
      sortable: true,
      cell: row => <Link   data-toggle="modal" data-target="#exampleModal" style={{ color: '#5D92F4', fontWeight: "560" }} 
      to={{ state: row }} >
    <span className='d-block' style={{ fontSize: "14px" }}>{row.Patientname}</span>
    </Link>
    },
    {
      name: 'Date',
      selector: row => row.date,
      sortable: true
    },
    {
      name: 'Time',
      selector: row => row.time,
      sortable: true
    },
    {
      name: 'Symptoms',
      selector: row => row.symptoms,
      sortable: true
    },
    {
      name: 'Contact',
      selector: row => row.contact,
      sortable: true
    },
    {
      name: 'Address',
      selector: row => row.address,
      sortable: true
    },
    {
      name: 'Actions',
    cell: row => <button className="btn btn-danger" onClick={ ()=>{userDelete(row?._id) }}>Delete</button>
    }
  ];


  const handleFillter = (event) => {
    const newData = records.filter(row => {
      return row.name.includes(event.target.value)
    })
    setRecords(newData)
  }

  const GEtAPI= async ()=>{
    const res= await axios.get("http://localhost:8080/Patientapp/Patientapp_list");
    console.log(res.data.data);
    setRecords(res.data.data)
  }
 useEffect(()=>{
  GEtAPI();
 },[])

  const postData = async () => {
    await axios.post("http://localhost:8080/Patientapp/add_Patientapp", {
      Patientname,
      date,
      time,
      symptoms,
      contact,
      address
    })
    setPatientName("");
    setDate("");
    setTime("");
    setAddress("");
    setContact("");
    setSymptoms("");
    GEtAPI();
  }

  const userDelete= async (id)=>{
    console.log("iddd",id);
    await axios.delete(`http://localhost:8080/Patientapp/delete_Patientapp/${id}`)  
        GEtAPI();
  }

  const [records, setRecords] = useState([]);
  const [Patientname, setPatientName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [symptoms, setSymptoms] = useState("");

  return (
    <div>
      <br></br>

      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" style={{ position: "relative", left: "480px" }}>
        Add Appoinment
      </button>
      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Add Patient Appoinment</h5>
            </div>
            <div class="modal-body">
              <form>
                <h1>Patient Appoinment</h1>
                <br></br>
                <div className="row">
                  <div className="col-sm-6">
                    <label for="first name"><span style={{ color: "red" }}>*</span><b>Patient Name</b></label>
                    <input type="text" class="form-control" id="Doctor name"
                      value={Patientname} onChange={(e) => setPatientName(e.target.value)} placeholder="Patient name" />
                  </div>
                  <div className="col-sm-6">
                    <label for="Degree"><span style={{ color: "red" }}>*</span><b>Date</b></label>
                    <input type="Date" class="form-control" id="Degree" 
                     value={date} onChange={(e) => setDate(e.target.value)}  placeholder="Date" />
                  </div>
                </div>
                <br></br>
                <div className="row">
                  <div className="col-sm-6">
                    <label for="first name"><span style={{ color: "red" }}>*</span><b>Time</b></label>
                    <input type="Time" class="form-control" id="phone number"
                    value={time} onChange={(e) => setTime(e.target.value)}  placeholder="Time" />
                  </div>
                  <div className="col-sm-6">
                    <label for="last name"><span style={{ color: "red" }}>*</span><b>Symptoms</b></label>
                    <input type="text" class="form-control" id="Symptoms" 
                    value={symptoms} onChange={(e) => setSymptoms(e.target.value)} placeholder="Symptoms" />
                  </div>
                </div>
                <br></br>
                <div className="row">
                  <div className="col-sm-6">
                    <label for="first name"><span style={{ color: "red" }}>*</span><b>Contact</b></label>
                    <input type="number" class="form-control" id="Contact"
                    value={contact} onChange={(e) => setContact(e.target.value)}  placeholder="Contact" />
                  </div>
                  <div className="col-sm-6">
                    <label for="last name"><span style={{ color: "red" }}>*</span><b>Address</b></label>
                    <input type="text" class="form-control" id="Address" 
                    value={address} onChange={(e) => setAddress(e.target.value)}  placeholder="Address" />
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

      <button type="button" class="btn btn-danger" style={{ position: "relative", left: "500px" }}
      >Delete Doctor</button>
      <br></br>
      <br></br>
      <h1>Patient Appoinment</h1>

      <div className="container mt-5">
        <div className="text-end"><input type="text" onChange={handleFillter} placeholder="search..." /></div>
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
  )
}

export default PatientAppoinment;
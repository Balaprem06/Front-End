import React from "react";
import DataTable from "react-data-table-component";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


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

function Doctor() {

  const columns = [
    {
      name: 'Patient Name',
      selector: row => row.Patientname,
      sortable: true,
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

const userDelete= async (id)=>{
  console.log("iddd",id);
  await axios.delete(`http://localhost:8080/Patientapp/delete_Patientapp/${id}`)  
      GEtAPI();
}

const [records, setRecords] = useState([]);

  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <button type="button" class="btn btn-danger" style={{ position: "relative", left: "550px",bottom:"38px" }}>Delete Doctor</button>
      <br></br>

      <h1>Doctor Module</h1>
      <div className="container mt-5">
      <div className="text-end"><input type="text" onChange={handleFillter} placeholder="search..." /></div>
      <DataTable
          columns={columns}
          data={records}
          fixedHeader
          pagination
          customStyles={customStyles}
      >
      </DataTable>
  </div>
 

    </div>
  )
}
export default Doctor;

import React from "react";
import DataTable from "react-data-table-component";
import { useState,useEffect } from "react";
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
function User(){

    const columns = [
        {
            name: 'Doctor Name',
            selector: row => row.doctorname,
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
            name: 'Specialization',
            selector: row => row.specialization,
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
          cell: row => <button className="btn btn-danger" onClick={ ()=>{userDelete(row?._id) }}>Delete</button>,
          }

    ];



    const handleFillter = (event) => {
        const newData = records.filter(row => {
            return row.name.includes(event.target.value)
        })
        setRecords(newData)
    }

    const GEtAPI= async ()=>{
        const res= await axios.get("http://localhost:8080/Doctorapp/Doctorapp_list");
        console.log(res.data.data);
        setRecords(res.data.data)
      }
     useEffect(()=>{
      GEtAPI();
     },[])

     const userDelete= async (id)=>{
        console.log("iddd",id);
        await axios.delete(`http://localhost:8080/Doctorapp/delete_Doctorapp/${id}`)  
            GEtAPI();
      }

    const [records, setRecords] = useState([]);
   
    return(
        <div>
        <br></br>
        <br></br>
        <button type="button" class="btn btn-danger" style={{ position: "relative", left: "500px" }}>Delete Patient</button>
        <br></br>
        <h1>Patient</h1>

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

export default User;
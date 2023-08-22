import React, { useState } from "react";
import Datatable from 'react-data-table-component';

function Table(){
    
    const columns=[
        {
            name: 'Name',
            selector: row => row.name,
            sortable : true
        },
        {
            name: 'Email',
            selector: row => row.email,
            sortable : true
        },
        {
            name: 'Age',
            selector: row => row.age,
            sortable : true
        },
    ];

    const data=[
        {
            id : 1,
            name : 'Bala',
            email : 'bala@gmail.com',
            age:'23'
        },
        {
            id : 2,
            name : 'murugan',
            email : 'murugan@gmail.com',
            age:'25'
        },
        {
            id : 3,
            name : 'Sabila',
            email : 'sabila@gmail.com',
            age:'27'
        },
        {
            id : 4,
            name : 'Dhivya',
            email : 'Dhivya@gmail.com',
            age:'30'
        },
        {
            id : 5,
            name : 'Pradheep',
            email : 'pradheep@gmail.com',
            age:'24'
        },
        {
            id : 1,
            name : 'Bala',
            email : 'bala@gmail.com',
            age:'23'
        },
        {
            id : 2,
            name : 'murugan',
            email : 'murugan@gmail.com',
            age:'25'
        },
        {
            id : 3,
            name : 'Sabila',
            email : 'sabila@gmail.com',
            age:'27'
        },
        {
            id : 4,
            name : 'Dhivya',
            email : 'Dhivya@gmail.com',
            age:'30'
        },
        {
            id : 5,
            name : 'Pradheep',
            email : 'pradheep@gmail.com',
            age:'24'
        },
        {
            id : 1,
            name : 'Bala',
            email : 'bala@gmail.com',
            age:'23'
        },
        {
            id : 2,
            name : 'murugan',
            email : 'murugan@gmail.com',
            age:'25'
        },
        {
            id : 3,
            name : 'Sabila',
            email : 'sabila@gmail.com',
            age:'27'
        },
        {
            id : 4,
            name : 'Dhivya',
            email : 'Dhivya@gmail.com',
            age:'30'
        },
        {
            id : 5,
            name : 'Pradheep',
            email : 'pradheep@gmail.com',
            age:'24'
        },
    ];

    function handleFillter(event){
      const newData= data.filter(row =>{
        return row.name.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase())
      })
      setRecords(newData)
    }
    const [records,setRecords]=useState(data);
    return(
        <div className="container mt-5">
        <div className="text-end"><input type="text" onChange={handleFillter}/></div>
           <Datatable
           columns={columns}
           data={records}
           selectableRows
           fixedHeader
           pagination
           >
           </Datatable>
        </div>

    )
}


export default Table;
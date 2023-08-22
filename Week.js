import React from "react";
import DataTable from "react-data-table-component";
import { useState } from "react";


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
function Week() {

    const columns = [
        {
            name: 'Patient Name',
            selector: row => row.Patientname,
            sortable: true
        },
        {
            name: 'Patient id',
            selector: row => row.patientid,
            sortable: true
        },
        {
            name: 'Status',
            selector: row => row.status,
            sortable: true
        },
        {
            name: 'Booking time',
            selector: row => row.booktingtime,
            sortable: true
        },
        {
            name: 'Appoinment Time',
            selector: row => row.appoinmenttime,
            sortable: true
        },
        {
            name: 'Issue CAtegeory',
            selector: row => row.categeory,
            sortable: true
        },

    ];

    const data = [
        {
            Patientname: 'murugan',
            patientid: 1,
            status: 'Confirm',
            booktingtime: '9.00 am',
            appoinmenttime: '10.00 am',
            categeory: "cold"
        },
        {
            Patientname: 'bala',
            patientid: 2,
            status: 'Waiting',
            booktingtime: '5.00 pm',
            appoinmenttime: '7.00 pm',
            categeory: "fever"
        },
        {
            Patientname: 'krishna',
            patientid: 3,
            status: 'cancel',
            booktingtime: '5.30 pm',
            appoinmenttime: '8.00 pm',
            categeory: "headtack"
        },
        {
            Patientname: 'murali',
            patientid: 4,
            status: 'waiting',
            booktingtime: '5.30 pm',
            appoinmenttime: '8.00 pm',
            categeory: "headtack"
        },
        {
            Patientname: 'krishna',
            patientid: 5,
            status: 'cancel',
            booktingtime: '5.30 pm',
            appoinmenttime: '8.00 pm',
            categeory: "headtack"
        },


    ];


    const handleFillter = (event) => {
        const newData = data.filter(row => {
            return row.name.includes(event.target.value)
        })
        setRecords(newData)
    }

    const [records, setRecords] = useState(data);
    return (
        <div>
             <br></br>
             <br></br>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" style={{ position: "relative", left: "480px" }}>
                Add Appoinment
            </button>
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Doctor</h5>
                        </div>
                        <div class="modal-body">
                            <form>
                                <h1>Appoinment</h1>
                                <br></br>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <label for="first name"><span style={{ color: "red" }}>*</span><b>Patient Name</b></label>
                                        <input type="text" class="form-control" id="Doctor name" placeholder="Patient name" />
                                    </div>
                                    <div className="col-sm-6">
                                        <label for="Patientid"><span style={{ color: "red" }}>*</span><b>Patient Id</b></label>
                                        <input type="text" class="form-control" id="Patientid" a placeholder="Patientid" />
                                    </div>
                                </div>
                                <br></br>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <label for="first name"><span style={{ color: "red" }}>*</span><b>Status</b></label>
                                        <input type="text" class="form-control" id="Status" placeholder="Status" />
                                    </div>
                                    <div className="col-sm-6">
                                        <label for="booking time"><span style={{ color: "red" }}>*</span><b>booking Time</b></label>
                                        <input type="time" class="form-control" id="booking time" a placeholder="booking time" />
                                    </div>
                                </div>
                                <br></br>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <label for="appoinment time"><span style={{ color: "red" }}>*</span><b>Appoinment Time</b></label>
                                        <input type="time" class="form-control" id="appoinment time" placeholder=" appoinment time" />
                                    </div>
                                    <div className="col-sm-6">
                                        <label for="issue categorey"><span style={{ color: "red" }}>*</span><b>Issue Categorey</b></label>
                                        <input type="text" class="form-control" id="issue categorey" a placeholder="issue categorey" />
                                    </div>
                                </div>
                                <br></br>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-success">Submit</button>
                        </div>
                    </div>
                </div>
            </div>

            <button type="button" class="btn btn-danger" style={{ position: "relative", left: "500px" }}
            >Delete Doctor</button>
            <br></br>
            <br></br>
            <h1>Weekly Appoinment</h1>

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


export default Week;
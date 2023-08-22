import React from "react";
import { NavLink } from "react-router-dom";


function Appoinment() {
  return (
    <div>
      <br></br>
      <div class="btn-group">
        <button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ position: "relative", left: "400px" }}>
          Select Type
        </button>
        <div class="dropdown-menu">
          <NavLink to='/patient-appoinment'>Patient-Appoinment</NavLink>
          <br></br>
          <NavLink to='/doctor-appoinment'>Doctor-Appoinmen</NavLink>
        </div>
      </div>
      <br></br>
      <br></br>
      <div>
        <img src="https://w0.peakpx.com/wallpaper/855/812/HD-wallpaper-health-doctor-hospital-healthtips-doctor-health.jpg" style={{ width: "100%" }}></img>
      </div>
    </div>
  )
}

export default Appoinment;
import React from "react";
import { NavLink } from "react-router-dom";

function Main() {
  return (
    <nav class="nav nav-pills flex-column flex-sm-row">
    <NavLink
        to="/home"
        className={({ isActive }) =>
          isActive
            ? "flex-sm-fill text-sm-center nav-link active"
            : "flex-sm-fill text-sm-center nav-link"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="patient-list"
        className={({ isActive }) =>
          isActive
            ? "flex-sm-fill text-sm-center nav-link active"
            : "flex-sm-fill text-sm-center nav-link"
        }
      >
        Patient info
      </NavLink>
      <NavLink
        to="doctor-list"
        className={({ isActive }) =>
          isActive
            ? "flex-sm-fill text-sm-center nav-link active"
            : "flex-sm-fill text-sm-center nav-link"
        }
      >
        Doctor info
      </NavLink>
      <NavLink
        to="appointment"
        className={({ isActive }) =>
          isActive
            ? "flex-sm-fill text-sm-center nav-link active"
            : "flex-sm-fill text-sm-center nav-link"
        }
      >
        Appoinments
      </NavLink>
    </nav>
  );
}

export default Main;

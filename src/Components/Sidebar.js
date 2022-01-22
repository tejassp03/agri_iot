import React from "react";
import "../App.css";
import { MdSensors } from "react-icons/md";
import { SidebarData } from "./SidebarData";
import { Link, NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="Sidebar">
      <div className="sidebarlogo">
        &nbsp;
        <h2>
          agri I<MdSensors className="logoicon" fontSize={30} />T
        </h2>
      </div>
      <ul className="SidebarItems">
        {SidebarData.map((val, key) => {
          return (
            <NavLink to={val.link}  style={{ textDecoration: 'none' }}>
              <li
                key={key}
                className="SidebarRow"
                
              >
                <div id="icon">{val.icon}</div>
                <div id="title">{val.title}</div>
              </li>
            </NavLink>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;

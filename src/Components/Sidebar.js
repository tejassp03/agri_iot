import React from 'react'
import '../App.css'
import { MdSensors } from 'react-icons/md';
import {SidebarData} from './SidebarData'

function Sidebar() {
    return (
        <div className="Sidebar">
            <div className="sidebarlogo">
               &nbsp;<h2>agri I<MdSensors className="logoicon" fontSize={30} />T</h2>
            </div>
            <ul className="SidebarItems">
            {SidebarData.map((val,key) =>{
                return(
                    <li key={key} 
                    className="SidebarRow" 
                    onClick={() =>{window.location.pathname=val.link}} 
                    id={window.location.pathname==val.link ?"active": ""}
                    >
                    <div id="icon">{val.icon}</div>
                    <div id="title">{val.title}</div>
                    </li>
                )


            })
            }
            </ul>
        </div>
    )
}

export default Sidebar

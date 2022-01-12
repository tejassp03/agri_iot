import React from 'react'
import '../App.css'
import {HiUserCircle} from 'react-icons/hi'

const pathname = window.location.pathname.replace('/', '');

function Navbar() {
    return (
        <div className="Navbar">
         &emsp;
        <div className="navtitle">
           <h3>{pathname}</h3> 
        </div>
           <div className="profile">
            <HiUserCircle fontSize={40} />
            </div>
        </div>
    )
}

export default Navbar

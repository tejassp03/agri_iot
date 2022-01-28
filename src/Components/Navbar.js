import React, { useState } from 'react'
import '../App.css'
import {HiUserCircle} from 'react-icons/hi'

const pathname = window.location.pathname.replace('/', '');

function Navbar() {

    const [location,setLocation]=useState([
        {location:"",
        space:""
    }
]);


    return (
        <div className="Navbar">
         &emsp;
        <div className="navtitle">
           <h3>Version 1.3 Released:28/01/2022</h3> 
        </div>
           <div className="profile">
            <HiUserCircle fontSize={40} />
            </div>
            <select name="location" id="location" value={location.location} className="locationDropdown"  onChange={e =>setLocation(e.target.value)} >
                <option value="" hidden selected disabled>Select Location</option>
                <option value="Bengaluru">Bengaluru</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="New Dehli">New Dehli</option>
                <option value="Kolkata">Kolkata</option>
                
                </select>   
        </div>
    )
}

export default Navbar

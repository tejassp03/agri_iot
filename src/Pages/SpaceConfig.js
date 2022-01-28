import React, { useState } from 'react'
import { MdSensors, MdSettingsInputComponent } from 'react-icons/md';
import {BrowserRouter as Router,Routes,Route, Link, NavLink} from 'react-router-dom';
import Tabs from '../Components/Tabs';
import SpaceProbes from './SpaceProbes';
import SpaceSensors from './SpaceSensors';

function SpaceConfig(match) {

    const [location,setLocation]=useState([
        {location:"",
        space:""
    }
]);


      
    return (
        <div>
        <div>
       
             <select name="space" id="space" value={location.space} className="locationDropdown"  onChange={e =>setLocation(e.target.value)} >
                <option value="" hidden selected disabled>Select Space</option>
                <option value="">Space 1</option>
                <option value="">Space 2</option>
                <option value="">Space 3</option>
                <option value="">Space 4</option>
                <option value="">Space 5</option>
                <option value="">Space 6</option>
                
                
            </select>  
            <button className="TabButton" >Read Slave UID's</button> 
        </div>
            &emsp;

           
    <Tabs />
    
  
        </div>
    )
}

export default SpaceConfig

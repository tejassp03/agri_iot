import { useState } from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import SlaveConfig from "../Pages/SlaveConfig";
import SpaceProbes from "../Pages/SpaceProbes";
import SpaceSensors from "../Pages/SpaceSensors";
import "../Tabs.css";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  
  return (
    <div className="container">
      <div className="bloc-tabs">
        
        <NavLink className="tabs" style={{textDecoration:'none'}} className={({ isActive }) => isActive? "tabs active-tabs": 'tabs'} to='/SpaceConfig/SpaceSensors'>
         <h3>Configure Sensors</h3> 
        </NavLink>
        <NavLink className="tabs" style={{textDecoration:'none'}}  className={({ isActive }) => isActive? "tabs active-tabs": 'tabs'} to='/SpaceConfig/SpaceProbes'>
         <h3>Configure Probes</h3> 
        </NavLink>
        <NavLink className="tabs" style={{textDecoration:'none'}}  className={({ isActive }) => isActive? "tabs active-tabs": 'tabs'} to='/SpaceConfig/SlaveConfig'>
         <h3>Slave Config</h3> 
        </NavLink>
          
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
      <Routes>
      <Route exact path="/" element={<SpaceSensors />} />
      <Route path="/SpaceSensors" element={<SpaceSensors />} />
      <Route path="/SpaceProbes" element={<SpaceProbes />} />
      <Route path="/SlaveConfig/*" element={<SlaveConfig />} />
     </Routes>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
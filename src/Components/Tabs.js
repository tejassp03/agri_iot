import { useState } from "react";
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
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          <h3>Configure Sensors</h3>
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
           <h3>Configure Probes</h3>
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          <h3>Time Config</h3>
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
         <SpaceSensors />
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <SpaceProbes />
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
         Time Configuration
        </div>
      </div>
    </div>
  );
}

export default Tabs;
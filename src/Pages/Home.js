import React, { useRef } from 'react';
import { MdFolderOpen, MdNoteAdd } from 'react-icons/md';
import { Link } from 'react-router-dom';


function Home() {

    const inputFile = useRef(null) 

    const onButtonClick = () => {
        // `current` points to the mounted file input element
       inputFile.current.click();
      };

  return(
   <div style={{justifyContent: 'center',alignItems: 'center',height: '80%',width: '100%',display: 'flex'}}>
        <Link to="Sensors" style={{textDecoration:'none',marginTop:'1%'}}><button className="TabButton" style={{fontSize: '20px'}}><MdNoteAdd fontSize={25}/>&nbsp;New Configuration</button></Link>
        &emsp;
        <button className="TabButton" onClick={onButtonClick} style={{fontSize: '20px'}}><MdFolderOpen fontSize={25}/>&nbsp;Open Configuration</button>
        <input type='file' id='file' ref={inputFile} style={{display: 'none'}}/>
  </div> 
  ) ;
  
}

export default Home;

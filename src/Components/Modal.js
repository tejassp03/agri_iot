import React, { useState } from "react";
import {MdEdit,MdOutlineDeleteForever,MdSettingsInputComponent,MdSave} from 'react-icons/md'
import "./Modal.css";
import '../App.css'

function Modal({ setOpenModal }) {

    const [probes,setProbes]=useState([
        {

            control:"Time",
            sr:"12:30",
            ss:"6:30",
            state:"ON",
            },
            

    ]);

    const slaveData = [
        {
            slavedesc:"Slave",
            slavetype:"CAT1",
            slavename:"1CAT1",
            slaveuid:"869386HUG",
            control:"Time",
            sr:"12:30",
            ss:"6:30",
            state:"ON",
            },

    ];


const handleChange = (e,index) => {
      
    const {name,value} = e.target;
 
    const list=[...probes];
 
    list[index][name] = value;
    setProbes(list);
    
 
   }
 
 
   const handleAdd = () => {
 setProbes([...probes,{control:"",sr:"",ss:"",state:"",}]);
   }
   const handleRemove = index => {
     const list=[...probes];
     list.splice(index, 1);
     setProbes(list);
   }
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
          {slaveData.map((item,i)=>{
        return(
            <>
            <div className="title" style={{justifyContent:'center',display:'flex',flexDirection:'row',alignItems: 'center',marginBottom:'70px'}}>
            <h4>Slave Description</h4>&nbsp; <input type="text" style={{width:'10%'}} value={item.slavedesc}/>
            &emsp;
            <h4>Slave Type</h4>&nbsp; <input type="text" style={{width:'10%'}} value={item.slavetype}/>
            &emsp;
            <h4>Slave Name</h4>&nbsp; <input type="text" style={{width:'10%'}} value={item.slavename}/>
            </div>

        <div className="body" style={{display: 'flex', flexDirection: 'column',overflowY: 'scroll'}}>
        
                <table className="" style={{width:'98%',tableLayout:'fixed'}}>
        
        <thead>
        <tr style={{position:'sticky',top:0,backgroundColor:'white',paddingBottom:'10px'}}>
              
               <th style={{fontSize:'18px',width:'25%'}}>Control Mode</th>
               <th style={{fontSize:'18px'}}>Control Logic</th> 
               <th style={{fontSize:'18px',width:'20%'}}>Slave State</th> 
               <th style={{fontSize:'18px',width:'10%'}}>Remove</th> 
               
          </tr>
              
           </thead>
           <br />
   <tbody>
   {probes.map((item,i)=>{
            return(
                <>
   
           <tr key={i} className="sensoritem">
              
               <td > 
               <select name="control" id="control" style={{width:'65%'}} value={item.control} onChange={e =>handleChange(e,i)} >
                <option value="" hidden  disabled>Select Control</option>
                <option value="Time">Time</option>
                <option value="Sensors">Sensors</option>
                
                </select>   
               
               </td>
               
               <td >
               <div style={{display:'flex',flexDirection:'row',alignItems: 'center'}}>
                    <h4 style={{wordBreak:'keep-all'}}>From</h4>&nbsp; <input type="time" id="1" name="sr" value={item.sr}  onChange={e =>handleChange(e,i)} style={{width:'65%'}}/> &nbsp;<h4 style={{wordBreak:'keep-all'}}>To</h4>&nbsp; <input type="time" id="1" name="ss" style={{width:'65%'}} value={item.ss} onChange={e =>handleChange(e,i)} />
                </div>
               </td>
               <td > 
               <select name="state" id="state" style={{width:'65%'}} value={item.state} onChange={e =>handleChange(e,i)} >
                <option value="" hidden  disabled>Select State</option>
                <option value="ON">ON</option>
                <option value="OFF">OFF</option>
                
                </select>  
               </td>
               <td>
                    <MdOutlineDeleteForever onClick={() => handleRemove(i)} fontSize={35} className="removeCircle" />
                </td>
               
   </tr>
   
   </>

);
})}
    
   </tbody>
   
          </table>
            
       
          <button type="button" onClick={handleAdd} className="modalAdd" name="add" id="add">Add Control</button>
           
        </div>
        </>
        );
        
    })}
    <div className="footer">
    <button type="submit" className="modalSubmit" name="add" id="add"><MdSave />&nbsp;Save</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
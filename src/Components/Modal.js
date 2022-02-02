import React, { useState } from "react";
import {MdEdit,MdOutlineDeleteForever,MdSettingsInputComponent,MdSave, MdSensors} from 'react-icons/md'
import "./Modal.css";
import '../App.css'

function Modal({ setOpenModal }) {

    const [probes,setProbes]=useState([
        {
            slavedesc:"",
            slavetype:"",
            slavename:"",
            slaveuid:"",
            control:"",
            time:[{
              start:"",
             end:"",
             status:"",
             sensor:"",
             sensorthreshold:""
              }],
            sr:"",
            ss:"",
            state:"",
            },
            

    ]);
    const [sensors,setSensors]=useState([
     {
       start:"12:30",
       end:"9:30",
       status:"ON",
       sensor:"",
       sensorthreshold:"",
     }
    ]);

    const slaveData = [
        {
            slavedesc:"Slave",
            slavetype:"CAT1",
            slavename:"1CAT2",
            slaveuid:"869386HUG",
            control:"Time",
            sr:"12:30",
            ss:"18:30",
            time:[{
            start:"12:30",
            end:"21:30",
           status:"ON",
           sensor:"OS",
           sensorthreshold:">100",
            },
            {
              start:"12:30",
              end:"9:30",
              status:"ON",
             sensor:"Temp",
             sensorthreshold:">100",
              }
          ],
            state:"ON",
            },

    ];


const handleChangeP = (e,index) => {
      
    const {name,value} = e.target;
 
    const list=[...probes];
 
    list[index][name] = value;
    setProbes(list);
    
 
   }
const handleChangeS = (e,index) => {
      
    const {name,value} = e.target;
 
    const list=[...sensors];
 
    list[index][name] = value;
    setSensors(list);
    
 
   }
 
 
   const handleAdd = () => {
 setProbes([...probes,{ slavedesc:"",slavetype:"",slavename:"",time:[],slaveuid:"",control:"",sr:"",
 ss:"",
 state:"",
 }]);
   }


   const handleSensors = () => {
     if(sensors.length==5)
     {
       alert("Sensors Limit Reached")
     }
     else
     {
      setSensors([...sensors,{start:"12:30",end:"21:30",status:"ON",sensor:"",sensorthreshold:""}]); 
     }
 
   }


   const handleRemoveProbes = index => {
     const list=[...probes];
     list.splice(index, 1);
     setProbes(list);
   }
   const handleRemoveSensors = index => {
     const list=[...sensors];
     list.splice(index, 1);
     setSensors(list);
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
              
               <th style={{fontSize:'16px',width:'15%'}}>Control Mode</th>
               <th style={{fontSize:'16px'}}>Control Logic</th> 
               <th style={{fontSize:'16px',width:'20%'}}>Slave State</th> 
               <th style={{fontSize:'16px',width:'15%'}}>Sensors</th> 
               <th style={{fontSize:'16px',width:'10%'}}>Remove</th> 
               
          </tr>
              
           </thead>
           <br />
   <tbody>
   {probes.map((item,i)=>{
            return(
                <>
   
           <tr key={i} className="sensoritem">
              
               <td > 
              <h3>Time</h3> 
               
               </td>
               
               <td >
               <div style={{display:'flex',flexDirection:'row',alignItems: 'center'}}>
                    <h4 style={{wordBreak:'keep-all'}}>From</h4>&nbsp; <input type="time" id="1" name="sr" value={item.sr}  onChange={e =>handleChangeP(e,i)} style={{width:'65%'}}/> &nbsp;<h4 style={{wordBreak:'keep-all'}}>To</h4>&nbsp; <input type="time" id="1" name="ss" style={{width:'65%'}} value={item.ss} onChange={e =>handleChangeP(e,i)} />
                </div>
               </td>
               <td > 
               <select name="state" id="state" style={{width:'65%'}} value={item.state} onChange={e =>handleChangeP(e,i)} >
                <option value="" hidden  disabled>Select State</option>
                <option value="ON">ON</option>
                <option value="OFF">OFF</option>
                
                </select>  
               </td>
               <td>
                    <MdSensors onClick={handleSensors} fontSize={35} className="removeCircle" />
                </td>
               <td>
                    <MdOutlineDeleteForever onClick={() => handleRemoveProbes(i)} fontSize={35} className="removeCircle" />
                </td>
               
   </tr>

  
{sensors.map((e,i)=>{
            return(
                <>

              <tr key={i} className="sensoritem" style={{margin:'auto',justifyContent:'center'}}>
              <td > 

               <select name="sensor" id="sensor" style={{width:'96%'}} value={item.time.sensor} onChange={e =>handleChangeS(e,i)} >
                <option value="" hidden  disabled>Select Sensors</option>
                <option value="OS">OS</option>
                <option value="Temp">Temp</option>
                
                </select>   
               
               </td>
               <td>
                <input type="text" placeholder="Enter Threshold" style={{width:'55%'}} value={item.time.sensorthreshold}  onChange={e =>handleChangeS(e,i)}/> 
               </td>
               <td>
               <select name="state" id="state" style={{width:'65%'}} value={item.time.status} onChange={e =>handleChangeS(e,i)} >
                <option value="" hidden  disabled>Select State</option>
                <option value="ON">ON</option>
                <option value="OFF">OFF</option>
                
                </select> 
               </td>
               <td>
                   
                </td>
               <td>
                    <MdOutlineDeleteForever onClick={() => handleRemoveSensors(i)} fontSize={35} className="removeCircle" />
                </td>
               
    </tr>
    </> 
            );

})}
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
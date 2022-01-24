import React, { useEffect, useState } from 'react'
import { MdEdit, MdOutlineDeleteForever, MdRemoveCircle, MdSave, MdSensors, MdSettingsInputComponent } from 'react-icons/md'
import Modal from '../Components/Modal';
import '../Probes.css'

function SlaveConfig() {


    const [modalOpen, setModalOpen] = useState(false);


    const [probes,setProbes]=useState([
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
        {
            slavedesc:"Slave",
            slavetype:"CAT2",
            slavename:"1CAT2",
            slaveuid:"78585GKGU",
            control:"Sensor (OS)",
            sr:"9:00",
            ss:"12:30",
            state:"OFF",
            }

]);

  const handleChange = (e,index) => {
      
   const {name,value} = e.target;

   const list=[...probes];
   if(name=='probedesc')
{
    const val='';
    
    
    setProbes(list);
}
   list[index][name] = value;
   setProbes(list);
   

  }


  const handleAdd = () => {
setProbes([...probes,{slavedesc:"",slavetype:"",slavename:"",slaveuid:"",control:"",sr:"",ss:"",state:"",}]);
  }
  const handleRemove = index => {
    const list=[...probes];
    list.splice(index, 1);
    setProbes(list);
  }
    /* Created on 11/01/2022 by Tejas S P */
    return (
        <div className="tableContainer" style={{paddingBottom: "35px"}}>
        {modalOpen && <Modal setOpenModal={setModalOpen} />}
        
        <div className="tabledesign" style={{width:'96%'}}>
        <div style={{display:'block',overflowX:'scroll'}}>
        <table className="sensorgroup" style={{width:'max-content',tableLayout:'fixed'}}>
        
         <thead>
         <tr>
               <th>Sl No</th>
                <th>Slave Description</th>
                <th>Slave Type</th>
                <th>Slave Name</th>
                <th>Slave UID</th>
                <th>Control Mode</th>
                <th>Control Logic</th> 
                <th>Slave State</th> 
                <th>Edit</th> 
                
           </tr>
               
            </thead>
            <br />
    <tbody>
    
    {probes.map((item,i)=>{
        return(
            <tr key={i} className="sensoritem">
                <td ><h3 >{i+1}</h3></td>
                <td > 
                <h3>{item.slavedesc} </h3>
                
                </td>
                <td > 
                <h3>{item.slavetype} </h3>
                
                </td>
                <td > 
                <h3>{item.slavename} </h3>
                
                </td>
                <td > 
                <h3>{item.slaveuid} </h3>
                </td>
                <td > 
                <h3>{item.control} </h3>
                
                </td>
                
                <td >
                <div style={{display:'flex',flexDirection:'row',alignItems: 'center'}}>
                    <h4 style={{wordBreak:'keep-all'}}>From</h4>&nbsp; <h3>{item.sr} </h3> &nbsp;<h4 style={{wordBreak:'keep-all'}}>To</h4>&nbsp; <h3>{item.ss} </h3>
                </div>
                </td>
                <td > 
                <h3>{item.state} </h3>
                </td>
                
                <td >
                    <MdEdit onClick={() => {
          setModalOpen(true);
        }} fontSize={35} className="editButton" />
                </td>
                
    </tr>
        );
        
    })}
    
           
     
    </tbody>
    
           </table>
          
        </div>
       
          </div>

          
        </div>
        
    )
}

export default SlaveConfig

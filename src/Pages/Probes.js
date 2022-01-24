import React, { useEffect, useState } from 'react'
import { MdOutlineDeleteForever, MdRemoveCircle, MdSave, MdSensors, MdSettingsInputComponent } from 'react-icons/md'

function Probes() {

    const [probes,setProbes]=useState([
        {
        probedesc:"",
        probeid:""
        
        }
]);

  const handleChange = (e,index) => {
      
   const {name,value} = e.target;

   const list=[...probes];
   if(name=='probedesc')
{
    const val='';
    if(value=='Light Level')
    {
        list[index].probeid='LL';
    } 
    if(value=='Temperature')
    {
        list[index].probeid='Temp';
    }
    if(value=='Humidity')
    {
        list[index].probeid='Hum';
    }
   if(value=='Occupancy Sensor')
    {
        list[index].probeid='OS';
    }
    if(value=='Air Flow')
    {
        list[index].probeid='AF';
    }
    
    setProbes(list);
}
   list[index][name] = value;
   setProbes(list);
   

  }


  const handleAdd = () => {
setProbes([...probes,{probedesc:"",probeid:"",sensorstate:""}]);
  }
  const handleRemove = index => {
    const list=[...probes];
    list.splice(index, 1);
    setProbes(list);
  }
    /* Created on 11/01/2022 by Tejas S P */
    return (
        <div className="tableContainer">
          <h2>&emsp;Configure Probes </h2>
          <br />
          <br />
          <div className="tabledesign">
          <table className="sensorgroup">
           <thead>
           <tr>
               <th>Sl No</th>
                <th>Probe Description</th>
                <th>Probe ID</th>
                <th>Remove</th> 
           </tr>
               
            </thead>
            <br />
    <tbody>
    {probes.map((item,i)=>{
        return(
            <tr key={i} className="sensoritem">
                <td><h3>{i+1}</h3></td>
                <td> 
                <input type="text" id="1" name="probeid" style={{width:'30%'}}  value={item.probeid} onChange={e =>handleChange(e,i)}  />
                
                </td>
                <td>
                <select name="probedesc" id="probedesc" value={item.probedesc} onChange={e =>handleChange(e,i)} >
                <option value="" hidden  disabled>Select Probe</option>
                <option value="CAT1">CAT1</option>
                <option value="CAT2">CAT2</option>
                <option value="CAT3">CAT3</option>
                <option value="CAT4">CAT4</option>
               
                </select>    
                </td>
                <td>
                    <MdOutlineDeleteForever onClick={() => handleRemove(i)} fontSize={35} className="removeCircle" />
                </td>
    </tr>
        );
        
    })}
    
           
     
    </tbody>
           
           </table>
           <button type="button" onClick={handleAdd} className="addButton" name="add" id="add"><MdSettingsInputComponent fontSize={20} />&nbsp;&nbsp;Add Probe</button>
           <button type="submit"  className="submitButton" name="add" id="add"><MdSave />&nbsp;Save</button>
          </div>
          
        </div>
    )
}

export default Probes

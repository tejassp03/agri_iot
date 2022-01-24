import React, { useEffect, useState } from 'react'
import { MdOutlineDeleteForever, MdRemoveCircle, MdSave, MdSensors, MdSettingsInputComponent } from 'react-icons/md'
import '../Probes.css'

function SpaceProbes() {

    const [probes,setProbes]=useState([
        {
        probedesc:"",
        probeid:"",
        suid:"",
        level:"",
        oflag:"",
        autooverride:"",
        stdmode:"",
        im:"",
        mm:"",
        am:"",
        som:"",


        
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
setProbes([...probes,{probedesc:"",probeid:"",suid:"",level:"",oflag:"",autooverride:"",stdmode:"",im:"",mm:"",am:"",som:""}]);
  }
  const handleRemove = index => {
    const list=[...probes];
    list.splice(index, 1);
    setProbes(list);
  }
    /* Created on 11/01/2022 by Tejas S P */
    return (
        <div className="tableContainer" style={{paddingBottom: "35px"}}>
        <br />
        <br />
        <div className="tabledesign" style={{width:'96%'}}>
        <div style={{display:'block',overflowX:'scroll'}}>
        <table className="sensorgroup" style={{width:'max-content',tableLayout:'fixed'}}>
         <thead>
           <tr>
                <th>Sl No</th>
                <th >Slave Description</th>
                <th>System Slave Name</th>
                <th>Slave UID</th>
                <th>Default Level</th>
                <th>Override Flag <br />Off/On</th>
                <th>Auto Override</th>
                <th>Default Slave & Off Delay<br />(Std Mode)</th>
                <th>Default Slave & Off Delay<br />(IM)</th>
                <th>Default Slave & Off Delay<br />(MM)</th>
                <th>Default Slave & Off Delay<br />(AM)</th>
                <th>Default Slave & Off Delay<br />(SoM)</th>
                <th>Remove</th> 
           </tr>
               
            </thead>
            <br />
    <tbody>
    {probes.map((item,i)=>{
        return(
            <tr key={i} className="sensoritem">
                <td ><h3 >{i+1}</h3></td>
                <td> 
                <input type="text" id="1" name="probeid" value={item.probeid} onChange={e =>handleChange(e,i)}  />
                
                </td>
                <td>
                <select name="probedesc" id="probedesc" value={item.probedesc} style={{width:'100%'}} onChange={e =>handleChange(e,i)} >
                <option value="" hidden  disabled>Select Probe</option>
                <option value="CAT1">CAT1</option>
                <option value="CAT2">CAT2</option>
                <option value="CAT3">CAT3</option>
                <option value="CAT4">CAT4</option>
               
                </select>    
                </td>
                <td>
                <select name="suid" id="suid" style={{width:'100%'}} value={item.suid} onChange={e =>handleChange(e,i)} >
                <option value="" hidden selected disabled>Select UID</option>
                <option value="78763HD738">78763HD738</option>
                <option value="78763HD738">78763HD738</option>
                <option value="78763HD738">78763HD738</option>
                <option value="78763HD738">78763HD738</option>
                <option value="78763HD738">78763HD738</option>
                
                </select>  
                </td>
                <td>
                <select name="level" id="level" style={{width:'100%'}} value={item.level} onChange={e =>handleChange(e,i)} >
                <option value="" hidden selected disabled>Select Level</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                </select> 
                </td>
                <td>
                <select name="oflag" id="oflag" style={{width:'100%'}} value={item.oflag} onChange={e =>handleChange(e,i)} >
                <option value="" hidden selected disabled>Select Override</option>
                <option value="OFF">OFF</option>
                <option value="ON">ON</option>
                </select> 
                </td>
                <td>
                <select name="autooverride" id="autooverride" style={{width:'100%'}} value={item.autooverride} onChange={e =>handleChange(e,i)} >
                <option value="" hidden selected disabled>Select Override</option>
                <option value="OS">OS</option>
                <option value="Temp">Temp</option>
                </select> 
                
                </td>
                <td>
                <select name="stdmode" id="stdmode" style={{width:'100%'}} value={item.stdmode} onChange={e =>handleChange(e,i)} >
                <option value="" hidden selected disabled>Select Slave & Off Delay</option>
                <option value="YES">Yes/30s</option>
                <option value="NO">No/5m</option>
                </select> 
                </td>
                <td>
                <select name="im" id="im" style={{width:'100%'}} value={item.im} onChange={e =>handleChange(e,i)} >
                <option value="" hidden selected disabled>Select Slave & Off Delay</option>
                <option value="YES">Yes/30s</option>
                <option value="NO">No/5m</option>
                </select> 
                </td>
                <td>
                <select name="mm" id="mm" style={{width:'100%'}} value={item.mm} onChange={e =>handleChange(e,i)} >
                <option value="" hidden selected disabled>Select Slave & Off Delay</option>
                <option value="YES">Yes/30s</option>
                <option value="NO">No/5m</option>
                </select> 
                </td>
                <td>
                <select name="am" id="am" style={{width:'100%'}} value={item.am} onChange={e =>handleChange(e,i)} >
                <option value="" hidden selected disabled>Select Slave & Off Delay</option>
                <option value="YES">Yes/30s</option>
                <option value="NO">No/5m</option>
                </select> 
                </td>
                <td>
                <select name="som" id="som" style={{width:'100%'}} value={item.som} onChange={e =>handleChange(e,i)} >
                <option value="" hidden selected disabled>Select Slave & Off Delay</option>
                <option value="YES">Yes/30s</option>
                <option value="NO">No/5m</option>
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
        </div>
        
           <button type="button" onClick={handleAdd} className="addButton" name="add" id="add"><MdSettingsInputComponent fontSize={20} />&nbsp;&nbsp;Add Probe</button>
           <button type="submit"  className="submitButton" name="add" id="add"><MdSave />&nbsp;Save</button>
          </div>
          
        </div>
    )
}

export default SpaceProbes

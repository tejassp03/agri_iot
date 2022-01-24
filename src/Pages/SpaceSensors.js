import React, { useEffect, useState } from 'react'
import { MdOutlineDeleteForever, MdRemoveCircle, MdSave, MdSensors } from 'react-icons/md'
import '../Probes.css'
function SpaceSensors() {

    const [sensors,setSensors]=useState([
        {
        sensordesc:"",
        sensorid:"",
        sensorstate:"",
        
        }
]);

  const handleChange = (e,index) => {
      
   const {name,value} = e.target;

   const list=[...sensors];
   if(name=='sensordesc')
{
    const val='';
    if(value=='Light Level')
    {
        list[index].sensorid='1LL1';
    } 
    if(value=='Temperature')
    {
        list[index].sensorid='1Temp1';
    }
    if(value=='Humidity')
    {
        list[index].sensorid='1Hum1';
    }
   if(value=='Occupancy Sensor')
    {
        list[index].sensorid='1OS1';
    }
    if(value=='Air Flow')
    {
        list[index].sensorid='1AF1';
    }
    
    setSensors(list);
}
   list[index][name] = value;
   setSensors(list);
   

  }


  const handleAdd = () => {
setSensors([...sensors,{sensordesc:"",sensorid:"",uid:"",upperlim:"",lowerlim:"",sensorstate:""}]);
  }
  const handleRemove = index => {
    const list=[...sensors];
    list.splice(index, 1);
    setSensors(list);
  }
    /* Created on 11/01/2022 by Tejas S P */
    return (
        <div className="tableContainer" style={{paddingBottom: "35px"}}>
          <br />
          <br />
          <div className="tabledesign" style={{width:'96%'}}>
          <table className="sensorgroup" style={{width:'99%'}}>
           <thead>
           <tr>
               <th>Sl No</th>
                <th>Sensor Description</th>
                <th>Sensor System Name</th>
                <th>UID</th>
                <th>Upper Limit</th>
                <th>Lower Limit</th> 
                <th>Remove</th> 
           </tr>
               
            </thead>
            <br />
    <tbody>
    {sensors.map((item,i)=>{
        return(
            <tr key={i} className="sensoritem">
                <td><h3>{i+1}</h3></td>
                <td> 
                <select name="sensordesc" id="sensordesc" style={{width:'85%'}} value={item.sensordesc} onChange={e =>handleChange(e,i)} >
                <option value="" hidden  disabled>Select Sensor</option>
                <option value="Light Level">Light Level</option>
                <option value="Temperature">Temperature</option>
                <option value="Humidity">Humidity</option>
                <option value="Occupancy Sensor">Occupancy Sensor</option>
                <option value="Air Flow">Air Flow</option>
                </select>    
                </td>
                <td>
                    <input type="text" id="1" name="sensorid" style={{width:'30%'}} value={item.sensorid} onChange={e =>handleChange(e,i)}  />
                </td>
                <td>
                <select name="uid" id="uid" style={{width:'100%'}} value={item.uid} onChange={e =>handleChange(e,i)} >
                <option value="" hidden selected disabled>Select UID</option>
                <option value="78763HD738">78763HD738</option>
                <option value="78763HD738">78763HD738</option>
                <option value="78763HD738">78763HD738</option>
                <option value="78763HD738">78763HD738</option>
                <option value="78763HD738">78763HD738</option>
                
                </select>                 </td>
                <td>
                    <input type="number" id="1" name="upperlim" style={{width:'30%'}}  value={item.upperlim} onChange={e =>handleChange(e,i)}  />
                </td>
                <td>
                    <input type="number" id="1" name="lowerlim" style={{width:'30%'}} value={item.lowerlim} onChange={e =>handleChange(e,i)}  />
                </td>
                
                <td>
                    <MdOutlineDeleteForever onClick={() => handleRemove(i)} fontSize={35} className="removeCircle" />
                </td>
    </tr>
        );
        
    })}
    
           
     
    </tbody>
           
           </table>
           <button type="button" onClick={handleAdd} className="addButton" name="add" id="add"><MdSensors fontSize={20} />&nbsp;Add Sensor</button>
           <button type="submit"  className="submitButton" name="add" id="add"><MdSave />&nbsp;Save</button>
          </div>
          
        </div>
    )
}

export default SpaceSensors

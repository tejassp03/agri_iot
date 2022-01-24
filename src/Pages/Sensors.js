import React, { useEffect, useState } from 'react'
import { MdOutlineDeleteForever, MdRemoveCircle, MdSave, MdSensors } from 'react-icons/md'

function Sensors() {

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
        list[index].sensorid='LL';
    } 
    if(value=='Temperature')
    {
        list[index].sensorid='Temp';
    }
    if(value=='Humidity')
    {
        list[index].sensorid='Hum';
    }
   if(value=='Occupancy Sensor')
    {
        list[index].sensorid='OS';
    }
    if(value=='Air Flow')
    {
        list[index].sensorid='AF';
    }
    
    setSensors(list);
}
   list[index][name] = value;
   setSensors(list);
   

  }


  const handleAdd = () => {
setSensors([...sensors,{sensordesc:"",sensorid:"",sensorstate:""}]);
  }
  const handleRemove = index => {
    const list=[...sensors];
    list.splice(index, 1);
    setSensors(list);
  }
    /* Created on 11/01/2022 by Tejas S P */
    return (
        <div className="tableContainer">
          <h2>&emsp;Configure Sensors </h2>
          <br />
          <br />
          <div className="tabledesign">
          <table className="sensorgroup">
           <thead>
           <tr>
               <th>Sl No</th>
                <th>Sensor Description</th>
                <th>Sensor ID</th>
                <th>State/Level</th>
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
                <select name="sensordesc" id="sensordesc" value={item.sensordesc} onChange={e =>handleChange(e,i)} >
                <option value="" hidden  disabled>Select Sensor</option>
                <option value="Light Level">Light Level</option>
                <option value="Temperature">Temperature</option>
                <option value="Humidity">Humidity</option>
                <option value="Occupancy Sensor">Occupancy Sensor</option>
                <option value="Air Flow">Air Flow</option>
                </select>    
                </td>
                <td>
                    <input type="text" id="1" name="sensorid" style={{width:'20%'}} value={item.sensorid} onChange={e =>handleChange(e,i)}  />
                </td>
                <td>
                <select name="sensorstate" id="sensorstate" value={item.sensorstate} onChange={e =>handleChange(e,i)}>
                <option value="" hidden selected disabled>ON/OFF</option>
                <option value="ON">ON</option>
                <option value="OFF">OFF</option>
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
           <button type="button" onClick={handleAdd} className="addButton" name="add" id="add"><MdSensors fontSize={20} />&nbsp;Add Sensor</button>
           <button type="submit"  className="submitButton" name="add" id="add"><MdSave />&nbsp;Save</button>
          </div>
          
        </div>
    )
}

export default Sensors

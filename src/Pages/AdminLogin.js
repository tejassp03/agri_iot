import React, { useState } from 'react'
import {MdEmail, MdLock} from 'react-icons/md'

function AdminLogin({Login,error}) {
    const [details,setDetails]=useState({email:'',password:''});

    const submitHandler = e => {
        e.preventDefault();
        Login(details);

    }
    return (
        <div className="Login adminsvg">
        
        <form onSubmit={submitHandler}>
        <div className="form-group">
        
        <div className="form-title">
        
        <h2>Admin Login</h2>
        <h4>Enter your credentials to login.</h4>
        </div>
        
        <div className="inputgroup">
        <MdEmail className="inputicon"/>
         <input type="text" name="email" placeholder="Enter Email" id="email" onChange={e=>setDetails({...details,email:e.target.value})} value={details.email}  />   
        </div>
        <div className="inputgroup">
        <MdLock className="inputicon"/> 
        <input type="password" name="password" placeholder="Enter Password" id="password" onChange={e=>setDetails({...details,password:e.target.value})} value={details.password} />   
        </div>
        
        <input type="submit" value="Sign In" className=""/>    
     
        </div>

        </form>
        </div>
    )
}

export default AdminLogin

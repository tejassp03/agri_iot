import React from 'react'
import {MdEmail, MdLock} from 'react-icons/md'

function UserLogin() {
    return (
        <div className="Login usersvg">
        
        <form>
        <div className="form-group">
        
        <div className="form-title">
        
        <h2>User Login</h2>
        <h4>Enter your credentials to login.</h4>
        </div>
        
        <div className="inputgroup">
        <MdEmail className="inputicon"/>
         <input type="text" name="email" placeholder="Enter Email" id="email" />   
        </div>
        <div className="inputgroup">
        <MdLock className="inputicon"/> 
        <input type="password" name="password" placeholder="Enter Password" id="password" />   
        </div>
        
        <input type="submit" value="Sign In" className=""/>    
     
        </div>

        </form>
        </div>
    )
}

export default UserLogin

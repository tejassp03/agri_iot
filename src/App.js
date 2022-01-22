import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Sensors from './Pages/Sensors';
import Probes from './Pages/Probes';
import SpaceConfig from './Pages/SpaceConfig';
import { useState } from 'react';
import AdminLogin from './Pages/AdminLogin';
import UserLogin from './Pages/UserLogin';

/* Created on 11/01/2022 by Tejas S P */
function App() {
    const adminCred={
      email: 'admin@agri.com',
      password: 'admin'
    };

    const [user,setUser]=useState({name:'',email:''});
    const [error,setError]=useState("");

    const Login=details=>{
        console.log(details);

        if(details.email==adminCred.email && details.password==adminCred.password)
        {
          console.log('Logged in');
          let username   = (adminCred.email).substring(0, (adminCred.email).lastIndexOf("@"));
          
          setUser({
            name:username,
            email:details.email,
          });
        }
        else
        {
          console.log('Wrong Email or Password');
        }
    };
    const Logout=()=>{
        console.log('Logout');
    };
  return (
 
 <div className="App">
    {(user.email =="") ? (<>
      <Router>
      <div className="first">
   <Sidebar />   
    </div>
   <div className="Second">
     <Navbar />
     <div className="lower">
  
    <Routes>
      <Route exact path="/" element={<Sensors />} />
      <Route  path="/Sensors" element={<Sensors />} />
      <Route  path="/Probes" element={<Probes />} />
      <Route  path="/SpaceConfig/*" element={<SpaceConfig />} />
    </Routes>
 
     </div>
     
    </div>
    </Router> 
</>
    ) : (

 
      
   <AdminLogin Login={Login} error={error} />
  

    )}
  
    


    </div>
  );
}


function Home() {
  return (
    <div>
      <p>Home</p>
    </div>
  )
}



export default App;

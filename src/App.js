import './App.css';
import { Routes,Route,useNavigate, Navigate} from 'react-router';
import React, { useContext,useState} from 'react';
import {NavBar} from './Navbar.js'
import Form from './form.js'
import {Tables} from './tables.js'
import {Login} from './componets/login.js'
import Graphs from './graphs.js'
import {UserData} from "./Data.js"
function App() {
 
    
  return (
   <>
       
        <Routes>
          <Route path="/job_post" element={<RequiredAuth><Home /></RequiredAuth>}></Route>
          <Route path="/" element={<Navigate replace to ="/login"/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/pre" element={<RequiredAuth><Nomore/></RequiredAuth>}></Route>
        </Routes>
    </>

  );
}

function RequiredAuth({children}){
  const token = localStorage.getItem("token")
  return token ? children : <Navigate replace to ="/"/>       
  
}
 const Home = () => {
  
   const [user, setuserData] = useState();
   fetch("https://capstonebackend--q.herokuapp.com/jobs_post").then(data=>data.json()).then(data=>setuserData(data))
   const chartdata ={
    labels:user?.map(d=>d.year),
    datasets:[{
      label:"user Ganied",
      data:user?.map(d=>d.userGain),
      backgroundColor:["red","blue","pink"],
      borderWidth:3,
      borderColor:"balck",
      barThickness:20
    }],
  
   }
  return ( 
    <div className="app">
     <NavBar/>
         <div className="fields">
               <div className="peak">
                    <p>Peak shaving & alert</p>
                    <p>Groups</p>
               </div>
               <div className="graphs">
               
                    <Graphs user={chartdata}/> 
           
               </div>
               <div className="forms_tables">
                   <div className='form_section'>
                       <Form/>
                   </div>
                   <div className="tables_alert">
                    <Tables/>
                   </div>
               </div>
         </div>
     </div>
   );
 }
  
 const Nomore = () => {
  return ( 
    <div className="app">
          <NavBar/>
          <div className="fields">
                <div className="noRoutes">
                   <p style={{fontSize:"30px"}}>No More Routes</p>
                 </div>
          </div>
    </div>
  )
}

export default App;
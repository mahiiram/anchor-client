import React from 'react';
import {NavLink, useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';

function Navbar() {
    const navigate = useNavigate()
   const [balance,setBalance] = useState(null);
   const email = localStorage.getItem('email')
   useEffect(()=>{
      try {
         axios.get(`http://localhost:5000/company/getuser/${email}`).then((res)=>{
            console.log(res)
            setBalance(res.data.balance)
            localStorage.setItem('companyid',res.data._id)
         })
      } catch (error) {
        console.log(error)
      }
   },[])
      
   const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email')
    navigate('/')
  };


    return (
        <div>
            <nav className="navbar navbar-dark bg-dark p-1">
                <div className="container-fluid">
                    <NavLink to={'/'}><h1 style={{textDecoration:'none',color:'#f5bf42'}}>Job Portal</h1></NavLink>
                   <div className="d-grid gap-1 d-md-block">
                    
                         <NavLink to={'/createjob'}>
                         <button className="btn btn-outline-warning" type="button" >create</button>
                         </NavLink>
                        <NavLink  >
                        <button className="btn btn-outline-warning" type="button" >₹{balance}</button>
                        </NavLink>
                        <button className="btn btn-outline-warning m-1" type="button" onClick={handleLogout}>Logout</button> 
        
                          
                   </div>
                       
                </div>
            </nav>
        </div>
    )
}

export default Navbar
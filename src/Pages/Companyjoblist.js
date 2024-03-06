import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';



function Companyjoblist() {
     const companyId = localStorage.getItem('companyid')
    useEffect(() => {
        const intervalId = setInterval(() => {
            axios.get(`http://localhost:5000/api`).then((res) => {
                console.log(res.data)
            }).catch((err) => console.log(err))
        }, 1000);
    }, [])
  return (
    <div>
      
    </div>
  )
}

export default Companyjoblist

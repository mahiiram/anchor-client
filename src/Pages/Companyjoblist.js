import React from 'react'
import axios from 'axios';
import { useEffect,useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteRole } from '../helper/helper';



function Companyjoblist() {
    const companyId = localStorage.getItem('companyid')

    const [roles, setRoles] = useState([])
    useEffect(() => {
        axios.get(`https://anchor-server.onrender.com/company/getroles/${companyId}`).then((res) => {
            console.log(res.data)
            setRoles(res.data)
        }).catch((err) => console.log(err))
    }, [roles])
    console.log(roles)

    const handleDelete = (id) => {
        deleteRole(id).then((res) => console.log(res)).catch((err) => console.log(err))
    }
    return (
        <div className='home'>
            <h1 className='homenotes'>All Posted Jobs</h1>
            {!roles || (roles.length === 0 && (
                <h2 className='NoNotesFound'>create a posts</h2>
            ))}
            <div className='roles'>
                {roles && roles.map((role, index) => (
                    <>
                        <div className='Note' key={index}>
                            <div className='Notecontent'><h6>
                                {role.name}</h6>
                                <p>{role.minCTC}-{role.maxCTC}</p>
                                <p>{role.location}</p>
                            </div>
                            <div>
                                <span className='Deleteicon' onClick={() => handleDelete(role._id)}>
                                    <DeleteIcon />
                                </span>
                            </div>

                        </div>
                    </>
                ))}
            </div>
        </div>
    )
}

export default Companyjoblist

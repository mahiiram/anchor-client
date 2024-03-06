import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { Toaster, toast } from 'react-hot-toast';
import { roleValidation } from '../helper/Validate';
import { addrole } from '../helper/helper';
import Navbar from './Navbar';


function Createjob() {
    const navigate = useNavigate()
    const companyId = localStorage.getItem('companyid')
    const formik = useFormik({
        initialValues:{
          minCTC:'',
          maxCTC:'',
          location:'',
          name:'',
          companyId:companyId
        },
        validate: roleValidation,
        validateOnBlur:false,
        validateOnChange:false,
        onSubmit:async values =>{
          values = await Object.assign(values)
         const registerPromise = addrole(values);
         toast.promise(registerPromise,{
          loading:'creating....',
          success: <b>OTP sent successfully</b>,
          error: <b>Couldnt Register</b>
          
         })
           console.log(values);
           registerPromise.then(function(){navigate('/companyhome')})
        }
        
      })
      return (
        
        <div>
          <Toaster position='top-center' reverseOrder={false} />
          <Navbar />
          <div className='roleinput'>
          <div className='Maindiv'>  
          <div className='form-div'>
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label" >Rolename</label>
                <input {...formik.getFieldProps('name')} placeholder='Enter role name' type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <label for="exampleInputEmail1" className="form-label" >minCTC</label>
                <input {...formik.getFieldProps('minCTC')} placeholder='Enter minCTC' type="text" className="form-control"/>
                <label for="exampleInputEmail1" className="form-label" >maxCTC</label>
                <input {...formik.getFieldProps('maxCTC')} placeholder='Enter MaxCTC' type="text" className="form-control"/>
                <label for="exampleInputEmail1" className="form-label" >location</label>
                <input {...formik.getFieldProps('location')} placeholder='Enter location' type="text" className="form-control"/>
              </div>
              <div className='button-div'>
              <button type="submit" className="btn btn-primary" >Submit</button>
              </div>  
            </form>
          </div>
        </div>
          </div>
        </div>
      )
}

export default Createjob

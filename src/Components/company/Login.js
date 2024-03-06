import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { Toaster, toast } from 'react-hot-toast';
import { login } from '../../helper/helper.js';
import { profileValidation } from '../../helper/Validate.js';


function CompanyLogin() {
   
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues:{
      email:'',
      password:''
    },
    validate: profileValidation,
    validateOnBlur:false,
    validateOnChange:false,
    onSubmit:async values =>{
      values = await Object.assign(values)
     const registerPromise = login(values);
     toast.promise(registerPromise,{
      loading:'creating....',
      success: <b>Register successfully</b>,
      error: <b>Couldnt Register</b>

     })
      localStorage.setItem('email',values.email)
       registerPromise.then(function(){navigate('/companyhome')})
    }
    
  })

  return (
    
    <div className='model'>
      <Toaster position='top-center' reverseOrder={false} />
      <div className='Maindiv'>  
       <div className='text'>
        <h1>Login</h1>
        <p>Company Login</p>
       </div>
      <div className='form-div'>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label" >Email</label>
            <input {...formik.getFieldProps('email')} placeholder='Enter Email' type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <label for="exampleInputEmail1" className="form-label" placeholder='Enter Email'>Password</label>
            <input {...formik.getFieldProps('password')} placeholder='Enter Password' type="password" className="form-control"/>
            <div id="emailHelp" className="form-text">We'll never share your password with anyone else.</div>
          </div>
          <div className='button-div'>
          <button type="submit" className="btn btn-primary" >Login</button>
          </div>
          <div className='button-div'><p>doesnt have an account? <span><Link to='/register' >SignUp</Link></span></p>
          </div>
          
          
        </form>
      </div>
    </div>
    </div>
  )
}

export default CompanyLogin

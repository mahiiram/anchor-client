import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { Toaster, toast } from 'react-hot-toast';
import { otpValidation} from '../../helper/Validate';
import { login, verifyOTP } from '../../helper/helper.js';

function CompanyVerifyOTP() {
  const navigate = useNavigate()
  const email = localStorage.getItem('email')
  const formik = useFormik({
    initialValues:{
      email:email,
      otp:''
    },
    validate: otpValidation,
    validateOnBlur:false,
    validateOnChange:false,
    onSubmit:async values =>{
      values = await Object.assign(values)
     const otpPromise = verifyOTP(values);
     toast.promise(otpPromise,{
      loading:'creating....',
      success: <b>Otp verified successfully</b>,
      error: <b>Couldnt Verified</b>

     })
       console.log(values)
       otpPromise.then(function(){navigate('/companyhome')})
    }
    
  })
  return (
    <div className='model'>
      <Toaster position='top-center' reverseOrder={false} />
      <div className='Maindiv'>  
       <div className='text'>
        <h1>OTP-verification</h1>
        <p>Happy to join you</p>
       </div>
      <div className='form-div'>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label" >Email</label>
            <input {...formik.getFieldProps('email')} placeholder='Enter Email' type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <label for="exampleInputEmail1" className="form-label" placeholder='Enter Email'>Password</label>
            <input {...formik.getFieldProps('otp')} placeholder='Enter OTP' type="text" className="form-control"/>
            <div id="emailHelp" className="form-text">We'll never share your password with anyone else.</div>
          </div>
          <div className='button-div'>
          <button type="submit" className="btn btn-primary" >SignUp</button>
          </div>
            
        </form>
      </div>
    </div>
    </div>
  )
}

export default CompanyVerifyOTP

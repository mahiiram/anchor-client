import React from "react";
import { toast } from "react-hot-toast";

export async function passwordValidate(values){
    const errors = passwordVerify({},values);
    return errors;
}


export async function registerValidation(values){
    const errors = userNameVerify({},values);
    passwordVerify(errors,values);
    emailVerify(errors,values)
    // logoVerify(errors,values)
    return errors;
}
export async function otpValidation(values){
    const errors = emailVerify({},values);
    otpVerify(errors,values); 
    return errors;
}

export async function profileValidation(values){
    const errors = emailVerify({},values);
    passwordVerify(errors,values);
    return errors;
}
export async function roleValidation(values){
    const errors = rolenameVerify({},values)
    roleminCTCVerify(errors,values)
    rolemaxCTCVerify(errors,values)
    locationVerify(errors,values)
}

//validate password
function passwordVerify(error={},values){
const specialChar = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~1234567890]/;

    if(!values.password){
        error.password = toast.error('Password Required')
    }else if(values.password.includes(" ")){
        error.password = toast.error('Invalid Password')
    }else if(values.password.length<6){
        error.password = toast.error('Passord must be in more than 6 character')
    }else if(!specialChar.test(values.password)){
        error.password = toast.error('Password must have one special character and number')
    }
     return error;

}


//validate username
function userNameVerify(error={}, values){
    if(!values.name){
        error.name = toast.error('Company Name Required')
    }else if(values.name.includes(" ")){
        error.name = toast.error('Invalid Company Name')
    }
     return error;

}

function emailVerify(error={},values){
    if(!values.email){
        error.email = toast.error('Email Required');
    }else if(values.email.includes(" ")){
        error.email = toast.error('Wrong Email');
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        error.email = toast.error('Invalid Email Address')
    }
    return error
}

function otpVerify(error={},values){
    if(!values.otp){
        error.otp = toast.error("otp required")
    }
    return error
}
// function logoVerify(error={},values){
//     if(!values.logo){
//         error.logo = toast.error('Logo required')
//     }
//     return error
// }


function rolenameVerify(error={},values){
   if(!values.name){
    error.name= toast.error('role name required') 
   }
   return error
}

function roleminCTCVerify(error={},values){
    if(!values.minCTC){
        error.minCTC = toast.error("minCTC required")
       }
    return error
 }
 function rolemaxCTCVerify(error={},values){
    if(!values.maxCTC){
        error.maxCTC = toast.error("maxCTC required")
       }
    return error
 }
 function locationVerify(error={},values){
    if(!values.location){
        error.location = toast.error("location required")
       }
    return error
 }


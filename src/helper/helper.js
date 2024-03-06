import axios from 'axios';



/** register user function */
export async function registerCompany(credentials){
    const data  = await axios.post(`http://localhost:5000/company/register`,{
         name:credentials.name,
         email:credentials.email,
         password:credentials.password,
         logo:credentials.logo
      }).catch((err)=>console.log(err))   
      console.log(data)
      return Promise.resolve(data.message)
}


export async function login(credentials){
    const data  = await axios.post(`http://localhost:5000/company/login`,{
         email:credentials.email,
         password:credentials.password,
      }).catch((err)=>console.log(err))  

      
      return Promise.resolve(data.message)
}


/** generate OTP

/** verify OTP */
export async function verifyOTP(credentials){
    const data = await axios.post('http://localhost:5000/company/verifyotp', {
        email:credentials.email,
        otp:credentials.otp
       }).catch((err)=>console.log(err))
       return Promise.resolve(data.message)
    
}
export async function addrole(credentials){
    const data = await axios.post('http://localhost:5000/company/addrole', {
        name:credentials.name,
        minCTC:credentials.minCTC,
        maxCTC:credentials.maxCTC,
        location:credentials.location,
        companyId:credentials.companyId
       }).catch((err)=>console.log(err))
       console.log(data)
       return Promise.resolve(data.message)
    
}
/** reset password */

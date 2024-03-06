import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import CompanyRegister from "./Components/company/Register";
import CompanyLogin from "./Components/company/Login";
import CompanyVerifyOTP from "./Components/company/CompanyVerifyOTP";
import CompanyHome from "./Pages/CompanyHome";
import Createjob from "./Pages/Createjob";


const router = createBrowserRouter([
  {
    path:"/",
    element:<div><CompanyRegister/></div>
  },
  {
    path:"/login",
    element:<div><CompanyLogin /></div>
  },{
    path:'/company/verifyOTP',
    element:<div><CompanyVerifyOTP /></div>
  },
  {
    path:'/companyhome',
    element:<div><CompanyHome /></div>
  },
  {
    path:'/createjob',
    element:<div><Createjob/></div>
  }
])

function App() {
  return (
    <main>
      <RouterProvider router={router}>

      </RouterProvider>
    </main>
  );
}

export default App;

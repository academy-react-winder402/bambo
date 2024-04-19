import React from "react"
import { createBrowserRouter } from "react-router-dom";
import {Landing} from "../screen/landing/Landing.jsx";
import {Login} from "../screen/login/Login.jsx";
import {Register} from "../screen/register/Register.jsx";


const Router = createBrowserRouter([
  {path:'/' , element:<Landing />},
  {path:'/login' , element:<Login />},
  {path:'/register' , element:<Register />},
])

export {Router};

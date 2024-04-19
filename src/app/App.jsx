import React from "react"
import { createBrowserRouter } from "react-router-dom";
import {Register} from "../screen/register/Register.jsx";
import {Login} from "../screen/login/Login.jsx";
import {Landing} from "../screen/landing/Landing.jsx";

const Router = createBrowserRouter([
  {path:'/' , element:<Landing />},
  {path:'/Login' , element:<Login />},
  {path:'/Register' , element:<Register />},
])

export {Router};

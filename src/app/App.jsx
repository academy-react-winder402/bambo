import React from "react"
import { createBrowserRouter } from "react-router-dom";
import { Landing } from "../screen/landing/Landing.jsx";
import { Login } from "../screen/login/Login.jsx"
import { Register } from "../screen/register/Register.jsx";
import { ForgotPass } from "../screen/forgotpass/ForgotPass.jsx";
import { Articles } from '../screen/articles/Articles.jsx';
import { Courses } from '../screen/courses/Courses.jsx';
import { CourseDetail } from "../screen/CourseDetail/CourseDetail.jsx";


const Router = createBrowserRouter([
  { path: '/', element: <Landing /> },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },
  { path: '/ForgotPass', element: <ForgotPass /> },
  { path: '/articles', element: <Articles /> },
  { path: '/courses', element: <Courses /> },
  { path: '/courseDetail', element: <CourseDetail /> },

])

export { Router };

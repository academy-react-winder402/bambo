import React from "react"
import { createBrowserRouter } from "react-router-dom";
import { Landing } from "../screen/landing/Landing.jsx";
import { Login } from "../screen/login/Login.jsx"
import { Register } from "../screen/register/Register.jsx";
import { ForgotPass } from "../screen/forgotpass/ForgotPass.jsx";
import { Articles } from '../screen/articles/Articles.jsx';
import { Courses } from '../screen/courses/Courses.jsx';
import { CourseDetail } from "../screen/CourseDetail/CourseDetail.jsx";
import { ArticleDetail } from "../screen/ArticleDetail/ArticleDetail.jsx";
import {MainLayout} from './layout/Layout.jsx'
import {Sabadkharid} from '../screen/sabadkharid/Sabadkharid.jsx';
import { Notfound } from "../screen/notfound/Notfound.jsx";

const Router = createBrowserRouter([
  {path:"/" , element:<MainLayout /> , children: [
    { path: '/', element: <Landing /> },
    { path: '/article', element: <Articles /> },
    { path: '/course', element: <Courses /> },
    { path: '*', element: <Notfound /> },
  ]},
  { path: '/sabadkharid', element: <Sabadkharid /> },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },
  { path: '/ForgotPass', element: <ForgotPass /> },
  { path: '/courseDetail', element: <CourseDetail /> },
  { path: '/ArticleDetail', element: <ArticleDetail /> },
  

])

export { Router };

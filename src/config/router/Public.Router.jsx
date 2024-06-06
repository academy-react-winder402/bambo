import React from "react"
import { createBrowserRouter } from "react-router-dom";
import { Landing } from "../../screen/landing/Landing.jsx";
import { Login } from "../../screen/login/Login.jsx"
import { Register } from "../../screen/register/Register.jsx";
import { ForgotPass } from "../../screen/forgotpass/ForgotPass.jsx";
import { Articles } from '../../screen/articles/Articles.jsx';
import { Courses } from '../../screen/courses/Courses.jsx';
import { CourseDetail } from "../../screen/CourseDetail/CourseDetail.jsx";
import { ArticleDetail } from "../../screen/ArticleDetail/ArticleDetail.jsx";
import {MainLayout} from '../layout/Layout.jsx'
import {Sabadkharid} from '../../screen/sabadkharid/Sabadkharid.jsx';
import { Notfound } from "../../screen/notfound/Notfound.jsx";
import {About} from '../../screen/about/About.jsx';
import { ForgotPassPageOne } from "../../component/login/forgotpassword/forgotpasspage/ForgotPassPageOne.jsx";
import { ForgotPassPageThree } from "../../component/login/forgotpassword/forgotpasspage/ForgotPassPageThree.jsx";

const Router = createBrowserRouter([
  {path:"/" , element:<MainLayout /> , children: [
    { path: '/', element: <Landing /> },
    { path: '/article', element: <Articles /> },
    { path: '/course', element: <Courses /> },
    { path: '/courseDetail/:id', element: <CourseDetail /> },
    { path: '/articleDetail', element: <ArticleDetail /> },
    { path: '/sabadkharid', element: <Sabadkharid /> },
    { path: '/about', element: <About /> },

    
  ]},
  
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },
  {path:'forgotpass', element:<ForgotPass/>},
  {path:'forgotpass/one',element:<ForgotPassPageOne/>},
  { path: "/forgotpass/one/newpass/:configValue?", element: <ForgotPassPageThree /> },
  { path: '*', element: <Notfound /> },

])

export { Router };

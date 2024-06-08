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
import {PanelDashbord} from "../../screen/panelDashbord/PanelDashbord.jsx";
import { ForgotPassPageOne } from "../../component/login/forgotpassword/forgotpasspage/ForgotPassPageOne.jsx";
import { ForgotPassPageThree } from "../../component/login/forgotpassword/forgotpasspage/ForgotPassPageThree.jsx";
import { Dashbored } from "../../component/paneldaneshjo/dashbord/Dashbord.jsx";
import { EditProfile } from "../../component/paneldaneshjo/editprofile/EditProfile.jsx";
import { MyCourse } from "../../component/paneldaneshjo/mycourses/MyCourses.jsx";
import { PannelCourse } from "../../component/paneldaneshjo/pannelcourse/PannelCourse.jsx";
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
  {path:'forgotpassone',element:<ForgotPassPageOne/>},
  { path: "/forgotpassone/newpass/:configValue?", element: <ForgotPassPageThree /> },
  { path: '*', element: <Notfound /> },
  { path: '/PanelDashbord', element: <PanelDashbord/>,children: [
    { path: '/dashbord', element: <Dashbored /> },
    { path: '/editprofile', element: <EditProfile /> },
    { path: '/mycourse', element: <MyCourse /> },
    { path: '/pannelcourse', element: <PannelCourse/> },
  ] },
  

])

export { Router };

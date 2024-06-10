import React, { useState } from "react";
import { Fragment } from "react";
import {HeaderDashbord} from "../paneldaneshjo/dashbordleft/header"
import { DashbordRight } from "./dashbordright/DashbordRight";
import { EditProfile } from "./editprofile/EditProfile";
import { Dashbored } from "./dashbord/Dashbord";
import { PannelCourse } from "./pannelcourse/PannelCourse";
import { MyCourse } from "./mycourses/MyCourses";
import { NavLink } from "react-router-dom";
const PanelDashbordc =()=>{

  const [pagedashbord, setpagedashbord]= useState(0);

    return(
        <div dir="rtl" className="lg:flex lg:w-[100%]  
        md:flex md:w-[100%] md:h-[730px]
        sm:flex sm:w-[100%] sm:h-[730px]
        xs:flex xs:w-[100%] 
        ">
      <div dir="rtl" className=" lg:w-[25%] lg:h-[100%]  lg:bg-[#088568]
        md:w-[25%] md:h-[100%]  md:bg-[#088568] lg:block md:block
     sm:w-[25%] sm:h-[100%]  sm:bg-[#088568] sm:hidden
     xs:w-[25%] xs:h-[100%]  xs:bg-[#088568] xs:hidden
         ">
           <DashbordRight on={setpagedashbord} />
            </div>
            <div className="lg:w-[75%] lg:h-[100%] lg:bg-[#DBDBDB] md:w-[75%] md:h-[100%] md:bg-[#DBDBDB]
            sm:w-[100%] sm:h-[100%] sm:bg-[#DBDBDB] xs:w-[100%]  xs:bg-[#DBDBDB] 
            ">
  <div className="lg:w-[100%] lg:h-[11%] lg:mt-[2%] md:h-[11%] md:w-[100%] md:mt-[2%] sm:w-[100%] sm:h-[11%] sm:mt-[2%] xs:w-[100%] xs:h-[11%] xs:mt-[2%]
  "><HeaderDashbord/></div>
<div className={pagedashbord === 0 ? "lg:w-[90%] lg:h-[80%] lg:bg-[#ffff] lg:m-auto lg:mt-[3%] md:w-[90%] md:h-[80%] md:bg-[#ffff] md:m-auto md:mt-[3%] sm:w-[90%] sm:h-[80%] sm:bg-[#ffff] sm:m-auto sm:mt-[3%] xs:w-[90%]  xs:bg-[#ffff] xs:m-auto xs:mt-[3%]" : "hidden"} >
  
<NavLink to='/PanelDashbord/dashbord'></NavLink>

</div>

<div className={pagedashbord === 1 ? "lg:w-[90%] lg:h-[80%] lg:bg-[#ffff] lg:m-auto lg:mt-[3%] md:w-[90%] md:h-[80%] md:bg-[#ffff] md:m-auto md:mt-[3%] sm:w-[90%] sm:h-[80%] sm:bg-[#ffff] sm:m-auto sm:mt-[3%] xs:w-[90%]  xs:bg-[#ffff] xs:m-auto xs:mt-[3%]" : "hidden"} >
  
<NavLink to='/PanelDashbord/editprofile'></NavLink>

</div>
<div className={pagedashbord === 2 ? "lg:w-[90%] lg:h-[80%] lg:bg-[#ffff] lg:m-auto lg:mt-[3%] md:w-[90%] md:h-[80%] md:bg-[#ffff] md:m-auto md:mt-[3%] sm:w-[90%] sm:h-[80%] sm:bg-[#ffff] sm:m-auto sm:mt-[3%] xs:w-[90%]  xs:bg-[#ffff] xs:m-auto xs:mt-[3%]" : "hidden"} >
  
<NavLink to='/PanelDashbord/mycourse'></NavLink>

</div>
<div className={pagedashbord === 3 ? "lg:w-[90%] lg:h-[80%] lg:bg-[#ffff] lg:m-auto lg:mt-[3%] md:w-[90%] md:h-[80%] md:bg-[#ffff] md:m-auto md:mt-[3%] sm:w-[90%] sm:h-[80%] sm:bg-[#ffff] sm:m-auto sm:mt-[3%] xs:w-[90%]  xs:bg-[#ffff] xs:m-auto xs:mt-[3%]" : "hidden"} >
  
<NavLink to='/PanelDashbord/pannelcourse'></NavLink>

</div>


            </div>
 
        </div>
    )
}
export {PanelDashbordc};

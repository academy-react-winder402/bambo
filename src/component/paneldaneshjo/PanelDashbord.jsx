import React from "react";
import { Fragment } from "react";
import {HeaderDashbord} from "../paneldaneshjo/dashbordleft/header"
import { DashbordRight } from "./dashbordright/DashbordRight";
const PanelDashbordc =()=>{
    return(
        <div dir="rtl" className="lg:flex lg:w-[100%] lg:h-[730px] 
        md:flex md:w-[100%] md:h-[730px]
        sm:flex sm:w-[100%] sm:h-[730px]
        ">
      <div dir="rtl" className=" lg:w-[25%] lg:h-[100%]  lg:bg-[#088568]
        md:w-[25%] md:h-[100%]  md:bg-[#088568]
     sm:w-[25%] sm:h-[100%]  sm:bg-[#088568] 
         ">
           <DashbordRight/>
            </div>
            <div className="lg:w-[75%] lg:h-[100%] lg:bg-[#DBDBDB] md:w-[75%] md:h-[100%] md:bg-[#DBDBDB]
            sm:w-[100%] sm:h-[100%] sm:bg-[#DBDBDB]
            ">
  <div className="lg:w-[100%] lg:h-[11%] lg:mt-[2%] md:h-[11%] md:w-[100%] md:mt-[2%] sm:w-[100%] sm:h-[11%] sm:mt-[2%]"><HeaderDashbord/></div>
<div className="lg:w-[90%] lg:h-[80%] lg:bg-[#ffff] lg:m-auto lg:mt-[3%]" ></div>
            </div>

        </div>
    )
}
export {PanelDashbordc};

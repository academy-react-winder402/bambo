import React, { useRef, useState } from "react";
import home from "../../../assets/img/dashbord/Home.png";
import adam from "../../../assets/img/dashbord/adam.png";
import menu from "../../../assets/img/dashbord/menu.png";
import { DashbordRight } from "../dashbordright/DashbordRight";
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
  } from "@material-tailwind/react";
const HeaderDashbord =() =>{
    // const [menuu,setmenu]=useState();
    function MenuCustomAnimation() {
        return (
         <Menu
            animate={{
              mount: { y: -10 },
              unmount: { y: 25 },
            }}
          >
            <MenuHandler>
           <button className="sm:mt-[26px]"><img src={menu} ></img></button>  
            </MenuHandler>
            <MenuList>
              <MenuItem dir="rtl" className="sm:bg-[#088568] sm:w-[18rem] xs:bg-[#088568] xs:w-[18rem]"><DashbordRight/></MenuItem>

            </MenuList>
          </Menu>
        );
      }


return(
  <div  dir="rtl" className="lg:m-auto lg:w-[90%] lg:h-[100%]  lg:bg-[#fff] lg:flex
  md:m-auto md:w-[90%]  md:h-[100%] md:bg-[#fff] md:flex
  sm:m-auto sm:w-[90%]  sm:h-[100%] sm:bg-[#fff] sm:flex
  xs:m-auto xs:w-[90%]  xs:h-[100%] xs:bg-[#fff] xs:flex 
  ">
<div className="lg:w-[80%]  lg:h-[100%] lg:flex lg:text-[#088568] lg:leading-[80px]
md:w-[80%]  md:h-[100%] md:flex md:text-[#088568] md:leading-[80px]
sm:w-[80%]  sm:h-[100%] sm:flex sm:text-[#088568] sm:leading-[75px]
xs:w-[80%]  xs:h-[100%] xs:flex xs:text-[#088568] xs:leading-[75px]

">
     <div className="lg:hidden md:hidden
    sm:w-[25px] sm:h-[25px]  sm:mr-[20px] 
    xs:w-[25px] xs:h-[25px]  xs:mr-[20px] 
    " >{MenuCustomAnimation()}
    </div>
    
    <div className="lg:w-[30px] lg:h-[30px] lg:mt-[23px] lg:mr-[20px]
    md:w-[30px] md:h-[30px] md:mt-[23px] md:mr-[20px]
    sm:w-[25px] sm:h-[25px] sm:mt-[23px] sm:mr-[20px]
    xs:w-[25px] xs:h-[25px] xs:mt-[23px] xs:mr-[20px]
    " ><img src={home} ></img></div>

<div className="lg:w-[100px] lg:h-[100٪] lg:text-center md:w-[100px] md:h-[100٪] md:text-center 
sm:w-[100px] sm:h-[100٪] sm:text-center xs:w-[100px] xs:h-[100٪] xs:text-center
">دوره ها</div>
<div className="lg:w-[100px] lg:h-[100٪] lg:text-center md:w-[100px] md:h-[100٪] md:text-center
sm:w-[100px] sm:h-[100٪] sm:text-center  xs:w-[100px] xs:h-[100٪] xs:text-center
">مقالات</div>
<div className="lg:w-[100px] lg:h-[100٪] lg:text-center md:w-[100px] md:h-[100٪] md:text-center
sm:w-[100px] sm:h-[100٪] sm:text-center  xs:w-[100px] xs:h-[100٪] xs:text-center
">خدمات</div>
</div>
<div className="lg:w-[20%]  lg:h-[100%] lg:flex lg:text-[#088568] md:w-[20%]  md:h-[100%] md:flex md:text-[#088568]
 sm:w-[20%]  sm:h-[100%] sm:flex sm:text-[#088568]  xs:w-[20%]  xs:h-[100%] xs:flex xs:text-[#088568] 
">
    <div></div>
<div className="lg:w-[30px] lg:h-[30px] lg:mt-[23px] lg:mr-[20px] md:w-[30px] md:h-[30px] md:mt-[23px] md:mr-[20px]
sm:w-[25px] sm:h-[25px] sm:mt-[23px] sm:mr-[20px] xs:w-[25px] xs:h-[25px] xs:mt-[23px] xs:mr-[20px] 
"><img src={adam}></img></div>
</div >
</div>
)
}
export{HeaderDashbord}
import React from "react";
import {logo} from "../../../assets/img/landing/logo.png"
const DashbordRight =()=>{
    return(
        <div className=" lg:w-[25%] lg:h-[100%]  lg:bg-[#088568]">
<div className="lg:w-[80%] lg:h-[15%] lg:border-b-solid lg:border-b-[#DBDBDB] lg:border-b-[1px] m-auto lg:text-[#ffff] lg:text-center
lg:text-[23px] lg:leading-[120px] lg:flex
">
آکادمی آموزشی بامبو
<img src={logo} className="w-[30px] h-[30px]"></img>
</div>
<div className="lg:w-[80%] lg:h-[10%] lg:border-solid lg:border-black lg:border-[1px] lg:m-auto  lg:mt-[20px]  lg:text-[#ffff] lg:text-center
lg:text-[20px] lg:leading-[60px] lg:hover:w-[100%] lg:hover:bg-[#ffff] lg:hover:text-[#088568]
">
پنل دانشجو
</div>
<div className="lg:w-[80%] lg:h-[10%] lg:border-solid lg:border-black lg:border-[1px] m-auto  lg:mt-[20px]  lg:text-[#ffff] lg:text-center
lg:text-[20px] lg:leading-[60px]  lg:hover:w-[100%] lg:hover:bg-[#ffff] lg:hover:text-[#088568]">
داشبورد
</div>
<div className="lg:w-[80%] lg:h-[10%] lg:border-solid lg:border-black lg:border-[1px] m-auto  lg:mt-[20px]  lg:text-[#ffff] lg:text-center
lg:text-[20px] lg:leading-[60px]  lg:hover:w-[100%] lg:hover:bg-[#ffff] lg:hover:text-[#088568]">
ویرایش پروفایل
</div>
<div className="lg:w-[80%] lg:h-[10%] lg:border-solid lg:border-black lg:border-[1px] m-auto  lg:mt-[20px]  lg:text-[#ffff] lg:text-center
lg:text-[20px] lg:leading-[60px]  lg:hover:w-[100%] lg:hover:bg-[#ffff] lg:hover:text-[#088568]">
دوره های من
</div>
<div className="lg:w-[80%] lg:h-[10%] lg:border-solid lg:border-black lg:border-[1px] m-auto  lg:mt-[20px]  lg:text-[#ffff] lg:text-center
lg:text-[20px] lg:leading-[60px]  lg:hover:w-[100%] lg:hover:bg-[#ffff] lg:hover:text-[#088568] ">
لیست دوره ها
</div>
<div className="lg:w-[80%] lg:h-[10%] lg:border-solid lg:border-black lg:border-[1px] m-auto  lg:mt-[20px]  lg:text-[#ffff] lg:text-center
lg:text-[20px] lg:leading-[60px]  lg:hover:w-[100%] lg:hover:bg-[#ffff] lg:hover:text-[#088568]">
خروج
</div>
        </div>
    )
}
export {DashbordRight};
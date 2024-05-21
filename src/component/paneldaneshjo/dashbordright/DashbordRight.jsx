import React from "react";
import {logo} from "../../../assets/img/landing/logo.png"
import {dashbord} from "../../../assets/img/dashbord/dashbord.png"
import {book} from "../../../assets/img/dashbord/book.png"
import {list} from "../../../assets/img/dashbord/list.png"
import {close} from "../../../assets/img/dashbord/close.png"
import {edit} from "../../../assets/img/dashbord/edit.png"
const DashbordRight =()=>{
    return(
        <div className=" lg:w-[25%] lg:h-[100%]  lg:bg-[#088568]">
<div className="lg:w-[80%] lg:h-[15%] lg:border-b-solid lg:border-b-[#DBDBDB] lg:border-b-[1px] m-auto lg:text-[#ffff] lg:text-center
lg:text-[23px] lg:leading-[120px] lg:flex
">
آکادمی آموزشی بامبو
<img src={logo} className="lg:w-[30px] lg:h-[30px]"></img>
</div>
<div className="lg:w-[80%] lg:h-[10%] lg:border-solid lg:border-black lg:border-[1px] lg:m-auto  lg:mt-[20px]  lg:text-[#ffff] lg:text-center
lg:text-[20px] lg:leading-[60px] lg:hover:w-[100%] lg:hover:bg-[#ffff] lg:hover:text-[#088568] 
">
پنل دانشجو

</div>
<div className="lg:w-[80%] lg:h-[10%] lg:border-solid lg:border-black lg:border-[1px] m-auto  lg:mt-[20px]  lg:text-[#ffff] lg:text-center
lg:text-[20px] lg:leading-[60px]  lg:hover:w-[100%] lg:hover:bg-[#ffff] lg:hover:text-[#088568] lg:flex">
داشبورد
<img src={dashbord} className="lg:w-[30px] lg:h-[30px]"></img>
</div>
<div className="lg:w-[80%] lg:h-[10%] lg:border-solid lg:border-black lg:border-[1px] m-auto  lg:mt-[20px]  lg:text-[#ffff] lg:text-center
lg:text-[20px] lg:leading-[60px]  lg:hover:w-[100%] lg:hover:bg-[#ffff] lg:hover:text-[#088568] lg:flex">
ویرایش پروفایل
<img src={edit} className="lg:w-[30px] lg:h-[30px]"></img>
</div>
<div className="lg:w-[80%] lg:h-[10%] lg:border-solid lg:border-black lg:border-[1px] m-auto  lg:mt-[20px]  lg:text-[#ffff] lg:text-center
lg:text-[20px] lg:leading-[60px]  lg:hover:w-[100%] lg:hover:bg-[#ffff] lg:hover:text-[#088568] lg:flex">
دوره های من
<img src={book} className="lg:w-[30px] lg:h-[30px]"></img>
</div>
<div className="lg:w-[80%] lg:h-[10%] lg:border-solid lg:border-black lg:border-[1px] m-auto  lg:mt-[20px]  lg:text-[#ffff] lg:text-center
lg:text-[20px] lg:leading-[60px]  lg:hover:w-[100%] lg:hover:bg-[#ffff] lg:hover:text-[#088568] lg:flex">
لیست دوره ها
<img src={list} className="lg:w-[30px] lg:h-[30px]"></img>
</div>
<div className="lg:w-[80%] lg:h-[10%] lg:border-solid lg:border-black lg:border-[1px] m-auto  lg:mt-[20px]  lg:text-[#ffff] lg:text-center
lg:text-[20px] lg:leading-[60px]  lg:hover:w-[100%] lg:hover:bg-[#ffff] lg:hover:text-[#088568] lg:flex">
خروج
<img src={close} className="lg:w-[30px] lg:h-[30px]"></img>
</div>
        </div>
    )
}
export {DashbordRight};
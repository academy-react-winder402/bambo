import React from "react";
import logo from "../../../assets/img/landing/logo.png"
import dashbord1 from "../../../assets/img/dashbord/dashboard1.png"
 import bok from "../../../assets/img/dashbord/book.png"
import list from "../../../assets/img/dashbord/list.png"
import close from "../../../assets/img/dashbord/close.png"
import edit from "../../../assets/img/dashbord/edit.png"
import { MdModeEdit } from "react-icons/md";
const DashbordRight =()=>{
    return(
        <>
<div className="lg:w-[80%] lg:h-[15%] lg:border-b-solid lg:border-b-[#DBDBDB] lg:border-b-[1px] lg:m-auto lg:text-[#ffff] lg:text-center
lg:text-[23px] lg:leading-[120px] lg:flex lg:gap-[20px] lg:justify-center
md:w-[100%] md:h-[15%] md:border-b-solid md:border-b-[#DBDBDB] md:border-b-[1px] md:m-auto md:text-[#ffff] md:text-center
md:text-[18px] md:leading-[120px] md:flex md:gap-[10px] md:justify-center
sm:w-[100%] sm:h-[15%] sm:border-b-solid sm:border-b-[#DBDBDB] sm:border-b-[1px] sm:m-auto sm:text-[#ffff] sm:text-center
sm:text-[16px] sm:leading-[120px] sm:flex sm:gap-[7px] sm:justify-start
">
   <img src={logo} className="hover:lg:w-[25px] lg:h-[25px] lg:mt-[45px] md:w-[25px] md:h-[25px] md:mt-[45px] sm:w-[23px] sm:h-[23px] sm:mt-[45px] sm:mr-[5px]"></img>
<div>آکادمی آموزشی بامبو</div>

</div>
<div className="lg:w-[80%] lg:h-[10%] lg:border-solid lg:border-[transparent]  lg:border-[1px] lg:m-auto  lg:mt-[20px]  lg:text-[#ffff] lg:text-center
lg:text-[20px] lg:leading-[60px] lg:hover:w-[100%] lg:hover:bg-[#ffff] lg:hover:text-[#088568] 
md:w-[80%] md:h-[10%] md:border-solid md:border-[transparent] md:border-[1px] md:m-auto  md:mt-[20px]  md:text-[#ffff] md:text-center
md:text-[18px] md:leading-[60px] md:hover:w-[100%] md:hover:bg-[#ffff] md:hover:text-[#088568]
sm:w-[80%] sm:h-[10%] sm:border-solid sm:border-[transparent] sm:border-[1px] sm:m-auto  sm:mt-[20px]  sm:text-[#ffff] sm:text-center
sm:text-[16px] sm:leading-[60px] sm:hover:w-[100%] sm:hover:bg-[#ffff] sm:hover:text-[#088568]
">
پنل دانشجو

</div>
<div className="lg:w-[80%] lg:h-[10%] lg:border-solid lg:border-[transparent]  lg:border-[1px] m-auto  lg:mt-[20px]  lg:text-[#ffff] lg:text-center
lg:text-[20px] lg:leading-[60px]  lg:hover:w-[100%] lg:hover:bg-[#ffff] lg:hover:text-[#088568] lg:flex lg:gap-[20px] lg:justify-start
md:w-[80%] md:h-[10%] md:border-solid md:border-[transparent]  md:border-[1px] md:m-auto  md:mt-[20px]  md:text-[#ffff] md:text-center
md:text-[18px] md:leading-[60px] md:hover:w-[100%] md:hover:bg-[#ffff] md:hover:text-[#088568] md:flex md:gap-[20px] md:justify-start
sm:w-[80%] sm:h-[10%] sm:border-solid sm:border-[transparent]  sm:border-[1px] sm:m-auto  sm:mt-[20px]  sm:text-[#ffff] sm:text-center
sm:text-[16px] sm:leading-[60px] sm:hover:w-[100%] sm:hover:bg-[#ffff] sm:hover:text-[#088568] sm:flex sm:gap-[20px] sm:justify-start
">
<img src={dashbord1} className="lg:w-[25px] lg:h-[25px] lg:mt-[20px] lg:mr-[35px] md:w-[20px] md:h-[20px] md:mt-[25px]
sm:w-[20px] sm:h-[20px] sm:mt-[25px]
"></img>
داشبورد

</div>
<div className="lg:w-[80%] lg:h-[10%] lg:border-solid lg:border-[transparent]  lg:border-[1px] m-auto  lg:mt-[20px]  lg:text-[#ffff] lg:text-center
lg:text-[20px] lg:leading-[60px]  lg:hover:w-[100%] lg:hover:bg-[#ffff] lg:hover:text-[#088568] lg:flex lg:gap-[20px] lg:justify-start
md:w-[80%] md:h-[10%] md:border-solid md:border-[transparent]  md:border-[1px] md:m-auto  md:mt-[20px]  md:text-[#ffff] md:text-center
md:text-[18px] md:leading-[60px] md:hover:w-[100%] md:hover:bg-[#ffff] md:hover:text-[#088568] md:flex md:gap-[20px] md:justify-start
sm:w-[80%] sm:h-[10%] sm:border-solid sm:border-[transparent]  sm:border-[1px] sm:m-auto  sm:mt-[20px]  sm:text-[#ffff] sm:text-center
sm:text-[16px] sm:leading-[60px] sm:hover:w-[100%] sm:hover:bg-[#ffff] sm:hover:text-[#088568] sm:flex sm:gap-[20px] sm:justify-start
">
    <img src={edit} className="lg:w-[30px] lg:h-[30px] lg:mt-[20px] lg:mr-[35px] md:w-[20px] md:h-[20px] md:mt-[25px]
    sm:w-[20px] sm:h-[20px] sm:mt-[25px]
    "></img>
ویرایش پروفایل

</div>
<div className="lg:w-[80%] lg:h-[10%] lg:border-solid lg:border-[transparent] lg:border-[1px] m-auto  lg:mt-[20px]  lg:text-[#ffff] lg:text-center
lg:text-[20px] lg:leading-[60px]  lg:hover:w-[100%] lg:hover:bg-[#ffff] lg:hover:text-[#088568] lg:flex lg:gap-[20px] lg:justify-start
md:w-[80%] md:h-[10%] md:border-solid md:border-[transparent]  md:border-[1px] md:m-auto  md:mt-[20px]  md:text-[#ffff] md:text-center
md:text-[18px] md:leading-[60px] md:hover:w-[100%] md:hover:bg-[#ffff] md:hover:text-[#088568] md:flex md:gap-[20px] md:justify-start
sm:w-[80%] sm:h-[10%] sm:border-solid sm:border-[transparent]  sm:border-[1px] sm:m-auto  sm:mt-[20px]  sm:text-[#ffff] sm:text-center
sm:text-[16px] sm:leading-[60px] sm:hover:w-[100%] sm:hover:bg-[#ffff] sm:hover:text-[#088568] sm:flex sm:gap-[20px] sm:justify-start
">
    <img src={bok} className="lg:w-[30px] lg:h-[30px] lg:mt-[20px] lg:mr-[35px] md:w-[20px] md:h-[20px] md:mt-[25px]
    sm:w-[20px] sm:h-[20px] sm:mt-[25px]
    "></img>
دوره های من

</div>
<div className="lg:w-[80%] lg:h-[10%] lg:border-solid lg:border-[transparent]  lg:border-[1px] m-auto  lg:mt-[20px]  lg:text-[#ffff] lg:text-center
lg:text-[20px] lg:leading-[60px]  lg:hover:w-[100%] lg:hover:bg-[#ffff] lg:hover:text-[#088568] lg:flex lg:gap-[20px] lg:justify-start
md:w-[80%] md:h-[10%] md:border-solid md:border-[transparent]  md:border-[1px] md:m-auto  md:mt-[20px]  md:text-[#ffff] md:text-center
md:text-[18px] md:leading-[60px] md:hover:w-[100%] md:hover:bg-[#ffff] md:hover:text-[#088568] md:flex md:gap-[20px] md:justify-start
sm:w-[80%] sm:h-[10%] sm:border-solid sm:border-[transparent]  sm:border-[1px] sm:m-auto  sm:mt-[20px]  sm:text-[#ffff] sm:text-center
sm:text-[16px] sm:leading-[60px] sm:hover:w-[100%] sm:hover:bg-[#ffff] sm:hover:text-[#088568] sm:flex sm:gap-[20px] sm:justify-start
">
    <img src={list} className="lg:w-[30px] lg:h-[30px] lg:mt-[20px] lg:mr-[35px] md:w-[20px] md:h-[20px] md:mt-[25px]
    sm:w-[20px] sm:h-[20px] sm:mt-[25px]
    "></img>
لیست دوره ها

</div>
<div className="lg:w-[80%] lg:h-[10%] lg:border-solid lg:border-[transparent]  lg:border-[1px] m-auto  lg:mt-[20px]  lg:text-[#ffff] lg:text-center
lg:text-[20px] lg:leading-[60px]  lg:hover:w-[100%] lg:hover:bg-[#ffff] lg:hover:text-[#088568] lg:flex lg:gap-[20px] lg:justify-start
md:w-[80%] md:h-[10%] md:border-solid md:border-[transparent]  md:border-[1px] md:m-auto  md:mt-[20px]  md:text-[#ffff] md:text-center
md:text-[18px] md:leading-[60px] md:hover:w-[100%] md:hover:bg-[#ffff] md:hover:text-[#088568] md:flex md:gap-[20px] md:justify-start
sm:w-[80%] sm:h-[10%] sm:border-solid sm:border-[transparent]  sm:border-[1px] sm:m-auto  sm:mt-[20px]  sm:text-[#ffff] sm:text-center
sm:text-[16px] sm:leading-[60px] sm:hover:w-[100%] sm:hover:bg-[#ffff] sm:hover:text-[#088568] sm:flex sm:gap-[20px] sm:justify-start
">
    <img src={close} className="lg:w-[30px] lg:h-[30px] lg:mt-[20px] lg:mr-[35px] md:w-[20px] md:h-[20px] md:mt-[25px] sm:w-[20px] sm:h-[20px] sm:mt-[25px]"></img>
خروج

</div>
       </>
    )
}
export {DashbordRight};
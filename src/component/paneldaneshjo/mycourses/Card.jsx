import React from "react";
import payton from "../../../assets/img/courses/paython.png";
import del from "../../../assets/img/dashbord/delete.png"
const Card =({im,folder,title,teacher,date,zar,mony})=>{
    return(
<div className="lg:w-[98%] lg:h-[60px] lg:border-b-[1px] lg:border-b-[#088568] lg:border-b-solid lg:m-auto lg:flex
                    lg:text-[#004458] lg:text-center lg:leading-[50px] lg:hover:bg-[#B6E6DC]
                    ">
                    <div className="lg:w-[16%] lg:h-[100%] "><img src={payton} className="w-[40px] h-[40px] m-auto mt-[10px]"></img></div>
                    <div className="lg:w-[16%] lg:h-[100%] ">{title}</div>
                    <div className="lg:w-[16%] lg:h-[100%]">{teacher}</div>
                    <div className="lg:w-[16%] lg:h-[100%]">{zar}</div>
                    <div className="lg:w-[16%] lg:h-[100%]"> {date}</div>
                    <div className="lg:w-[16%] lg:h-[100%]">{mony}</div>
                    <div className="lg:w-[5%] lg:h-[100%]"><img src={del} className="w-[80%] h-[30px] m-auto mt-[10px]"></img></div>
                    </div>
    )
}
export {Card};
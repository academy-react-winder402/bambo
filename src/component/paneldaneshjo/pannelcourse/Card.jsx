import React from "react";
import payton from "../../../assets/img/courses/paython.png";
import folderr from "../../../assets/img/dashbord/folder.png";
const Card =({im,folder,title,teacher,date,zar,mony})=>{
    return(
<div className="lg:w-[98%] lg:h-[60px] lg:border-b-[1px] lg:border-b-[#088568] lg:border-b-solid lg:m-auto lg:flex
                    lg:text-[#004458] lg:text-center lg:leading-[50px] lg:hover:bg-[#B6E6DC]
                    md:w-[98%] md:h-[60px] md:border-b-[1px] md:border-b-[#088568] md:border-b-solid md:m-auto md:flex
                    md:text-[#004458] md:text-center md:leading-[50px] md:hover:bg-[#B6E6DC]
                    sm:w-[98%] sm:h-[60px] sm:border-b-[1px] sm:border-b-[#088568] sm:border-b-solid sm:m-auto sm:flex
                    sm:text-[#004458] sm:text-center sm:leading-[50px] sm:hover:bg-[#B6E6DC]
                    xs:w-[98%] xs:h-[60px] xs:border-b-[1px] xs:border-b-[#088568] xs:border-b-solid xs:m-auto xs:flex
                    xs:text-[#004458] xs:text-center xs:leading-[45px] xs:hover:bg-[#B6E6DC]
                    ">
                    <div className="lg:w-[16%] lg:h-[100%] md:w-[16%] md:h-[100%] sm:w-[16%] sm:h-[100%] xs:w-[16%] xs:h-[100%]"><img src={payton} className="w-[40%] h-[40px] m-auto mt-[10px]"></img></div>
                    <div className="lg:w-[16%] lg:h-[100%] md:w-[16%] md:h-[100%] sm:w-[16%] sm:h-[100%] xs:w-[16%] xs:h-[100%]">{title}</div>
                    <div className="lg:w-[16%] lg:h-[100%] md:w-[16%] md:h-[100%] sm:w-[16%] sm:h-[100%] xs:w-[16%] xs:h-[100%]">{teacher}</div>
                    <div className="lg:w-[16%] lg:h-[100%] md:w-[16%] md:h-[100%] sm:w-[16%] sm:h-[100%] xs:w-[16%] xs:h-[100%]">{zar}</div>
                    <div className="lg:w-[16%] lg:h-[100%] md:w-[16%] md:h-[100%] sm:w-[16%] sm:h-[100%] xs:w-[16%] xs:h-[100%]"> {date}</div>
                    <div className="lg:w-[16%] lg:h-[100%] md:w-[16%] md:h-[100%] sm:w-[16%] sm:h-[100%] xs:w-[16%] xs:h-[100%]">{mony}</div>
                    <div className="lg:w-[5%] lg:h-[100%] md:w-[5%] md:h-[100%] sm:w-[5%] sm:h-[100%] xs:w-[5%] xs:h-[100%]"><img src={folderr} className="w-[100%] h-[40px] m-auto mt-[10px]"></img></div>
                    </div>
    )
}
export {Card};
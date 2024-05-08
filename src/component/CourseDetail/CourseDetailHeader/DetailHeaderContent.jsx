import React from "react";
import logodetail from "../../../assets/img/coursedetail/logodetail.jpg"
import zarfiat from "../../../assets/img/coursedetail/zarfiat.png"
import daneshjo from "../../../assets/img/coursedetail/daneshjo.png"
const DetailHeaderContant = () => {
    return(
 <div className="w-[700px] h-[400px] m-auto flex flex-col">
<div className="w-[220px] h-[180px] ml-[250px]"><img className="w-[100%] h-[100%]" src={logodetail}></img></div>
<div className="h-[80px] w-[480px] text-[50px] ml-[100px] text-center border-b-solid border-b-[1px] border-b-[black]">دوره جاوا اسکریپت</div>
<div className="h-[50px] w-[480px] ml-[130px]  flex flex-row-reverse gap-[30px]">
   <div className="h-[50px] w-[270px] text-right text-[20px] flex flex-row gap-[5px] ">
    ظرفیت 50 نفر
    <img className="w-[30px] h-[30px]" src={zarfiat}></img>
   </div>
   <div className="h-[50px] w-[270px] text-left text-[20px] flex flex-row gap-[5px] ">
    دانشجو 50 نفر
    <img className="w-[30px] h-[30px]" src={daneshjo}></img>
   </div>
</div>
<div className="h-[40px] w-[480px] bg-[#ccc]  ml-[100px]"></div>
 </div>
    );
};

export { DetailHeaderContant};
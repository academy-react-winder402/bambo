import React from "react";
import logodetail from "../../../assets/img/coursedetail/logodetail.jpg"
const DetailHeaderContant = () => {
    return(
 <div className="w-[700px] h-[500px] m-auto flex flex-col">
<div className="w-[220px] h-[250px] ml-[250px]"><img className="w-[100%] h-[100%]" src={logodetail}></img></div>
<div className="h-[80px] w-[480px] text-[50px] ml-[100px] text-center border-b-solid border-b-[1px] border-b-[black]">دوره جاوا اسکریپت</div>
<div className="h-[50px] w-[480px] ml-[100px]  flex flex-row-reverse gap-[30px]">
   <div className="h-[50px] w-[270px] text-right text-[20px]">
    ظرفیت 50 نفر
    <img></img>
   </div>
   <div className="h-[50px] w-[270px] text-left text-[20px]">
    دانشجو 50 نفر
    <img></img>
   </div>
</div>
<div className="h-[40px] w-[480px] bg-[#ccc]  ml-[100px]"></div>
 </div>
    );
};

export { DetailHeaderContant};
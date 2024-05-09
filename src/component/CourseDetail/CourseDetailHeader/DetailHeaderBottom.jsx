import React from "react";
import teacher from "../../../assets/img/coursedetail/teacher.png"
import like from "../../../assets/img/coursedetail/like.png"
import star from "../../../assets/img/articledetail/star.jpg"
import danesh from "../../../assets/img/coursedetail/danesh.png"
const DetailHeaderBottom = () => {
    return(
 <div className="w-[100%] h-[250px] border-solid border-[#DBDBDB] border-[1px] flex flex-row-reverse text-center text-[25px] leading-[30s0px]">
<div className="w-[33.5%] h-[250px] border-solid border-[#DBDBDB] border-[1px] flex flex-col justify-center gap-[10px]">
    <img src={teacher} className="w-[30px] h-[30px] ml-[250px]"></img>
    <div className="w-[140px] h-[130px]  ml-[190px] ">مدرس : دکتر بحرالعلومی</div>
</div>
<div className="w-[33.5%] h-[250px]  border-solid border-[#DBDBDB] border-[1px]  flex flex-col  gap-[10px]">
<div className="w-[30px] h-[30px] ml-[250px] mt-[35px]" ><img src={danesh}></img></div>
<div > تاریخ شروع : 1400/1/1</div>
<div> تاریخ پایان : 1401/1/1</div>
</div>
<div className="w-[33.5%] h-[250px]  border-solid border-[#DBDBDB] border-[1px] ">
    <div className="w-[30px] h-[30px] m-auto mt-[3rem]"><img src={like}></img></div>
    <div >:رتبه</div>
    <div className="w-[120px] h-[30px] flex flex-row m-auto mt-[1rem]">
        <img src={star} className="w-[30px] h-[30px]"></img>
        <img src={star} className="w-[30px] h-[30px]"></img>
        <img src={star} className="w-[30px] h-[30px]"></img>
        <img src={star} className="w-[30px] h-[30px]"></img>

    </div>
</div>
 </div>
    );
};

export { DetailHeaderBottom};
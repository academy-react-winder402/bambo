import React, { useState } from "react";
import { Tozihat } from "./Tozihat"
import { CommentCourses } from "../../comment/CommentCourses";




const ContantTopRight = () => {

const [bottom, setbottom] = useState(1);

const updatebottom = (id) => {
    setbottom(id);
};

return (
<div className=" w-[900px] border-solid  mt-[50px] flex flex-col">
    <div className="flex flex-row justify-end w-[900px]">
    <div className={bottom == 2 ? "bg-[#f9f9f9] w-[140px] h-[70px] text-[30px] text-[#004458] text-center rounded-t-[0.8em] border-[1px] border-solid  border-[#707070] border-b-[transparent] p-[10px] mr-[20px] hover:cursor-pointer" 
    : "w-[140px] h-[70px] text-[30px] text-[#004458] text-center rounded-t-[0.8em] border-[1px] border-solid  border-[#004458] border-b-[transparent] p-[10px] mr-[20px] hover:cursor-pointer" } onClick={()=> {updatebottom(2)}}>نظرات</div>
  <div className={bottom == 1 ? "bg-[#f9f9f9] w-[140px] h-[70px] text-[30px] text-[#004458] text-center rounded-t-[0.8em] border-[1px] border-solid  border-[#707070] border-b-[transparent] p-[10px] mr-[20px] hover:cursor-pointer" 
    : "w-[140px] h-[70px] text-[30px] text-[#004458] text-center rounded-t-[0.8em] border-[1px] border-solid  border-[#004458] border-b-[transparent] p-[10px] mr-[20px] hover:cursor-pointer" } onClick={()=> {updatebottom(1)}}>توضیحات</div>
    </div>

  <div className={bottom === 1 ? "bg-[#f9f9f9]" : "hidden"}>
    <Tozihat />
  </div>

  <div className={bottom === 2 ? "bg-[#f9f9f9]" : "hidden"}>
    <CommentCourses />
  </div>

</div>
);
};

export {ContantTopRight };
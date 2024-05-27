import React, { useState } from "react";
import { Tozihat } from "./Tozihat"
import { CommentCourses } from "../../comment/CommentCourses";




const ContantTopRight = ({coursedetail}) => {

const [bottom, setbottom] = useState(1);

const updatebottom = (id) => {
    setbottom(id);
};

return (

<div className="lg:w-[900px] lg:ml-[50px] mt-[50px] lg:flex lg:flex-col font-sans">

    <div className="lg:flex lg:flex-row lg:justify-end lg:w-[900px]">
    <div className={bottom == 2 ? "lg:bg-[#f9f9f9] lg:w-[100px] lg:h-[50px] lg:text-[20px] lg:text-[#004458] lg:text-center lg:rounded-t-[0.8em] lg:border-[1px] lg:border-solid  lg:border-[#707070] lg:border-b-[transparent] lg:p-[10px] lg:mr-[20px] lg:hover:cursor-pointer" 
    : " lg:w-[100px] lg:h-[50px] lg:text-[20px] lg:text-[#004458] lg:text-center lg:rounded-t-[0.8em] lg:border-[1px] lg:border-solid  lg:border-[#004458] lg:border-b-[transparent] lg:p-[10px] lg:mr-[20px] lg:hover:cursor-pointer" } onClick={()=> {updatebottom(2)}}>نظرات</div>
  <div className={bottom == 1 ? "lg:bg-[#f9f9f9]  lg:w-[100px] lg:h-[50px] lg:text-[20px] lg:text-[#004458] lg:text-center lg:rounded-t-[0.8em] lg:border-[1px] lg:border-solid  lg:border-[#707070] lg:border-b-[transparent] lg:p-[10px] lg:mr-[20px] lg:hover:cursor-pointer" 
    : " lg:w-[100px] lg:h-[50px] lg:text-[20px] lg:text-[#004458] lg:text-center lg:rounded-t-[0.8em] lg:border-[1px] lg:border-solid  lg:border-[#004458] lg:border-b-[transparent] lg:p-[10px] lg:mr-[20px] lg:hover:cursor-pointer" } onClick={()=> {updatebottom(1)}}>توضیحات</div>
    </div>

  <div className={bottom === 1 ? "bg-[#f9f9f9]" : "hidden"}>
    <Tozihat coursedetail={coursedetail}/>
  </div>

  <div className={bottom === 2 ? "bg-[#f9f9f9]" : "hidden"}>
    <CommentCourses />
  </div>

</div>
);
};

export {ContantTopRight };
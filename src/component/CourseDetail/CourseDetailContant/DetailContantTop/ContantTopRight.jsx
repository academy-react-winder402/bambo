import React from "react";
import {CommentCourses  } from "../../comment/CommentCourses"
import { Tozihat } from "./Tozihat"
import { CommentCourses } from "../../comment/CommentCourses";
import { NavLink } from "react-router-dom";
const ContantTopRight = () => {
    const [page, setpage] = useState(1);



  return(
<div className=" w-[900px] border-solid  mt-[50px] flex flex-col">
    <div className="flex flex-row justify-end w-[900px]">
    <div className="w-[140px] h-[70px] text-[30px] text-[#004458] text-center rounded-t-[0.8em] border-[1px] border-solid border-[#707070] border-b-[transparent] p-[10px] mr-[20px]">نظرات</div>
    <div className="w-[140px] h-[70px] text-[30px] text-[#004458] text-center  rounded-t-[0.8em] border-[1px] border-solid border-[#707070] border-b-[transparent] p-[10px]">توضیحات</div>
    </div>
  <div>

  </div>

</div>
    );
};

export {ContantTopRight };
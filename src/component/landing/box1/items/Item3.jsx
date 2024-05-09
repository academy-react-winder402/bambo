import React from "react";
import { NavLink } from "react-router-dom";

const Item3 = () => {
    return (
        <NavLink to="/course" className=" w-32 h-14 absolute top-[28rem] left-[43rem]
        bg-slate-100 text-center leading-[3.2rem] text-sm rounded-md hover:bg-[#004458] 
        cursor-pointer hover:text-white ">
            مشاهده دوره ها
        </NavLink>
    );

};

export { Item3 };
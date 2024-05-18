import React from "react";
import { NavLink } from "react-router-dom";


const Right = () => {
    return (
        <div className="border border-solid border-[#D1D1D1] h-[37rem] w-[37rem] relative">
            <div className=" h-[5rem] w-[25rem] m-auto mt-[9rem] text-4xl text-right">
                دوره های اموزشی
            </div>
            <div className="text-gray-500 h-[10rem] w-[25rem] text-xl  text-right m-auto ">
                دسترسی با کیفیت ترین دوره های اموزشی انلاین با تدریس برترین اساتید ایران
                در دسته بندی های گوناگونی همچون طراحی برنامه نویسی اقتصاد فلسفه فیزیک شیمی ریاضی
            </div>
            <NavLink to="/course" className="border border-solid border-[#D1D1D1] h-[5rem] w-[12rem] absolute top-[34rem]
        left-[10rem] bg-[#004458] text-white leading-[5rem] text-lg text-center">
                مشاهده دوره ها
            </NavLink>
        </div>
    );
};

export { Right };
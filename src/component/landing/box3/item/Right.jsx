import React from "react";
import { NavLink } from "react-router-dom";


const Right = () => {
    return (
        <div className="border-b border-solid border-[#D1D1D1] border-r h-[37rem] w-[37rem] relative dark:border-b-[#969faf] dark:border-r-[#969faf]">
            <div className=" h-[5rem] w-[25rem] m-auto mt-[9rem] text-4xl text-right dark:text-[#969faf]">
                دوره های اموزشی
            </div>
            <div className="text-gray-500 h-[10rem] w-[25rem] text-xl  text-right m-auto dark:text-[#969faf]">
                دسترسی با کیفیت ترین دوره های اموزشی انلاین با تدریس برترین اساتید ایران
                در دسته بندی های گوناگونی همچون طراحی برنامه نویسی اقتصاد فلسفه فیزیک شیمی ریاضی
            </div>
            <NavLink to="/course" className="border border-solid border-[#D1D1D1] h-[5rem] w-[12rem] absolute top-[34rem]
        left-[10rem] bg-[#004458] text-white leading-[5rem] text-lg text-center dark:text-[#969faf] dark:border-[#969faf]">
                مشاهده دوره ها
            </NavLink>
        </div>
    );
};

export { Right };
import React from "react";
import { NavLink } from "react-router-dom";

const Leftt = () => {
    return (

        <div className="border border-solid border-[#D1D1D1] h-[35rem] w-[38rem] relative">
            <div className=" h-[5rem] w-[25rem] m-auto mt-[7rem] text-5xl text-right">
                اخبار و مقالات
            </div>
            <div className="text-gray-500 h-[10rem] w-[30rem] text-2xl  text-right m-auto mt-[1rem] ">
                دسترسی با کیفیت ترین دوره های اموزشی انلاین با تدریس برترین اساتید ایران
                در دسته بندی های گوناگونی همچون طراحی برنامه نویسی اقتصاد فلسفه فیزیک شیمی ریاضی
            </div>
            <NavLink to="/article" className="border border-solid border-[#D1D1D1] h-[5rem] w-[12rem] absolute top-[32rem]
        left-[14rem] bg-[#004458] text-white leading-[5rem] text-lg text-center">
                مشاهده مقالات
            </NavLink>
        </div>
    );
};

export { Leftt };
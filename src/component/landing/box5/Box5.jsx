import React from "react";
import new1 from '../../../assets/img/landing/new1.png';
import left from '../../../assets/img/landing/left.png';
import right from '../../../assets/img/landing/right.png';
import { NavLink } from "react-router-dom";


const Box5 = () => {
    return (
        <div className=" h-[46rem] w-[96rem]  flex justify-between">
            
            <div className=" h-[30rem] w-[35rem] mt-[8rem] ml-20">
                <div className="border border-solid border-[#09B28B] h-[24rem] w-[35rem] relative">
                    <img src={new1} className="h-[24rem] w-[35rem]" />
                    <div className="h-16 w-full txt-2xl absolute top-[20rem] bg-[#004358b8] text-white text-center leading-[3.5rem]"> 
                        مقایسه ریکت با فریمورک های جدید جاوا اسکرییپت
                    </div>
                </div>
                <div className="border-2 border-solid border-[#09B28B] h-[3rem] w-[27rem] m-auto flex justify-between">
                    <div className=" h-5 w-5 ml-5 mt-4">
                    <img src={left} className="h-5 w-5" />
                    </div>
                    <div className=" h-4.5 w-2.5 mr-5 mt-4 ">
                        <img src={right} className="h-4.5 w-2.5" />
                    </div>

                </div>
            </div>



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
        </div>
    );
};

export { Box5 };
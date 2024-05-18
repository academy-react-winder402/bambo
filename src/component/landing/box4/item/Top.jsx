import React from "react";
import box4img2 from '../../../../assets/img/landing/Box4.2.png';

const Top = () => {
    return (
        <div className=" h-[15.3rem] bg-[#004458] flex gap-[19rem] relativ dark:bg-[#1c1e21]">
            <img src={box4img2} className="h-[15.3rem] w-[30rem]" />
            <div className=" h-[15.3rem] w-[30rem] absolute bg-[#00435882] dark:bg-[#262931c4] ">
                <div className=" h-[3.5rem] w-[9rem]
             m-auto mt-28 bg-[#DBDBDB] text-center text-xl text-[#333333c3] leading-[3rem]"> مشاوره </div>
            </div>
            <div className=" h-[15.3rem] w-[25rem]">
                <span className="block text-5xl mt-14 text-right text-white dark:text-[#969faf]"> مشاوره انلاین </span>
                <span className="block text-2xl  text-right text-[#D1D1D1] mt-[2rem] dark:text-[#969faf]"> مشاوران ما برای حل مشکل شما اماده اند </span>
            </div>
        </div>
    );
};

export { Top };
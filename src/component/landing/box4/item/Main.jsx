import React from "react";
import box4img1 from '../../../../assets/img/landing/box4.1.png';

const Main = () => {
    return (

        <div className=" h-[15.3rem] flex gap-[23rem] justify-end bg-gradient-to-r from-[#004458] to-[#09B28B] dark:from-[#1c1e21] dark:to-[#262931]">
            <div className="  h-[15.3rem] w-[25rem]">
                <span className="block text-5xl mt-14 text-right text-white "> ارایه مدرک معتبر </span>
                <span className="block text-2xl  text-right text-[#D1D1D1] mt-[2rem] "> بهترین راه برای ساخت رزومه حرفه ای </span>
            </div>
            <img src={box4img1} className="h-[15.3rem] w-[30rem]" />
        </div>
    );
};

export { Main };
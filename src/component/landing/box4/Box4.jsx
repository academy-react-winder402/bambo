import React from "react";
import box4img3 from '../../../assets/img/landing/box4.3.png';
import box4img2 from '../../../assets/img/landing/Box4.2.png';
import box4img1 from '../../../assets/img/landing/box4.1.png';

const Box4 = () => {
    return (
        <div className=" h-[46rem] w-[96rem] m-auto">


            <div className=" h-[15.3rem] bg-[#004458] flex gap-[19rem] relativ">
                <img src={box4img2} className="h-[15.3rem] w-[30rem]" />
                <div className=" h-[15.3rem] w-[30rem] absolute bg-[#00435882]"> 
                    <div className=" h-[3.5rem] w-[9rem]
                     m-auto mt-28 bg-[#DBDBDB] text-center text-xl text-[#333333c3] leading-[3rem]"> مشاوره </div>
                </div>
                <div className=" h-[15.3rem] w-[25rem]">
                    <span className="block text-5xl mt-14 text-right text-white"> مشاوره انلاین </span>
                    <span className="block text-2xl  text-right text-[#D1D1D1] mt-[2rem]"> مشاوران ما برای حل مشکل شما اماده اند </span>
                </div>
            </div>


            <div className=" h-[15.3rem] flex gap-[23rem] justify-end bg-gradient-to-r from-[#004458] to-[#09B28B]">
                <div className="  h-[15.3rem] w-[25rem]">
                    <span className="block text-5xl mt-14 text-right text-white"> ارایه مدرک معتبر </span>
                    <span className="block text-2xl  text-right text-[#D1D1D1] mt-[2rem]"> بهترین راه برای ساخت رزومه حرفه ای </span>
                </div>
                <img src={box4img1} className="h-[15.3rem] w-[30rem]" />
            </div>


            <div className=" h-[15.3rem] bg-[#004458] flex gap-[19rem]">
                <img src={box4img3} className=" h-[15.3rem] w-[30rem]" />
                <div className="  h-[15.3rem] w-[25rem]">
                    <span className="block text-5xl mt-14 text-right text-white"> همکاری در اموزش </span>
                    <span className="block text-2xl  text-right text-[#D1D1D1] mt-[2rem]"> به اساتید اموزشی ما در بامبو بپیوندبد  </span>
                </div>
            </div>
        </div>
    );
};

export { Box4 };
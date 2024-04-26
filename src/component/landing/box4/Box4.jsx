import React from "react";
import box4img3 from '../../../assets/img/box4.3.png';
import box4img2 from '../../../assets/img/Box4.2.png';
import box4img1 from '../../../assets/img/box4.1.png';

const Box4 = () => {
    return (
        <div className=" h-[39rem] w-[70rem] m-auto">


            <div className=" h-[13rem] bg-[#004458] flex gap-36 relativ">
                <img src={box4img2} className="h-[13rem] w-[27rem]" />
                <div className=" h-[13rem] w-[27rem] absolute bg-[#00435882]"> 
                    <div className=" h-[3.5rem] w-[9rem]
                     m-auto mt-16 bg-[#DBDBDB] text-center text-xl text-[#333333c3] leading-[3rem]"> مشاوره </div>
                </div>
                <div className="  h-[13rem] w-[25rem]">
                    <span className="block text-3xl mt-14 text-right text-white"> مشاوره انلاین </span>
                    <span className="block text-xl mt-3 text-right text-[#D1D1D1]"> مشاوران ما برای حل مشکل شما اماده اند </span>
                </div>
            </div>


            <div className=" h-[13rem] flex gap-[18rem] justify-end bg-gradient-to-r from-[#004458] to-[#09B28B]">
                <div className="  h-[13rem] w-[25rem]">
                    <span className="block text-3xl mt-14 text-right text-white"> ارایه مدرک معتبر </span>
                    <span className="block text-xl mt-3 text-right text-[#D1D1D1]"> بهترین راه برای ساخت رزومه حرفه ای </span>
                </div>
                <img src={box4img1} className="h-[13rem] w-[27rem]" />
            </div>


            <div className=" h-[13rem] bg-[#004458] flex gap-36">
                <img src={box4img3} className="h-[13rem] w-[27rem]" />
                <div className="  h-[13rem] w-[25rem]">
                    <span className="block text-3xl mt-14 text-right text-white"> همکاری در اموزش </span>
                    <span className="block text-xl mt-3 text-right text-[#D1D1D1]"> به اساتید اموزشی ما در بامبو بپیوندبد  </span>
                </div>
            </div>
        </div>
    );
};

export { Box4 };
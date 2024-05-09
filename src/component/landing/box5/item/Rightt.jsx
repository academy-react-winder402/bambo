import React from "react";
import new1 from '../../../../assets/img/landing/new1.png';
import left from '../../../../assets/img/landing/left.png';
import right from '../../../../assets/img/landing/right.png';

const Rightt = () => {
    return (
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
    );
};

export { Rightt };
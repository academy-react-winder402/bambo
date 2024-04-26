import React from "react";
import new1 from '../../../assets/img/new1.png';
import left from '../../../assets/img/left.png';
import right from '../../../assets/img/right.png';


const Box5 = () => {
    return (
        <div className=" h-[40rem] w-[70rem] m-auto bg-white flex justify-between">
            <div className=" h-[23rem] w-[26rem] mt-[10rem] ml-16">
                <div className="border border-solid border-[#09B28B] h-[17rem] w-[26rem]">
                    <img src={new1} className="h-[17rem] w-[26rem]" />
                </div>
                <div className="border border-solid border-[#09B28B] h-[3.5rem] w-[20rem] m-auto flex justify-between">
                    <div className="border border-solid border-[#09B28B] h-10 w-10 ml-5 mt-1.5">
                    <img src={left} className="h-10 w-10" />
                    </div>
                    <div className="border border-solid border-[#09B28B] h-10 w-10 mr-5 mt-1.5 ">
                        <img src={left} className="h-10 w-10" />
                    </div>

                </div>
            </div>



            <div className="border border-solid border-[#D1D1D1] h-[27rem] w-[31rem] relative">
                <div className=" h-[5rem] w-[25rem] m-auto mt-[7rem] text-4xl text-right">
                    اخبار و مقالات
                </div>
                <div className="text-gray-500 h-[10rem] w-[25rem] text-xl  text-right m-auto ">
                    دسترسی با کیفیت ترین دوره های اموزشی انلاین با تدریس برترین اساتید ایران
                    در دسته بندی های گوناگونی همچون طراحی برنامه نویسی اقتصاد فلسفه فیزیک شیمی ریاضی
                </div>
                <div className="border border-solid border-[#D1D1D1] h-[5rem] w-[12rem] absolute top-[24.5rem]
                left-[10rem] bg-[#004458] text-white leading-[5rem] text-lg text-center">
                    مشاهده مقالات
                </div>
            </div>
        </div>
    );
};

export { Box5 };
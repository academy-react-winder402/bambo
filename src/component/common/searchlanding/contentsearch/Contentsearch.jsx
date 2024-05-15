import React from "react";
import js from '../../../../assets/img/courses/js.png';

const Contentsearch = () => {
    return (
        <div className=" border-2 border-solid border-transparent w-[85%] h-[25rem]  m-auto bg-[#F1F1F1] ">
            <div className="border-b border-solid border-[#088568] h-[2rem] m-auto w-[95%] flex justify-between mt-[2rem]">
                <span className="block text-[#0CDBAB]"> مشاهده همه </span>
                <h1 className="mr-[0.5rem]"> دوره ها </h1>
            </div>
            <div className="border border-solid border-[#088568] mt-[1rem] h-[5rem] w-[95%] m-auto">
                <div className="border border-solid border-[#088568] h-[3rem] mt-[1rem] flex justify-end">
                    <span className="block"> 2000 </span>
                    <span className="block"> دکتر بحر </span>
                    <span className="block"> دوره جاوا اسکریپت </span>


                    <img src={js} className="h-[3rem] w-[3rem]" />
                </div>

            </div>
        </div>
    );
};

export { Contentsearch };
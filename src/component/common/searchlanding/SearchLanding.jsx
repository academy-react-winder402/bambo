import React, { useState } from "react";
import searchicon from '../../../assets/img/landing/searchicon.png';
import close from '../../../assets/img/landing/close.png';
import js from '../../../assets/img/courses/js.png';

const SearchLanding = ({ isVisible, onclose }) => {
    if (!isVisible) return null;

    return (
        <div className="h-[46rem] w-[96rem]  fixed inset-0 bg-opacity-25 backdrop-blur-sm z-10  " >

            <div className="h-[35rem] w-[55rem]  m-auto mt-[6rem] rounded-md bg-[#088568]">
                <div className=" h-[4rem] flex justify-between">
                    <div className=" h-[2rem] w-[2rem] mt-[1rem] ml-[1rem]" >
                        <img src={close} className="h-[2rem] w-[2rem] hover:cursor-pointer" onClick={() => { onclose() }} />
                    </div>
                    <div className="text-2xl mt-[1rem] mr-[1rem] text-[#0CDBAB] "> جستجو در سایت </div>
                </div>

                <div className="flex justify-between">

                    <div className=" w-[25rem] ml-[1rem] h-[3rem] rounded-md flex justify-between">
                        <input type="text" className=" bg-[#00775B] w-[22rem]  h-[3rem] rounded-l-md outline-none text-right
                         pr-[0.5rem] placeholder:text-[#0CDBAB]" placeholder="سرچ دوره ها" />
                        <div className=" w-[3rem]  h-[3rem] rounded-r-md bg-[#00775B]">
                            <img src={searchicon} className="h-[2rem] w-[2rem] m-auto mt-[0.5rem] " />
                        </div>
                    </div>

                    <div className=" w-[25rem] mr-[1rem] h-[3rem] rounded-md flex justify-between">
                        <input type="text" className=" bg-[#00775B] w-[22rem]  h-[3rem] rounded-l-md outline-none text-right
                         pr-[0.5rem] placeholder:text-[#0CDBAB]" placeholder="سرچ اخبار و مقالات" />
                        <div className=" w-[3rem]  h-[3rem] rounded-r-md bg-[#00775B]">
                            <img src={searchicon} className="h-[2rem] w-[2rem] m-auto mt-[0.5rem] " />
                        </div>
                    </div>

                </div>

                <div className=" border border-solid border-[#00775B] bg-[#00775B] w-[50rem] h-[25rem] mt-[1rem] m-auto rounded-md">
                    <div className="border-b border-solid border-[#0CDBAB]  h-[3.5rem] w-[45rem] m-auto mt-[1rem] flex justify-end 
                    hover:bg-[#0CDBAB] hover:cursor-pointer hover:text-[#fff]">

                    <h2 className="mr-[4rem] mt-[0.9rem]"> استاد بهر </h2> 
                    <h1 className="mr-[3rem] mt-[0.9rem]"> دوره جاوا اسکریپت </h1>
                    
                        <div className=" h-[3rem] w-[3rem] rounded-full  mr-[1rem]"> 
                            <img src={js} className="h-[3rem] w-[3rem] rounded-full" />
                        </div>
                        
                    </div>
                </div>


            </div>
        </div>
    );
};

export { SearchLanding };
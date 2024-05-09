import React, { useState } from "react";
import searchicon from '../../../assets/img/landing/searchicon.png';
import close from '../../../assets/img/landing/close.png';

const SearchLanding = () => {

    return (
        <div className="h-[46rem] w-[96rem] bg-[#333333ac] absolute top-[10rem] opacity-0 visited:hidden left-0 z-10 " >

            <div className="h-[35rem] w-[55rem] bg-[#fff] m-auto mt-[6rem] rounded-md">
                <div className=" h-[4rem] flex justify-between">
                    <div className=" h-[2rem] w-[2rem] mt-[1rem] ml-[1rem]" >  
                        <img src={close} className="h-[2rem] w-[2rem]"/>
                    </div>
                    <div className="text-2xl mt-[1rem] mr-[1rem] "> جستجو در سایت </div>
                </div>

                <div className="flex justify-between">

                    <div className=" w-[25rem] ml-[1rem] h-[3rem] rounded-md flex justify-between">
                        <input type="text" className="border border-solid border-[#004458] w-[22rem]  h-[3rem] rounded-l-md outline-none text-right
                         pr-[0.5rem] " placeholder="سرچ دوره ها"/>
                        <div className="border border-solid border-[#004458] w-[3rem]  h-[3rem] rounded-r-md">
                            <img src={searchicon} className="h-[2rem] w-[2rem] m-auto mt-[0.5rem]" />
                        </div>
                    </div>

                    <div className=" w-[25rem] mr-[1rem] h-[3rem] rounded-md flex justify-between">
                        <input type="text" className="border border-solid border-[#004458] w-[22rem]  h-[3rem] rounded-l-md outline-none text-right
                         pr-[0.5rem]" placeholder="سرچ اخبار و مقالات"/>
                        <div className="border border-solid border-[#004458] w-[3rem]  h-[3rem] rounded-r-md">
                            <img src={searchicon} className="h-[2rem] w-[2rem] m-auto mt-[0.5rem]" />
                        </div>
                    </div>

                </div>

                <div className="border border-solid border-[#004458] w-[50rem] h-[25rem] mt-[1rem] m-auto rounded-md">

                </div>


            </div>
        </div>
    );
};

export { SearchLanding };
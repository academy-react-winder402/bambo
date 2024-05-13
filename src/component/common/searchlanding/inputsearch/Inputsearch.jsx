import React from "react";
import searchicon from '../../../../assets/img/landing/searchicon.png';

const Inputsearch = () => {
    return (
        <div className="flex justify-between">

            <div className=" border-2 border-solid border-[#00775B] w-[85%] m-auto h-[3rem] flex justify-end">
                <input dir="rtl" type="text" className=" w-[45rem]  h-[2.8rem]  outline-none text-right
             pr-[0.5rem] placeholder:text-[#004458]" placeholder=" جستجو ..." />
                <div className=" w-[3rem]  h-[3rem]">
                    <img src={searchicon} className="h-[2rem] w-[2rem] m-auto mt-[0.4rem] " />
                </div>
            </div>
        </div>
    );
};

export { Inputsearch };
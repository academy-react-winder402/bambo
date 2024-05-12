import React from "react";
import searchicon from '../../../../assets/img/landing/searchicon.png';

const Inputsearch = () => {
    return (
        <div className="flex justify-between">

            <div className=" w-[25rem] ml-[1rem] h-[3rem] rounded-md flex justify-between">
                <input type="text" className="border-2 border-solid border-[#00775B]  w-[22rem]  h-[3rem] rounded-l-md outline-none text-right
             pr-[0.5rem] placeholder:text-[#004458]" placeholder="سرچ دوره ها" />
                <div className="border-2 border-solid border-[#00775B] w-[3rem]  h-[3rem] rounded-r-md">
                    <img src={searchicon} className="h-[2rem] w-[2rem] m-auto mt-[0.5rem] " />
                </div>
            </div>

            <div className="  w-[25rem] mr-[1rem] h-[3rem] rounded-md flex justify-between">
                <input type="text" className=" border-2 border-solid border-[#00775B] w-[22rem]  h-[3rem] rounded-l-md outline-none text-right
             pr-[0.5rem] placeholder:text-[#004458]" placeholder="سرچ اخبار و مقالات" />
                <div className="border-2 border-solid border-[#00775B] w-[3rem]  h-[3rem] rounded-r-md ">
                    <img src={searchicon} className="h-[2rem] w-[2rem] m-auto mt-[0.5rem] " />
                </div>
            </div>

        </div>
    );
};

export { Inputsearch };
import React, { useState } from "react";

const Range = () => {

    const [data, setdata] = useState(0);

    return (
        <div>

            <div className=" h-[3rem] w-[16rem] m-auto rounded-md bg-[#004458]">
                <span className="block mr-[1.5rem] text-white text-right leading-10 text-xl"> قیمت </span>
            </div>

            <div className=" h-[5rem] mt-[1rem]">
                <h1 className="text-center "> {data}</h1>
                <div className="flex ml-[2rem]">
                    <span className="inline-block ml-[0.3rem] mt-[0.3rem]"> 0 </span>
                    <input type="range" min="0" max="10000" step="10" value={data} onChange={e => setdata(e.target.value)}
                        className="w-[10rem] ml-[0.5rem] mr-[0.5rem] block appearance-none h-[0.2rem] rounded-md mt-[1rem] bg-[#004458]" />
                    <span className="mt-[0.1rem]"> 10000 </span>
                </div>
            </div>



        </div>
    );
};

export { Range }; 
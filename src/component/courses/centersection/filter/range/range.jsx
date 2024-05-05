import React, { useState } from "react";

const Range = () => {

    const [data, setdata] = useState(0);

    return (
        <div>
            <input type="checkbox" id="prices" name="prices" className=" peer hidden" />

            <label className=" text-right text-lg h-[3rem] w-[15rem] block 
                leading-10  bg-[url(././././assets/img/courses/bottomm.webp)] bg-no-repeat  bg-[length:0.9rem_0.7rem] bg-[center_left_0.7rem] 
                peer-checked:bg-[url(././././assets/img/courses/top.webp)]" for="prices">
                <span className="block mr-[1rem]"> قیمت </span>
            </label>

            <label  className=" h-[5rem] w-[15rem] hidden peer-checked:block">

                <h1 className="text-center "> {data}</h1>
                <div className="flex ">
                    <span className="inline-block ml-[0.3rem] mt-[0.3rem]"> 0 </span>
                    <input type="range" min="0" max="10000" step="10" value={data} onChange={e => setdata(e.target.value)}
                        className="w-[10rem] ml-[0.5rem] mr-[0.5rem] block appearance-none h-[0.2rem] rounded-md mt-[1rem] bg-[#004458]" />
                    <span className="mt-[0.1rem]"> 10000 </span>
                </div>
            </label>
        </div>
    );
};

export { Range }; 
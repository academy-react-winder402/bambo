import React, { useState, useEffect } from "react";


const Range = () => {

    const [maxdata, setmaxdata] = useState(10000000);

    const [mindata, setmindata] = useState(0);



    return (
        <div>

            <div className="relative w-[19rem] bg-[#fff] shadow-[6px,6px,10px,-1px,rgba(0,0,0.15),-6px,-6px,-10px,-1px,rgba(255,255,255,0.8)]
             rounded-xl mb-[1rem]">

                <input type="checkbox" id="inputrange" className="absolute peer opacity-0" />

                <label for="inputrange" className="font-bold tracking-[1px] mx-[235px] h-[50px] flex items-center"> قیمت </label>
                <label for="inputrange" className="h-[1rem] w-[1rem] bg-[url('././././assets/img/courses/plus.png')] bg-no-repeat bg-cover absolute top-[17px] left-[20px]
                 peer-checked:bg-[url('././././assets/img/courses/negativ.png')] duration-300">  </label>

                <div className="max-h-0 overflow-hidden peer-checked:max-h-full" >
                    <div className=" h-[5rem] mt-[1rem]">
                        <h1 className="text-center "> {maxdata}</h1>
                        <div className="flex ml-[2rem]">
                            <span className="inline-block ml-[0.3rem] mt-[0.3rem]"> 0 </span>
                            <input type="range" min="0" max="10000000" step="10" value={maxdata} onChange={e => setmaxdata(e.target.value)}
                                className="w-[10rem] ml-[0.5rem] mr-[0.5rem] block appearance-none h-[0.2rem] rounded-md mt-[1rem] bg-[#004458]" />
                            <span className="mt-[0.1rem]"> 10000 </span>
                        </div>
                    </div>

                    <div className=" h-[5rem] mt-[1rem]">
                        <h1 className="text-center "> {mindata}</h1>
                        <div className="flex ml-[2rem]">
                            <span className="inline-block ml-[0.3rem] mt-[0.3rem]"> 0 </span>
                            <input type="range" min="0" max="10000000" step="10" value={mindata} onChange={e => setmindata(e.target.value)}
                                className="w-[10rem] ml-[0.5rem] mr-[0.5rem] block appearance-none h-[0.2rem] rounded-md mt-[1rem] bg-[#004458]" />
                            <span className="mt-[0.1rem]"> 10000 </span>
                        </div>
                    </div>
                </div>
            </div>






        </div>
    );
};

export { Range }; 
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {  setfilter } from "../../../../../redux/course";


const Asatid = ({ level }) => {

    const dispatch = useDispatch();


    return (
        <div>

            <div className="relative w-[19rem] bg-[#fff] shadow-[6px,6px,10px,-1px,rgba(0,0,0.15),-6px,-6px,-10px,-1px,rgba(255,255,255,0.8)]
             rounded-xl mb-[1rem]">

                <input type="checkbox" id="inputasatid" className="absolute peer opacity-0" />

                <label for="inputasatid" className="font-bold tracking-[1px] mx-[230px] h-[50px] flex items-center"> اساتید </label>
                <label for="inputasatid" className="h-[1rem] w-[1rem] bg-[url('././././assets/img/courses/plus.png')] bg-no-repeat bg-cover absolute top-[17px] left-[20px]
                 peer-checked:bg-[url('././././assets/img/courses/negativ.png')] duration-300">  </label>

                <div className="  max-h-0 overflow-hidden peer-checked:max-h-full" >
                    <div className="  mt-[0.5rem] mb-[1rem]">

                        <div className=" text-right flex justify-end ">
                            <input type="checkbox" id="bahr" name="bahr" className="peer hidden" />
                            <label for="bahr" className="block mr-[0.5rem] hover:text-[#09B28B] hover:cursor-pointer"  onClick={() => {
                                dispatch(
                                    setfilter(3),
                                );
                                
                            }}>  MMdReza Sadaty </label>
                            <label for="bahr" v className="border border-solid border-[black] h-[1rem] w-[1rem] mt-[0.4rem] mr-[1rem] block 
peer-checked:bg-[#09B28B] peer-checked:border-none bg-no-repeat bg-cover rounded-full hover:cursor-pointer">  </label>
                        </div>

                        <div className=" text-right flex justify-end mt-[0.5rem]">
                            <input type="checkbox" id="asghari" name="asghari" className="peer hidden" />
                            <label for="asghari" className="block mr-[0.5rem] hover:text-[#09B28B] hover:cursor-pointer"  > استاد اصغری </label>
                            <label for="asghari" className="border border-solid border-[black] h-[1rem] w-[1rem] mt-[0.4rem] mr-[1rem] block 
peer-checked:bg-[#09B28B] peer-checked:border-none bg-no-repeat bg-cover rounded-full hover:cursor-pointer">  </label>
                        </div>
                    </div>
                </div>
            </div>







        </div>
    );
};

export { Asatid }; 
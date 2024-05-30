import React from "react";
import { NavLink } from "react-router-dom";

const Bottom2 = ({ title, modares, price }) => {
    return (
        <div className=" bg-[#fff] h-[13rem] w-[17rem] float-right pl-[2rem] rounded-l-lg relative">
            <div className=" h-[2.5rem] text-lg text-right mr-[0.5rem] leading-10 "> {title}</div>
            <div className=" h-[1.8rem] text-right mr-[1rem] text-sm "> استاد : {modares} </div>
            <div className=" h-[1.8rem] text-right mr-[1rem] text-sm ">  </div>
            <h1 className="h-[2rem] text-right mr-[1rem] text-sm"> ظرفیت :  نفر </h1>
            
            <button className="  h-[2.4rem] w-[4rem] rounded-md bg-[#004458] text-white absolute top-[5.9rem]" > جزئیات
            </button>

            <div className="border border-solid border-[#004458] mt-[0.5rem]  mr-[0.5rem]"> </div>
            <div className=" h-[2rem] mt-[0.5rem] flex gap-1 ml-[0.5rem] text-[#09B28B]">
                <h2 className=""> تومان </h2>
                <h2 className=""> {price} </h2>
                <NavLink to="/courseDetail" className=" ml-[2rem]  text-sm
     text-center  rounded-md hover:cursor-pointer text-[blue]"> مشاهده دوره </NavLink>
            </div>
        </div>


    );
};

export { Bottom2 };
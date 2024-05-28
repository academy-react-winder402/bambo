import React from "react";
import { NavLink } from "react-router-dom";

const Bottom = ({ title, modares,price, showmodal}) => {
    return (

        <div className=" pb-[1rem] bg-[#fff]  relative">

            <div className=" h-[2.5rem] text-lg text-right mr-[0.5rem] leading-10 "> {title} </div>
            <div className=" h-[1.8rem] text-right mr-[1rem] text-sm ">    {modares} : <span> نام استاد‌ </span> </div>
            <div className=" h-[1.8rem] text-right mr-[1rem] text-sm ">     </div>

            <h1 className="h-[2rem] text-right mr-[1rem] text-sm"> ظرفیت :  نفر </h1>

            <button className=" h-[2rem] w-[4rem] bg-[#004458] text-white text-center rounded-md hover:cursor-pointer absolute
                 top-[5.8rem] left-[1rem]" onClick={() => { 
                    showmodal();
                    
                  }}> جزئیات </button>

            <div className="border border-solid border-[#004458]  ml-[0.5rem] mr-[0.5rem]"> </div>

            <div className=" h-[2rem] mt-[0.5rem] flex gap-1 ml-[0.5rem] text-[#09B28B]">
                <h2 className=""> تومان </h2>
                <h2 className=""> {price} </h2>
            </div>

            <NavLink to="/courseDetail" className=" block h-[3rem] w-[7rem] mt-[0.2rem] m-auto  bg-[#DBDBDB]
             text-center leading-10 rounded-md hover:cursor-pointer"> مشاهده دوره </NavLink>
        </div>

    );
};

export { Bottom };
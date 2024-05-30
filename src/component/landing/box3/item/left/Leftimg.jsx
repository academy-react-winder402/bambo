import React from "react";
import { NavLink } from "react-router-dom";

const Leftimg = ({ im, title, teacher, typename,price }) => {

    return (

            <div className=" w-[20rem]  mb-[3rem] mr-[3rem] hover:shadow-2xl hover:scale-110 transition duration-300 ">
                <div className="h-[15rem] rounded-t-lg" >

                    <img src={im} className="h-[15rem] w-[20rem] rounded-t-lg " />
                </div>

                <div className=" pb-[1rem] bg-[#fff]  relative">

                    <div className=" h-[2.5rem] text-lg text-right mr-[0.5rem] leading-10 "> {title} </div>
                    <div className=" h-[1.8rem] text-right mr-[1rem] text-sm ">    {teacher} : <span> نام استاد‌ </span> </div>
                    <div className=" h-[1.8rem] text-right mr-[1rem] text-sm ">   {typename}  </div>

                    <h1 className="h-[2rem] text-right mr-[1rem] text-sm"> ظرفیت :  نفر </h1>


                    <div className="border border-solid border-[#004458]  ml-[0.5rem] mr-[0.5rem]"> </div>

                    <div className=" h-[2rem] mt-[0.5rem] flex gap-1 ml-[0.5rem] text-[#09B28B]">
                        <h2 className=""> تومان </h2>
                        <h2 className=""> {price} </h2>
                    </div>

                    <NavLink to="/courseDetail" className=" block h-[3rem] w-[7rem] mt-[0.2rem] m-auto  bg-[#DBDBDB]
 text-center leading-10 rounded-md hover:cursor-pointer"> مشاهده دوره </NavLink>
                </div>

            </div>

    );
};

export { Leftimg };
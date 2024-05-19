import React from "react";

const Leftimg = ({ im, title, teacher, typename }) => {

    return (
        <div className=" h-[30rem] w-[100%] m-auto  relative group duration-[2000ms]">

            <img src={im} className="h-[30rem] w-[20rem] rounded-md " />
            <div className="h-[100%] w-[100%] bg-[#000000a0] absolute top-0 left-[0] text-white group-hover:left-0 opacity-0 
        group-hover:opacity-[1] rounded-md duration-[1500ms]">
                <div className="text-center text-3xl mt-[5rem]"> {title}  </div>
                <div className=" text-xl mt-[5rem] text-right mr-[2rem]"> {teacher} <span> : </span> <span> نام استاد </span> </div>
                <div className=" text-xl mt-[3rem] text-right mr-[2rem]">  <span> نوغ دوره </span> <span> : </span> {typename}   </div>

            </div>
        </div>


    );
};

export { Leftimg };
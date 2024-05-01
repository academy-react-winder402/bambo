import React from "react";

const Bottom = ({title,modares,zarfiat,price}) => {
    return (
        <div className=" h-[11rem] bg-[#fbfbfb]">
            <div className=" h-[3rem] text-lg text-right mr-[0.5rem] leading-10 mt-[2rem]"> {title} </div>
            <div className=" h-[2rem] text-right mr-[0.5rem] text-sm "> {modares} </div>
            <div className=" flex justify-between ml-[0.5rem] mr-[0.5rem]">
                <div className=" h-[2rem] w-[4rem] bg-[#004458] text-white text-center"> جزئیات </div>
                <h1 className="h-[2rem] text-right text-sm"> ظرفیت : {zarfiat} نفر </h1>
            </div>
            <div className="border border-solid border-[#004458] mt-[0.5rem] ml-[0.5rem] mr-[0.5rem]"> </div>
            <div className=" h-[2rem] mt-[0.5rem] flex gap-1 ml-[0.5rem] text-[#09B28B]">
                <h2 className=""> تومان </h2>
                <h2 className=""> {price} </h2>
            </div>
        </div>
    );
};

export { Bottom };
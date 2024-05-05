import React from "react";


const Bottom = ({title,modares,zarfiat,price}) => {
    return (
        <div  className=" pb-[1rem] bg-[#fff] rounded-b-lg group">
            <div className=" h-[3rem] text-lg text-right mr-[0.5rem] leading-10 "> {title} </div>
            <div className=" h-[2rem] text-right mr-[0.5rem] text-sm "> {modares} </div>
            <div className=" flex justify-between ml-[0.5rem] mr-[0.5rem]">
                <div className=" h-[2rem] w-[4rem] bg-[#004458] text-white text-center rounded-md hover:cursor-pointer"> جزئیات </div>
                <h1 className="h-[2rem] text-right text-sm"> ظرفیت : {zarfiat} نفر </h1>
            </div>
            <div className="border border-solid border-[#004458] mt-[0.5rem] ml-[0.5rem] mr-[0.5rem]"> </div>
            <div className=" h-[2rem] mt-[0.5rem] flex gap-1 ml-[0.5rem] text-[#09B28B]">
                <h2 className=""> تومان </h2>
                <h2 className=""> {price} </h2>
                <div className=" h-[1.5rem] w-[1.5rem] ml-[6rem] bg-[url('./././././assets/img/courses/like.png')]
                 bg-no-repeat bg-cover hover:cursor-pointer"> </div>
            </div>

            <div className=" h-[3rem] w-[7rem] mt-[1rem] m-auto hidden group-hover:block  bg-[#DBDBDB]
             text-center leading-10 rounded-md hover:cursor-pointer"> مشاهده دوره </div>
        </div>
    );
};

export { Bottom };
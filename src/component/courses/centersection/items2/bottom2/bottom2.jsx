import React from "react";

const Bottom2 = ({title,modares,zarfiat,price}) => {
    return (
        <div className=" bg-[#fff] h-[14rem] w-[24rem] float-right pl-[2rem] rounded-l-lg">
            <div className=" h-[3rem] text-lg text-right mr-[0.5rem] leading-10 "> {title}</div>
            <div className=" h-[2rem] text-right mr-[0.5rem] text-sm "> استاد : {modares} </div>
            <div className=" flex justify-between ml-[0.5rem] mr-[0.5rem]">
                <div className=" h-[2rem] w-[4rem] bg-[#004458] text-white text-center rounded-md hover:cursor-pointer"> جزئیات </div>
                <h1 className="h-[2rem] text-right text-sm"> ظرفیت : {zarfiat} نفر </h1>
            </div>

            <div className=" h-[1.5rem]  mt-[0.5rem] flex justify-end ">
                <div className=" h-[1.5rem] w-[4rem] mt-[0.3rem] flex justify-between">
                    <span className=" h-[1.5rem] w-[2.3rem] block text-right leading-4 text-sm" > ۵۶ </span>
                    <div className=" h-[1.4rem] w-[1.4rem]
                     bg-[url(./././././assets/img/courses/dislike.png)] bg-no-repeat bg-cover hover:cursor-pointer">  </div>

                </div>
                <div className=" h-[1.5rem] w-[3.5rem] flex justify-between mr-[0.5rem]">
                    <span className=" h-[1.5rem] w-[1.8rem] block text-right leading-6 text-sm " > ۱۲۰ </span>
                    <div className=" h-[1.5rem] w-[1.5rem]
                     bg-[url(./././././assets/img/courses/likee.png)] bg-no-repeat bg-cover hover:cursor-pointer">  </div>
                </div>
            </div>

            <div className="border border-solid border-[#004458] mt-[0.5rem] ml-[0.5rem] mr-[0.5rem]"> </div>
            <div className=" h-[2rem] mt-[0.5rem] flex gap-1 ml-[0.5rem] text-[#09B28B]">
                <h2 className=""> تومان </h2>
                <h2 className=""> {price} </h2>
                <div className=" h-[3rem] w-[7rem]  ml-[7rem] bg-[#DBDBDB]
     text-center leading-10 rounded-md hover:cursor-pointer text-black"> مشاهده دوره </div>
        </div>
            </div>


    );
};

export { Bottom2 };
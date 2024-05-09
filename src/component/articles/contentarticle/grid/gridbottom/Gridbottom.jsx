import React from "react";

const Gridbottom = ({ title }) => {
    return (
        <div className=" bg-[#fff] h-[11rem] w-[22rem] float-right pl-[2rem] rounded-l-lg relative">
            <div className=" h-[3rem] text-right mr-[0.5rem] text-2xl mt-[1rem] "> {title}</div>

            <div className=" h-[1.5rem]  mt-[2rem] flex justify-end ">
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

            <div className=" h-[2.5rem] w-[6rem] mt-[0.7rem] float-right mr-[0.5rem] bg-[#DCF8F1] 
            text-[#088568] text-center leading-9 rounded-md hover:cursor-pointer"> مقالات # </div>

            <div className=" h-[2.5rem] w-[5rem] mt-[1rem] m-auto  bg-[#DBDBDB]
             text-center leading-9 rounded-md hover:cursor-pointer absolute top-[7.2rem] left-[1rem]"> مشاهده </div>
        </div>
    );
};

export { Gridbottom }
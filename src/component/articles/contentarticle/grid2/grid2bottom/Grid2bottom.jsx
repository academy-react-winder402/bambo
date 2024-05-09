import React from "react";


const Grid2bottom = ({ title }) => {
    return (
        <div className=" h-[11rem] w-[16.5rem] bg-[#fff] rounded-b-lg pt-[0.5rem] relative">
            

            <div className=" h-[4rem] w-[15.5rem] text-xl text-right m-auto"> {title} </div>
            <div className=" h-[1.5rem]  mt-[0.8rem] flex justify-end "> 
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

            
            <div className=" h-[2.5rem] w-[6rem] mt-[0.9rem] float-right mr-[0.5rem] bg-[#DCF8F1] 
            text-[#088568] text-center leading-9 rounded-md hover:cursor-pointer "> اخبار # </div>

            
            <div className=" h-[2.5rem] w-[5rem] mt-[1rem] m-auto  bg-[#DBDBDB]
             text-center leading-9 rounded-md hover:cursor-pointer absolute top-[6.7rem] left-[1rem]"> مشاهده </div>
        </div>
    );
};

export { Grid2bottom };
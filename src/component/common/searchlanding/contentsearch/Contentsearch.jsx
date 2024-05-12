import React from "react";
import js from '../../../../assets/img/courses/js.png';

const Contentsearch = () => {
    return (
        <div className=" border-2 border-solid border-[#00775B] w-[50rem] h-[25rem] mt-[1rem] m-auto rounded-md">
        <div className="border-b border-solid border-[#004458]  h-[3.5rem] w-[45rem] m-auto mt-[1rem] flex justify-end 
        hover:bg-[#004458] hover:cursor-pointer hover:text-[#fff]">

        <h2 className="mr-[4rem] mt-[0.9rem]"> استاد بهر </h2> 
        <h1 className="mr-[3rem] mt-[0.9rem]"> دوره جاوا اسکریپت </h1>
        
            <div className=" h-[3rem] w-[3rem] rounded-full  mr-[1rem]"> 
                <img src={js} className="h-[3rem] w-[3rem] rounded-full mt-[0.2rem]" />
            </div>
            
        </div>
    </div>
    );
};

export { Contentsearch };
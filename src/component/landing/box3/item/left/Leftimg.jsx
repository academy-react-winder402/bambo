import React from "react";

const Leftimg = ({im,title,teacher,typename}) => {
    
    return (
        <div className=" h-[20rem] w-[16rem] m-auto  relative group duration-[2000ms]">
        
        <img src={im} className="h-[20rem] w-[16rem] rounded-md " />
        <div className="h-[20rem] w-[16rem] bg-[#000000a0] absolute top-0 left-[0] text-white group-hover:left-0 opacity-0 
        group-hover:opacity-[1] rounded-md duration-[1500ms]"> 
            <div className="text-center text-lg mt-[3rem]"> {title} </div>
            <div className="text-center text-lg mt-[2rem]"> {teacher} </div> 
            <div className="text-center text-lg mt-[2rem]"> {typename} </div> 
        </div>

        
        </div> 


    );
};

export { Leftimg };
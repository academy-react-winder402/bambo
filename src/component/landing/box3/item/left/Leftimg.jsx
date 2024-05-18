import React from "react";

const Leftimg = ({im,title,teacher,typename}) => {
    
    return (
        <div className=" h-[16rem] w-[12rem] m-auto  relative group duration-[2000ms]">
        
        <img src={im} className="h-[16rem] w-[12rem] rounded-md " />
        <div className="h-[16rem] w-[12rem] bg-[#000000a0] absolute top-0 left-[0] text-white group-hover:left-0 opacity-0 
        group-hover:opacity-[1] rounded-md duration-[1500ms]"> 
            <div className="text-center text-sm mt-[3rem]"> {title}  </div>
            <div className=" text-sm mt-[2rem] text-right mr-[0.5rem]"> {teacher} <span> : </span> <span> نام استاد </span> </div> 
            <div className=" text-sm mt-[2rem] text-right mr-[0.5rem]">  <span> نوغ دوره </span> <span> : </span> {typename}   </div>

        </div>

        
        
        </div> 


    );
};

export { Leftimg };
import React from "react";

const Leftimg = ({im,title}) => {
    
    return (
        <div className=" h-[20rem] w-56 m-auto  relative group">
        
        <img src={im} className="h-[20rem] w-56 rounded-md " />
        <div className="h-[20rem] w-56 bg-[#00000088] absolute top-10 left-0 text-white group-hover:top-0 opacity-0 group-hover:opacity-[1]"> 
            {title}
        </div>
        </div> 


    );
};

export { Leftimg };
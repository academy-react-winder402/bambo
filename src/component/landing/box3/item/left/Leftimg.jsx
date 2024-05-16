import React from "react";

const Leftimg = ({ im ,img , imag}) => {
    
    return (
        <div className="border border-solid border-[#09B28B] h-[25rem] w-96 m-auto  relative">
            <img src={im} className="h-[18rem] w-56 absolute top-[-1rem] left-[-7rem] " />
            <img src={img} className="h-40 w-[16.5rem] absolute top-[2rem] left-[8.5rem] " />
            <img src={imag} className="h-[14rem] w-[12rem] absolute top-[18rem] left-[-5rem] " />
            <img src={im} className="h-[14rem] w-[14rem] absolute top-[14rem] left-[8.5rem] " />
        </div>

    );
};

export { Leftimg };
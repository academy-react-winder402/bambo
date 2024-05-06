import React from "react";


const Grid2bottom = ({ title }) => {
    return (
        <div className=" h-[10rem] w-[16.5rem] bg-[#fff] rounded-b-lg pt-[0.5rem]">
            <div className=" h-[4rem] w-[15.5rem] text-xl text-right float-right mr-[0.5rem]  "> {title} </div>
            <div className=" h-[2.5rem] w-[6rem] mt-[2rem] float-right mr-[1rem] bg-[#DCF8F1] 
            text-[#088568] text-center leading-9 rounded-md hover:cursor-pointer"> مقالات # </div>
        </div>
    );
};

export { Grid2bottom };
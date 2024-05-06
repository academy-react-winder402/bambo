import React from "react";

const Gridbottom = ({title}) => {
    return (
        <div className=" bg-[#fff] h-[11rem] w-[22rem] float-right pl-[2rem] rounded-l-lg">
            <div className=" h-[3rem] text-right mr-[0.5rem] text-2xl mt-[1rem] "> {title}</div>
            <div className=" h-[2.5rem] w-[6rem] mt-[3.5rem] float-right mr-[1rem] bg-[#DCF8F1] 
            text-[#088568] text-center leading-9 rounded-md hover:cursor-pointer"> مقالات # </div>
        </div>
    );
};

export { Gridbottom }
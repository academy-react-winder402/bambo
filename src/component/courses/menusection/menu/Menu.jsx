import React from "react";

const Menu =({menulist}) => {
    return(
        menulist.map((item,index) => {
            return(
                <span className=" ml-[1rem] inline-block text-xl  
                hover:bg-[#004458] hover:cursor-pointer p-[0.8rem] rounded hover:text-white " key={index}> {item.name} </span>
            );
        })
    );
};

export {Menu};
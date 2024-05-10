import React from "react";
import { Top2 } from "./top2/top2"; 
import { Bottom2 } from "./bottom2/bottom2";

const Item2 = ({im,title,modares,zarfiat,price,set}) => {
    return (
        <div className=" h-[14rem] w-[35rem] m-auto mb-[2rem]  hover:scale-110 transition duration-300">

            <Top2 im={im}/>
            <Bottom2 title={title} modares={modares} zarfiat={zarfiat} price={price} set={set}/>

        </div>

    );
};

export { Item2 };
import React from "react";
import { Top2 } from "./top2/top2"; 
import { Bottom2 } from "./bottom2/bottom2";

const Item2 = ({im,title,modares,level,price,set,id,get}) => {
    return (
        <div className=" h-[13rem] w-[30rem] mb-[3rem] mr-[3rem]  hover:scale-110 transition duration-300">

            <Top2 im={im}/>
            <Bottom2 title={title} modares={modares} level={level} price={price} set={set} id={id} get={get}/>

        </div>

    );
};

export { Item2 };
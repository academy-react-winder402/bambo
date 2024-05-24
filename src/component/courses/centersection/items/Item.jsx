import React from "react";
import { Top } from "./top/Top";
import {Bottom} from "./bottom/Bottom";

const Item = ({im,title,modares,price,set,level,id,get}) => {
    return (
        <div className=" w-[20rem]  mb-[3rem] mr-[3rem] hover:shadow-2xl hover:scale-110 transition duration-300 ">
            <Top img={im}/>
            <Bottom title={title} modares={modares} price={price} set={set} level={level} 
             id={id} get={get}/>
        </div>
    );
};

export { Item };
import React from "react";
import { Top } from "./top/Top";
import {Bottom} from "./bottom/Bottom";

const Item = ({im,title,modares,zarfiat,price,set,level,type,like,dis,id,get}) => {
    return (
        <div className=" w-[20rem]  mb-[3rem] mr-[3rem] hover:shadow-2xl hover:scale-110 transition duration-300 ">
            <Top img={im}/>
            <Bottom title={title} modares={modares} zarfiat={zarfiat} price={price} set={set} level={level} type={type} 
            like={like} dis={dis} id={id} get={get}/>
        </div>
    );
};

export { Item };
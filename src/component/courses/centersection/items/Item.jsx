import React from "react";
import { Top } from "./top/Top";
import {Bottom} from "./bottom/Bottom";

const Item = ({im,title,modares,zarfiat,price,bg}) => {
    return (
        <div className=" w-[15rem]  mb-[3rem] mr-10 ">
            <Top img={im} bg={bg}/>
            <Bottom title={title} modares={modares} zarfiat={zarfiat} price={price}  />
        </div>
    );
};

export { Item };
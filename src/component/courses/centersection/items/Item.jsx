import React from "react";
import { Top } from "./top/Top";
import {Bottom} from "./bottom/Bottom";

const Item = ({im,title,modares,zarfiat,price}) => {
    return (
        <div className=" w-[16.5rem]  mb-[3rem] mr-7 hover:shadow-2xl hover:scale-110 transition duration-300 ">
            <Top img={im}/>
            <Bottom title={title} modares={modares} zarfiat={zarfiat} price={price}  />
        </div>
    );
};

export { Item };
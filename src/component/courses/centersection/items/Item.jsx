import React from "react";
import { Top } from "../top/Top";
import {Bottom} from "../bottom/Bottom";

const Item = ({im,title,modares,zarfiat,price}) => {
    return (
        <div className="  w-[17rem]  mb-[5rem] mr-10">
            <Top img={im}/>
            <Bottom title={title} modares={modares} zarfiat={zarfiat} price={price}/>
        </div>
    );
};

export { Item };
import React from "react";
import { Top } from "./top/Top";
import {Bottom} from "./bottom/Bottom";

const Item = ({im,title,modares,price,showmodal,courseid,modal,id}) => {
    return (
        <div className=" w-[20rem]  mb-[3rem] mr-[3rem] hover:shadow-2xl hover:scale-110 transition duration-300">
            <Top img={im}/>
            <Bottom title={title} modares={modares} price={price}  showmodal={showmodal} courseid={courseid} modal={modal} id={id}
             />
        </div>
    );
};

export { Item };
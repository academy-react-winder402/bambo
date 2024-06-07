import React from "react";
import { Top } from "./Top";
import { Bottom } from "./Bottom"; 
const Left =()=>{
    return(
        <div className="lg:w-[55%] h-[100%] lg:border-[red] lg:border-[1px] lg:border-solid">
<Top/>
<Bottom/>
        </div>
    )
}
export {Left};
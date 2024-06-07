import React from "react";
import { Top } from "./Top";
import { Bottom } from "./Bottom"; 
const Left =()=>{
    return(
        <div className="lg:w-[55%] lg:h-[100%] lg:border-[red] lg:border-[1px] lg:border-solid
        md:w-[55%] md:h-[100%] md:border-[red] md:border-[1px] md:border-solid
        sm:w-[55%] sm:h-[100%] sm:border-[red] sm:border-[1px] sm:border-solid
        xs:w-[100%] xs:border-[red] xs:border-[1px] xs:border-solid
        ">
<Top/>
<Bottom/>
        </div>
    )
}
export {Left};
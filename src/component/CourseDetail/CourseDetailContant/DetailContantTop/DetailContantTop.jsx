import React from "react";
import { ContantTopLeft } from "./ContantTopLeft";
import { ContantTopRight } from "./ContantTopRight";

const DetailContantTop = () => {
    return(
<div className="h-[600px]  flex flex-row justify-around">
   <ContantTopLeft/>
   <ContantTopRight/> 
  
</div>
    );
};

export {DetailContantTop };
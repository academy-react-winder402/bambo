import React from "react";
import { ContantTopLeft } from "./ContantTopLeft";
import { ContantTopRight } from "./ContantTopRight";

const DetailContantTop = () => {
    return(
<div className="  flex flex-row justify-around">
   <ContantTopLeft/>
   <ContantTopRight/> 
  
</div>
    );
};

export {DetailContantTop };
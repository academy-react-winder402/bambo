import React from "react";
import { ContantTopLeft } from "./ContantTopLeft";
import { ContantTopRight } from "./ContantTopRight";

const DetailContantTop = () => {
    return(
<div className="  lg:flex lg:flex-row   lg:m-auto font-sans">
   <ContantTopLeft/>
   <ContantTopRight/> 
  
</div>
    );
};

export {DetailContantTop };
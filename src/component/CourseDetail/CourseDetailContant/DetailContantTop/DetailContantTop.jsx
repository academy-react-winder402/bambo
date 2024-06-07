import React from "react";
import { ContantTopLeft } from "./ContantTopLeft";
import { ContantTopRight } from "./ContantTopRight";

const DetailContantTop = ({des}) => {
    return(

<div className="  lg:flex lg:flex-row   lg:m-auto font-sans">

   <ContantTopLeft/>
   <ContantTopRight des={des}/> 
  
</div>
    );
};

export {DetailContantTop };
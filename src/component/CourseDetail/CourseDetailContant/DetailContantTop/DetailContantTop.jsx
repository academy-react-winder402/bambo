import React from "react";
import { ContantTopLeft } from "./ContantTopLeft";
import { ContantTopRight } from "./ContantTopRight";

const DetailContantTop = ({coursedetail}) => {
    return(

<div className="  lg:flex lg:flex-row   lg:m-auto font-sans">
in
   <ContantTopLeft coursedetail={coursedetail}/>
   <ContantTopRight coursedetail={coursedetail}/> 
  
</div>
    );
};

export {DetailContantTop };
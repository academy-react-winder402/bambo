import React from "react";
import { DetailContantBottom } from "./DetailContantBottom/DetailContantBottom";
import { DetailContantTop} from "./DetailContantTop/DetailContantTop";

const DetailContant = () => {
    return(

<div className=" lg:flex lg:flex-col font-sans">

   <DetailContantTop/>
   <DetailContantBottom/> 
</div>
    );
};

export {DetailContant };
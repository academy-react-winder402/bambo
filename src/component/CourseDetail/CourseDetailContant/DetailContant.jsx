import React from "react";
import { DetailContantBottom } from "./DetailContantBottom/DetailContantBottom";
import { DetailContantTop} from "./DetailContantTop/DetailContantTop";

const DetailContant = ({des}) => {
    return(

<div className=" lg:flex lg:flex-col font-sans">

   <DetailContantTop des={des}/>
   <DetailContantBottom/> 
</div>
    );
};

export {DetailContant };
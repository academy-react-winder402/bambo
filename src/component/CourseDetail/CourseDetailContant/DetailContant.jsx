import React from "react";
import { DetailContantBottom } from "./DetailContantBottom/DetailContantBottom";
import { DetailContantTop} from "./DetailContantTop/DetailContantTop";

const DetailContant = ({coursedetail}) => {
    return(

<div className=" lg:flex lg:flex-col font-sans">

   <DetailContantTop coursedetail={coursedetail}/>
   <DetailContantBottom coursedetail={coursedetail}/> 
</div>
    );
};

export {DetailContant };
import React from "react";
import { DetailContantBottom } from "./DetailContantBottom/DetailContantBottom";
import { DetailContantTop} from "./DetailContantTop/DetailContantTop";

const DetailContant = () => {
    return(
<div className="h-[1150px]">
   <DetailContantTop/>
   <DetailContantBottom/> 
</div>
    );
};

export {DetailContant };
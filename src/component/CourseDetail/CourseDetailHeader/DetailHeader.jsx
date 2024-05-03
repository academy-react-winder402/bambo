import React from "react";
import headerdetail from "../../../assets/img/coursedetail/logodetail.jpg"
import { DetailHeaderTop } from "./DetailHeaderTop";
import { DetailHeaderContant } from "./DetailHeaderContent";
import { DetailHeaderBottom} from "./DetailHeaderBottom"
const DetailHeader = () => {
    return(
 <div className="w-[100%] h-[730px] text-white bg-[url('assets/img/coursedetail/headerdetail.jpg')] bg-cover">
 
   <div className="w-[100%] h-[730px] bg-[#000000] opacity-[65%] absolute top-[0px] left-[0px]">
   <DetailHeaderTop />
   <DetailHeaderContant/>
   <DetailHeaderBottom/>
   </div>
 </div>

    );
};

export { DetailHeader};
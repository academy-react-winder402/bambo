import React from "react";
import headerdetail from "../../../assets/img/coursedetail/logodetail.jpg"
import { DetailHeaderTop } from "./DetailHeaderTop";
import { DetailHeaderContant } from "./DetailHeaderContent";
import { DetailHeaderBottom} from "./DetailHeaderBottom"
const DetailHeader = () => {
    return(
 <div className="lg:w-[100%] lg:h-[730px] lg:text-white lg:bg-[url('assets/img/coursedetail/headerdetail.jpg')] lg:bg-cover

 ">
 
   <div className="lg:w-[100%] lg:h-[730px] lg:bg-[#000000] lg:opacity-[65%] lg:absolute lg:top-[0px] lg:left-[0px]">
   <DetailHeaderTop />
   <DetailHeaderContant/>
   <DetailHeaderBottom/>
   </div>
 </div>

    );
};

export { DetailHeader};
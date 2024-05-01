import React from "react";
import headerdetail from "../../../assets/img/coursedetail/headerdetail.jpg"
import { DetailHeaderTop } from "./DetailHeaderTop";
import { DetailHeaderContant } from "./DetailHeaderContent";
import { DetailHeaderBottom} from "./DetailHeaderBottom"
const DetailHeader = () => {
    return(
 <div className="w-[100%] h-[900px]">
   <DetailHeaderTop />
   <DetailHeaderContant/>
   <DetailHeaderBottom/>
 </div>
    );
};

export { DetailHeader};
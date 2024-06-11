import React, { useState,useEffect } from "react";
import { DetailHeaderTop } from "./DetailHeaderTop";
import { DetailHeaderContant } from "./DetailHeaderContent";
import { DetailHeaderBottom} from "./DetailHeaderBottom"


const DetailHeader = ({title,teachername,likecount,dislikecount,capacity,currentRegistrants,endTime,startTime}) => {


    return(

 <div className="lg:w-[100%] lg:h-[765px] lg:text-white lg:bg-[url('assets/img/coursedetail/headerdetail.jpg')] lg:bg-cover lg:font-sans

 md:w-[100%] md:h-[500px] md:text-white md:bg-[url('assets/img/coursedetail/headerdetail.jpg')] md:bg-cover
 xs:w-[100%] xs:h-[400px] xs:text-white xs:bg-[url('assets/img/coursedetail/headerdetail.jpg')] xs:bg-cover

 ">
 

   <div className="lg:w-[100%] lg:h-[765px] lg:bg-[#000000] lg:opacity-[65%] lg:absolute lg:top-[0px] lg:left-[0px]

   md:w-[100%] md:h-[500px] md:bg-[#000000] md:opacity-[65%] md:absolute md:top-[0px] md:left-[0px]
   xs:w-[100%] xs:h-[400px] xs:bg-[#000000] xs:opacity-[65%] xs:absolute xs:top-[0px] xs:left-[0px]
   ">

    <DetailHeaderTop />
   <DetailHeaderContant title={title} capacity={capacity} currentRegistrants={currentRegistrants}/>
   <DetailHeaderBottom teachername={teachername} likecount={likecount} dislikecount={dislikecount} endTime={endTime} startTime={startTime}/>



   </div>
 </div>

    );
};

export { DetailHeader};
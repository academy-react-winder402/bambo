
import React, { useEffect, useState } from "react";
import { DetailHeader } from "./CourseDetailHeader/DetailHeader";
import {DetailContant } from "./CourseDetailContant/DetailContant"
import { getcourseDetail } from "../../core/services/api/landing/Detail";
import { useParams } from "react-router-dom";

const CourseDetailc = () => {
    
const [data, setData]=useState([]);
const cardid = useParams().id;

const getcardid = async() => {
  const courses = await getcourseDetail(cardid);
  setData(courses);
};

useEffect(()=> {
getcardid();
},[cardid]);


console.log(data);
  return(
  <>

{cardid?(<div> 
  <DetailHeader title={data.title} teachername={data.teacherName} likecount={data.likeCount} 
  dislikecount={data.dissLikeCount} capacity={data.capacity} currentRegistrants={data.currentRegistrants} endTime={data.endTime} startTime={data.startTime}/>
  <DetailContant  des={data.describe}/>
  </div>):null}

  </>
    );
};

export {CourseDetailc};
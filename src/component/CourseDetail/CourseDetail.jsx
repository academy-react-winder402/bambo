
import { DetailHeader } from "./CourseDetailHeader/DetailHeader";
import {DetailContant } from "./CourseDetailContant/DetailContant"
import { useParams } from "react-router-dom";
import { getcoursedetail } from "../../core/services/api/coursedetail/coursedetail";
import React, { useEffect, useState } from "react";
const CourseDetailc = () => {
  const [coursedetail, setcoursedetail]=useState([]);
 const courseId = useParams().id
  const getCoursedetailList = async () => {
    const result = await getcoursedetail(courseId);
    setcoursedetail(result);
};

useEffect(() => {
    getCoursedetailList();
  
}, []);
    return(
  <>
  <DetailHeader coursedetail={coursedetail}/>
  <DetailContant coursedetail={coursedetail}/> 
 
  </>
    );
};

export {CourseDetailc};
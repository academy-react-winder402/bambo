import React from "react";
import { DetailHeader } from "./CourseDetailHeader/DetailHeader";
import {DetailContant } from "./CourseDetailContant/DetailContant"
import { CommentCourses } from "../CourseDetail/comment/CommentCourses"

const CourseDetailc = () => {
    return(
  <>
  <DetailHeader />
  <DetailContant/> 
  <CommentCourses/>
  </>
    );
};

export {CourseDetailc};
import React, { useEffect, useState } from "react";
import { DetailHeader } from "./CourseDetailHeader/DetailHeader";
import {DetailContant } from "./CourseDetailContant/DetailContant"


const CourseDetailc = () => {
    

//   const [Data, setData]=useState([]);
//   const cardid = useParams().id;

//   const getcardid = async() => {
//     const courses = await getcoursedetail(cardid);
//     setData(courses);
//   };

// useEffect(()=> {
//   getcardid();
// },[cardid])
  
  return(
  <>

{/* {cardid?(<div> 
  <DetailHeader title={Data.title}/>
  <DetailContant/>
  </div>):null} */}

  <DetailHeader />
  <DetailContant/>
  
  
 
  </>
    );
};

export {CourseDetailc};
import React, { useState } from "react";
import { CommentBottom } from "./CommentBottom";
const CommentCourses =()=>{
    const comments ={
        id:1,
        item:[
            {id:1677252427307,
                name:"hello",
                item:[
                    {
                        id:177252434572,
                        name:"hello world",
                        item:[]
                    }
                ]
            }
        ]
    };
    const [commentsData,setCommentsData]=useState(comments);
    return(
        <div className=" mt-[50px] h-[700px] bg-[#F9F9F9]" >
            <div className="h-[100px]  flex  gap-[800px]  ">
                
                              <div className="h-[50px] w-[150px] ml-[220px] bg-[#004458] mt-[50px] text-[white] text-[20px] text-center leading-[45px] rounded-[1em]">مشاهده نظرات</div>
                <div className="w-[150px] h-[50px] text-[30px] text-center leading-[45px] mt-[50px] ">نظرات</div>
  
            </div>
            <div>
            <CommentBottom comment={commentsData}/>
            </div>

        </div>
    );
};
export {CommentCourses};
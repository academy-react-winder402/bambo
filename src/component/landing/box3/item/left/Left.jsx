import React from "react";
import { Leftimg } from "./Leftimg";

const Left = ({course}) => {

    console.log(course);

    return (
        <div className="  h-[33rem] w-[35rem] mt-[10rem] ml-[5rem] ">
            <div className=" h-[20rem] w-[50rem] m-auto  flex justify-between ">

            {course.map((item,index) =>{
               return(<Leftimg key={index} im={item.tumbImageAddress} title={item.title} teacher={item.teacherName} typename={item.typeName}/>)
            })}

            </div> 
        </div>
    );
};

export { Left };
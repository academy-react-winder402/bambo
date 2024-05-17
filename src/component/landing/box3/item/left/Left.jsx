import React from "react";
import { Leftimg } from "./Leftimg";

const Left = ({course}) => {

    console.log(course);

    return (
        <div className="  h-[36rem] w-[55rem] mt-[8rem] ml-[2rem] ">
            <div  className="h-[3rem] w-[8rem] float-right text-center leading-[3rem] text-[blue]  hover:cursor-pointer">  مشاهده بیشتر </div>
            <div className=" h-[18rem] w-[55rem] flex">

            {course.map((item,index) =>{
               return(<Leftimg key={index} im={item.tumbImageAddress} title={item.title} teacher={item.teacherName} typename={item.typeName}/>)
            })}



            </div> 
        </div>
    );
};

export { Left };
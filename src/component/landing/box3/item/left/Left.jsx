import React from "react";
import {Leftimg} from './Leftimg';

const Left = ({course}) => {

    console.log(course);

    return (
        <div className="  h-[36rem] w-[55rem] mt-[8rem] ml-[2rem] ">
            <div className=" h-[22rem] w-[55rem] flex gap-[1rem]">


                
        {course.map((item, index) => {
          return (
            <Leftimg key={index} im={item.tumbImageAddress} title={item.title} teacher={item.teacherName} typename={item.typeName} />)
        })}


            </div> 
        </div>
    );
};

export { Left };
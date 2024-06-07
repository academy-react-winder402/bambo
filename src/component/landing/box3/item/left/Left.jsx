import React from "react";
import {Leftimg} from './Leftimg';

const Left = ({course}) => {

    return (
        <div className="    mt-[7rem] ml-[6rem] ">
            <div className="  flex gap-[1rem]">


                
        {course.map((item, index) => {
          return (
            <Leftimg key={index} im={item.tumbImageAddress} title={item.title} teacher={item.teacherName} typename={item.typeName} price={item.cost} />)
        })}


            </div> 
        </div>
    );
};

export { Left };
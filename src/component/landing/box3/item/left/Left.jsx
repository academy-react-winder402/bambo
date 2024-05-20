import React from "react";
import {Slider} from '../../../../common/slide/Slider';

const Left = ({course}) => {

    console.log(course);

    return (
        <div className="  h-[36rem] w-[55rem] mt-[5rem] ml-[2rem] ">
            <div className=" h-[18rem] w-[55rem] flex">


                <Slider  course={course}/>


            </div> 
        </div>
    );
};

export { Left };
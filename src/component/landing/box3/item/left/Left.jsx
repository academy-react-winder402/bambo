import React from "react";
import { Leftimg } from "./Leftimg";

const Left = ({course}) => {

    console.log(course);

    return (
        <div className="  h-[33rem] w-[35rem] mt-[7rem] ml-[15rem] ">
            <Leftimg im={course[0].tumbImageAddress} img={course[1].tumbImageAddress} imag={course[2].tumbImageAddress}/>
        </div>
    );
};

export { Left };
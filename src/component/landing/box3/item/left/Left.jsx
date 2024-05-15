import React from "react";
import { Leftimg } from "./Leftimg";

const Left = ({ courselanding }) => {

    console.log(courselanding);

    return (
        <div className="  h-[33rem] w-[35rem] mt-[7rem] ml-[15rem] ">
            <div className="border border-solid border-[#09B28B] h-[25rem] w-96 m-auto  relative">
                {courselanding.map((item, index) => {
                    return (
                        <Leftimg key={index} im={item.tumbImageAddress} />
                    );
                })};

            </div>
        </div>
    );
};

export { Left };
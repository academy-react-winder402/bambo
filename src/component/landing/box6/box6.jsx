import React from "react";
import { Righttt } from './item/Righttt';
import { Lefttt } from './item/Lefttt';


const Box6 = () => {
    return (
        <div className=" h-[30rem] w-[96rem] m-auto flex">
            <Righttt />
            <Lefttt />
        </div>
    );
};

export { Box6 };
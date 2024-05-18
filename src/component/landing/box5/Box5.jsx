import React from "react";
import { Rightt } from "./item/Rightt";
import { Leftt } from './item/Leftt';



const Box5 = () => {
    return (
        <div className=" h-[46rem] w-[96rem]  flex justify-between m-auto">
            <Rightt />
            <Leftt  />
        </div>
    );
};

export { Box5 };
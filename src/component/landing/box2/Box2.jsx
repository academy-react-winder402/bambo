import React from "react";
import { Item2 } from './items/Item2';
import { Item3 } from "./items/Item3";
import { Item1 } from './items/Item1';

const Box2 = () => {
    return (
        <div className=" h-[46rem] w-[96rem] bg-[url(./././assets/img/landing/Backgroundbox.png)] bg-cover m-auto">
            <div className="h-[46rem] bg-[#0000006b] relative dark:bg-[#262931d2]">
                <div className=" h-[22rem] absolute top-[24rem] w-full bg-[#0000006b] flex dark:bg-[#262931cb]">



                    <Item1 />


                    <div className="border border-solid border-[#dbdbdb91] h-[22rem] inline-block dark:border-[#969faf]"> </div>



                    <Item2 />


                    <div className="border border-solid border-[#dbdbdb91] h-[22rem] inline-block dark:border-[#969faf]">  </div>

                    <Item3 />

                </div>
            </div>
        </div>
    );
};

export { Box2 };
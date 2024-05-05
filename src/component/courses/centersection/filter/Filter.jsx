import React from "react";
import { Range } from "./range/range";
import { Asatid } from './asatid/Asatid';
import { Time } from './time/time';
import { Dastebandi } from './dastebandi/Dastebandi';
import {Moratab} from './moratabsazi/moratabsazi';
const Filter = () => {


    return (
        <div className=" w-[19rem]">
            <div className=" m-auto h-[10rem] w-[17rem] mr-[1rem] bg-[#fff] rounded-md pt-[1rem] ">
                <Range />
            </div>

            <div className=" m-auto h-[10rem] w-[17rem] mr-[1rem] bg-[#fff] rounded-md pt-[1rem] mt-[1rem]">
                <Asatid />
            </div>
            <div className=" m-auto h-[17rem] w-[17rem] mr-[1rem] bg-[#fff] rounded-md pt-[1rem] mt-[1rem]">
                 <Dastebandi />
            </div>

            <div className=" m-auto h-[15rem] w-[17rem] mr-[1rem] bg-[#fff] rounded-md pt-[1rem] mt-[1rem]">
                <Moratab />
            </div>

            <div className=" m-auto h-[15rem] w-[17rem] mr-[1rem] bg-[#fff] rounded-md pt-[1rem] mt-[1rem]">
                <Time />
            </div>
   
        </div>

    );
};

export { Filter };
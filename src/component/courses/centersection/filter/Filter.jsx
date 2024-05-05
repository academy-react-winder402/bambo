import React from "react";
import { Range } from "./range/range";
import {Asatid} from './asatid/Asatid';
import {Time} from './time/time';
import { Name } from "./filtername/Filtername";
import {Dastebandi} from './dastebandi/Dastebandi';
const Filter = () => {


    return (
        <ul className="border border-solid border-[#004458]  bg-[#f0f0f0] rounded-md  w-[15rem] mr-4">

            <li className=" border-b border-solid border-[#004458] w-[15rem]">
                <Range />
            </li>

            <li className=" border-b border-solid border-[#004458] ">
                <Dastebandi />
            </li>

            <li className=" border-b border-solid border-[#004458]">
                <Asatid />
            </li>

            <li className=" border-b border-solid border-[#004458]">
                <Time />
            </li>

            <ul className=" ">
                <Name />
            </ul>


        </ul>
    );
};

export { Filter };
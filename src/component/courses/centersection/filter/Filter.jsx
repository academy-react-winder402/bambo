import React from "react";
import { Range } from "./range/range";
import { Asatid } from './asatid/Asatid';
import { Time } from './time/time';
import { Dastebandi } from './dastebandi/Dastebandi';
import {Moratab} from './moratabsazi/moratabsazi';

const Filter = ({typename,course}) => {


    return (
        <div className=" w-[19rem] mr-[1rem]">
            <div className="relative w-[19rem] bg-[#fff] shadow-[6px,6px,10px,-1px,rgba(0,0,0.15),-6px,-6px,-10px,-1px,rgba(255,255,255,0.8)]
             rounded-xl"> 

                <input type="checkbox" id="input" className="absolute peer opacity-0"/>

                <label for="input" className="font-bold tracking-[1px] mx-[20px] h-[50px] flex items-center"> product </label>
                <label for="input" className="h-[1rem] w-[1rem] bg-[url('././././assets/img/courses/plus.png')] bg-no-repeat bg-cover absolute top-[17px] right-[30px]
                 peer-checked:bg-[url('././././assets/img/courses/negativ.png')] duration-300">  </label>

                <div className="max-h-0 overflow-hidden peer-checked:max-h-full" > 
                    <Asatid />
                </div>
            </div>
        </div>

    );
};

export { Filter };
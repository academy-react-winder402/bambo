import React from "react";
import { Range } from "./range/range";
import { Asatid } from './asatid/Asatid';
import { Time } from './time/time';
import { Dastebandi } from './dastebandi/Dastebandi';
import {Moratab} from './moratabsazi/moratabsazi';

const Filter = ({teacher}) => {


    return (
        <div className=" w-[19rem] mr-[1rem]">
            <Range />
            <Asatid teacher={teacher} />
            <Dastebandi />
            <Moratab />
            <Time />
        </div>

    );
};

export { Filter };
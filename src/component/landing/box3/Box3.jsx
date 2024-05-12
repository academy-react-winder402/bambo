import React from "react";
import {Left} from './item/Left';
import { Right } from './item/Right';

const Box3 = () => {
    return (
        <div className=" h-[46.5rem] w-[96rem] flex bg-[#f4f3f3] m-auto">

            <Right />
            <Left />

        </div>
    );
};

export { Box3 };
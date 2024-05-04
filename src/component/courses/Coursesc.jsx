import React from "react";
import { Headersection } from "./headersection/Headersection";
import { Menusection } from "./menusection/Menusection";
import {Centersection} from './centersection/Centersection';

const Coursesc = () => {
    return (
        <div className="bg-[#E9E9E9]">
            <Headersection />
            <Menusection />
            <Centersection />
        </div>

    );
};

export { Coursesc };
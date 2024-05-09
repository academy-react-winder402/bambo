import React from "react";
import { Headersection } from "./headersection/Headersection";
import {Centersection} from './centersection/Centersection';
import { ModalCourse } from "./modalcourse/ModalCourse";

const Coursesc = () => {
    return (
        <div className="bg-[#ededed]">
            <ModalCourse style={"absolute"}/>
            <Headersection />
            <Centersection />
            
        </div>

    );
};

export { Coursesc };
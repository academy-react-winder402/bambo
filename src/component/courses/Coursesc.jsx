import React,{useState} from "react";
import { Headersection } from "./headersection/Headersection";
import {Centersection} from './centersection/Centersection';
import { ModalCourse } from "./modalcourse/ModalCourse";

const Coursesc = () => {
    const [showModal, setshowModal] = useState(false);
    return (
        <div className="bg-[#ededed]">
            <ModalCourse isVisible={showModal}  onclose={() => {setshowModal(false);}}/>
            <Headersection />
            <Centersection set={setshowModal}/>
            
        </div>

    );
};

export { Coursesc };
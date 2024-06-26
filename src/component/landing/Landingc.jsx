import React,{useState} from "react";
import { Box1 } from "./box1/Box1";
import {Box2} from './box2/Box2';
import {Box3} from './box3/Box3';
import { Box4 } from "./box4/Box4";
import { Box5 } from "./box5/Box5";
import { Box6 } from "./box6/box6";
import { SearchLanding } from "../common/searchlanding/SearchLanding";

const Landingc = () => {
    const [showModal, setshowModal] = useState(false);
    return (
        <div >
            <SearchLanding isVisible={showModal}  onclose={() => {setshowModal(false);}} />
            <Box1 set={setshowModal} />
            <Box2 />
            <Box3 />
            <Box4 />
            <Box5 />
            <Box6 />
        </div>

    );
};

export { Landingc };
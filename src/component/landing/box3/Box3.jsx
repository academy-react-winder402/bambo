import React, { useEffect, useState } from "react";
import {Left} from './item/left/Left';
import { Right } from './item/Right';
import { getcourselanding } from "../../../core/services/api/landing/courselanding";

const Box3 = () => {
    const [courselanding, setcourselanding] = useState([]);

    const getCourseList = async () => {
        const courses = await getcourselanding();
        setcourselanding(courses);
    };

    useEffect(() => {
        getCourseList();
      
    }, []);


    return (
        <div className=" h-[46.5rem] w-[96rem] flex bg-[#f4f3f3] m-auto dark:bg-[#242424]">

            <Right />

            
            <Left course={courselanding} />
            

        </div>
    );
};

export { Box3 };
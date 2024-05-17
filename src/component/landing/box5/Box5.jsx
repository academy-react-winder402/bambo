import React,{ useEffect, useState } from "react";
import { Rightt } from "./item/Rightt";
import { Leftt } from './item/Leftt';
import { getnewslanding } from "../../../core/services/api/landing/newslanding";


const Box5 = () => {


    const [newslanding, setnewslanding] = useState([]);

    const getnewsList = async () => {
        const courses = await getnewslanding();
        setnewslanding(courses);
    };

    useEffect(() => {
        getnewsList();
    }, []);


console.log(newslanding);

    return (
        <div className=" h-[46rem] w-[96rem]  flex justify-between m-auto">
            <Rightt newslanding={newslanding} />
            <Leftt  />
        </div>
    );
};

export { Box5 };
import React,{useState, useEffect} from "react";
import {Rightt} from './item/right/Rightt';
import { Leftt } from './item/Leftt';

import { getnewslanding } from "../../../core/services/api/landing/newslanding";



const Box5 = () => {


    const [newslanding, setnewslanding] = useState([]);

    const getNewsList = async () => {
        const courses = await getnewslanding();
        setnewslanding(courses);
    };

    useEffect(() => {
        getNewsList();
      
    }, []);


    return (
        <div className=" h-[46rem] w-[96rem]  flex justify-between m-auto dark:bg-[#242424]">
            <Rightt news={newslanding}/>
            <Leftt  />
        </div>
    );
};

export { Box5 };
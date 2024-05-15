import React, { useEffect, useState } from "react";
import icon1 from '../../../../assets/img/landing/icon1.png';
import { getcountlanding } from "../../../../core/services/api/landing/countlanding";

const Item1 = () => {

    const [courselanding, setcourselanding] = useState();

    const getCourseList = async() =>{
        const courses = await getcountlanding();
        setcourselanding(courses);
    };

    useEffect(() => {
        getCourseList();
    },[]);

console.log(courselanding);

    return (
        <div className="h-72 w-[32rem] inline-block">
            <div className=" h-14 w-14 m-auto mt-16">
                <img src={icon1} className="h-14 w-14" />
            </div>
            <div className=" h-16 w-52 m-auto mt-6 flex">
                <div className=" h-14 w-32 text-white text-4xl text-end"> دوره ها </div>
                <div className=" h-14 w-24 text-white text-4xl text-center"> 201 </div>
            </div>
            <div className=" h-20 w-[23rem] m-auto  text-white text-center text-lg "> تا کنون بیش از ۲۰۰ دوره از دسته بندی
                های متفاوت در سایت ثبت شده و قابل دسترسی است </div>
        </div>
    );
};

export { Item1 };
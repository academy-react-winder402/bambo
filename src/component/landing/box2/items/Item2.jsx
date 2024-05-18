import React, { useEffect, useState } from "react";
import icon2 from '../../../../assets/img/landing/icon2.png';
import { getcountlanding } from "../../../../core/services/api/landing/countlanding";

const Item2 = () => {
    const [courselanding, setcourselanding] = useState([]);

    const getCourseList = async() =>{
        const courses = await getcountlanding();
        setcourselanding(courses);
    };

    useEffect(() => {
        getCourseList();
    },[]);

    return (
        <div className="h-72 w-[32rem] inline-block">
            <div className=" h-14 w-14 m-auto mt-16">
                <img src={icon2} className="h-14 w-14" />
            </div>
            <div className=" h-16 w-52 m-auto mt-6 flex">
                <div className=" h-14 w-32 text-white text-4xl text-end dark:text-[#969faf]"> استاد </div>
                <div className=" h-14 w-24 text-white text-4xl text-center dark:text-[#969faf]"> {courselanding.teacherCount} </div>
            </div>
            <div className=" h-20 w-[23rem] m-auto  text-white text-center text-lg dark:text-[#969faf]"> بیش از ۳۰ استاد از بهترین اساتید
                ایران همراه ما هستن و دوره های خودشون و ثبت کردن </div>
        </div>
    );
};

export { Item2 };
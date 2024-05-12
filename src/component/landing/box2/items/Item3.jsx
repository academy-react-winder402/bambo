import React from "react";
import icon3 from '../../../../assets/img/landing/icon3.png';

const Item3 = () => {
    return (

        <div className=" h-72 w-[32rem] inline-block">
            <div className=" h-14 w-14 m-auto mt-20">
                <img src={icon3} className="h-14 w-14" />
            </div>
            <div className=" h-16 w-52 m-auto mt-3 flex">
                <div className=" h-14 w-32 text-white text-4xl text-end"> دانشجو </div>
                <div className=" h-14 w-24 text-white text-4xl text-center"> 576 </div>
            </div>
            <div className=" h-20 w-[23rem] m-auto  text-white text-center text-lg "> تا کنون بیش از ۵۰۰ نفر
                از اموزش های بامبو استفاده کرده اند
                و نظرات خودشونو ثبت کرده اند </div>
        </div>
    );
};

export { Item3 };
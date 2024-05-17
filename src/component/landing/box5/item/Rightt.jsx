import React,{ useEffect, useState } from "react";
import left from '../../../../assets/img/landing/left.png';
import right from '../../../../assets/img/landing/right.png';
import { getnewslanding } from "../../../../core/services/api/landing/newslanding";

const Rightt = () => {


    const [newslanding, setnewslanding] = useState([]);

    const getnewsList = async () => {
        const courses = await getnewslanding();
        setnewslanding(courses);
    };

    useEffect(() => {
        getnewsList();
    }, []);


const [currentslide,setcurrentslide] = useState(0);

const pervSlide = () => {
    const infirstSlide = currentslide === 0;
    const newIndex = infirstSlide ? newslanding.length  - 1 : currentslide - 1;
    setcurrentslide(newIndex);
};


const nextSlide = () => {
    const inlastSlide = currentslide === newslanding.length - 1;
    const newIndex = inlastSlide ? 0  : currentslide + 1;
    setcurrentslide(newIndex);
}; 


    return (
        <div className=" h-[30rem] w-[35rem] mt-[8rem] ml-20">
            <div className="border border-solid border-[#09B28B] h-[24rem] w-[35rem] relative">
                <img src={newslanding[currentslide].tumbImageAddress} className="h-[24rem] w-[35rem]" />
                <div className="h-16 w-full txt-2xl absolute top-[20rem] bg-[#004358b8] text-white text-center leading-[3.5rem]">
                {newslanding[currentslide].title}
                </div>
            </div>
            <div className="border-2 border-solid border-[#09B28B] h-[3rem] w-[27rem] m-auto flex justify-between">
                <div className=" h-5 w-5 ml-5 mt-4 hover:cursor-pointer" onClick={() => {pervSlide()}}>
                    <img src={left} className="h-5 w-5" />
                </div>
                <div className=" h-4.5 w-2.5 mr-5 mt-4 hover:cursor-pointer" onClick={() => {nextSlide()}}>
                    <img src={right} className="h-4.5 w-2.5" />
                </div>

            </div>
        </div>
    );
};

export { Rightt };
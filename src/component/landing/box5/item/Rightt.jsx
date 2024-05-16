import React, { useEffect, useState } from "react";
import new1 from '../../../../assets/img/landing/new1.png';
import js from '../../../../assets/img/courses/js.png';
import left from '../../../../assets/img/landing/left.png';
import right from '../../../../assets/img/landing/right.png';
import {getnewslanding} from '../../../../core/services/api/landing/newslanding'

const Rightt = () => {


    const [newslanding, setnewslanding] = useState([]);

    const getnewsList = async () => {
        const courses = await getnewslanding();
        setnewslanding(courses);
    };

    useEffect(() => {
        getnewsList();
    }, []);

    console.log(newslanding);



const slider = [
    {im:js, title:"مقایسه ریکت با فریمورک های جدید جاوا اسکرییپت"},
    {im:new1 , title:"rezaaaaa"},
];


const [currentindex,setcurrentindex] = useState(0);

const pervSlide = () => {
    const infirstSlide = currentindex === 0;
    const newIndex = infirstSlide ? slider.length - 1 : currentindex - 1;
    setcurrentindex(newIndex);
};

const nextSlide = () => {
    const inlastSlide = currentindex === slider.length - 1;
    const newIndex = inlastSlide ? 0 : currentindex + 1;
    setcurrentindex(newIndex);
};
    


    return (
        <div className=" h-[30rem] w-[35rem] mt-[8rem] ml-20">
            <div className="border border-solid border-[#09B28B] h-[24rem] w-[35rem] relative">
                <img src={slider[currentindex].im} className="h-[24rem] w-[35rem]" />
                <div className="h-16 w-full txt-2xl absolute top-[20rem] bg-[#004358b8] text-white text-center leading-[3.5rem]">
                    {slider[currentindex].title}
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
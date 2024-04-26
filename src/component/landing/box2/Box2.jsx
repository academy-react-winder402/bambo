import React from "react";
import '../box1/Box1.modular.css';
import icon1 from '../../../assets/img/icon1.png';
import icon2 from '../../../assets/img/icon2.png';
import icon3 from '../../../assets/img/icon3.png';

const Box2 = () => {
    return (
        <div className=" h-[40rem] w-[70rem] back2 m-auto ">
            <div className="h-[40rem] bg-[#0000006b] relative">
                <div className=" h-72 absolute top-[22rem] w-full bg-[#0000006b] flex">



                    <div className="h-72 w-[32rem] inline-block">
                        <div className=" h-12 w-12 m-auto mt-16">
                            <img src={icon1} className="h-12 w-12" />
                        </div>
                        <div className=" h-16 w-52 m-auto mt-6 flex"> 
                           <div className=" h-14 w-32 text-white text-4xl text-end"> دوره ها </div>
                           <div className=" h-14 w-24 text-white text-4xl text-center"> 219 </div>
                        </div>
                        <div className=" h-20 w-[18rem] m-auto mt-2 text-white text-center text-sm "> تا کنون بیش از ۲۰۰ دوره از دسته بندی
                         های متفاوت در سایت ثبت شده و قابل دسترسی است </div>
                    </div>


                    <div className="border border-solid border-[#dbdbdb91] h-72 inline-block"> </div>



                    <div className="h-72 w-[32rem] inline-block">
                    <div className=" h-12 w-12 m-auto mt-16">
                            <img src={icon2} className="h-12 w-12" />
                        </div>
                        <div className=" h-16 w-52 m-auto mt-6 flex"> 
                           <div className=" h-14 w-32 text-white text-4xl text-end"> استاد </div>
                           <div className=" h-14 w-24 text-white text-4xl text-center"> 34 </div>
                        </div>
                        <div className=" h-20 w-[19rem] m-auto mt-2 text-white text-center text-sm "> بیش از ۳۰ استاد از بهترین اساتید 
                        ایران همراه ما هستن و دوره های خودشون و ثبت کردن </div>
                    </div>


                    <div className="border border-solid border-[#dbdbdb91] h-72 inline-block">  </div>



                    <div className=" h-72 w-[32rem] inline-block">
                    <div className=" h-12 w-12 m-auto mt-16">
                            <img src={icon3} className="h-12 w-12" />
                        </div>
                        <div className=" h-16 w-52 m-auto mt-6 flex"> 
                           <div className=" h-14 w-32 text-white text-4xl text-end"> دانشجو </div>
                           <div className=" h-14 w-24 text-white text-4xl text-center"> 576 </div>
                        </div>
                        <div className=" h-20 w-[19rem] m-auto mt-2 text-white text-center text-sm "> تا کنون بیش از ۵۰۰ نفر
                         از اموزش های بامبو استفاده کرده اند 
                        و نظرات خودشونو ثبت کرده اند </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { Box2 };
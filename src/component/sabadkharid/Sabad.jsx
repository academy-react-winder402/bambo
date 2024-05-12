import React from "react";
import { Header } from '../../component/common/Header';
import deletesabad from '../../assets/img/sabadkharid/deletesabad.png';
import dkdfkf from '../../assets/img/courses/close.png'


const Sabad = () => {
    return (
        <>

            <div className=" h-[5rem] bg-[url('./././assets/img/courses/headerback.png')] bg-no-repeat bg-cover bg-center ">

                <div className="bg-[#00435889] h-[5rem] w-full">
                    <Header />

                </div>
            </div>

            <div className="border border-solid border-transparent h-[40rem] bg-[#ededed]">

                <div className="border border-solid border-transparent h-[30rem] w-[57rem] bg-[#fff] m-auto mt-[5rem]">

                    <div dir="rtl" className=" h-[2rem]  mt-[2rem] mr-[2.5rem]">
                        <span className=" pl-[0.3rem] pr-[0.2rem] pb-[0.5rem] text-[#404040] hover:border-b-4 hover:bordersolid 
                        hover:border-[#004458] hover cursor-pointer hover:text-[#004458]"> سبد خرید </span>
                        <span className="pl-[0.5rem] pr-[0.5rem] pb-[0.5rem] text-[#404040] hover:border-b-4 hover:bordersolid 
                        hover:border-[#004458] hover cursor-pointer hover:text-[#004458]"> خرید بعدی </span>
                    </div>

                    <div className="border-2 border-solid border-[#088568a9] w-[90%] m-auto"> </div>

                    <div className="w-[90%] m-auto h-[18rem] mt-[2rem]">
                        <div dir="rtl" className="h-[3rem] bg-[#09B28B] text-white">
                            <span className="mr-[3rem] leading-[2.5rem]"> عکس دوره </span>
                            <span className="mr-[3rem]"> نام دوره </span>
                            <span className="mr-[4rem]">  مدرس </span>
                            <span className="mr-[4rem]"> ظرفیت </span>
                            <span className="mr-[4rem]"> تاریخ شروع </span>
                            <span className="mr-[4rem]"> قیمت </span>
                        </div>
                        <div className="border border-solid border-transparent h-[15rem] bg-[#F1F1F1] ">
                            <div dir="rtl" className="border-b-2 border-solid border-[#0885688a] h-[5rem] w-[95%] m-auto flex gap-[3rem] text-[#004458]">
                                <div className=" h-[4rem] w-[4rem] mt-[0.4rem] mr-[1.5rem]
                                 bg-[url('././assets/img/courses/js.png')] bg-no-repeat bg-cover"> </div>
                                <span className="block mr-[1.5rem] mt-[1.5rem]"> جاوا </span>
                                <span className="block mt-[1.5rem] mr-[1.6rem]"> استاد بحر </span>
                                <span className="block mt-[1.5rem] mr-[1rem]"> ۶۰ نفر </span>
                                <span className="block mt-[1.5rem] mr-[1.8rem]"> 1401/1/1 </span>
                                <span className="block mt-[1.6rem] mr-[1rem]"> 200000 </span>
                                <div className=" h-[2rem] w-[1.7rem] mt-[1.3rem] mr-[1rem]">
                                    <img src={deletesabad} className="h-[2rem] w-[1.7rem]" />
                                </div>
                            </div>

                            <div className=" h-[5rem] ">

                                <div dir="rtl" className="border-b-2 border-solid border-[#0885688a] h-[5rem] w-[95%] m-auto flex gap-[3rem] text-[#004458]">
                                    <div className=" h-[4rem] w-[4rem] mt-[0.4rem] mr-[1.5rem]
                                 bg-[url('././assets/img/courses/js.png')] bg-no-repeat bg-cover"> </div>
                                    <span className="block mr-[1.5rem] mt-[1.5rem]"> جاوا </span>
                                    <span className="block mt-[1.5rem] mr-[1.6rem]"> استاد بحر </span>
                                    <span className="block mt-[1.5rem] mr-[1rem]"> ۶۰ نفر </span>
                                    <span className="block mt-[1.5rem] mr-[1.8rem]"> 1401/1/1 </span>
                                    <span className="block mt-[1.6rem] mr-[1rem]"> 200000 </span>
                                    <div className=" h-[2rem] w-[1.7rem] mt-[1.3rem] mr-[1rem]">
                                        <img src={deletesabad} className="h-[2rem] w-[1.7rem]" />
                                    </div>
                                </div>
                            </div>

                            <div className=" h-[5rem]">
                                <div dir="rtl" className=" h-[5rem] w-[95%] m-auto flex gap-[3rem] text-[#004458]">
                                    <div className=" h-[4rem] w-[4rem] mt-[0.4rem] mr-[1.5rem]
                                 bg-[url('././assets/img/courses/js.png')] bg-no-repeat bg-cover"> </div>
                                    <span className="block mr-[1.5rem] mt-[1.5rem]"> جاوا </span>
                                    <span className="block mt-[1.5rem] mr-[1.6rem]"> استاد بحر </span>
                                    <span className="block mt-[1.5rem] mr-[1rem]"> ۶۰ نفر </span>
                                    <span className="block mt-[1.5rem] mr-[1.8rem]"> 1401/1/1 </span>
                                    <span className="block mt-[1.6rem] mr-[1rem]"> 200000 </span>
                                    <div className=" h-[2rem] w-[1.7rem] mt-[1.3rem] mr-[1rem]">
                                        <img src={deletesabad} className="h-[2rem] w-[1.7rem]" />
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className=" mt-[1rem] flex justify-between w-[90%] m-auto">
                        <span className="h-[2.5rem]  w-[7rem] bg-[#004458] text-white text-center leading-[2rem]"> خرید </span>
                        <div className="flex gap-[0.5rem] text-[#404040]">
                            <span> تومان </span>
                            <span> 400000 </span>
                            <span className=""> : مجموع قیمت </span>

                        </div>

                    </div>

                </div>

            </div>


        </>



    );
};

export { Sabad };
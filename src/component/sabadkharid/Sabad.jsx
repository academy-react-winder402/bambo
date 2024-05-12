import React from "react";
import js from '../../assets/img/courses/js.png';
import close from '../../assets/img/courses/close.png';
import plus from '../../assets/img/courses/plus.png';
import negativ from '../../assets/img/courses/negativ.png';
import { Header } from '../../component/common/Header';



const Sabad = () => {
    return (
        <>

            <div className=" h-[7rem] bg-[url('./././assets/img/courses/headerback.png')] bg-no-repeat bg-cover bg-center ">

                <div className="bg-[#00435889] h-[7rem] w-full">
                    <Header />

                </div>
            </div>

            <div>

                <div className="h-[5rem] text-6xl text-right mr-[7rem] mt-[3rem]">
                    سبد خرید
                </div>

                <div className=" h-[30rem] w-[90%] m-auto mt-[2rem] flex justify-between  mb-[5rem]">


                    <div className="border border-solid border-[#004458] h-[25rem] w-[27%] rounded-md ">
                        <h1 className=" text-center text-2xl mt-[5rem] text-[blue]"> مبلق کل قابل پرداخت </h1>
                        <span className=" block mt-[1.5rem] text-xl text-center"> 330,300 تومان </span>
                        <div className="border border-solid border-[#004458] h-[4rem] mt-[5rem] w-[15rem]
             text-center text-xl leading-[3.5rem] m-auto hover:bg-[#004458] hover:cursor-pointer hover:text-white rounded-md"> پرداخت </div>
                    </div>



                    <div className="border border-solid border-[#004458] h-[30rem] w-[70%] rounded-md">
                        <div className="border-b border-solid border-[#004458] h-[3rem] w-[95%] m-auto text-xl leading-10 text-right mb-[1rem]" >
                            <span> سبد خرید </span>
                            <span> ( 1 کالا ) </span>
                        </div>

                        <div className="border-b border-solid border-[#004458] h-[10rem] w-[95%] m-auto flex justify-end ">

                            <div className=" h-[3rem] w-[3rem] rounded-full mr-[3rem] mt-[4rem] bg-[#ffefef]">
                                <img src={close} className="h-[2rem] w-[2rem] m-auto mt-[0.5rem]" />
                            </div>

                            <div className=" h-[6rem] w-[9rem] text-right mr-[4rem] mt-[3rem]">
                                <div className=" h-[3rem] w-[9rem] text-center leading-10 text-xl text-[blue]"> قیمت نهایی </div>
                                <div className=" h-[3rem] w-[9rem] text-center"> ۳۳۹,۰۰۰ تومان </div>
                            </div>

                            <div className=" h-[9rem] w-[9rem] text-right mr-[4rem] mt-[0.5rem]">
                                <div className=" h-[2rem] w-[5rem] m-auto mt-[2rem] text-center text-xl"> تعداد </div>
                                <div className=" h-[3rem] w-[9rem] m-auto flex">
                                    <div className=" h-[3rem] w-[3rem] bg-[#828282]">
                                        <img src={negativ} className="h-[2rem] w-[2rem] m-auto mt-[0.5rem] hover:cursor-pointer" />
                                    </div>
                                    <div className=" h-[3rem] w-[3rem] bg-[#f5f5f5] text-center leading-[3rem]"> 1 </div>
                                    <div className=" h-[3rem] w-[3rem] bg-[#828282]">
                                        <img src={plus} className=" h-[2rem] w-[2rem] m-auto mt-[0.5rem] hover:cursor-pointer" />
                                    </div>
                                </div>
                            </div>
                            <div className=" h-[8rem] w-[15rem] text-right mt-[0.8rem] mr-[1rem]">
                                <span className="text-xl block text-[blue]"> دوره های جاوا اسکریپت </span>
                                <span className="text-lg block mt-[0.5rem]"> استاد بهر </span>
                                <span className="text-lg block mt-[0.5rem]"> ظرفیت ۵۹ </span>

                            </div>

                            <div className=" h-[9rem] w-[8rem]">
                                <img src={js} className="h-[9rem] w-[8rem]" />
                            </div>
                        </div>

                    </div>

                </div>
            </div>


        </>



    );
};

export { Sabad };
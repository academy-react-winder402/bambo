import React,{useState,useEffect} from "react";
import js from '../../../assets/img/courses/js.png';


const ModalCourse = ({isVisible,onclose,modaldata}) => {
    if(!isVisible) return null;


    return (
        <div className="h-[46rem] w-[96rem]  z-10   fixed inset-0 backdrop-blur-sm bg-opacity-25" >
            <div className="h-[35rem] w-[40rem] bg-[#fff] m-auto mt-[5rem] relative   ">
                <h1 className="text-2xl text-right mr-[2rem] pt-[2rem] text-[#004458]" > {modaldata.title} </h1>
                <span className="block text-right mr-[2rem] pt-[2rem] text-xl text-[#3E7788]"> مدرس :  {modaldata.teacherName} </span>
                <span className="block text-right mr-[2rem] pt-[2rem] text-xl text-[#3E7788]"> ظرفیت : {modaldata.capacity} نفر </span>
                <span className="block text-right mr-[2rem] pt-[2rem] text-xl text-[#3E7788]"> {modaldata.startTime} : تاریخ شروع   </span>
                <span className="block text-right mr-[2rem] pt-[2rem] text-xl text-[#3E7788]"> {modaldata.endTime} : تاریخ پایان </span>
                <span className="block text-right mr-[2rem] pt-[2rem] text-xl text-[#3E7788]"> <span> قیمت</span> : <span className="text-[#09B28B]"> تومان {modaldata.cost} </span></span>

                <div className="h-[1rem] w-[1rem] bg-[url('./././assets/img/landing/close.png')] bg-no-repeat bg-cover absolute 
                top-[0.5rem] left-[0.5rem] hover:cursor-pointer" onClick={() =>{onclose()}}> </div>
                <div className="border-b-2 border-solid border-[#004458] mt-[1rem] w-[35rem] m-auto"> </div>
                <div className=" h-[4rem] w-[8rem] mt-[1rem] ml-[3rem]  bg-[#DBDBDB]
                                text-center leading-[3.7rem] rounded-md hover:cursor-pointer"> مشاهده دوره </div>

                <div className=" h-[15rem] w-[15rem] absolute top-[2rem] left-[2rem]"> 
                    <img src={modaldata.imageAddress} className="h-[15rem] w-[15rem]"/>
                </div>                
            </div>
        </div>
    );
};

export { ModalCourse };
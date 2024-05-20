import React from "react";
import Logoregister from "../../assets/img/register/logoregister.jpg"
import insta from "../../assets/img/register/img.icons8.png"
import tele from "../../assets/img/register/tele.jpg"
import whats from "../../assets/img/register/whats.png"
import yout from "../../assets/img/register/yout.jpg"
import home from "../../assets/img/register/home1.png"
import logo from "../../assets/img/landing/logo.png"
import { useNavigate } from "react-router-dom";

const RegisterRight = () => {
    const navigator = useNavigate();
    const gotolayout = () => {
        return (
            navigator("/")
        );
    };
    return (
        <div className="lg:w-[45%] lg:h-[730px] lg:relative  
        md:w-[45%] md:h-[730px] md:relative  
        sm:w-[100%] sm:h-[40%] sm:relative
        xs:w-[100%] xs:h-[40%] xs:relative
        " >
            <img src={Logoregister} className="lg:w-[100%]  lg:h-[100%]
            md:w-[100%]  md:h-[100%]
            sm:w-[100%] sm:h-[100%]
            xs:w-[100%] xs:h-[100%]
             "></img>
            <div className=" lg:w-[100%]  lg:h-[100%]   lg:bg-[#004458]  lg:absolute  lg:bottom-0  lg:left-0  lg:opacity-90  lg:flex  lg:justify-center
            md:w-[100%]  md:h-[100%]   md:bg-[#004458]  md:absolute  md:bottom-0  md:left-0  md:opacity-90  md:flex  md:justify-center  
            sm:w-[100%] sm:h-[100%]  sm:bg-[#004458]  sm:absolute  sm:bottom-0  sm:left-0  sm:opacity-90  sm:flex  sm:justify-center 
            xs:w-[100%] xs:h-[100%]  xs:bg-[#004458]  xs:absolute  xs:bottom-0  xs:left-0  xs:opacity-90  xs:flex  xs:justify-center 
            ">
                <div className="  lg:w-[250px]  lg:h-[100px]  lg:m-auto
                 md:w-[250px]  md:h-[100px]  md:m-auto
                 sm:w-[250px]  sm:h-[80px]  sm:m-auto
                 xs:w-[250px]  xs:h-[80px]  xs:m-auto
                " >
                    <img className="sm:w-[30px] sm:h-[30px] lg:hidden md:hidden sm:block sm:m-auto  xs:block xs:m-auto xs:w-[30px] xs:h-[30px]" src={logo}></img>
                    <div className=" lg:h-[50px]  lg:border-b-2  lg:border-[#ccc]  lg:text-[20px]  lg:text-[#ffff]  lg:text-center  lg:leading-[45px]
                    md:h-[50px]  md:border-b-2  md:border-[#ccc]  md:text-[20px]  md:text-[#ffff]  md:text-center  md:leading-[45px]
                    xs:h-[37px]   xs:border-b-2   xs:border-[#ccc]  xs:text-[20px]   xs:text-[#ffff]  xs:text-center  xs:leading-[25px]
                    sm:h-[37px]   sm:border-b-2   sm:border-[#ccc]  sm:text-[20px]   sm:text-[#ffff]  sm:text-center  sm:leading-[25px]
                    "> آکادمی آموزشی بامبو</div>

                    <div className=" lg:h-[50px]  lg:flex  lg:justify-between  lg:my-[5px]
                    md:h-[50px]  md:flex  md:justify-between  md:my-[5px]
                    sm:h-[50px]  sm:flex  sm:justify-between  sm:my-[5px]
                    xs:h-[50px]  xs:flex  xs:justify-between  xs:my-[5px]
                    
                    ">
                        <img src={insta} className=" lg:w-[40px]  lg:h-[40px] md:w-[40px]  md:h-[40px] sm:hidden  xs:hidden"></img>
                        <img src={tele} className=" lg:w-[40px]  lg:h-[40px]  md:w-[40px]  md:h-[40px] sm:hidden xs:hidden"></img>
                        <img src={whats} className=" lg:w-[35px]  lg:h-[35px]  md:w-[40px]  md:h-[40px] sm:hidden  xs:hidden"></img>
                        <img src={yout} className=" lg:w-[40px]  lg:h-[40px]  md:w-[40px]  md:h-[40px] sm:hidden  xs:hidden"></img>
                        <div onClick={gotolayout}> <img src={home} className=" lg:w-[33px]  lg:h-[33px] md:w-[33px]  md:h-[33px] cursor-pointer sm:w-[33px]  sm:h-[33px] xs:w-[33px]  xs:h-[33px]
                        sm:m-auto xs:m-auto sm:mt-[5px] xs:mt-[5px]
                        " ></img></div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export { RegisterRight };
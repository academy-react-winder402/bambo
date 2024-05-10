import React from "react";
import Logoregister from "./../../assets/img/register/logoregister.jpg"
import insta from "./../../assets/img/register/img.icons8.png"
import tele from "./../../assets/img/register/tele.jpg"
import whats from "./../../assets/img/register/whats.png"
import yout from "./../../assets/img/register/yout.jpg"
import home from "./../../assets/img/register/home1.png"
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
        sm:w-[100%] sm:h-[40%] sm:relative
        " >
            <img src={Logoregister} className="lg:w-[100%]  lg:h-[100%]
            sm:w-[100%] sm:h-[100%]
             "></img>
            <div className=" lg:w-[100%]  lg:h-[100%]   lg:bg-[#004458]  lg:absolute  lg:bottom-0  lg:left-0  lg:opacity-90  lg:flex  lg:justify-center 
            sm:w-[100%] sm:h-[100%]  sm:bg-[#004458]  sm:absolute  sm:bottom-0  sm:left-0  sm:opacity-90  sm:flex  sm:justify-center 
            ">
                <div className="  lg:w-[250px]  lg:h-[100px]  lg:m-auto
                 sm:w-[250px]  sm:h-[80px]  sm:m-auto
                " >
                      <img className="sm:w-[30px] sm:h-[30px] lg:hidden sm:block sm:m-auto" src={logo}></img>
                    <div className=" lg:h-[50px]  lg:border-b-2  lg:border-[#ccc]  lg:text-[20px]  lg:text-[#ffff]  lg:text-center  lg:leading-[45px]
                     sm:h-[37px]   sm:border-b-2   sm:border-[#ccc]  sm:text-[20px]   sm:text-[#ffff]  sm:text-center  sm:leading-[45px]
                    "> آکادمی آموزشی بامبو</div>
                  
                    <div className=" lg:h-[50px]  lg:flex  lg:justify-between  lg:my-[5px]
                    sm:hidden
                    ">
                        <img src={insta} className=" lg:w-[40px]  lg:h-[40px] sm:hidden  lg:block"></img>
                        <img src={tele} className=" lg:w-[40px]  lg:h-[40px] sm:hidden lg:block"></img>
                        <img src={whats} className=" lg:w-[35px]  lg:h-[35px] sm:hidden lg:block"></img>
                        <img src={yout} className=" lg:w-[40px]  lg:h-[40px] sm:hidden lg:block"></img>
                        <div onClick={gotolayout}> <img src={home} className=" lg:w-[33px]  lg:h-[33px] cursor-pointer sm:hidden lg:block" ></img></div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export { RegisterRight };
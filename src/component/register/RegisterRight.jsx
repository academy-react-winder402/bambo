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
        xs:w-[100%] xs:h-[40%] xs:relative
        " >
            <img src={Logoregister} className="lg:w-[100%]  lg:h-[100%]
            sm:w-[100%] sm:h-[100%]
            xs:w-[100%] xs:h-[100%]
             "></img>
            <div className=" lg:w-[100%]  lg:h-[100%]   lg:bg-[#004458]  lg:absolute  lg:bottom-0  lg:left-0  lg:opacity-90  lg:flex  lg:justify-center 
            sm:w-[100%] sm:h-[100%]  sm:bg-[#004458]  sm:absolute  sm:bottom-0  sm:left-0  sm:opacity-90  sm:flex  sm:justify-center 
            xs:w-[100%] xs:h-[100%]  xs:bg-[#004458]  xs:absolute  xs:bottom-0  xs:left-0  xs:opacity-90  xs:flex  xs:justify-center 
            ">
                <div className="  lg:w-[250px]  lg:h-[100px]  lg:m-auto
                 sm:w-[250px]  sm:h-[80px]  sm:m-auto
                 xs:w-[250px]  xs:h-[80px]  xs:m-auto
                " >
                      <img className="sm:w-[30px] sm:h-[30px] lg:hidden sm:block sm:m-auto  xs:block xs:m-auto xs:w-[30px] xs:h-[30px]" src={logo}></img>
                    <div className=" lg:h-[50px]  lg:border-b-2  lg:border-[#ccc]  lg:text-[20px]  lg:text-[#ffff]  lg:text-center  lg:leading-[45px]
                     xs:h-[37px]   xs:border-b-2   xs:border-[#ccc]  xs:text-[20px]   xs:text-[#ffff]  xs:text-center  xs:leading-[25px]
                    sm:h-[37px]   sm:border-b-2   sm:border-[#ccc]  sm:text-[20px]   sm:text-[#ffff]  sm:text-center  sm:leading-[25px]
                    "> آکادمی آموزشی بامبو</div>
                  
                    <div className=" lg:h-[50px]  lg:flex  lg:justify-between  lg:my-[5px]
                    
                    ">
                        <img src={insta} className=" lg:w-[40px]  lg:h-[40px] sm:hidden  lg:block xs:hidden"></img>
                        <img src={tele} className=" lg:w-[40px]  lg:h-[40px] sm:hidden lg:block xs:hidden"></img>
                        <img src={whats} className=" lg:w-[35px]  lg:h-[35px] sm:hidden lg:block xs:hidden"></img>
                        <img src={yout} className=" lg:w-[40px]  lg:h-[40px] sm:hidden lg:block xs:hidden"></img>
                        <div onClick={gotolayout}> <img src={home} className=" lg:w-[33px]  lg:h-[33px] cursor-pointer sm:w-[33px]  sm:h-[33px] xs:w-[33px]  xs:h-[33px]
                        sm:m-auto xs:m-auto sm:mt-[5px] xs:mt-[5px]
                        " ></img></div>
                    </div>
                </div>
            </div>

        </div>

    ); 
};

export { RegisterRight };
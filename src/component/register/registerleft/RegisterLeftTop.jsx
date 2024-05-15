import React from "react";
import home from "../../../assets/img/register/home1.png"
import left from "../../../assets/img/register/left.png"
import { useNavigate } from "react-router-dom";
const RegisterLeftTop =({gotoleft}) =>{
    const navigator = useNavigate();
    const gotohome =()=>{
        return (
            navigator("/")

        );  
    };
    return(
        <div className="lg:h-[60px] w-[100%] lg:text-[25px] lg:text-black  lg:pt-[15px] lg:text-right lg:pr-[40px]
        md:h-[60px] md:w-[100%] md:text-[17px] md:text-black   md:text-right md:pr-[40px]
            sm:h-[60px]    sm:text-[25px] sm:text-black  sm:py-[15px] sm:text-right sm:pr-[40px]
            xs:h-[50px]   xs:text-[25px] xs:text-black xs:py-[15px] xs:text-right xs:pr-[40px]
            xs:flex
            ">ثبت نام 
           
            <img src={left} onClick={gotoleft} className=" lg:w-[30px] lg:h-[30px] lg:mr-[400px] lg:cursor-pointer md:w-[30px] md:h-[30px] md:mr-[250px] md:cursor-pointer 
            sm:w-[30px] sm:h-[30px] sm:mr-[300px] sm:cursor-pointer xs:w-[30px] h-[30px] xs:mr-[210px] cursor-pointer"></img>
            </div>
    );
};
export {RegisterLeftTop}
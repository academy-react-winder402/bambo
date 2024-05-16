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
        <div className="lg:h-[60px] lg:w-[100%]  lg:flex lg:justify-between
      
            ">
                <div className="lg:h-[45px] lg:w-[30%] lg:mt-[15px] lg:pt-[5px] lg:border-r-[1px] lg:border-r-solid lg:border-r-[black] lg:text-[20px] lg:text-[#fff]  lg:text-center
                lg:border-l-[1px] lg:border-l-solid lg:border-l-[black]
                lg:border-b-[1px] lg:border-b-solid lg:border-b-[black]
               lg:rounded-l-[0.8em] lg:bg-[#004458]
                ">ثبت نام </div>
           
            <img src={left} onClick={gotoleft} className=" lg:w-[30px] lg:h-[30px]  lg:cursor-pointer lg:mt-[20px] lg:ml-[15px]
"></img>
            </div>
    );
};
export {RegisterLeftTop}
import React from "react";
import logo from '../../assets/img/landing/logo.png';
import { NavLink } from "react-router-dom";
import shopp from '../../assets/img/landing/shopp.png';
import { DarkModeSwitch } from "./darkmod/Darkmode";

const Header = () => {
    
    return (
        <div className="border-b border-solid border-[#D1D1D1]  w-11/12 h-14 m-auto flex justify-between relative font-sans dark:bg-[#4040406c] ">
            <div className=" w-36 flex justify-between ">
                <NavLink to='/register' className=" w-6/12 text-center leading-[3.2rem] hover:bg-[#004458] cursor-pointer text-white "> ثبت نام </NavLink>
                <NavLink to="/login" className=" w-6/12 text-center leading-[3.2rem] hover:bg-[#004458] cursor-pointer text-white "> ورود </NavLink>
            </div>

            <NavLink to="/sabadkharid" className=" h-[3.4rem] w-[5rem] absolute top-[0rem] left-[10rem] hover:cursor-pointer hover:bg-[#004458]">  
                    <img src={shopp} className="h-[2rem] w-[2rem] m-auto mt-[0.8rem]" />
                 </NavLink>

            <div className=" w-1/3 flex justify-between ">
                <NavLink to="/course" className=" w-3/12 text-center leading-[3.2rem] hover:bg-[#004458] cursor-pointer text-white "> دوره ها </NavLink>
                <NavLink to="/article" className=" w-3/12 text-center leading-[3.2rem] hover:bg-[#004458] cursor-pointer text-white "> مقالات </NavLink>
                <div className=" w-3/12 text-center leading-[3.2rem] hover:bg-[#004458] cursor-pointer text-white "> خدمات </div>
                <NavLink to="/about" className=" w-3/12 text-center leading-[3.2rem] hover:bg-[#004458] cursor-pointer text-white " > درباره ما </NavLink>
            </div>
            <div className=" w-20 flex justify-between">
                <div className=" w-14 text-center leading-[3.2rem] text-2xl text-white "> بامبو </div>
                <div className=" w-6">
                    <img src={logo} className="w-5 h-5 mt-[1.1rem]" />
                </div>
            </div>

            <div className=" h-[3.4rem] w-[5rem] absolute top-[0.5rem] left-[15rem] hover:cursor-pointer ">  
                <DarkModeSwitch />
            </div>



        </div>
    );
};

export {Header};
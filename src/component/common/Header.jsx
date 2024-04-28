import React from "react";
import logo from '../../assets/img/landing/logo.png';
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="border-b border-solid border-[#D1D1D1] w-11/12 h-14 m-auto flex justify-between">
            <div className=" w-36 flex justify-between">
                <NavLink to='/register' className=" w-6/12 text-center leading-[3.2rem] hover:bg-[#004458] cursor-pointer text-white"> ثبت نام </NavLink>
                <NavLink to="/login" className=" w-6/12 text-center leading-[3.2rem] hover:bg-[#004458] cursor-pointer text-white"> ورود </NavLink>
            </div>
            <div className=" w-1/3 flex justify-between">
                <div className=" w-3/12 text-center leading-[3.2rem] hover:bg-[#004458] cursor-pointer text-white"> دوره ها </div>
                <div className=" w-3/12 text-center leading-[3.2rem] hover:bg-[#004458] cursor-pointer text-white"> مقالات </div>
                <div className=" w-3/12 text-center leading-[3.2rem] hover:bg-[#004458] cursor-pointer text-white"> خدمات </div>
                <div className=" w-3/12 text-center leading-[3.2rem] hover:bg-[#004458] cursor-pointer text-white"> درباره ما </div>
            </div>
            <div className=" w-20 flex justify-between">
                <div className=" w-14 text-center leading-[3.2rem] text-2xl text-white"> بامبو </div>
                <div className=" w-6">
                    <img src={logo} className="w-5 h-5 mt-[1.1rem]" />
                </div>
            </div>
        </div>
    );
};

export { Header };
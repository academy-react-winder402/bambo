import React from "react";
import not from '../../assets/img/courses/404.jpg';
import { NavLink } from "react-router-dom";

const Notfoundc = () => {
    return (
        <div>
            <div className=" h-[30rem] mb-[5rem] mt-[3rem]">
                <img src={not} className="h-[30rem] m-auto" />
            </div>
            <NavLink to="/" className="border border-solid border-[#004458] h-[4rem] w-[20rem] m-auto mb-[5rem] rounded-md text-center leading-[3.5rem] 
            hover:bg-[#004458] hover:cursor-pointer hover:text-white block" > 
                بازگشت به صفحه اصلی
            </NavLink>

        </div>

    );
};

export { Notfoundc };
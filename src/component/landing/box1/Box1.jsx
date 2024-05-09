import React from "react";
import './Box1.modular.css';
import { Header } from '../../common/Header';
import { Boxsearch } from "../../common/boxsearch/Boxsearch";
import { NavLink } from "react-router-dom";

const Box1 = () => {
    return (
        <div className="h-[46rem] w-[96rem] back ">
            <div className="h-[46rem] bg-[#08856887] relative">
                <Header />
                <div className=" w-[55rem] absolute top-[16rem] left-[36rem] text-5xl font-bold text-white text-right  leading-[4rem]">
                    باید راه بهتری برای اموزش ساخته میشد

                    پس ما ساختیمش
                </div>

                <div className=" w-[600px] absolute top-[26rem] left-[53rem] text-2xl  text-white text-right ">
                    سایت بامبو با هدف تولید و انتشار محتوای با کیفیت اموزشی
                    و همچنین اشنایی جامعه با فضای کسب و کار در فضای
                    مجازی ایجاد شده و امید داریم بتوانیم با راهکار های نوین فرصتی برای افراد خواهان پیشرفت فراهم کنیم
                </div>

                <NavLink to="/course" className=" w-32 h-14 absolute top-[28rem] left-[43rem]
                 bg-slate-100 text-center leading-[3.2rem] text-sm rounded-md hover:bg-[#004458] 
                 cursor-pointer hover:text-white ">
                    مشاهده دوره ها
                </NavLink>
                <div className=" h-14 mt-[39rem]">
                    <Boxsearch styl={"bg-[#004458]"}/>
                </div>

            </div>
        </div>
    );
};

export { Box1 };
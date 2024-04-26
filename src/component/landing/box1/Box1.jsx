import React from "react";
import './Box1.modular.css';
import { Header } from '../../common/Header';
import { Boxsearch } from "../boxsearch/Boxsearch";

const Box1 = () => {
    return (
        <div className="h-[40rem] w-[70rem] back m-auto">
            <div className="h-[40rem] bg-[#08856887] relative">
                <Header />
                <div className=" w-[30rem] absolute top-[15rem] left-[36rem] text-3xl font-bold text-white text-right  leading-[4rem]">
                    باید راه بهتری برای اموزش ساخته میشد

                    پس ما ساختیمش
                </div>

                <div className=" w-[390px] absolute top-[24rem] left-[41.5rem] text-dase  text-white text-right ">
                    سایت بامبو با هدف تولید و انتشار محتوای با کیفیت اموزشی
                    و همچنین اشنایی جامعه با فضای کسب و کار در فضای
                    مجازی ایجاد شده و امید داریم بتوانیم با راهکار های نوین فرصتی برای افراد خواهان پیشرفت فراهم کنیم
                </div>

                <div className=" w-32 h-14 absolute top-[25.5rem] left-[33rem]
                 bg-slate-100 text-center leading-[3.2rem] text-sm rounded-md hover:bg-[#004458] 
                 cursor-pointer hover:text-white ">
                    مشاهده دوره ها
                </div>
                <div className="h-14 mt-[33rem]">
                    <Boxsearch />
                </div>

            </div>
        </div>
    );
};

export { Box1 };
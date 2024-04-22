import React from "react";
import './Content.modular.css';
import { Header } from '../../common/Header';

const Content = () => {
    return (
        <div className="h-[45.7rem] back">
            <div className="h-[45.7rem] bg-[#0885687c] relative">
                <Header />
                <div className=" w-[800px] absolute top-64 left-[700px] text-5xl font-bold text-white ">
                    باید راه بهتری برای اموزش ساخته میشد بس ما ساختیمش
                </div>
            </div>
        </div>
    );
};

export { Content };
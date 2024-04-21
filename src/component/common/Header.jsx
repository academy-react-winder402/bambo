import React from "react";

const Header = () => {
    return (
        <div className="border border-solid border-red-500 w-11/12 h-16 m-auto flex justify-between">
            <div className="border border-solid border-red-500 w-36 flex justify-between">
                <div className="border border-solid border-red-500 w-6/12 text-center leading-[3.2rem]"> ورود </div>
                <div className="border border-solid border-red-500 w-6/12 text-center leading-[3.2rem]"> ثبت نام </div>
            </div>
            <div className="border border-solid border-red-500 w-1/3 flex justify-between">
                <div className="border border-solid border-red-500 w-3/12 text-center leading-[3.2rem]"> دوره ها </div>
                <div className="border border-solid border-red-500 w-3/12 text-center leading-[3.2rem]"> مقالات </div>
                <div className="border border-solid border-red-500 w-3/12 text-center leading-[3.2rem]"> خدمات </div>
                <div className="border border-solid border-red-500 w-3/12 text-center leading-[3.2rem]"> درباره ما </div>
            </div>
            <div className="border border-solid border-red-500 w-36 flex justify-between">
                <div className="border border-solid border-red-500 w-6/12 text-center leading-[3.2rem]"> بامبو </div>
                <div className="border border-solid border-red-500 w-6/12"> </div>
            </div>
        </div>
    );
};

export { Header };
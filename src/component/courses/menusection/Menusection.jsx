import React from "react";
import { Menu } from "./menu/Menu";

const menuList = [
    { name: 'تکمیل نشده ' },
    { name: 'گران ترین ها ' },
    { name: 'جدید ترین ها ' },
    { name: "همه دوره ها " },  
];

const Menusection = () => {
    return (

        <div className="h-[6rem] w-full flex justify-between">

            <div className=" h-[3rem] w-[50rem] inline-block mt-[0.9rem]">
                <Menu menulist={menuList}/>
            </div>

            <h1 className="text-4xl inline-block mr-[4.5rem] mt-[1rem]"> دوره های آموزشی </h1>

        </div>
    );
};

export { Menusection };
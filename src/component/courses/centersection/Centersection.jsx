import React, { useState } from "react";
import { Item } from "./items/Item";
import js from "../../../assets/img/courses/js.png";
import { Filter } from "./filter/Filter";

const Centersection = () => {

    const [Itemlist, setItemlist] = useState([
        { im: js, title: "دوره جاوا اسکریپت", modares: "بیل گیتس", zarfiat: "۵۹", price: "200,000" },
        { im: js, title: "دوره سی شارپ", modares: "بیل گیتس", zarfiat: "۵۹", price: "200,000" },
        { im: js, title: "دوره جاوا اسکریپت", modares: "بیل گیتس", zarfiat: "۵۹", price: "200,000" },
        { im: js, title: "دوره جاوا اسکریپت", modares: "بیل گیتس", zarfiat: "۵۹", price: "200,000" },
        { im: js, title: "دوره جاوا اسکریپت", modares: "بیل گیتس", zarfiat: "۵۹", price: "200,000" },
        { im: js, title: "دوره جاوا اسکریپت", modares: "بیل گیتس", zarfiat: "۵۹", price: "200,000" },
        { im: js, title: "دوره جاوا اسکریپت", modares: "بیل گیتس", zarfiat: "۵۹", price: "200,000" },
        { im: js, title: "دوره جاوا اسکریپت", modares: "بیل گیتس", zarfiat: "۵۹", price: "200,000" },
    ]);

    const [itemspage, setitemspage] = useState(4);
    const [currentpage, setcurrentpage] = useState(0);


    const numoftotalpages = Math.ceil(Itemlist.length / itemspage);
    const pages = [...Array(numoftotalpages + 1).keys()].slice(1);



    const indexoflastitem = currentpage + itemspage;

    const indexoffirstitem = indexoflastitem - itemspage;

    const visibleitem = Itemlist.slice(indexoffirstitem, indexoflastitem);

    const prevpagehandles = () => {
        if (currentpage !== 1) {
            setcurrentpage(currentpage - 1);

        };
    };

    const nextpagehandles = () => {
        if (currentpage !== numoftotalpages) {
            setcurrentpage(currentpage + 1);

        };
    };


    return (

        <div className="mt-[1.2rem] flex justify-between">

            

            <div className=" w-[70.3rem] ml-[2rem]  flex flex-wrap ">

                {visibleitem.map((item, index) => {
                    return (<Item key={index} im={item.im} title={item.title} modares={item.modares} zarfiat={item.zarfiat} price={item.price} />);
                })}

                <div className="  h-[2rem] flex gap-2 m-auto mb-[2rem] w-full justify-center">
                    
                    <div onClick={prevpagehandles} className="border border-solid border-[#D1D1D1] text-lg p-[0.6rem] leading-[0.5rem] hover:bg-[#004458] 
    hover:cursor-pointer hover:text-white "> prev </div>
                    <p> {pages.map(page => <span key={page} onClick={() => setcurrentpage(page)}
                        className="border border-solid border-[#D1D1D1] w-[2rem] h-[2rem] text-center leading-7 inline-block hover:bg-[#004458]
         hover:cursor-pointer hover:text-white "> {`${page}`} </span>)} </p>
                    <div onClick={nextpagehandles} className="border border-solid border-[#D1D1D1] text-lg p-[0.6rem] leading-[0.5rem] hover:bg-[#004458]
     hover:cursor-pointer hover:text-white"> next </div>
                </div>

            </div>

            <Filter />
        </div>


    );
};

export { Centersection };
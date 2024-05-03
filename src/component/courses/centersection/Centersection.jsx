import React, { useState } from "react";
import { Item } from "./items/Item";
import js from "../../../assets/img/courses/js.png";

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
    const [currentpage, setcurrentpage] = useState(1);


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
        <div className=" w-[70.3rem] ml-[2rem] mt-[1.2rem] flex flex-wrap ">
            
            {visibleitem.map((item, index) => {
                return (<Item key={index} im={item.im} title={item.title} modares={item.modares} zarfiat={item.zarfiat} price={item.price} />);
            })}

            <span onClick={prevpagehandles}> prev </span>
            <p> {pages.map(page => <span key={page} onClick={() => setcurrentpage(page)}
                className={` ${currentpage === page ? 'active' : " bg-green-500"}`}> {`${page} | `} </span>)} </p>
            <span onClick={nextpagehandles}> next </span>
            
        </div>
    );
};

export { Centersection };
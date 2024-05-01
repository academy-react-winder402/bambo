import React, { useState } from "react";
import { Item } from "./items/Item";
import js from "../../../assets/img/courses/js.png";

const Centersection = () => {

    const [Itemlist, setItemlist] = useState([
        {im:js , title:"دوره جاوا اسکریپت" , modares:"بیل گیتس", zarfiat:"۵۹", price:"200,000" },
        {im:js , title:"دوره سی شارپ" , modares:"بیل گیتس", zarfiat:"۵۹", price:"200,000" },
        {im:js , title:"دوره جاوا اسکریپت" , modares:"بیل گیتس", zarfiat:"۵۹", price:"200,000" },
        {im:js , title:"دوره جاوا اسکریپت" , modares:"بیل گیتس", zarfiat:"۵۹", price:"200,000" },
        {im:js , title:"دوره جاوا اسکریپت" , modares:"بیل گیتس", zarfiat:"۵۹", price:"200,000" },
        {im:js , title:"دوره جاوا اسکریپت" , modares:"بیل گیتس", zarfiat:"۵۹", price:"200,000" },
        {im:js , title:"دوره جاوا اسکریپت" , modares:"بیل گیتس", zarfiat:"۵۹", price:"200,000" },
        {im:js , title:"دوره جاوا اسکریپت" , modares:"بیل گیتس", zarfiat:"۵۹", price:"200,000" },
    ]) ;


    return (
        <div className=" w-[70.3rem] ml-[2rem] mt-[1.2rem] flex flex-wrap ">
            {Itemlist.map((item, index) => {
                return(<Item key={index} im={item.im} title={item.title} modares={item.modares} zarfiat={item.zarfiat} price={item.price} />);
            })};
            
        </div>
    );
};

export { Centersection };
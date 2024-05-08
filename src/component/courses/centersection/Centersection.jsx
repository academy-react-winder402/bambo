import React, { useState } from "react";
import { Item } from "./items/Item";
import js from "../../../assets/img/courses/js.png";
import { Filter } from "./filter/Filter";
import paython from '../../../assets/img/courses/paython.png';
import { Item2 } from "./items2/items2";


const Centersection = () => {

    const [Itemlist, setItemlist] = useState([
        {},
        { im: paython, title: "دوره جاوا اسکریپت", modares: "بیل گیتس", zarfiat: "۵۹", price: "200,000" },
        { im: js, title: "دوره سی شارپ", modares: "بیل گیتس", zarfiat: "۵۹", price: "200,000" },
        { im: js, title: "دوره جاوا اسکریپت", modares: "بیل گیتس", zarfiat: "۵۹", price: "200,000" },
        { im: js, title: "دوره جاوا اسکریپت", modares: "بیل گیتس", zarfiat: "۵۹", price: "200,000" },
        { im: js, title: "دوره جاوا اسکریپت", modares: "بیل گیتس", zarfiat: "۵۹", price: "200,000" },
        { im: js, title: "دوره جاوا اسکریپت", modares: "بیل گیتس", zarfiat: "۵۹", price: "200,000" },
        { im: js, title: "دوره جاوا اسکریپت", modares: "بیل گیتس", zarfiat: "۵۹", price: "200,000" },
        { im: js, title: "دوره جاوا اسکریپت", modares: "بیل گیتس", zarfiat: "۵۹", price: "200,000" },
        { im: js, title: "دوره جاوا اسکریپت", modares: "بیل گیتس", zarfiat: "۵۹", price: "200,000" },
        { im: js, title: "دوره جاوا اسکریپت", modares: "بیل گیتس", zarfiat: "۵۹", price: "200,000" },
        { im: js, title: "دوره جاوا اسکریپت", modares: "بیل گیتس", zarfiat: "۵۹", price: "200,000" },
        { im: js, title: "دوره جاوا اسکریپت", modares: "بیل گیتس", zarfiat: "۵۹", price: "200,000" },
        { im: js, title: "دوره جاوا اسکریپت", modares: "بیل گیتس", zarfiat: "۵۹", price: "200,000" },
        { im: js, title: "دوره جاوا اسکریپت", modares: "بیل گیتس", zarfiat: "۵۹", price: "200,000" },
        { im: js, title: "دوره جاوا اسکریپت", modares: "بیل گیتس", zarfiat: "۵۹", price: "200,000" },
        { im: js, title: "دوره جاوا اسکریپت", modares: "بیل گیتس", zarfiat: "۵۹", price: "200,000" },
    ]);

    const [itemspage, setitemspage] = useState(8);
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

    const [page, setpage] = useState(1);

    const updatetab = (id) => {
        setpage(id);
    };


    return (



        <>

            <div className="h-[6rem] w-full flex justify-between">

                <div className="  h-[3rem] w-[10rem] flex gap-[0.5rem] mt-[2rem] ml-[4rem]">
                    <div className={ page === 2 ? "h-[3rem] w-[3rem] bg-[url(./././assets/img/courses/listamodi.png)] bg-no-repeat bg-cover hover:cursor-pointer bg-[#fff]" 
                    : "h-[3rem] w-[3rem] bg-[url(./././assets/img/courses/listamodi.png)] bg-no-repeat bg-cover hover:cursor-pointer "} onClick={() => updatetab(2)}> </div>
                    <div className={page === 1 ? " h-[3rem] w-[3rem] bg-[url(./././assets/img/courses/listofoghi.png)] bg-no-repeat bg-cover hover:cursor-pointer bg-[#fff]" 
                    :" h-[3rem] w-[3rem] bg-[url(./././assets/img/courses/listofoghi.png)] bg-no-repeat bg-cover hover:cursor-pointer"} onClick={() => updatetab(1)}> </div>
                </div>
                <h1 className="text-4xl inline-block mr-[4.5rem] mt-[1.5rem]"> دوره های آموزشی </h1>

            </div>

            <div className="  mt-[1.2rem] flex justify-between">

                <div className=" w-[74rem] ml-[2rem] ">


                    <div className={page === 1 ? "flex flex-wrap" : "hidden"}>
                        {
                            visibleitem.map((item, index) => {
                                return (<Item key={index} im={item.im} title={item.title} modares={item.modares} zarfiat={item.zarfiat} price={item.price} />);
                            })
                        }
                    </div>

                    <div className={page === 2 ? "flex flex-wrap" : "hidden"}>
                        {
                            visibleitem.map((item, index) => {
                                return (<Item2 key={index} im={item.im} title={item.title} modares={item.modares} zarfiat={item.zarfiat} price={item.price} />);
                            })
                        }
                    </div>

                    <div className="  h-[2rem] flex gap-2 m-auto mb-[2rem] w-full justify-center">

                        <div onClick={prevpagehandles} className="border border-solid border-[#D1D1D1] text-lg p-[0.6rem] leading-[0.5rem] hover:bg-[#004458] 
                        hover:cursor-pointer hover:text-white bg-[#fff] rounded-md"> prev </div>
                        <p> {pages.map(page => <span key={page} onClick={() => setcurrentpage(page)}
                            className={page === currentpage ? "border border-solid border-[#D1D1D1] w-[2rem] h-[2rem] text-center leading-7 inline-block hover:bg-[#004458] hover:cursor-pointer hover:text-white bg-[#004458] text-white" 
                            : "border border-solid border-[#D1D1D1] w-[2rem] h-[2rem] text-center leading-7 inline-block hover:bg-[#004458] hover:cursor-pointer hover:text-white bg-[#fff] "}> {`${page}`} </span>)} </p>
                        <div onClick={nextpagehandles} className="border border-solid border-[#D1D1D1] text-lg p-[0.6rem] leading-[0.5rem] hover:bg-[#004458]
                        hover:cursor-pointer hover:text-white bg-[#fff] rounded-md"> next </div>
                    </div>

                </div>

                <Filter />
            </div>

        </>




    );
};

export { Centersection };
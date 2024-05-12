import React, { useState } from "react";
import jss from '../../../assets/img/courses/js.png';
import python from '../../../assets/img/courses/paython.png';
import { Grid } from './grid/Grid';
import { Grid2 } from './grid2/Grid2';


const Contentarticle = () => {

    const [gridlist, setgridlist] = useState([

        { },
        { im: python, title: "چطور یک پروژه برنامه نویسی را مرحله به مرحله بسازیم؟" },
        { im: python, title: "چطور یک پروژه برنامه نویسی را مرحله به مرحله بسازیم؟" },
        { im: python, title: "چطور یک پروژه برنامه نویسی را مرحله به مرحله بسازیم؟" },
        { im: python, title: "چطور یک پروژه برنامه رحله به مرحله بسازیم؟" },
        { im: jss, title: "چطور یک پروژه برنامه نویسی را مرحله به مرحله بسازیم؟" },
        { im: jss, title: "چطور یک پروژه برنامه نویسی را مرحله به مرحله بسازیم؟" },
        { im: jss, title: "چطور یک پروژه برنامه نویسی را مرحله به مرحله بسازیم؟" },
        { im: jss, title: "چطور یک پروژه برنامه نویسی را مرحله به سازیم؟" },
        { im: jss, title: "چطور یک پروژه برنامه نویسی را مرحله به مرحله بسازیم؟" },
        { im: jss, title: "چطور یک پروژهه بسازیم؟" },
        { im: jss, title: "چطور یک پروژه برنامه نویسی را مرحله به مرحله بسازیم؟" },
        { im: jss, title: "چطور یک پروژه برنامه نویسی را مرحله به مرحله بسازیم؟" },
        { im: jss, title: "چطور یک پروژه برنامه نویسی را مرحله به مرحله بسازیم؟" },
        { im: jss, title: "چطور مرحله بسازیم؟" },
        { im: jss, title: "چطور یک پروژه برنامه نویسی را مرحله به مرحله بسازیم؟" },
    ]);

    
    const [gridlistakhbar, setgridlistakhbar] = useState([

        { },
        { im: jss, title: "چطور یک پروژه برنامه نویسی را مرحله به مرحله بسازیم؟" },
        { im: jss, title: "چطور یک پروژه برنامه نویسی را مرحله به مرحله بسازیم؟" },
        { im: jss, title: "چطور یک پروژه برنامه رحله به مرحله بسازیم؟" },
        { im: jss, title: "چطور یک پروژه برنامه نویسی را مرحله به مرحله بسازیم؟" },
        { im: jss, title: "چطور یک پروژه برنامه نویسی را مرحله به مرحله بسازیم؟" },
        { im: jss, title: "چطور یک پروژه برنامه نویسی را مرحله به مرحله بسازیم؟" },
        { im: jss, title: "چطور یک پروژه برنامه نویسی را مرحله به مرحله بسازیم؟" },
        { im: jss, title: "چطور یک پروژه برنامه نویسی را مرحله به مرحله بسازیم؟" },
        { im: jss, title: "چطور یک پروژه برنامه نویسی را مرحله به سازیم؟" },
        { im: jss, title: "چطور یک پروژه برنامه نویسی را مرحله به مرحله بسازیم؟" },
        { im: jss, title: "چطور یک پروژهه بسازیم؟" },
        { im: jss, title: "چطور یک پروژه برنامه نویسی را مرحله به مرحله بسازیم؟" },
        { im: jss, title: "چطور یک پروژه برنامه نویسی را مرحله به مرحله بسازیم؟" },
        { im: jss, title: "چطور یک پروژه برنامه نویسی را مرحله به مرحله بسازیم؟" },
        { im: jss, title: "چطور مرحله بسازیم؟" },
        { im: jss, title: "چطور یک پروژه برنامه نویسی را مرحله به مرحله بسازیم؟" },
    ]);

    const [gridpage, setgridpage] = useState(8);
    const [currentpage, setcurrentpage] = useState(1);

    const [gridpageakhbar, setgridpageakhbar] = useState(8);
    const [currentpageakhbar, setcurrentpageakhbar] = useState(1);


    const numoftotalpages = Math.ceil(gridlist.length / gridpage);
    const pages = [...Array(numoftotalpages + 1).keys()].slice(1);

    const numoftotalpagesakhbar = Math.ceil(gridlistakhbar.length / gridpageakhbar);
    const pagesakhbar = [...Array(numoftotalpagesakhbar + 1).keys()].slice(1);

    const indexoflastitem = currentpage + gridpage;

    const indexoffirstitem = indexoflastitem - gridpage;

    const visibleitem = gridlist.slice(indexoffirstitem, indexoflastitem);


    const indexoflastitem2 = currentpageakhbar + gridpageakhbar;

    const indexoffirstitem2 = indexoflastitem2 - gridpageakhbar;

    const visibleitem2 = gridlistakhbar.slice(indexoffirstitem2, indexoflastitem2);

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

    const [page, setpage] = useState(2);

    const updatetab = (id) => {
        setpage(id);
    };


    const [itemm, setitem] = useState(2);

    const updateitem = (id) => {
        setitem(id);
    };




    return (
        <>
            <div className="h-[6rem] w-full flex justify-between font-sans">

                <div className="  h-[3rem] w-[10rem] flex gap-[0.5rem] mt-[2rem] ml-[4rem]">
                    <div className={page === 2 ? "h-[3rem] w-[3rem] bg-[url(./././assets/img/courses/listamodi.png)] bg-no-repeat bg-cover hover:cursor-pointer bg-[#fff]"
                        : "h-[3rem] w-[3rem] bg-[url(./././assets/img/courses/listamodi.png)] bg-no-repeat bg-cover hover:cursor-pointer "} onClick={() => updatetab(2)}> </div>
                    <div className={page === 1 ? " h-[3rem] w-[3rem] bg-[url(./././assets/img/courses/listofoghi.png)] bg-no-repeat bg-cover hover:cursor-pointer bg-[#fff]"
                        : " h-[3rem] w-[3rem] bg-[url(./././assets/img/courses/listofoghi.png)] bg-no-repeat bg-cover hover:cursor-pointer"} onClick={() => updatetab(1)}> </div>
                </div>
                <h1 className="text-4xl inline-block mr-[4.5rem] mt-[1.5rem]"> اخبار و مقالات </h1>

            </div>


            <div className=" h-[3rem] w-[60rem] m-auto flex font-sans">

                <div className={itemm === 2 ? " border-b-4 border-solid border-[#004458] h-[3rem] w-[30rem] text-center text-[#004458] text-3xl leading-10 hover:cursor-pointer" : " border-b-2 border-solid border-[#004458] h-[3rem] w-[30rem] text-center text-[#004458] text-2xl leading-10 hover:cursor-pointer"}
                    onClick={() => { updateitem(2) }}> اخبار </div>
                <div className={itemm === 1 ? " border-b-4 border-solid border-[#004458] h-[3rem] w-[30rem] text-center text-[#004458] text-3xl leading-10 hover:cursor-pointer" : " border-b-2 border-solid border-[#004458] h-[3rem] w-[30rem] text-center text-[#004458] text-2xl leading-10 hover:cursor-pointer"}
                    onClick={() => { updateitem(1) }}> مقالات </div>

            </div>



            <div className={itemm === 2 ? "mt-[3rem] pb-[1rem] font-sans" : "hidden"}>
                <div className=" w-[74rem] m-auto">
                    <div className={page === 1 ? "flex flex-wrap" : "hidden"}>
                        {
                            visibleitem2.map((item, index) => {
                                return (<Grid2 key={index} im={item.im} title={item.title} />);
                            })
                        }
                    </div>

                    <div className={page === 2 ? "flex flex-wrap" : "hidden"}>
                        {visibleitem2.map((item, index) => {
                            return (<Grid key={index} im={item.im} title={item.title} />);
                        })}
                    </div>



                    <div className="  h-[2rem] flex gap-2 m-auto mb-[2rem] w-full justify-center">

                        <div onClick={prevpagehandles} className="border border-solid border-[#D1D1D1] text-lg p-[0.6rem] leading-[0.5rem] hover:bg-[#004458] 
                                                                    hover:cursor-pointer hover:text-white bg-[#fff] rounded-md"> prev </div>
                        <p> {pagesakhbar.map(page => <span key={page} onClick={() => setcurrentpageakhbar(page)}
                            className={page === currentpageakhbar ? "border border-solid border-[#D1D1D1] w-[2rem] h-[2rem] text-center leading-7 inline-block hover:bg-[#004458] hover:cursor-pointer hover:text-white bg-[#004458] text-white" 
                            : "border border-solid border-[#D1D1D1] w-[2rem] h-[2rem] text-center leading-7 inline-block hover:bg-[#004458] hover:cursor-pointer hover:text-white bg-[#fff] "}> {`${page}`} </span>)} </p>
                        <div onClick={nextpagehandles} className="border border-solid border-[#D1D1D1] text-lg p-[0.6rem] leading-[0.5rem] hover:bg-[#004458]
                                                                hover:cursor-pointer hover:text-white bg-[#fff] rounded-md"> next </div>
                    </div>

                </div>
            </div>





            <div className={itemm === 1 ? "mt-[3rem] pb-[1rem] font-sans" : "hidden"}>
                <div className=" w-[74rem] m-auto">
                    <div className={page === 1 ? "flex flex-wrap" : "hidden"}>
                        {
                            visibleitem.map((item, index) => {
                                return (<Grid2 key={index} im={item.im} title={item.title} />);
                            })
                        }
                    </div>

                    <div className={page === 2 ? "flex flex-wrap" : "hidden"}>
                        {visibleitem.map((item, index) => {
                            return (<Grid key={index} im={item.im} title={item.title} />);
                        })}
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
            </div>

        </>



    );
};

export { Contentarticle };
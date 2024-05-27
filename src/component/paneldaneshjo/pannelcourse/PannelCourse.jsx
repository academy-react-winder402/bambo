import { Formik, Form, Field } from "formik";
import React, { useState } from "react";
import { Fragment } from "react";
import { Card } from "./Card";
import payton from "../../../assets/img/courses/paython.png";
import folderr from "../../../assets/img/dashbord/folder.png";
const PannelCourse = () => {
    const [cardList, setCardList] =useState([
          {id:1, title: "payton",folder:"", im:"",mony:"5000000",zar:"20",date:"2tir",teacher:"asghari"},
    ]);
    return (
        <Fragment>
            <div className=" lg:w-[90%] lg:h-[13%] lg:m-auto lg:border-b-solid lg:border-b-[1px] lg:border-b-[#088568] lg:text-[#088568] lg:text-[20px]
   lg:pt-[30px] 
    ">لیست دوره ها</div>
            <div className=" lg:w-[90%] lg:m-auto lg:border-solid lg:border-[1px] lg:border-[#088568] lg:text-[#088568]">
                <div className="lg:w-[100%] lg:h-[60px] lg:bg-[#09B28B] lg:mt-[20px] lg:flex lg:text-[#fff] lg:text-center lg:leading-[50px]">
                    <div className="lg:w-[16%] lg:h-[100%] ">عکس دوره</div>
                    <div className="lg:w-[16%] lg:h-[100%] ">نام دوره</div>
                    <div className="lg:w-[16%] lg:h-[100%]">مدرس</div>
                    <div className="lg:w-[16%] lg:h-[100%]">ظرفیت</div>
                    <div className="lg:w-[16%] lg:h-[100%]"> تاریخ شروع</div>
                    <div className="lg:w-[16%] lg:h-[100%]">قیمت</div>
                </div>
                <div className="lg:w-[100%] lg:bg-[#F1F1F1]">
                {cardList.map((item,index) => {
      return(
<Card
key={index}
title={item.title}
folder={item.folder}
im={item.im}
id={item.id}
mony={item.mony}
zar={item.zar}
date={item.date}
teacher={item.teacher}
/>
); } ) }
                </div>
                <div className="lg:w-[100%] lg:h-[60px]"></div>
            </div>
        </Fragment>
    )
};
export { PannelCourse };
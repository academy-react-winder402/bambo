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
   md:w-[90%] md:h-[13%] md:m-auto md:border-b-solid md:border-b-[1px] md:border-b-[#088568] md:text-[#088568] md:text-[20px]
   md:pt-[30px] 
   sm:w-[90%] sm:h-[13%] sm:m-auto sm:border-b-solid sm:border-b-[1px] sm:border-b-[#088568] sm:text-[#088568] sm:text-[20px]
   sm:pt-[30px] 
   xs:w-[90%] xs:h-[13%] xs:m-auto xs:border-b-solid xs:border-b-[1px] xs:border-b-[#088568] xs:text-[#088568] xs:text-[20px]
   xs:py-[10px]
    ">لیست دوره ها</div>
            <div className=" lg:w-[90%] lg:m-auto lg:text-[#088568] md:w-[90%] md:m-auto md:text-[#088568] sm:w-[90%] sm:m-auto sm:text-[#088568]">
                <div className="lg:w-[100%] lg:h-[60px] lg:bg-[#09B28B] lg:mt-[20px] lg:flex lg:text-[#fff] lg:text-center lg:leading-[50px]
                md:w-[100%] md:h-[60px] md:bg-[#09B28B] md:mt-[20px] md:flex md:text-[#fff] md:text-center md:leading-[50px]
                sm:w-[100%] sm:h-[60px] sm:bg-[#09B28B] sm:mt-[20px] sm:flex sm:text-[#fff] sm:text-center sm:leading-[50px]
                xs:w-[100%] xs:h-[60px] xs:bg-[#09B28B] xs:mt-[20px] xs:flex xs:text-[#fff] xs:text-center xs:leading-[50px]
                ">
                    <div className="lg:w-[16%] lg:h-[100%] md:w-[16%] md:h-[100%] sm:w-[16%] sm:h-[100%] xs:w-[16%] xs:h-[100%]">عکس دوره</div>
                    <div className="lg:w-[16%] lg:h-[100%] md:w-[16%] md:h-[100%] sm:w-[16%] sm:h-[100%] xs:w-[16%] xs:h-[100%]">نام دوره</div>
                    <div className="lg:w-[16%] lg:h-[100%] md:w-[16%] md:h-[100%] sm:w-[16%] sm:h-[100%] xs:w-[16%] xs:h-[100%]">مدرس</div>
                    <div className="lg:w-[16%] lg:h-[100%] md:w-[16%] md:h-[100%] sm:w-[16%] sm:h-[100%] xs:w-[16%] xs:h-[100%]">ظرفیت</div>
                    <div className="lg:w-[16%] lg:h-[100%] md:w-[16%] md:h-[100%] sm:w-[16%] sm:h-[100%] xs:w-[16%] xs:h-[100%]"> تاریخ شروع</div>
                    <div className="lg:w-[16%] lg:h-[100%] md:w-[16%] md:h-[100%] sm:w-[16%] sm:h-[100%] xs:w-[16%] xs:h-[100%]">قیمت</div>
                </div>
                <div className="lg:w-[100%] lg:bg-[#F1F1F1] md:w-[100%] md:bg-[#F1F1F1] sm:w-[100%] sm:bg-[#F1F1F1] xs:w-[100%] xs:bg-[#F1F1F1]">
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
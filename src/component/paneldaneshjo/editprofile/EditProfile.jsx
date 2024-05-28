import { Formik,Form,Field } from "formik";
import React from "react";
import { Fragment } from "react";
const EditProfile =() =>{
    return(
  <Fragment>
    <div className=" lg:w-[90%] lg:h-[13%] lg:m-auto lg:border-b-solid lg:border-b-[1px] lg:border-b-[#088568] lg:text-[#088568] lg:text-[20px]
   lg:pt-[30px] 
   md:w-[90%] md:h-[13%] md:m-auto md:border-b-solid md:border-b-[1px] md:border-b-[#088568] md:text-[#088568] md:text-[20px]
md:pt-[30px] 
   sm:w-[90%] sm:h-[13%] sm:m-auto sm:border-b-solid sm:border-b-[1px] sm:border-b-[#088568] sm:text-[#088568] sm:text-[20px]
sm:pt-[30px]
    ">ویرایش پروفایل</div>
   
    <div className="lg:w-[90%] lg:h-[80%] lg:m-auto lg:flex  md:w-[90%] md:h-[80%] md:m-auto md:flex sm:w-[90%] sm:h-[80%] sm:m-auto sm:flex  ">
    <Formik>
            <Form>  
<Field className="lg:w-[45%] lg:h-[50px] lg:bg-[#DBDBDB] lg:mt-[5%]
md:w-[45%] md:h-[50px] md:bg-[#DBDBDB] md:mt-[5%]
sm:w-[45%] sm:h-[50px] sm:bg-[#DBDBDB] sm:mt-[5%]
 "/>
<Field className="lg:w-[45%] lg:h-[50px] lg:bg-[#DBDBDB] lg:mt-[5%] lg:mr-[10%]
md:w-[45%] md:h-[50px] md:bg-[#DBDBDB] md:mt-[5%] md:mr-[10%]
sm:w-[45%] sm:h-[50px] sm:bg-[#DBDBDB] sm:mt-[5%] sm:mr-[10%]
"/>
<Field className="lg:w-[45%] lg:h-[50px] lg:bg-[#DBDBDB] lg:mt-[5%]
md:w-[45%] md:h-[50px] md:bg-[#DBDBDB] md:mt-[5%]
sm:w-[45%] sm:h-[50px] sm:bg-[#DBDBDB] sm:mt-[5%]
"/>
<Field className="lg:w-[45%] lg:h-[50px] lg:bg-[#DBDBDB] lg:mt-[5%]  lg:mr-[10%]
md:w-[45%] md:h-[50px] md:bg-[#DBDBDB] md:mt-[5%] md:mr-[10%]
sm:w-[45%] sm:h-[50px] sm:bg-[#DBDBDB] sm:mt-[5%] sm:mr-[10%]
"/>
<Field className="lg:w-[45%] lg:h-[50px] lg:bg-[#DBDBDB] lg:mt-[5%]
md:w-[45%] md:h-[50px] md:bg-[#DBDBDB] md:mt-[5%]
sm:w-[45%] sm:h-[50px] sm:bg-[#DBDBDB] sm:mt-[5%]
"/>
<Field className="lg:w-[45%] lg:h-[50px] lg:bg-[#DBDBDB] lg:mt-[5%]  lg:mr-[10%]
md:w-[45%] md:h-[50px] md:bg-[#DBDBDB] md:mt-[5%] md:mr-[10%]
sm:w-[45%] sm:h-[50px] sm:bg-[#DBDBDB] sm:mt-[5%] sm:mr-[10%]
"/>
<Field className="lg:w-[100%] lg:h-[50px] lg:bg-[#DBDBDB] lg:mt-[5%]
md:w-[45%] md:h-[50px] md:bg-[#DBDBDB] md:mt-[5%]
sm:w-[45%] sm:h-[50px] sm:bg-[#DBDBDB] sm:mt-[5%]
"/>   
   
    <div className="lg:w-[100%] lg:h-[10%] lg:flex lg:justify-end lg:gap-[30px] lg:text-center lg:text-[17px] lg:mt-[30px] lg:text-[#fff]
    md:w-[100%] md:h-[10%] md:flex md:justify-end md:gap-[30px] md:text-center md:text-[17px] md:mt-[30px] md:text-[#fff]
    sm:w-[100%] sm:h-[10%] sm:flex sm:justify-end sm:gap-[30px] sm:text-center sm:text-[17px] sm:mt-[30px] sm:text-[#fff]
    ">
<button className="lg:bg-[#F83333] lg:w-[17%] lg:h-[100%]
md:bg-[#F83333] md:w-[17%] md:h-[100%]
sm:bg-[#F83333] sm:w-[17%] sm:h-[100%]
">لغوتغییرات</button>
<button className="lg:bg-[#09B28B] lg:w-[17%] lg:h-[100%]
md:bg-[#F83333] md:w-[17%] md:h-[100%]
sm:bg-[#F83333] sm:w-[17%] sm:h-[100%]
">ثبت تغییرات</button>
    </div>
    </Form>
        </Formik>
        </div>
  </Fragment>

   
    )
}
export {EditProfile};
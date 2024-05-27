import { Formik,Form,Field } from "formik";
import React from "react";
import { Fragment } from "react";
const EditProfile =() =>{
    return(
  <Fragment>
    <div className=" lg:w-[90%] lg:h-[13%] lg:m-auto lg:border-b-solid lg:border-b-[1px] lg:border-b-[#088568] lg:text-[#088568] lg:text-[20px]
   lg:pt-[30px] 
    ">ویرایش پروفایل</div>
   
    <div className="lg:w-[90%] lg:h-[80%] lg:m-auto lg:flex   ">
    <Formik>
            <Form>  
<Field className="lg:w-[45%] lg:h-[50px] lg:bg-[#DBDBDB] lg:mt-[5%] "/>
<Field className="lg:w-[45%] lg:h-[50px] lg:bg-[#DBDBDB] lg:mt-[5%] lg:mr-[10%]"/>
<Field className="lg:w-[45%] lg:h-[50px] lg:bg-[#DBDBDB] lg:mt-[5%]"/>
<Field className="lg:w-[45%] lg:h-[50px] lg:bg-[#DBDBDB] lg:mt-[5%]  lg:mr-[10%]"/>
<Field className="lg:w-[45%] lg:h-[50px] lg:bg-[#DBDBDB] lg:mt-[5%]"/>
<Field className="lg:w-[45%] lg:h-[50px] lg:bg-[#DBDBDB] lg:mt-[5%]  lg:mr-[10%]"/>
<Field className="lg:w-[100%] lg:h-[50px] lg:bg-[#DBDBDB] lg:mt-[5%]"/>   
   
    <div className="lg:w-[100%] lg:h-[10%] lg:flex lg:justify-end lg:gap-[30px] lg:text-center lg:text-[17px] lg:mt-[30px] lg:text-[#fff]">
<button className="lg:bg-[#F83333] lg:w-[17%] lg:h-[100%]">لغوتغییرات</button>
<button className="lg:bg-[#09B28B] lg:w-[17%] lg:h-[100%]">ثبت تغییرات</button>
    </div>
    </Form>
        </Formik>
        </div>
  </Fragment>

   
    )
}
export {EditProfile};
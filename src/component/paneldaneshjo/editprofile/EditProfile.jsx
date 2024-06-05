import { Formik, Form, Field } from "formik";
import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { setlname } from "../../../redux/profile";
import { getname } from "../../../core/services/api/paneldaneshjo/EditProfile";
import { useParams } from "react-router-dom";

const EditProfile = () => {
  const [profile,setProfile] = useState([])
  const id= useParams().id;
  
  console.log(id);
  const onSubmit = async(values)=>{
    const formdata =new FormData();
formdata.append ("LName",values.LName)
formdata.append ("FName",values.FName)
formdata.append ("BirthDay",values.BirthDay)
formdata.append ("phoneNumber",values.phoneNumber)
formdata.append ("Gender",values.Gender)
formdata.append ("HomeAdderess",values.HomeAdderess)
formdata.append ("Email",values.Email)

const editapi = await getname(formdata);

console.log(editapi);

  }




  return (
    <Fragment>
      <div
        className=" lg:w-[90%] lg:h-[13%] lg:m-auto lg:border-b-solid lg:border-b-[1px] lg:border-b-[#088568] lg:text-[#088568] lg:text-[20px]
   lg:pt-[30px] 
   md:w-[90%] md:h-[13%] md:m-auto md:border-b-solid md:border-b-[1px] md:border-b-[#088568] md:text-[#088568] md:text-[20px]
md:pt-[30px] 
   sm:w-[90%] sm:h-[13%] sm:m-auto sm:border-b-solid sm:border-b-[1px] sm:border-b-[#088568] sm:text-[#088568] sm:text-[20px]
sm:pt-[30px]
xs:w-[90%] xs:h-[13%] xs:m-auto xs:border-b-solid xs:border-b-[1px] xs:border-b-[#088568] xs:text-[#088568] xs:text-[20px]
xs:py-[10px]
    "
      >
        ویرایش پروفایل
      </div>

      <div
        className="lg:w-[90%] lg:m-auto lg:h-[85%]  md:w-[90%]  md:m-auto sm:w-[90%] sm:m-auto xs:w-[90%]  xs:m-auto 
    "
      >
        <Formik
        initialValues={{LName:profile.LName,FName:profile.FName,Email:profile.Email,BirthDay:profile.BirthDay,phoneNumber:profile.phoneNumber,Gender:profile.Gender,HomeAdderess:profile.HomeAdderess}}
        onSubmit={(values) => onSubmit(values)}
        >
          <Form>
            <div className="flex flex-row-reverse lg:w-[100%] mt-[20px] h-[100%] ">
              <div className="lg:w-[30%] flex flex-col gap-[10px] items-center ">
                <img className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-indigo-300 dark:ring-indigo-500"></img>

                <div className="flex flex-col gap-[20px]">
                  <button
                    type="button"
                    className="py-3.5 px-7 text-base font-medium text-[#fff] focus:outline-none bg-[#09B28B]  rounded-xl "
                  >
                    Change picture
                  </button>
                  <button
                    type="button"
                    className="py-3.5 px-7 text-[#fff] font-medium bg-[#F83333] rounded-xl "
                  >
                    Delete picture
                  </button>
                </div>
              </div>

              <div className="lg:w-[70%] flex flex-col gap-[30px] items-start text-[#202142] h-[100%] ">
                <div className="lg:flex lg:gap-[20px] items-center w-[100%] space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 ">
                  <div className="w-[33%]">
                    <label
                      for="LName"
                      className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                    >
                   نام
                    </label>
                    <Field
                      type="text"
                      name="LName"
                      className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                   
                    />
                  </div>

                  <div className="w-[33%]">
                    <label
                      for="FName"
                      className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                    >
                      نام خانوادگی
                    </label>
                    <Field
                      type="text"
                      name="FName"
                      className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                    
                    />
                  </div>
                </div>

                <div className="w-[100%] flex gap-[20px] items-center ">
                  <div className="w-[33%]">
                    <label
                      for="Email"
                      className=" mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                    >
                      جیمیل
                    </label>
                    <Field
                      type="Email"
                      className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                     name="Email"
                    />
                  </div>

                  <div className="w-[33%]">
                    <label
                      for="BirthDay"
                      className=" mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                    >
                     تاریخ تولد
                    </label>
                    <Field
                      type="text"
                      className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                     name="BirthDay"
                    />
                  </div>
                </div>
                <div className="w-[100%] flex gap-[20px] items-center ">
                  <div className="w-[33%]">
                    <label
                      for="phoneNumber"
                      className=" mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                    >
                      شماره موبایل
                    </label>
                    <Field
                      type="phoneNumber"
                      name="PhoneNumber"
                      className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                    
                    />
                  </div>

                  <div className="w-[33%]">
                    <label
                      for="Gender"
                      className=" mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                    >
                     جنسیت
                    </label>
                    <Field
                    name="Gender"
                      type="text"
                      className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                     
                    />
                  </div>

                </div>
                <div className="w-[100%]  ">
                    <label
                      for="HomeAdderess"
                      className=" mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                    >
                      آدرس
                    </label>
                    <Field
                    name="HomeAdderess"
                      type="text"
                      className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                      
                    />
                  

              
                </div>

                <div
                  className="lg:w-[100%]  lg:flex lg:justify-end lg:gap-[30px] lg:text-center lg:text-[17px] lg:mt-[30px] lg:text-[#fff]
    md:w-[100%]  md:flex md:justify-end md:gap-[30px] md:text-center md:text-[17px] md:mt-[30px] md:text-[#fff]
    sm:w-[100%] sm:flex sm:justify-end sm:gap-[30px] sm:text-center sm:text-[17px] sm:mt-[30px] sm:text-[#fff]
    xs:w-[100%]  xs:flex xs:justify-end xs:gap-[30px] xs:text-center xs:text-[17px] xs:mt-[30px] xs:text-[#fff]
    "
                >
                  <button
                    className="lg:bg-[#F83333] lg:w-[17%] lg:h-[50px] rounded-[0.5em]
md:bg-[#F83333] md:w-[17%] md:h-[50px]
sm:bg-[#F83333] sm:w-[17%] sm:h-[50px]
xs:bg-[#F83333] xs:w-[30%] xs:h-[50px]
"
                  >
                    لغوتغییرات
                  </button>
                  <button
                    className="lg:bg-[#09B28B] lg:w-[17%] lg:h-[50px]  rounded-[0.5em]
md:bg-[#09B28B] md:w-[17%] md:h-[50px]
sm:bg-[#09B28B] sm:w-[17%] sm:h-[50px]
xs:bg-[#09B28B] xs:w-[30%] xs:h-[50px]
"
type="onsubmit"

                  >
                    ثبت تغییرات
                  </button>
                </div>
              </div>
            </div>
            {/* <Field placeholder="نام" className="lg:w-[45%] lg:h-[50px] lg:bg-[#DBDBDB] lg:mt-[5%] lg:mr-[7%] pr-[20px] text-[15px] text-[#004458]
md:w-[45%] md:h-[50px] md:bg-[#DBDBDB] md:mt-[5%] md:mr-[0%]
sm:w-[45%] sm:h-[50px] sm:bg-[#DBDBDB] sm:mt-[5%] sm:mr-[0%]
xs:w-[90%] xs:h-[40px] xs:bg-[#DBDBDB] xs:mt-[5%] xs:mr-[5%]
 "/>
<Field placeholder="نام خانوادگی" className="lg:w-[45%] lg:h-[50px] lg:bg-[#DBDBDB] lg:mt-[5%] lg:mr-[3%]
md:w-[45%] md:h-[50px] md:bg-[#DBDBDB] md:mt-[5%] md:mr-[10%]
sm:w-[45%] sm:h-[50px] sm:bg-[#DBDBDB] sm:mt-[5%] sm:mr-[10%]
xs:w-[90%] xs:h-[40px] xs:bg-[#DBDBDB] xs:mt-[5%] xs:mr-[5%]
"/>
<Field placeholder="نام کاربری" className="lg:w-[45%] lg:h-[50px] lg:bg-[#DBDBDB] lg:mt-[5%] lg:mr-[7%]
md:w-[45%] md:h-[50px] md:bg-[#DBDBDB] md:mt-[5%] md:mr-[0%]
sm:w-[45%] sm:h-[50px] sm:bg-[#DBDBDB] sm:mt-[5%] sm:mr-[0%]
xs:w-[90%] xs:h-[40px] xs:bg-[#DBDBDB] xs:mt-[5%] xs:mr-[5%]
"/>
<Field placeholder="تاریخ تولد" className="lg:w-[45%] lg:h-[50px] lg:bg-[#DBDBDB] lg:mt-[5%]  lg:mr-[3%]
md:w-[45%] md:h-[50px] md:bg-[#DBDBDB] md:mt-[5%] md:mr-[10%]
sm:w-[45%] sm:h-[50px] sm:bg-[#DBDBDB] sm:mt-[5%] sm:mr-[10%]
xs:w-[90%] xs:h-[40px] xs:bg-[#DBDBDB] xs:mt-[5%] xs:mr-[5%]
"/>
<Field placeholder="شماره موبایل" className="lg:w-[45%] lg:h-[50px] lg:bg-[#DBDBDB] lg:mt-[5%] lg:mr-[7%]
md:w-[45%] md:h-[50px] md:bg-[#DBDBDB] md:mt-[5%] md:mr-[0%]
sm:w-[45%] sm:h-[50px] sm:bg-[#DBDBDB] sm:mt-[5%] sm:mr-[0%]
xs:w-[90%] xs:h-[40px] xs:bg-[#DBDBDB] xs:mt-[5%] xs:mr-[5%]
"/>
<Field placeholder="شماره ملی" className="lg:w-[45%] lg:h-[50px] lg:bg-[#DBDBDB] lg:mt-[5%]  lg:mr-[3%]
md:w-[45%] md:h-[50px] md:bg-[#DBDBDB] md:mt-[5%] md:mr-[10%]
sm:w-[45%] sm:h-[50px] sm:bg-[#DBDBDB] sm:mt-[5%] sm:mr-[10%]
xs:w-[90%] xs:h-[40px] xs:bg-[#DBDBDB] xs:mt-[5%] xs:mr-[5%]
"/>
<Field placeholder="ایمیل" className="lg:w-[93%] lg:h-[50px] lg:bg-[#DBDBDB] lg:mt-[5%] lg:mr-[7%]
md:w-[100%] md:h-[50px] md:bg-[#DBDBDB] md:mt-[5%] md:mr-[0%]
sm:w-[100%] sm:h-[50px] sm:bg-[#DBDBDB] sm:mt-[5%] sm:mr-[0%]
xs:w-[90%] xs:h-[40px] xs:bg-[#DBDBDB] xs:mt-[5%] xs:mr-[5%]
"/>   
   
    <div className="lg:w-[100%] lg:h-[10%] lg:flex lg:justify-end lg:gap-[30px] lg:text-center lg:text-[17px] lg:mt-[30px] lg:text-[#fff]
    md:w-[100%] md:h-[10%] md:flex md:justify-end md:gap-[30px] md:text-center md:text-[17px] md:mt-[30px] md:text-[#fff]
    sm:w-[100%] sm:h-[10%] sm:flex sm:justify-end sm:gap-[30px] sm:text-center sm:text-[17px] sm:mt-[30px] sm:text-[#fff]
    xs:w-[100%] xs:h-[50px] xs:flex xs:justify-end xs:gap-[30px] xs:text-center xs:text-[17px] xs:mt-[30px] xs:text-[#fff]
    ">
<button className="lg:bg-[#F83333] lg:w-[17%] lg:h-[100%]
md:bg-[#F83333] md:w-[17%] md:h-[100%]
sm:bg-[#F83333] sm:w-[17%] sm:h-[100%]
xs:bg-[#F83333] xs:w-[30%] xs:h-[70%]
">لغوتغییرات</button>
<button className="lg:bg-[#09B28B] lg:w-[17%] lg:h-[100%]
md:bg-[#09B28B] md:w-[17%] md:h-[100%]
sm:bg-[#09B28B] sm:w-[17%] sm:h-[100%]
xs:bg-[#09B28B] xs:w-[30%] xs:h-[70%]
">ثبت تغییرات</button>
    </div> */}
          </Form>
        </Formik>
      </div>
    </Fragment>
  );
};
export { EditProfile };

import { Formik, Form, Field } from "formik";
import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import { getname } from "../../../core/services/api/paneldaneshjo/EditProfile";
import { useParams } from "react-router-dom";
import { AddImg } from "../../../core/services/api/paneldaneshjo/EditProfile";

const EditProfile = () => {
  const [profile, setProfile] = useState([]);
  const [user, setUser] = useState();
  const id = useParams().id;
  const onSubmit = async (values) => {
    const formdata = new FormData();
    formdata.append("LName", values.LName);
    formdata.append("FName", values.FName);
    formdata.append("BirthDay", values.BirthDay);
    formdata.append("phoneNumber", values.phoneNumber);
    formdata.append("Gender", values.Gender);
    formdata.append("HomeAdderess", values.HomeAdderess);
    formdata.append("Email", values.Email);
    formdata.append("id", values.id);
    console.log(formdata);
    const editapi = await getname(formdata);

    console.log(editapi);
  };
//   const [pic,setPic] = useState([]);
// const getimg =async()=>{
//   const imgdata = new FormData();
//   imgdata.append('formFile', values.formFile);
//   const editimg = await AddImg(imgdata);
//   const imageObjectURL = URL.createObjectURL(editimg);
//   setPic(imageObjectURL);
// }
// useEffect(() => {
//   getimg();
// }, []);
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
        className="lg:w-[90%] lg:m-auto lg:h-[85%]  md:w-[90%]  md:m-auto sm:w-[90%] sm:m-auto xs:w-[90%]  xs:m-auto " >
        <div className="flex flex-row-reverse lg:w-[100%] mt-[20px] h-[100%] ">
        <Formik 
        // initialValues={{formFile:pic.formFile}}
        >
         <div className="lg:w-[30%] flex flex-col gap-[10px] items-center ">
           
              <Form>
              <div className="w-[300px] h-[300px] border-[1px] border-black border-solid rounded-[100%]">
              {/* <img src={pic}></img> */}
                            {/* <Field type="file" name="formFile"/> */}
                           
                        </div>

                <div className="flex flex-col gap-[20px]">
                  <button
                    type="button"
                    className="py-3.5 px-7 text-base font-medium text-[#fff] focus:outline-none bg-[#09B28B]  rounded-xl "
                //  onClick={getimg} 
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
              </Form>
           
          </div>
          </Formik>
          <div className="lg:w-[70%] flex flex-col gap-[30px] items-start text-[#202142] h-[100%] ">
            <Formik
              initialValues={{
                LName: profile.LName,
                FName: profile.FName,
                Email: profile.Email,
                BirthDay: profile.BirthDay,
                phoneNumber: profile.phoneNumber,
                Gender: profile.Gender,
                HomeAdderess: profile.HomeAdderess,
              }}
              onSubmit={(values) => onSubmit(values)}
            >
              <Form>
                <div className="lg:flex lg:gap-[20px] items-center w-[100%] space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 ">
                  <div className="w-[50%]">
                    <label
                      for="LName"
                      className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                    >
                      نام
                    </label>
                    <Field
                      type="text"
                      name="LName"
                      className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "  />
                  </div>

                  <div className="w-[50%]">
                    <label
                      for="FName"
                      className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                    >
                      نام خانوادگی
                    </label>
                    <Field
                      type="text"
                      name="FName"
                      className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 " />
                  </div>
                </div>

                <div className="w-[100%] flex gap-[20px] items-center mt-[30px] ">
                  <div className="w-[50%]">
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

                  <div className="w-[50%]">
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
                <div className="w-[100%] flex gap-[20px] items-center  mt-[30px] ">
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
                      className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 " />
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
                      className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 " />
                  </div>
                </div>
                <div className="w-[100%]  mt-[30px]  ">
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
                    className="lg:bg-[#F83333] lg:w-[50%] lg:h-[50px] rounded-[0.5em]
md:bg-[#F83333] md:w-[50%] md:h-[50px]
sm:bg-[#F83333] sm:w-[50%] sm:h-[50px]
xs:bg-[#F83333] xs:w-[30%] xs:h-[50px]
"
                  >
                    لغوتغییرات
                  </button>
                  <button
                    className="lg:bg-[#09B28B] lg:w-[50%] lg:h-[50px]  rounded-[0.5em]
md:bg-[#09B28B] md:w-[50%] md:h-[50px]
sm:bg-[#09B28B] sm:w-[50%] sm:h-[50px]
xs:bg-[#09B28B] xs:w-[30%] xs:h-[50px]
"
                    type="onsubmit"
                  >
                    ثبت تغییرات
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export { EditProfile };

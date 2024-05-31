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
xs:w-[90%] xs:h-[13%] xs:m-auto xs:border-b-solid xs:border-b-[1px] xs:border-b-[#088568] xs:text-[#088568] xs:text-[20px]
xs:py-[10px]
    ">ویرایش پروفایل</div>
   
    <div className="lg:w-[90%] lg:h-[80%] lg:m-auto lg:flex lg:flex-row-wrap  md:w-[90%] md:h-[80%] md:m-auto md:flex md:flex-row-wrap sm:w-[90%] sm:h-[80%] sm:m-auto sm:flex
    sm:flex-row-wrap xs:w-[90%] lg:mr-[0%] xs:m-auto xs:flex xs:flex-row-wrap
    ">
    <Formik>
            <Form>  
            <div className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
        <div className="p-2 md:p-4">
            <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
                <h2 className="pl-6 text-2xl font-bold sm:text-xl">Public Profile</h2>

                <div className="grid max-w-2xl mx-auto mt-8">
                    <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">

                        <img className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-indigo-300 dark:ring-indigo-500"
                           
                            alt="Bordered avatar"></img>

                        <div className="flex flex-col space-y-5 sm:ml-8">
                            <button type="button"
                               className="py-3.5 px-7 text-base font-medium text-indigo-100 focus:outline-none bg-[#202142] rounded-lg border border-indigo-200 hover:bg-indigo-900 focus:z-10 focus:ring-4 focus:ring-indigo-200 ">
                                Change picture
                            </button>
                            <button type="button"
                               className="py-3.5 px-7 text-base font-medium text-indigo-900 focus:outline-none bg-white rounded-lg border border-indigo-200 hover:bg-indigo-100 hover:text-[#202142] focus:z-10 focus:ring-4 focus:ring-indigo-200 ">
                                Delete picture
                            </button>
                        </div>
                    </div>

                    <div className="items-center mt-8 sm:mt-14 text-[#202142]">

                        <div
                            className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                            <div className="w-full">
                                <label for="first_name"
                                    className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">Your
                                    first name</label>
                                <Field type="text"
                                    className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                    placeholder="Your first name" />
                            </div>

                            <div className="w-full">
                                <label for="last_name"
                                    className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">Your
                                    last name</label>
                                <Field type="text"
                                    className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                    placeholder="Your last name"/>
                            </div>

                        </div>

                        <div className="mb-2 sm:mb-6">
                            <label for="email"
                                className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">Your
                                email</label>
                            <Field type="email"
                                className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                placeholder="your.email@mail.com" />
                        </div>

                        <div className="mb-2 sm:mb-6">
                            <label for="profession"
                                className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">Profession</label>
                            <Field type="text"
                                className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                placeholder="your profession" />
                        </div>

                        <div className="mb-6">
                            <label for="message"
                               className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">Bio</label>
                            <textarea id="message" rows="4"
                                className="block p-2.5 w-full text-sm text-indigo-900 bg-indigo-50 rounded-lg border border-indigo-300 focus:ring-indigo-500 focus:border-indigo-500 "
                                placeholder="Write your bio here..."></textarea>
                        </div>

                        <div className="flex justify-end">
                            <button type="submit"
                                className="text-white bg-indigo-700  hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">Save</button>
                        </div>

                    </div>
                </div>
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

   
    )
}
export {EditProfile};
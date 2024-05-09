import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import square from "../../../assets/img/register/square.png"
import home from "../../../assets/img/register/home.png"
import { Link, useNavigate } from 'react-router-dom'
const FormLogin = () => {
    const navigator = useNavigate();
    const gotoregister =() => {
            return (
                navigator("/register")
            );
    }
    const gotoforgotpass =() => {
        return (
            navigator("/ForgotPass")
        );
    }
    return (



        <div  dir="rtl" className="bg-[#f5f2f2] w-[55%] h-[100%] flex flex-col">
            <div className="h-[100px]  mt-[50px] text-[30px] text-black leading-[25px] py-[50px] text-right pr-[40px]">ورود کاربر </div>
            <div className="h-[260px] border-solid border-[transparent] border-[1px]  ">
                <Formik>
                    <Form>
                        <div className="h-[150px] w-[700px] pr-[140px] mt-[40px] flex flex-col gap-[50px] ">

                            <Field name="phonenamber" placeholder=" شماره موبایل" className="w-[500px] h-[60px] rounded-[10px]" />

                       

                            <Field name="phonenamber" placeholder="رمز عبور" className="w-[500px] h-[60px] rounded-[10px] " />

                        </div>
                    </Form>
                </Formik>
            </div>
            <div className="h-[100px] w-[700px] flex flex-row-reverse justify-start gap-[10px]">
                <div className=" w-[300px] indent-[120px] leading-[45px] cursor-pointer" onClick={ gotoforgotpass}>فراموشی رمز</div>
                <div className=" w-[300px] flex flex-row">
                    <div className=" indent-[10px] leading-[45px] w-[150px] mr-[50px]  cursor-pointer">مرا به خاطر بسپار</div>
                   <input type="checkbox" className="w-[20px] h-[20px] mt-[14px]"></input>

                </div>
            </div>
            <div className="h-[100px] w-[850px] flex flex-row-reverse justify-start gap-[10px]">
                <button className="h-[60px] w-[90px] bg-[#edeaea]  my-[5px] ml-[180px]  rounded-xl hover:bg-[#004458] hover:text-[#ffff] cursor-pointer"
                >ورود</button>
                <button className="h-[60px] w-[90px] bg-[#edeaea] my-[5px] ml-[5px] rounded-xl hover:bg-[#004458] hover:text-[#ffff] cursor-pointer"
onClick={gotoregister}
                >ثبت نام</button>
            </div>
        </div>

    );
};

export { FormLogin };
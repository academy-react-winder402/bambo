import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import square from "../.././assets/img/square.png"
import tick from "../.././assets/img/tick.png"
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



        <div className="bg-[#f5f2f2] w-[600px] h-[650px] rounded-l-xl">
            <div className="h-[100px]  text-[30px] text-black leading-[45px] py-[50px] indent-[420px] mt-[50px]">ورود کاربر</div>
            <div className="h-[260px] border-solid border-[transparent] border-[1px]  ">
                <Formik>
                    <Form>
                        <div className="h-[70px] mt-[40px]">

                            <Field name="phonenamber" placeholder=" شماره موبایل" className="w-[500px] h-[60px] rounded-[10px] ml-[50px]" />

                        </div>
                        <div className="h-[70px] mt-[40px] ">

                            <Field name="phonenamber" placeholder="رمز عبور" className="w-[500px] h-[60px] rounded-[10px] ml-[50px]" />

                        </div>
                    </Form>
                </Formik>
            </div>
            <div className="h-[75px]  flex flex-row ">
                <div className=" w-[300px] indent-[70px] leading-[45px] cursor-pointer" onClick={ gotoforgotpass}>فراموشی رمز</div>
                <div className=" w-[300px] flex flex-row-reverse">
                    <div className=" indent-[10px] leading-[45px] w-[150px] mr-[50px]  cursor-pointer">مرا به خاطر بسپار</div>
                    <div className="w-[20px] h-[20px]  mt-[14px]"
                   
                    ><img src={square} className="w-[20px] h-[20px]"></img></div>

                </div>
            </div>
            <div className="h-[75px] ">
                <button className="h-[60px] w-[90px] bg-[#edeaea]  my-[5px] ml-[50px]  rounded-xl hover:bg-[#004458] hover:text-[#ffff] cursor-pointer"
                >ورود</button>
                <button className="h-[60px] w-[90px] bg-[#edeaea] my-[5px] ml-[5px] rounded-xl hover:bg-[#004458] hover:text-[#ffff] cursor-pointer"
onClick={gotoregister}
                >ثبت نام</button>
            </div>
        </div>

    );
};

export { FormLogin };
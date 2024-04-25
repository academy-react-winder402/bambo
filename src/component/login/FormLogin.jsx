import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const FormLogin = () => {
    return (



        <div className="bg-[#f5f2f2] w-[600px] h-[650px] rounded-l-xl">
            <div className="h-[100px]  text-[30px] text-black leading-[45px] py-[50px] indent-[420px] mt-[50px]">ورود کاربر</div>
            <div className="h-[260px] border-solid border-[transparent] border-[1px]  ">
            <Formik>
                <Form>
                    <div className="h-[70px] mt-[40px]">
                       
                        <Field name="phonenamber" placeholder=" شماره موبایل" className="w-[400px] h-[60px] rounded-[10px] ml-[150px]" />

                    </div>
                    <div className="h-[70px] mt-[40px] ">
                       
                        <Field name="phonenamber" placeholder="رمز عبور"  className="w-[400px] h-[60px] rounded-[10px] ml-[150px]" />

                    </div>
                </Form>
            </Formik>
            </div>
            <div className="h-[75px] border-solid border-[green] border-[1px] ">

            </div>
            <div className="h-[75px] border-solid border-[yellow] border-[1px] "></div>
        
        </div>

    );
};

export { FormLogin };
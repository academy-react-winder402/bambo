import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import square from "../../../assets/img/register/square.png"
import home from "../../../assets/img/register/home.png"
import { Link, NavLink, useNavigate } from 'react-router-dom'
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



        <div  dir="rtl" className="lg:bg-[#f5f2f2] lg:w-[55%] lg:h-[100%] lg:flex lg:flex-col
        sm:bg-[#f5f2f2] sm:w-[100%] sm:h-[60%] sm:flex sm:flex-col
        xs:bg-[#f5f2f2] xs:w-[100%] xs:h-[60%] xs:flex xs:flex-col
        ">
            <div className="lg:h-[100px]  lg:mt-[10px]  lg:text-[32px] lg:text-black lg:leading-[25px] lg:py-[50px] lg:text-right lg:pr-[40px]
            sm:h-[80px]  sm:mt-[10px]  sm:text-[30px] sm:text-black sm:leading-[25px] sm:py-[20px] sm:text-right sm:pr-[40px]
            xs:h-[80px]  xs:mt-[10px]  xs:text-[30px] xs:text-black xs:leading-[25px] xs:py-[20px] xs:text-right xs:pr-[40px]
            ">ورود کاربر </div>
            <div className="lg:h-[260px] lg:border-solid lg:border-[transparent] lg:border-[1px]  
            sm:h-[260px] sm:border-solid sm:border-[transparent] sm:border-[1px]
           xs:h-[260px] xs:border-solid xs:border-[transparent] xs:border-[1px]
            ">
                <Formik>
                    <Form>
                        <div className="lg:h-[150px] lg:w-[700px] lg:pr-[140px] lg:mt-[40px] lg:flex lg:flex-col lg:gap-[50px] 
                        sm:h-[150px] sm:w-[700px] sm:pr-[80px] sm:mt-[10px] sm:flex sm:flex-col sm:gap-[50px] 
                       xs:h-[150px] xs:w-[350px] xs:pr-[40px] xs:mt-[10px] xs:flex xs:flex-col xs:gap-[50px] 
                        ">

                            <Field name="phonenamber" placeholder=" شماره موبایل" className="lg:w-[500px] lg:h-[60px] lg:rounded-[10px]
                            sm:w-[500px] sm:h-[50px] sm:rounded-[10px]
                           xs:w-[350px] xs:h-[50px] xs:rounded-[10px]
                            " />

                       

                            <Field name="phonenamber" placeholder="رمز عبور" className="lg:w-[500px] lg:h-[60px] lg:rounded-[10px] 
                            sm:w-[500px] sm:h-[50px] sm:rounded-[10px]
                            xs:w-[350px] xs:h-[50px] xs:rounded-[10px]
                            " />

                        </div>
                    </Form>
                </Formik>
            </div>
            <div className="lg:h-[100px] lg:w-[700px] lg:flex lg:flex-row-reverse 
            sm:h-[100px] sm:w-[600px] sm:flex sm:flex-row-reverse sm:justify-start 
            xs:h-[100px] xs:w-[370px] xs:flex xs:flex-row-reverse  xs:m-auto xs:justify-between  
            ">
                <div className="lg:w-[400px] lg:cursor-pointer lg:text-right lg:hover:text-[#004458] 
                
                sm:w-[300px] sm:indent-[180px] sm:leading-[45px] sm:cursor-pointer sm:hover:text-[#004458] 
                xs:w-[160px]  xs:leading-[45px] xs:cursor-pointer  xs:text-left xs:hover:text-[#004458] 

                " onClick={ gotoforgotpass}>فراموشی رمز</div>
                <div className=" lg:w-[300px] lg:flex lg:flex-row lg:justify-center lg:hover:text-[#004458] 
                 sm:w-[300px] sm:flex sm:flex-row sm:justify-center sm:hover:text-[#004458] 
                 xs:w-[150px] xs:flex xs:flex-row xs:justify-center xs:hover:text-[#004458] 
                ">
                    <div className=" lg:indent-[10px] lg:leading-[45px] lg:w-[150px]  lg:cursor-pointer
                    sm:indent-[10px] sm:leading-[45px] sm:w-[150px]  sm:cursor-pointer
                    xs:indent-[10px] xs:leading-[45px] xs:w-[150px]  xs:cursor-pointer

                    ">مرا به خاطر بسپار</div>
                   <input type="checkbox" className="lg:w-[20px] lg:h-[20px] lg:mt-[14px]
                   sm:w-[20px] sm:h-[20px] sm:mt-[14px]
                   xs:w-[20px] xs:h-[20px] xs:mt-[14px]
                   "></input>

                </div>
            </div>
            <div className="lg:h-[100px] lg:w-[550px] lg:flex lg:flex-row-reverse lg:justify-start lg:gap-[10px]
            sm:h-[100px] sm:w-[600px] sm:flex sm:flex-row-reverse sm:justify-start sm:gap-[10px
                xs:h-[100px] xs:w-[350px] xs:flex xs:flex-row-reverse xs:justify-start xs:gap-[10px]
            ]">
               
                <button className="lg:h-[60px] lg:w-[90px] lg:bg-[#edeaea]  lg:my-[5px]  lg:rounded-xl lg:hover:bg-[#004458] lg:hover:text-[#ffff]
            sm:h-[50px] sm:w-[70px] sm:bg-[#edeaea]  sm:my-[5px]  sm:rounded-xl sm:hover:bg-[#004458] sm:hover:text-[#ffff]
            xs:h-[50px] xs:w-[70px] xs:bg-[#edeaea]  xs:my-[5px]  xs:rounded-xl xs:hover:bg-[#004458] xs:hover:text-[#ffff]
            "
                >ورود</button>
                <button className="lg:h-[60px] lg:w-[90px] lg:bg-[#edeaea]  lg:my-[5px]  lg:rounded-xl lg:hover:bg-[#004458] lg:hover:text-[#ffff]
            sm:h-[50px] sm:w-[70px] sm:bg-[#edeaea]  sm:my-[5px]  sm:rounded-xl sm:hover:bg-[#004458] sm:hover:text-[#ffff]
            xs:h-[50px] xs:w-[70px] xs:bg-[#edeaea]  xs:my-[5px]  xs:rounded-xl xs:hover:bg-[#004458] xs:hover:text-[#ffff]
            "
onClick={gotoregister}
                >ثبت نام</button>
            </div>
        </div>

    );
};

export { FormLogin };
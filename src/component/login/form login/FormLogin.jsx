import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import square from "../../../assets/img/register/square.png"
import home from "../../../assets/img/register/home1.png"
import { Link, NavLink, useNavigate } from 'react-router-dom'
import left from "../../../assets/img/register/left.png"
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
    };
    const gotohome =()=>{
        return (
            navigator("/")

        );  
    };
    const gotoleft = () => {
        if (page == 0) {
            return (
                navigator("/")

            );
        }
        else {

            setPage((currPage) => (currPage - 1));

        };

    };
    
    return (

        <div dir="rtl" className=" lg:w-[55%] lg:h-[100%] lg:flex lg:flex-col
        md:w-[55%] md:h-[100%]
         sm:w-[100%] sm:h-[60%] 
         xs:w-[100%] xs:h-[60%] 
         ">
              <div className="lg:m-auto lg:w-[70%] lg:h-[70%]  lg:shadow-sm lg:bg-[#f5f2f2] lg:rounded-lg  
            sm:m-auto sm:w-[70%] sm:h-[100%]  sm:shadow-sm sm:bg-[#f5f2f2] sm:rounded-lg 
            md:m-auto md:w-[70%] md:h-[70%] md:shadow-sm md:bg-[#f5f2f2] md:rounded-lg md:mt-[20px]
            xs:m-auto xs:w-[100%] xs:h-[100%] xs:bg-[#fff] 
            " >
           <div className="lg:h-[60px] w-[100%] lg:text-[25px] lg:text-black  lg:pt-[15px] lg:text-right lg:pr-[40px]
        md:h-[60px] md:w-[100%] md:text-[17px] md:text-black   md:text-right md:pr-[40px]
            sm:h-[60px]    sm:text-[25px] sm:text-black  sm:py-[15px] sm:text-right sm:pr-[40px]
            xs:h-[50px]   xs:text-[25px] xs:text-black xs:py-[15px] xs:text-right xs:pr-[40px]
            xs:flex
            ">ورود
           
            <img src={left} onClick={gotoleft} className=" lg:w-[30px] lg:h-[30px] lg:mr-[75%] lg:mt-[10px] lg:cursor-pointer md:w-[30px] md:h-[30px] md:mr-[75%] md:mt-[10px] md:cursor-pointer 
            sm:w-[30px] sm:h-[30px] sm:cursor-pointer xs:w-[30px] h-[30px]  cursor-pointer sm:mr-[75%] sm:mt-[10px] xs:mr-[75%] xs:mt-[10px]"></img>
            </div>
            <div className="lg:h-[260px]     lg:m-auto
    sm:h-[260px] sm:border-solid sm:border-[transparent] sm:border-[1px] sm:m-auto
   xs:h-[200px] xs:border-solid xs:border-[transparent] xs:border-[1px] xs:m-auto
  
    ">
        <Formik>
            <Form>
                <div className="lg:h-[150px] lg:w-[90%]   lg:flex lg:flex-col lg:gap-[20px]  
                md:h-[150px] md:w-[90%]   md:flex md:flex-col md:gap-[20px]  
                sm:h-[150px] sm:w-[80%] sm:pr-[80px] sm:mt-[10px] sm:flex sm:flex-col sm:gap-[20px]  
               xs:h-[150px] xs:w-[90%] xs:pr-[50px] xs:mt-[10px]  xs:flex xs:flex-col xs:gap-[20px] 
                ">

                    <Field name="phonenamber" placeholder=" شماره موبایل" className="lg:w-[100%] lg:h-[50px] lg:rounded-[10px] lg:mt-[40px]
                     md:w-[100%] md:h-[50px] md:rounded-[10px] md:mt-[40px] md:bg-[#ffff]
                   sm:w-[100%] sm:h-[50px] sm:rounded-[10px] sm:mt-[40px] sm:bg-[#f5f2f2]
                   xs:w-[100%] xs:h-[50px] xs:rounded-[10px] xs:mt-[40px]  xs:bg-[#f5f2f2]
                    " />

               

                    <Field name="phonenamber" placeholder="رمز عبور" className="lg:w-[100%] lg:h-[50px] lg:rounded-[10px]  
                    sm:w-[100%] sm:h-[50px] sm:rounded-[10px] md:bg-[#ffff]
                    md:w-[100%] md:h-[50px] md:rounded-[10px] sm:bg-[#f5f2f2]
                    xs:w-[100%] xs:h-[50px] xs:rounded-[10px]  xs:bg-[#f5f2f2]
                    " />

                </div>
            </Form>
        </Formik>
    </div>
    <div className="lg:h-[60px] lg:w-[80%] lg:flex lg:flex-row-reverse  
    md:h-[60px] md:w-[90%] md:flex md:flex-row-reverse
    sm:h-[100px] sm:w-[90%] sm:flex sm:flex-row-reverse sm:justify-start 
    xs:h-[100px] xs:w-[90%] xs:flex xs:flex-col  xs:m-auto xs:justify-between
   
    ">
        <div  className="lg:w-[20%]  lg:cursor-pointer lg:text-right lg:hover:text-[#1194bc] 
       md:w-[50%]  md:cursor-pointer md:text-right md:hover:text-[#1194bc]
       sm:w-[30%]  sm:leading-[45px] sm:cursor-pointer sm:hover:text-[#1194bc] 
        xs:w-[100%]   xs:leading-[45px] xs:cursor-pointer  xs:text-right xs:hover:text-[#1194bc] xs:pr-[10px]

        " onClick={ gotoforgotpass}>فراموشی رمز</div>
        <div dir="rtl" className=" lg:w-[80%] lg:flex lg:flex-row lg:justify-start lg:hover:text-[#004458]
        md:w-[50%] md:flex md:flex-row md:justify-start md:hover:text-[#1194bc]
         sm:w-[70%] sm:flex sm:flex-row sm:justify-start sm:hover:text-[#1194bc]
         xs:w-[100%] xs:flex xs:flex-row xs:justify-start xs:hover:text-[#1194bc] 
        ">
            <div className="  lg:leading-[45px] lg:w-[35%]  lg:cursor-pointer
             md:leading-[45px]  md:w-[90%]   md:cursor-pointer 
            sm:leading-[45px] sm:w-[40%]  sm:cursor-pointer
             xs:leading-[45px] xs:w-[35%]  xs:cursor-pointer 

            ">مرا به خاطر بسپار</div>
           <input type="checkbox" className="lg:w-[20px] lg:h-[20px] lg:mt-[14px]
           md:w-[20px] md:h-[20px] md:mt-[14px]
           sm:w-[20px] sm:h-[20px] sm:mt-[14px]
           xs:w-[20px] xs:h-[20px] xs:mt-[14px]
           "></input>

        </div>
    </div>
    <div className="lg:h-[120px] lg:w-[100%] lg:flex lg:flex-col-reverse  lg:gap-[5px]
    md:h-[120px] md:w-[100%] md:flex md:flex-col-reverse  md:gap-[5px]
    sm:h-[150px] sm:w-[100%] sm:flex sm:flex-col-reverse  sm:gap-[5px]
        xs:h-[150px] xs:w-[100%] xs:flex xs:flex-col-reverse xs:m-auto xs:gap-[5px] 
        
    ">
       
        <button className="lg:h-[50px] lg:w-[80%] lg:m-auto lg:hover:bg-gradient-to-b lg:from-[#004458] lg:to-[#1194bc]  lg:rounded-xl lg:bg-[#004458] lg:text-[#ffff]
                sm:h-[40px] sm:w-[80%] sm:m-auto sm:hover:bg-gradient-to-b sm:from-[#004458] sm:to-[#1194bc]  sm:rounded-xl sm:bg-[#004458] sm:text-[#ffff]
                md:h-[40px] md:w-[40%] md:m-auto md:hover:bg-gradient-to-b md:from-[#004458] md:to-[#1194bc]  md:rounded-xl md:bg-[#004458] md:text-[#ffff]
                xs:h-[40px] xs:w-[80%] xs:m-auto xs:hover:bg-gradient-to-b xs:from-[#004458] xs:to-[#1194bc]  xs:rounded-xl xs:bg-[#004458] xs:text-[#ffff]
    "
        >ورود</button>
        <button className="lg:h-[50px] lg:w-[80%] lg:m-auto lg:hover:bg-gradient-to-b lg:from-[#004458] lg:to-[#1194bc]  lg:rounded-xl lg:bg-[#004458] lg:text-[#ffff]
                sm:h-[40px] sm:w-[80%] sm:m-auto sm:hover:bg-gradient-to-b sm:from-[#004458] sm:to-[#1194bc]  sm:rounded-xl sm:bg-[#004458] sm:text-[#ffff]
                md:h-[40px] md:w-[80%] md:m-auto md:hover:bg-gradient-to-b md:from-[#004458] md:to-[#1194bc]  md:rounded-xl md:bg-[#004458] md:text-[#ffff]
                xs:h-[40px] xs:w-[80%] xs:m-auto xs:hover:bg-gradient-to-b xs:from-[#004458] xs:to-[#1194bc]  xs:rounded-xl xs:bg-[#004458] xs:text-[#ffff]
    "
onClick={gotoregister}
        >ثبت نام</button>
    </div>
            </div>
      


</div>

    )

  }


export { FormLogin };
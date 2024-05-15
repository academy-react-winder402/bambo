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
        md:w-[55%] md:h-[100%] md:flex md:flex-col
         sm:w-[100%] sm:h-[60%] sm:flex sm:flex-col
         xs:w-[100%] xs:h-[60%] xs:flex xs:flex-col
         ">
              <div className="lg:m-auto lg:w-[70%] lg:h-[70%]  lg:shadow-sm lg:bg-[#f5f2f2] lg:rounded-lg  
            sm:m-auto sm:w-[70%] sm:h-[100%]  sm:shadow-sm sm:bg-[#f5f2f2] sm:rounded-lg 
            md:m-auto md:w-[70%] md:h-[100%] md:shadow-sm md:bg-[#f5f2f2] md:rounded-lg md:mt-[20px]
            xs:m-auto xs:w-[100%] xs:h-[100%] xs:bg-[#fff] 
            " >
           <div className="lg:h-[60px] w-[100%] lg:text-[25px] lg:text-black  lg:pt-[15px] lg:text-right lg:pr-[40px]
        md:h-[60px] md:w-[100%] md:text-[17px] md:text-black   md:text-right md:pr-[40px]
            sm:h-[60px]    sm:text-[25px] sm:text-black  sm:py-[15px] sm:text-right sm:pr-[40px]
            xs:h-[50px]   xs:text-[25px] xs:text-black xs:py-[15px] xs:text-right xs:pr-[40px]
            xs:flex
            ">ورود
           
            <img src={left} onClick={gotoleft} className=" lg:w-[30px] lg:h-[30px] lg:mr-[400px] lg:cursor-pointer md:w-[30px] md:h-[30px] md:mr-[250px] md:cursor-pointer 
            sm:w-[30px] sm:h-[30px] sm:mr-[300px] sm:cursor-pointer xs:w-[30px] h-[30px] xs:mr-[210px] cursor-pointer"></img>
            </div>
            <div className="lg:h-[260px] lg:w-[500px]    lg:m-auto
    sm:h-[260px] sm:border-solid sm:border-[transparent] sm:border-[1px] sm:m-auto
   xs:h-[200px] xs:border-solid xs:border-[transparent] xs:border-[1px] xs:m-auto
  
    ">
        <Formik>
            <Form>
                <div className="lg:h-[150px] lg:w-[400px]   lg:flex lg:flex-col lg:gap-[20px]  
                sm:h-[150px] sm:w-[700px] sm:pr-[80px] sm:mt-[10px] sm:flex sm:flex-col sm:gap-[50px]  
               xs:h-[150px] xs:w-[350px] xs:mt-[30px] xs:flex xs:flex-col xs:gap-[50px] 
                ">

                    <Field name="phonenamber" placeholder=" شماره موبایل" className="lg:w-[400px] lg:h-[50px] lg:rounded-[10px] lg:mt-[40px]
                   
                   sm:w-[400px] sm:h-[50px] sm:rounded-[10px]
                   xs:w-[300px] xs:h-[50px] xs:rounded-[10px]
                    " />

               

                    <Field name="phonenamber" placeholder="رمز عبور" className="lg:w-[400px] lg:h-[50px] lg:rounded-[10px]  
                    sm:w-[400px] sm:h-[50px] sm:rounded-[10px]
                    xs:w-[300px] xs:h-[50px] xs:rounded-[10px]
                    " />

                </div>
            </Form>
        </Formik>
    </div>
    <div className="lg:h-[60px] lg:w-[590px] lg:flex lg:flex-row-reverse 
    sm:h-[100px] sm:w-[600px] sm:flex sm:flex-row-reverse sm:justify-start 
    xs:h-[100px] xs:w-[370px] xs:flex xs:flex-col  xs:m-auto xs:justify-between
   
    ">
        <div className="lg:w-[500px] lg:cursor-pointer lg:text-right lg:hover:text-[#004458] 
        
        sm:w-[300px] sm:indent-[180px] sm:leading-[45px] sm:cursor-pointer sm:hover:text-[#004458] 
        xs:w-[160px]  xs:leading-[45px] xs:cursor-pointer  xs:text-right xs:hover:text-[#004458] xs:pr-[10px]

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
    <div className="lg:h-[150px] lg:w-[550px] lg:flex lg:flex-col-reverse  lg:gap-[5px]
    sm:h-[150px] sm:w-[600px] sm:flex sm:flex-col-reverse sm:justify-start sm:gap-[5px]
        xs:h-[150px] xs:w-[300px] xs:flex xs:flex-col-reverse xs:m-auto xs:gap-[5px] 
        
    ">
       
        <button className="lg:h-[40px] lg:w-[80%] lg:m-auto lg:hover:bg-gradient-to-b lg:from-[#004458] lg:to-[#1194bc]  lg:rounded-xl lg:bg-[#004458] lg:text-[#ffff]
                sm:h-[40px] sm:w-[80%] sm:m-auto sm:hover:bg-gradient-to-b sm:from-[#004458] sm:to-[#1194bc]  sm:rounded-xl sm:bg-[#004458] sm:text-[#ffff]
                md:h-[40px] md:w-[40%] md:m-auto md:hover:bg-gradient-to-b md:from-[#004458] md:to-[#1194bc]  md:rounded-xl md:bg-[#004458] md:text-[#ffff]
                xs:h-[40px] xs:w-[80%] xs:m-auto xs:hover:bg-gradient-to-b xs:from-[#004458] xs:to-[#1194bc]  xs:rounded-xl xs:bg-[#004458] xs:text-[#ffff]
    "
        >ورود</button>
        <button className="lg:h-[40px] lg:w-[80%] lg:m-auto lg:hover:bg-gradient-to-b lg:from-[#004458] lg:to-[#1194bc]  lg:rounded-xl lg:bg-[#004458] lg:text-[#ffff]
                sm:h-[40px] sm:w-[80%] sm:m-auto sm:hover:bg-gradient-to-b sm:from-[#004458] sm:to-[#1194bc]  sm:rounded-xl sm:bg-[#004458] sm:text-[#ffff]
                md:h-[40px] md:w-[40%] md:m-auto md:hover:bg-gradient-to-b md:from-[#004458] md:to-[#1194bc]  md:rounded-xl md:bg-[#004458] md:text-[#ffff]
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
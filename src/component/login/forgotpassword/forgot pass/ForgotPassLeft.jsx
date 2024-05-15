import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useState } from "react";
import { ForgotPassPageOne } from "../forgotpasspage/ForgotPassPageOne.jsx"
import { ForgotPassPageTwo } from "../forgotpasspage/ForgotPassPageTwo.jsx"
import { ForgotPassPageThree } from "../forgotpasspage/ForgotPassPageThree.jsx";
import { useNavigate } from "react-router-dom";
import left from "../../../../assets/img/register/left.png"
const ForgotPassLeft = () => {
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState(
        {
            email: "",
            password: "",
            phonenumber: "",
            code: "",
            confirmPassword: "",
        }
    );
    const PageDisplay = () => {
        if (page == 0) {
            return <ForgotPassPageOne
                formData={formData}
                setFormData={setFormData}
            />;
        }
        else if (page == 1) {
            return <ForgotPassPageTwo
                formData={formData}
                setFormData={setFormData}
            />;
        }
        else {
            return <ForgotPassPageThree
                formData={formData}
                setFormData={setFormData}
            />;
        }
    }
    const navigator = useNavigate();
    const buttonleft = () => {
        if (page == 0) {
            return (
                navigator("/login")

            );
        }
        else {

            setPage((currPage) => (currPage - 1));

        };

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
            md:m-auto md:w-[80%] md:h-[100%] md:shadow-sm md:bg-[#f5f2f2] md:rounded-lg md:mt-[20px]
            xs:m-auto xs:w-[100%] xs:h-[100%] xs:bg-[#fff] 
            " >
           <div className="lg:h-[60px] lg:w-[100%] lg:text-[20px] lg:text-black  lg:pt-[15px] lg:text-right lg:pr-[40px]
        md:h-[60px] md:w-[100%] md:text-[20px] md:text-black   md:text-right md:pr-[40px]
            sm:h-[60px]  sm:w-[100%]  sm:text-[20px] sm:text-black  sm:py-[15px] sm:text-right sm:pr-[40px]
            xs:h-[50px]  xs:w-[100%] xs:text-[17px] xs:text-black xs:py-[15px] xs:text-right xs:pr-[40px]
            xs:flex
            ">فراموشی رمز
           
            <img src={left} onClick={gotoleft} className=" lg:w-[30px] lg:h-[30px] lg:mr-[67%] lg:mt-[10px] lg:cursor-pointer md:w-[30px] md:h-[30px] md:mr-[55%] md:mt-[10px] md:cursor-pointer 
            sm:w-[30px] sm:h-[30px] sm:cursor-pointer xs:w-[30px] h-[30px]  cursor-pointer sm:mr-[75%] sm:mt-[10px] xs:mr-[50%] xs:mt-[10px]"></img>
            </div>         
            <div className="lg:h-[320px] lg:pr-[40px] 
        sm:h-[320px]  sm:border-solid sm:border-[transparent] sm:border-[1px] sm:pr-[40px]
       xs:h-[320px]  xs:border-solid xs:border-[transparent] xs:border-[1px] xs:pr-[40px]
       md:h-[320px]  md:border-solid md:border-[transparent] md:border-[1px] md:pr-[40px]
       ">{PageDisplay()}</div>
       
       <div className="lg:h-[100px] lg:w-[550px] lg:flex lg:flex-row-reverse lg:justify-start lg:gap-[10px]
       sm:h-[100px] sm:w-[500px] sm:flex sm:flex-row-reverse sm:justify-start sm:gap-[10px]
      xs:h-[110px] xs:w-[300px] xs:flex xs:flex-col-reverse xs:m-auto xs:gap-[10px] 
      md:h-[100px] md:w-[500px] md:flex md:flex-row-reverse md:justify-start md:m-auto md:gap-[10px]
       ">
      <button className="lg:h-[60px] lg:w-[80%] lg:m-auto lg:hover:bg-gradient-to-b lg:from-[#004458] lg:to-[#1194bc]  lg:rounded-xl lg:bg-[#004458] lg:text-[#ffff]
                sm:h-[60px] sm:w-[80%] sm:m-auto sm:hover:bg-gradient-to-b sm:from-[#004458] sm:to-[#1194bc]  sm:rounded-xl sm:bg-[#004458] sm:text-[#ffff]
                md:h-[60px] md:w-[40%] md:m-auto md:hover:bg-gradient-to-b md:from-[#004458] md:to-[#1194bc]  md:rounded-xl md:bg-[#004458] md:text-[#ffff]
                xs:h-[60px] xs:w-[80%] xs:m-auto xs:hover:bg-gradient-to-b xs:from-[#004458] xs:to-[#1194bc]  xs:rounded-xl xs:bg-[#004458] xs:text-[#ffff]
                "
                    disabled={page == 2}
                    onClick={() => {
                        setPage((currPage) => (currPage + 1));
                    }}>
                    {page == 2 ? "ثبت" : "بعدی"}
                </button>
       </div>
            
         
            </div>
            </div>
      
        
    );

};

export { ForgotPassLeft };
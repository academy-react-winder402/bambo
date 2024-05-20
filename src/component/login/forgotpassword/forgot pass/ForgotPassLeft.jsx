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
        <div dir="rtl" className="lg:w-[55%]  lg:my-auto
        sm:w-[100%]  
        md:w-[55%]  
        xs:w-[100%]  
        ">
            <div className="lg:m-auto lg:w-[30rem] h-auto   lg:shadow-sm lg:border-solid lg:border-[1px] lg:border-[black] lg:rounded-lg lg:pb-[2rem] 
            sm:m-auto sm:w-[65%] sm:h-auto  sm:shadow-sm sm:border-[1px] sm:border-[black] sm:border-solid sm:rounded-lg sm:mt-[80px]
            md:m-auto md:w-[70%] md:h-[100%] md:shadow-sm md:border-[1px] md:border-[black] md:border-solid md:rounded-lg md:mt-[20px]
            xs:m-auto xs:w-[100%] xs:h-auto xs:bg-[#fff] 
            " >
               <div className="lg:h-[60px] lg:w-[100%]  lg:flex lg:justify-between
        sm:h-[60px] sm:w-[100%]  sm:flex sm:justify-between
        xs:h-[60px] xs:w-[100%]  xs:flex xs:justify-between
            ">
                <div className="lg:h-[45px] lg:w-[30%] lg:mt-[15px] lg:pt-[5px] lg:border-r-[1px] lg:border-r-solid lg:border-r-[black] lg:text-[20px] lg:text-[#fff]  lg:text-center
                lg:border-l-[1px] lg:border-l-solid lg:border-l-[black]
                lg:border-b-[1px] lg:border-b-solid lg:border-b-[black]
               lg:rounded-l-[0.8em] lg:bg-[#004458]
               sm:h-[45px] sm:w-[30%] sm:mt-[15px] sm:pt-[5px] sm:border-r-[1px] sm:border-r-solid sm:border-r-[black] sm:text-[20px] sm:text-[#fff] xs:text-center
               sm:border-l-[1px] sm:border-l-solid sm:border-l-[black]
               sm:border-b-[1px] sm:border-b-solid sm:border-b-[black]
              sm:rounded-l-[0.8em] sm:bg-[#004458]
               xs:h-[45px] xs:w-[30%] xs:mt-[15px] xs:pt-[5px] xs:border-r-[1px] xs:border-r-solid xs:border-r-[black] xs:text-[20px] xs:text-[#fff] xs:text-center
                xs:border-l-[1px] xs:border-l-solid xs:border-l-[black]
                xs:border-b-[1px] xs:border-b-solid xs:border-b-[black]
               xs:rounded-l-[0.8em] xs:bg-[#004458]

                ">فراموشی رمز</div>

           
            <img src={left} onClick={gotoleft} className=" lg:w-[30px] lg:h-[30px]  lg:cursor-pointer lg:mt-[20px] lg:ml-[15px]
             sm:w-[30px] sm:h-[30px]  sm:cursor-pointer sm:mt-[20px] sm:ml-[15px]
           xs:w-[30px] xs:h-[30px]  xs:cursor-pointer xs:mt-[20px] xs:ml-[15px]
"></img>
            </div> 
            <div className="lg:pr-[17px] 
         sm:border-solid sm:border-[transparent] sm:border-[1px] sm:pr-[17px]
         xs:border-solid xs:border-[transparent] xs:border-[1px] xs:pr-[50px]
         md:border-solid md:border-[transparent] md:border-[1px] md:pr-[15px] xs:mt-[50px]
       ">{PageDisplay()}</div>
       
       <div className="lg:h-[50px] lg:w-[100%]  lg:mt-[40px]
        sm:h-[80px] sm:w-[70%] sm:m-auto
      xs:h-[110px] xs:w-[300px] xs:m-auto
      md:h-[50px] md:w-[100%] md:m-auto
       ">
      <button className="lg:h-[50px] lg:w-[80%] lg:block  lg:m-auto lg:hover:bg-gradient-to-b lg:from-[#004458] lg:to-[#1194bc]  lg:rounded-xl lg:bg-[#004458] lg:text-[#ffff]
                sm:h-[50px] sm:w-[100%] sm:m-auto sm:hover:bg-gradient-to-b sm:from-[#004458] sm:to-[#1194bc]  sm:rounded-xl sm:bg-[#004458] sm:text-[#ffff]
                md:h-[50px] md:w-[80%] md:block md:m-auto md:hover:bg-gradient-to-b md:from-[#004458] md:to-[#1194bc]  md:rounded-xl md:bg-[#004458] md:text-[#ffff]
                xs:h-[50px] xs:w-[100%] xs:mx-auto xs:hover:bg-gradient-to-b xs:from-[#004458] xs:to-[#1194bc]  xs:rounded-xl xs:bg-[#004458] xs:text-[#ffff] xs:mt-[30px]
                "
                    disabled={page == 2}
                    onClick={() => {
                        setPage((currPage) => (currPage + 1));
                    }}>
                    {page == 2 ? "تغییر رمز عبور": "بعدی"}
                </button>
       </div>
            
         
            </div>
            </div>
      
        
    );

};

export { ForgotPassLeft };
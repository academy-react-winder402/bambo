import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { RegisterLeftFirst } from "./pageregister/RegisterLeftFirst";
import { RegisterLeftSecend } from "./pageregister/RegisterLeftSecend";
import { RegisterLeftThird } from "./pageregister/RegisterLeftThird";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { RegisterLeftTop } from "./RegisterLeftTop";

import * as yup from 'yup';
const FormRegister = () => {
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
            return <RegisterLeftFirst
                formData={formData}
                setFormData={setFormData}
              
            />;
        }
        else if (page == 1) {
            return <RegisterLeftSecend
                formData={formData}
                setFormData={setFormData}
            />;
        }
        else {
            return <RegisterLeftThird
                formData={formData}
                setFormData={setFormData}
            />;
        }

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
         sm:w-[100%] sm:h-[60%] sm:flex sm:flex-col
         xs:w-[100%] xs:h-[60%] xs:flex xs:flex-col
         ">
            <div className="lg:m-auto lg:w-[70%] lg:h-[70%]  lg:shadow-sm lg:bg-[#f5f2f2] lg:rounded-lg  
            sm:m-auto sm:w-[70%] sm:h-[100%]  sm:shadow-sm sm:bg-[#f5f2f2] sm:rounded-lg
            xs:m-auto xs:w-[100%] xs:h-[100%] xs:bg-[#fff] 
            " >
            <RegisterLeftTop gotoleft={gotoleft}/>
            <div className="lg:h-[350px] lg:pr-[40px] 
        sm:h-[350px]  sm:border-solid sm:border-[transparent] sm:border-[1px] sm:pr-[40px]
       xs:h-[350px]  xs:border-solid xs:border-[transparent] xs:border-[1px] xs:pr-[40px]
       ">{PageDisplay()}</div>
       <div className="lg:h-[100px] lg:w-[550px] lg:flex lg:flex-row-reverse lg:justify-start lg:gap-[10px]
       sm:h-[100px] sm:w-[500px] sm:flex sm:flex-row-reverse sm:justify-start sm:gap-[10px]
      xs:h-[110px] xs:w-[300px] xs:flex xs:flex-col-reverse xs:m-auto xs:gap-[10px] 
       ">
      <button className="lg:h-[60px] lg:w-[80%] lg:m-auto lg:hover:bg-gradient-to-b lg:from-[#004458] lg:to-[#1194bc]  lg:rounded-xl lg:bg-[#004458] lg:text-[#ffff]
                sm:h-[60px] sm:w-[80%] sm:m-auto sm:hover:bg-gradient-to-b sm:from-[#004458] sm:to-[#1194bc]  sm:rounded-xl sm:bg-[#004458] sm:text-[#ffff]
                xs:h-[60px] xs:w-[80%] xs:m-auto xs:hover:bg-gradient-to-b xs:from-[#004458] xs:to-[#1194bc]  xs:rounded-xl xs:bg-[#004458] xs:text-[#ffff]
                "
                    disabled={page == 2}
                    onClick={() => {
                        setPage((currPage) => (currPage + 1));
                    }}>
                    {page == 2 ? "ثبت نام" : "بعدی"}
                </button>
       </div>
            
          
            </div>
            </div>
      
        
    );

};
export { FormRegister }
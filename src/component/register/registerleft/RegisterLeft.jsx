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
    const validation = () => {
        yup.object().shape({
            password: yup.string().max(8, 'Must be 8 characters or less').required("fill"),
            phonenumber: yup.string().required("fill"),
            email: yup.string().required("fill"),
            confirmPassword:  yup.string().required("fill"),
            code:  yup.string().required("fill"),
        });
    };
    const PageDisplay = () => {
        if (page == 0) {
            return <RegisterLeftFirst
                formData={formData}
                setFormData={setFormData}
              validation ={validation}
            />;
        }
        else if (page == 1) {
            return <RegisterLeftSecend
                formData={formData}
                setFormData={setFormData}
                validation ={validation}
            />;
        }
        else {
            return <RegisterLeftThird
                formData={formData}
                setFormData={setFormData}
                validation ={validation}
            />;
        }

    };
    const navigator = useNavigate();
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
        <div dir="rtl" className="w-[55%]  my-auto">
            <div className="lg:m-auto lg:w-[30rem] h-auto   lg:shadow-sm lg:border-solid lg:border-[1px] lg:border-[black] lg:rounded-lg lg:pb-[2rem] 
            sm:m-auto sm:w-[70%] sm:h-[100%]  sm:shadow-sm sm:border-[1px] sm:border-[black] sm:border-solid sm:rounded-lg 
            md:m-auto md:w-[70%] md:h-[100%] md:shadow-sm md:border-[1px] md:border-[black] md:border-solid md:rounded-lg md:mt-[20px]
            xs:m-auto xs:w-[100%] xs:h-[100%] xs:bg-[#fff] 
            " >
            <RegisterLeftTop gotoleft={gotoleft}/>
            <div className="lg:pr-[40px] 
         sm:border-solid sm:border-[transparent] sm:border-[1px] sm:pr-[40px]
         xs:border-solid xs:border-[transparent] xs:border-[1px] xs:pr-[40px]
         md:border-solid md:border-[transparent] md:border-[1px] md:pr-[40px]
       ">{PageDisplay()}</div>
        <div className="lg:w-[120px] lg:h-[20px] lg:mr-[50px] lg:text-[20px] lg:mt-[10px] lg:text-[#1194bc]
        sm:w-[120px] sm:h-[40px] sm:mr-[40px] sm:text-[20px] sm:mt-[10px] sm:text-[#1194bc]
        xs:w-[120px] xs:h-[40px] xs:mr-[40px] xs:text-[20px] xs:mt-[10px] xs:text-[#1194bc]
        md:w-[120px] md:h-[40px] md:mr-[40px] md:text-[20px] md:mt-[10px] md:text-[#1194bc]
        "><NavLink to="/login" >ورود</NavLink></div>
       <div className="lg:h-[50px] lg:w-[100%]  lg:mt-[40px]
        sm:h-[100px] sm:w-[500px] 
      xs:h-[110px] xs:w-[300px] 
      md:h-[100px] md:w-[500px] 
       ">
      <button className="lg:h-[50px] lg:w-[80%] lg:block  lg:m-auto lg:hover:bg-gradient-to-b lg:from-[#004458] lg:to-[#1194bc]  lg:rounded-xl lg:bg-[#004458] lg:text-[#ffff]
                sm:h-[50px] sm:w-[45%] sm:m-auto sm:hover:bg-gradient-to-b sm:from-[#004458] sm:to-[#1194bc]  sm:rounded-xl sm:bg-[#004458] sm:text-[#ffff]
                md:h-[50px] md:w-[30%] md:m-auto md:hover:bg-gradient-to-b md:from-[#004458] md:to-[#1194bc]  md:rounded-xl md:bg-[#004458] md:text-[#ffff]
                xs:h-[50px] xs:w-[45%] xs:m-auto xs:hover:bg-gradient-to-b xs:from-[#004458] xs:to-[#1194bc]  xs:rounded-xl xs:bg-[#004458] xs:text-[#ffff]
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
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { RegisterLeftFirst } from "./RegisterLeftFirst";
import { RegisterLeftSecend } from "./RegisterLeftSecend";
import { RegisterLeftThird } from "./RegisterLeftThird";
import { useNavigate } from "react-router-dom";
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
    const navigator = useNavigate();
    const buttonleft =()=>{
        if(page == 0){
            return(
                navigator("/")
         
            );
                    }
                    else{
                       
                            setPage((currPage) => (currPage - 1));
                        
                    };
                   
    };
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
    return (
        <div dir="rtl" className="lg:bg-[#f5f2f2] lg:w-[55%] lg:h-[100%] lg:flex lg:flex-col
        sm:bg-[#f5f2f2] sm:w-[100%] sm:h-[60%] sm:flex sm:flex-col
         ">

            <div className="lg:h-[100px]  lg:mt-[10px]  lg:text-[32px] lg:text-black lg:leading-[25px] lg:py-[50px] lg:text-right lg:pr-[40px]
            sm:h-[80px]  sm:mt-[10px]  sm:text-[30px] sm:text-black sm:leading-[25px] sm:py-[20px] sm:text-right sm:pr-[40px]
            ">ثبت نام </div>
            <div className="lg:h-[450px]  lg:border-solid lg:border-[transparent] lg:border-[1px] lg:p-[40px]
            sm:h-[350px]  sm:border-solid sm:border-[transparent] sm:border-[1px] sm:p-[40px]
            ">{PageDisplay()}</div>
            <div className="lg:h-[100px] lg:w-[550px] lg:flex lg:flex-row-reverse lg:justify-start lg:gap-[10px]
            sm:h-[100px] sm:w-[500px] sm:flex sm:flex-row-reverse sm:justify-start sm:gap-[10px]
            ">
            <button className="lg:h-[60px] lg:w-[90px] lg:bg-[#edeaea]  lg:my-[5px]  lg:rounded-xl lg:hover:bg-[#004458] lg:hover:text-[#ffff]
            sm:h-[50px] sm:w-[70px] sm:bg-[#edeaea]  sm:my-[5px]  sm:rounded-xl sm:hover:bg-[#004458] sm:hover:text-[#ffff]
            "
      onClick= {buttonleft}
   >{page == 0 ? " بازگشت" : "قبلی"}</button>
                <button className="lg:h-[60px] lg:w-[90px] lg:bg-[#edeaea] lg:my-[5px]  lg:rounded-xl lg:hover:bg-[#004458] lg:hover:text-[#ffff]
                  sm:h-[50px] sm:w-[70px] sm:bg-[#edeaea]  sm:my-[5px]  sm:rounded-xl sm:hover:bg-[#004458] sm:hover:text-[#ffff]
                "
                    disabled={page == 2}
                    onClick={() => {
                        setPage((currPage) => (currPage + 1));
                    }}>
                    {page == 2 ? "ثبت نام" : "بعدی"}
                </button>
            </div>

        </div>
    );

};
export { FormRegister }
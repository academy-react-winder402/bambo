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
        <div dir="rtl" className="bg-[#f5f2f2] w-[55%] h-[100%] flex flex-col ">

            <div className="h-[100px]  mt-[10px]  text-[32px] text-black leading-[25px] py-[50px] text-right pr-[40px]">ثبت نام </div>
            <div className="h-[450px]  border-solid border-[transparent] border-[1px] p-[40px]">{PageDisplay()}</div>
            <div className="h-[100px] w-[700px] flex flex-row-reverse justify-start gap-[10px]">
            <button className="h-[60px] w-[90px] bg-[#edeaea]  my-[5px]  rounded-xl hover:bg-[#004458] hover:text-[#ffff]"
      onClick= {buttonleft}
   >{page == 0 ? " بازگشت" : "قبلی"}</button>
                <button className="h-[60px] w-[90px] bg-[#edeaea] my-[5px]  rounded-xl hover:bg-[#004458] hover:text-[#ffff]"
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
import { Formik, Form, Field, ErrorMessage } from "formik";
import React,{useState} from "react";
import {ForgotPassPageOne } from "../forgotpasspage/ForgotPassPageOne.jsx"
import {ForgotPassPageTwo} from "../forgotpasspage/ForgotPassPageTwo.jsx"
import { ForgotPassPageThree } from "../forgotpasspage/ForgotPassPageThree.jsx";
import { useNavigate } from "react-router-dom";
const ForgotPassLeft = () => {
        const [page,setPage]=useState(0);
        const [formData, setFormData] = useState(
            {
                email: "",
                password: "",
                phonenumber: "",
                code: "",
                confirmPassword: "",
            }
        );
        const PageDisplay =()=>{
            if (page == 0){
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
const buttonleft =()=>{
    if(page == 0){
        return(
            navigator("/login")
     
        );
                }
                else{
                   
                        setPage((currPage) => (currPage - 1));
                    
                };
               
};
    return(
        <div  dir="rtl" className="bg-[#f5f2f2] w-[55%] h-[100%] flex flex-col">
<div className="h-[70px]  mt-[50px] text-[30px] text-black leading-[25px] py-[50px] text-right pr-[40px]">
فراموشی رمز
            </div>
<div className="h-[450px] border-solid border-[transparent] border-[1px] ">{PageDisplay()}</div>
<div className="h-[100px] w-[700px] flex flex-row-reverse justify-start gap-[10px]">
   <button className="h-[60px] w-[90px] bg-[#edeaea]  my-[5px] ml-[60px]  rounded-xl hover:bg-[#004458] hover:text-[#ffff]"
      onClick= {buttonleft}
   >{page == 0 ? " بازگشت" : "قبلی"}</button>
   <button  className="h-[60px] w-[90px] bg-[#edeaea] my-[5px] ml-[5px] rounded-xl hover:bg-[#004458] hover:text-[#ffff]" 
       disabled={page == 2}
       onClick={() => {
           setPage((currPage) => (currPage + 1));
       }}
>{page == 2 ? "ثبت" : "بعدی"}</button>
</div>

        </div>
);
  
};

export { ForgotPassLeft };
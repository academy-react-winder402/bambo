import { Formik, Form, Field, ErrorMessage } from "formik";
import React,{useState} from "react";
import {ForgotPassPageOne } from "../forgotpasspage/ForgotPassPageOne.jsx"
import {ForgotPassPageTwo} from "../forgotpasspage/ForgotPassPageTwo.jsx"
import { ForgotPassPageThree } from "../forgotpasspage/ForgotPassPageThree.jsx";
import home from "../../../../assets/img/register/home.png";
const ForgotPassLeft = () => {
        const [page,setPage]=useState(0);
    
        const PageDisplay =()=>{
            if (page == 0){
    return <ForgotPassPageOne/>;
            }
            else if (page == 1) {
                return <ForgotPassPageTwo/>;
            }
            else {
                <ForgotPassPageThree/>
            }
        }

    return(
        <div className="bg-[#f5f2f2] w-[55%] h-[100%]">
<div className="h-[70px]  mt-[50px] text-[30px] text-black leading-[25px] py-[50px] text-right pr-[40px]">
فراموشی رمز
            </div>
<div className="h-[450px] border-solid border-[transparent] border-[1px] ">{PageDisplay()}</div>
<div className="h-[80px]">
   <button className="h-[60px] w-[90px] bg-[#edeaea]  my-[5px] ml-[60px]  rounded-xl hover:bg-[#004458] hover:text-[#ffff]"
      disabled={page == 0}
      onClick={() => {
          setPage((currPage) => (currPage - 1));
      }}
   >قبلی</button>
   <button  className="h-[60px] w-[90px] bg-[#edeaea] my-[5px] ml-[5px] rounded-xl hover:bg-[#004458] hover:text-[#ffff]" 
       disabled={page == 2}
       onClick={() => {
           setPage((currPage) => (currPage + 1));
       }}
>بعدی</button>
</div>

        </div>
);
  
};

export { ForgotPassLeft };
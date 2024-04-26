import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import {ForgotPassPageOne } from "./forgotpasspage/ForgotPassPageOne.jsx"
import {ForgotPassTwo} from "./forgotpasspage/ForgotPassTwo.jsx"
import { ForgotPassPageThree } from "./forgotpasspage/ForgotPassThree.jsx";
const ForgotPassLeft = () => {
    return(
        <div className="bg-[#f5f2f2] w-[600px] h-[650px] rounded-l-xl">
<div className="h-[50px] text-[30px] text-black leading-[45px] py-[10px] text-right px-[30px]">فراموشی رمز</div>
<div className="h-[450px] border-solid border-[transparent] border-[1px] "></div>
<div className="h-[100px]">
   <button className="h-[60px] w-[90px] bg-[#edeaea]  my-[5px] ml-[60px]  rounded-xl hover:bg-[#004458] hover:text-[#ffff]"
   >Prev</button>
   <button  className="h-[60px] w-[90px] bg-[#edeaea] my-[5px] ml-[5px] rounded-xl hover:bg-[#004458] hover:text-[#ffff]" 
>Next</button>
</div>

        </div>
);
  
};

export { ForgotPassLeft };
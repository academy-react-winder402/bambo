import React, { useState,useEffect} from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, NavLink, useNavigate } from 'react-router-dom'

import { FormLoginTop } from "./FormLoginTop.jsx";
import {FormLoginCenter} from "./FormLoginCenter.jsx"


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
 
    
    return (
    
        <div dir="rtl" className="lg:w-[55%]  lg:my-auto
        sm:w-[100%]  
        md:w-[55%]  
        xs:w-[100%]  xs:h-[60%]
        ">
          <div className="lg:m-auto lg:w-[30rem] h-auto   lg:shadow-sm lg:border-solid lg:border-[1px] lg:border-[black] lg:rounded-lg 
        sm:m-auto sm:w-[65%] sm:h-auto  sm:shadow-sm sm:border-[1px] sm:border-[black] sm:border-solid sm:rounded-lg sm:mt-[80px]
        md:m-auto md:w-[80%] md:h-auto md:shadow-sm md:border-[1px] md:border-[black] md:border-solid md:rounded-lg md:mt-[20px]
         xs:w-[100%] xs:h-auto xs:bg-[#fff] 
        " >
            <FormLoginTop gotohome={gotohome}/>
      <FormLoginCenter gotoforgotpass={gotoforgotpass}  gotoregister={gotoregister}/>

            </div>
      


</div>

    )

  }


export { FormLogin };
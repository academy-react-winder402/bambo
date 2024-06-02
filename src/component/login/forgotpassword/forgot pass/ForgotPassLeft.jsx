import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useState } from "react";
import { ForgotPassPageOne } from "../forgotpasspage/ForgotPassPageOne.jsx";
import { ForgotPassPageThree } from "../forgotpasspage/ForgotPassPageThree.jsx";
import { useNavigate } from "react-router-dom";
import left from "../../../../assets/img/register/left.png";
const ForgotPassLeft = () => {
  const [ email, setEmail] = useState()
  const [newpassword, setNewpassword] = useState({
    password:"",
resetpassword:"",
  }
  )
  const [otp, setotp] = useState();
  const [step, setStep] = useState(1);
  const stepCounter = () => {
    setStep(step + 1);
  };

  //   const Back = () => {
  //     setStep(step - 1);
  //   };
  const navigator = useNavigate();
  const gotoleft = () => {
    if (step == 1) {
      return navigator("/");
    } else {
      setStep(step - 1);
    }
  };
  return (
    <div
      dir="rtl"
      className="lg:w-[55%]  lg:my-auto
        sm:w-[100%]  
        md:w-[55%]  
        xs:w-[100%]  
        "
    >
      <div
        className="lg:m-auto lg:w-[30rem] h-auto   lg:shadow-sm lg:border-solid lg:border-[1px] lg:border-[black] lg:rounded-lg lg:pb-[2rem] 
            sm:m-auto sm:w-[65%] sm:h-auto  sm:shadow-sm sm:border-[1px] sm:border-[black] sm:border-solid sm:rounded-lg sm:mt-[80px]
            md:m-auto md:w-[70%] md:h-[100%] md:shadow-sm md:border-[1px] md:border-[black] md:border-solid md:rounded-lg md:mt-[20px]
            xs:m-auto xs:w-[100%] xs:h-auto xs:bg-[#fff] 
            "
      >
        <div
          className="lg:h-[60px] lg:w-[100%]  lg:flex lg:justify-between
        sm:h-[60px] sm:w-[100%]  sm:flex sm:justify-between
        xs:h-[60px] xs:w-[100%]  xs:flex xs:justify-between
            "
        >
          <div
            className="lg:h-[45px] lg:w-[30%] lg:mt-[15px] lg:pt-[5px] lg:border-r-[1px] lg:border-r-solid lg:border-r-[black] lg:text-[20px] lg:text-[#fff]  lg:text-center
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

                "
          >
            فراموشی رمز
          </div>

          <img
            src={left}
            onClick={gotoleft}
            className=" lg:w-[30px] lg:h-[30px]  lg:cursor-pointer lg:mt-[20px] lg:ml-[15px]
             sm:w-[30px] sm:h-[30px]  sm:cursor-pointer sm:mt-[20px] sm:ml-[15px]
           xs:w-[30px] xs:h-[30px]  xs:cursor-pointer xs:mt-[20px] xs:ml-[15px]
"
          ></img>
        </div>
        <div
          className="lg:pr-[17px] 
         sm:border-solid sm:border-[transparent] sm:border-[1px] sm:pr-[17px]
         xs:border-solid xs:border-[transparent] xs:border-[1px] xs:pr-[50px]
         md:border-solid md:border-[transparent] md:border-[1px] md:pr-[15px] xs:mt-[50px]
       "
        >
          {" "}
          {step == 1 ? (
            <ForgotPassPageOne step={stepCounter} setEmail={setEmail} email={ email}/>
          ) : step == 2? (
            <ForgotPassPageThree  email={ email} step={stepCounter} setNewpassword={setNewpassword}/>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export { ForgotPassLeft };

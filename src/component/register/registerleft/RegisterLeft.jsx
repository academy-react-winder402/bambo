import React, { useState,useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { RegisterLeftFirst } from "./pageregister/RegisterLeftFirst";
import { RegisterLeftSecend } from "./pageregister/RegisterLeftSecend";
import { RegisterLeftThird } from "./pageregister/RegisterLeftThird";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { RegisterLeftTop } from "./RegisterLeftTop";

const FormRegister = () => {
const [phoneNumber,setPhoneNumber]=useState();
    // const [page, setPage] = useState(0);     
    // const PageDisplay = () => {
    //     switch(page){
    //         case 0: return <RegisterLeftFirst  />;
    //         break
            
    //         case 1: return <RegisterLeftSecend  />;
    //         break 

    //         case 2: return <RegisterLeftThird />;
    //         break
           
    //     }

    // };
    const [step, setStep] = useState(1);
    const stepCounter = () => {
        setStep(step + 1);
      };
    
      const Back = () => {
        setStep(step - 1);
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
        <div dir="rtl" className="lg:w-[55%]  lg:my-auto
        sm:w-[100%]  
        md:w-[55%]  
        xs:w-[100%]  xs:my-auto 
        ">
            <div className="lg:m-auto lg:w-[30rem] h-auto   lg:shadow-sm lg:border-solid lg:border-[1px] lg:border-[black] lg:rounded-lg lg:pb-[2rem] 
            sm:m-auto sm:w-[65%] sm:h-auto  sm:shadow-sm sm:border-[1px] sm:border-[black] sm:border-solid sm:rounded-lg sm:mt-[80px]
            md:m-auto md:w-[70%] md:h-[100%] md:shadow-sm md:border-[1px] md:border-[black] md:border-solid md:rounded-lg md:mt-[20px]
            xs:m-auto xs:w-[100%] xs:h-auto xs:bg-[#fff] 
            " >
       
            <RegisterLeftTop gotoleft={gotoleft}/>
         
            <div className="lg:pr-[40px] 
         sm:border-solid sm:border-[transparent] sm:border-[1px] sm:pr-[40px]
         xs:border-solid xs:border-[transparent] xs:border-[1px] xs:pr-[40px]
         md:border-solid md:border-[transparent] md:border-[1px] md:pr-[15px]
       ">              {step == 1 ? (
        <RegisterLeftFirst step={stepCounter} setPhoneNumber={setPhoneNumber} />
      ) : step == 2 ? (
        <RegisterLeftSecend phoneNumber={phoneNumber}
          Back={Back}
          step={stepCounter}
        />
      ) : step == 3 ? (
        <RegisterLeftThird phoneNumber={phoneNumber}
          Back={Back}
          step={stepCounter}
        />
      ) : null} </div>
 
        
      
      
         
            </div>
            </div>
 
        
    );

};
export { FormRegister }
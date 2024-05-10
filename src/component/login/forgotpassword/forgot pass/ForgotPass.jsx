import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ForgotPassLeft } from "./ForgotPassLeft";
import { RegisterRight } from "../../../register/RegisterRight"
const ForgotPassc = () => {
    return (
   
        <div className="lg:w-[100%] lg:h-[730px] lg:flex lg:flex-wrap
        sm:flex sm:flex-col-reverse sm:w-[100%]  sm:h-[873px]
         ">
            <ForgotPassLeft />
            < RegisterRight />
        </div>
    )
};
export { ForgotPassc }
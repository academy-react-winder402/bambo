import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ForgotPassLeft } from "./ForgotPassLeft";
import { RegisterRight } from "../../register/RegisterRight"
const ForgotPass = () => {
    return (
        <div className="w-[1153px] h-[650px]   mx-[200px] my-[20px] flex flex-wrap rounded-xl">
            <ForgotPassLeft />
            < RegisterRight />
        </div>
    )
};
export { ForgotPass }
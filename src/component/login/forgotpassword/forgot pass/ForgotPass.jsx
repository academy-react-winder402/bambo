import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ForgotPassLeft } from "./ForgotPassLeft";
import { RegisterRight } from "../../../register/RegisterRight"
const ForgotPassc = () => {
    return (
        <div className="flex flex-row w-[100%] h-[730px]">
            <ForgotPassLeft />
            < RegisterRight />
        </div>
    )
};
export { ForgotPassc }
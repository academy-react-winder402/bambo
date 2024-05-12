import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
const ForgotPassPageOne = () => {
    return (
        <div>
            <Formik>
                <Form>
                    <div className="lg:h-[300px] lg:mt-[100px]  lg:flex flex-col lg:gap-[30px]
                    sm:h-[300px] sm:mt-[20px]  sm:flex sm:flex-col sm:gap-[20px]
                    xs:h-[300px] xs:mt-[20px]  xs:flex xs:flex-col xs:gap-[20px]
                    ">
                        <label className="  lg:w-[130px] lg:h-[40px] lg:text-[20px] lg:text-right
                        sm:w-[130px] sm:h-[30px] sm:text-[20px] sm:text-right
                        xs:w-[130px] xs:h-[30px] xs:text-[20px] xs:text-right
                        ">شماره موبایل</label>
                        <Field name="phonenamber" placeholder="شماره موبایل" className="lg:w-[500px] lg:h-[60px] lg:rounded-[10px] 
                        sm:w-[500px] sm:h-[60px] sm:rounded-[10px]
                        xs:w-[350px] xs:h-[60px] xs:rounded-[10px] 
                         " />

                    </div>
                </Form>
            </Formik>
        </div>

    );
}
export { ForgotPassPageOne }
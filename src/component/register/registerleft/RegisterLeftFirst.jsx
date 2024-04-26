import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
const RegisterLeftFirst = () => {
    return (

        <div >
            <Formik>
                <Form>
                    <div className="h-[300px] mt-[100px] flex flex-col gap-[30px] ">
                        <label className="ml-[400px] text-[20px]">شماره موبایل</label>
                        <Field name="phonenamber" placeholder="شماره موبایل" className="w-[400px] h-[60px] rounded-[10px] ml-[150px]" />

                    </div>
                </Form>
            </Formik>
        </div>


    );
};

export { RegisterLeftFirst };
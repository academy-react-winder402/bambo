import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import * as yup from 'yup';
const RegisterLeftFirst = ({formData, setFormData}) => {
    const validation = yup.object().shape({
        phonenumber: yup.string().required("لطفا پر کنید"),
      
    });
    return (

        <div >
            <Formik
            validationSchema={validation}>
                <Form>
                    <div className="h-[300px] mt-[100px] flex flex-col gap-[30px] ">
                        <label className="ml-[520px] text-[20px]">شماره موبایل</label>
                        <Field name="phonenamber"  placeholder="شماره موبایل" className="w-[400px] h-[60px] rounded-[10px] ml-[250px]" 
                        value={formData.phonenumber}
                        onChange ={(event) => setFormData({...formData,phonenumber:event.target.value})}
                        />

                    </div>
                </Form>
            </Formik>
        </div>


    );
};

export { RegisterLeftFirst };
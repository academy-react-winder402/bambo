import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import * as yup from 'yup';
const RegisterLeftFirst = ({ formData, setFormData,validation }) => {
  
    const onSubmit = (values) => {
        const obj = { phonenumber: values.phonenumber }
    };

    return (

        <div  >
            <Formik
                initialValues={{ phonenumber: "" }}
                onSubmit={(values) => onSubmit(values)}
                validationSchema={validation}>
               { (form) => <Form>
                    <div className="lg:h-[140px]   lg:flex flex-col lg:gap-[10px] lg:mt-[50px]
                    sm:h-[300px] sm:mt-[50px]  sm:flex sm:flex-col sm:gap-[20px] 
                    md:h-[300px] md:mt-[40px]  md:flex md:flex-col md:gap-[20px] 
                    xs:h-[300px] xs:mt-[40px]  xs:flex xs:flex-col xs:gap-[20px] 
                    ">
                        <label className="  lg:h-[40px] lg:text-[15px] lg:text-right lg:mt-[30px] lg:pr-[10px] lg:text-[#004458]
                         sm:h-[30px] sm:text-[15px] sm:text-right sm:mt-[30px]
                         md:h-[30px] md:text-[15px] md:text-right md:mt-[30px]
                         xs:h-[30px] xs:text-[15px] xs:text-right  xs:mt-[30px]
                        " > شماره موبایل خود را وارد کنید</label>
                        <Field name="phonenumber"  className="lg:w-[90%] lg:h-[50px] lg:rounded-[10px] lg:pr-[1rem] lg:bg-[#ffff]
                        sm:w-[250px] sm:h-[60px] sm:rounded-[10px] sm:pr-[1rem] sm:bg-[#fff]
                        lg:border-solid lg:border-[1px] lg:border-[black]
                        sm:border-[1px] sm:border-[black] sm:border-solid
                        md:border-[1px] md:border-[black] md:border-solid
                        xs:border-[1px] xs:border-[black] xs:border-solid 
                        xs:w-[90%] xs:h-[40px] xs:rounded-[10px] xs:pr-[1rem] 
                        "
                        value={formData.phonenumber}
                        // onChange={(event) => setFormData({ ...formData, phonenumber: event.target.value })}
                        />
                        <ErrorMessage name="phonenumber" component={"p"} className="lg:text-[red]  sm:text-[red] xs:text-[red]" />
                    </div>
                </Form>
                }
            </Formik>
        </div>


    );
};

export { RegisterLeftFirst };
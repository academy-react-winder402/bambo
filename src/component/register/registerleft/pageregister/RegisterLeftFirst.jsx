import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import * as yup from 'yup';
const RegisterLeftFirst = ({ formData, setFormData}) => {
    const validation =()=>{
        yup.object().shape({
            phonenumber: yup.phonenumber().required("fill"),
    
        });
    } 
    const onSubmit =  (values) => {
        const obj = { phonenumber: values.phonenumber }
    };

    return (

        <div  >
            <Formik
                initialValues={{ phonenumber: "" }}
                onSubmit={(values) => onSubmit(values)}
                validationSchema={validation}>
                <Form>
                    <div className="lg:h-[300px]   lg:flex flex-col lg:gap-[10px]
                    sm:h-[300px] sm:mt-[20px]  sm:flex sm:flex-col sm:gap-[20px]
                    xs:h-[300px] xs:mt-[10px]  xs:flex xs:flex-col xs:gap-[20px] 
                    ">
                        <label className=" lg:w-[130px] lg:h-[40px] lg:text-[17px] lg:text-right
                        sm:w-[130px] sm:h-[30px] sm:text-[17px] sm:text-right
                        xs:w-[130px] xs:h-[30px] xs:text-[17px] xs:text-right 
                        ">شماره موبایل</label>
                        <Field name="phonenumber" placeholder="شماره موبایل" className="lg:w-[500px] lg:h-[60px] lg:rounded-[10px] lg:pr-[1rem] lg:bg-[#ffff]
                        sm:w-[500px] sm:h-[60px] sm:rounded-[10px] sm:pr-[1rem] sm:bg-[#f5f2f2]
                        xs:w-[330px] xs:h-[60px] xs:rounded-[10px] xs:pr-[1rem] xs:bg-[#f5f2f2]
                        "
                            // value={formData.phonenumber}
                            // onChange={(event) => setFormData({ ...formData, phonenumber: event.target.value })}
                        />
                        <ErrorMessage name="phonenumber" component={"p"} className="lg:text-[red]  sm:text-[red] xs:text-[red]"/>
                    </div>
                </Form>
            </Formik>
        </div>


    );
};

export { RegisterLeftFirst };
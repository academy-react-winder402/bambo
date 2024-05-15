import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
const ForgotPassPageOne = () => {
    return (
        <div>
            <Formik>
                <Form>
                <div className="lg:h-[300px]   lg:flex flex-col lg:gap-[10px]
                    sm:h-[300px] sm:mt-[20px]  sm:flex sm:flex-col sm:gap-[20px]
                    md:h-[300px] md:mt-[20px]  md:flex md:flex-col md:gap-[20px]
                    xs:h-[300px] xs:mt-[10px]  xs:flex xs:flex-col xs:gap-[20px] 
                    ">
                        <label className=" lg:w-[130px] lg:h-[40px] lg:text-[17px] lg:text-right
                        sm:w-[130px] sm:h-[30px] sm:text-[17px] sm:text-right
                        md:w-[130px] md:h-[30px] md:text-[17px] md:text-right
                        xs:w-[130px] xs:h-[30px] xs:text-[17px] xs:text-right 
                        ">شماره موبایل</label>
                        <Field name="phonenumber" placeholder="شماره موبایل" className="lg:w-[500px] lg:h-[60px] lg:rounded-[10px] lg:pr-[1rem] lg:bg-[#ffff]
                           md:w-[250px] md:h-[60px] md:rounded-[10px] md:pr-[1rem] md:bg-[#ffff]
                        sm:w-[250px] sm:h-[60px] sm:rounded-[10px] sm:pr-[1rem] sm:bg-[#f5f2f2]
                     
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
}
export { ForgotPassPageOne }
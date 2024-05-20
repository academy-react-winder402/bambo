import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
const ForgotPassPageOne = () => {
    return (
        <div>
               <Formik>
                <Form>
                    <div className="lg:h-[140px]   lg:flex flex-col lg:gap-[10px]  lg:mr-[30px]
                    sm:h-[200px] s sm:flex sm:flex-col sm:gap-[20px] sm:m-auto sm:mr-[50px]
                    md:h-[200px]   md:flex md:flex-col md:gap-[20px] 
                    xs:h-[200px]   xs:flex xs:flex-col xs:gap-[20px] 
                    
                    ">
                        <label className="  lg:h-[40px] lg:text-[15px] lg:text-right lg:mt-[30px]  lg:text-[#004458]
                         sm:h-[30px] sm:text-[15px] sm:text-right sm:mt-[30px]
                         md:h-[30px] md:text-[15px] md:text-right md:mt-[30px]
                         xs:h-[30px] xs:text-[15px] xs:text-right  xs:mt-[30px]
                        
                        " > شماره موبایل خود را وارد کنید</label>
                        <Field name="phonenumber" className="lg:w-[88%] lg:h-[50px] lg:rounded-[10px]  lg:bg-[#ffff]
                        sm:w-[79%] sm:h-[50px] sm:rounded-[10px] sm:bg-[#fff] 
                        md:w-[83%] md:h-[50px] md:rounded-[10px] md:bg-[#fff] 
                        lg:border-solid lg:border-[1px] lg:border-[black] 
                        sm:border-[1px] sm:border-[black] sm:border-solid
                        md:border-[1px] md:border-[black] md:border-solid
                        xs:border-[1px] xs:border-[black] xs:border-solid 
                        xs:w-[85%] xs:h-[40px] xs:rounded-[10px]  
                        "
                            // value={formData.phonenumber}
                        // onChange={(event) => setFormData({ ...formData, phonenumber: event.target.value })}
                        />
                       
                    </div>
                </Form>
                
            </Formik>
        </div>

    );
}
export { ForgotPassPageOne }
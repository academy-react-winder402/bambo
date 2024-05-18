import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
const ForgotPassPageThree= () => {
    return(
        
             <div>
           <Formik>
                <Form>
                    
                < div dir="rtl" className=" lg:h-[500px]  lg:mt-[20px]  lg:flex lg:flex-col lg:gap-[10px]
                md:h-[500px]  md:mt-[20px]  md:flex  md:flex-col md:gap-[10px]
                      sm:h-[400px] sm:mt-[2px]  sm:flex sm:flex-col sm:gap-[10px]
                      xs:h-[400px] xs:mt-[2px]  xs:flex xs:flex-col xs:gap-[10px]
                      
                     ">
                        <label className=" text-[17px] ">رمز عبور</label>
                        <Field type="password" name="phonenamber" placeholder="رمز عبور"  className="lg:w-[500px]  lg:h-[70px]  lg:rounded-[10px] 
                          md:w-[250px] md:h-[60px] md:rounded-[10px] md:pr-[1rem] md:bg-[#ffff]
                         sm:w-[500px] sm:h-[60px] sm:rounded-[10px] sm:bg-[#f5f2f2]
                         xs:w-[300px] xs:h-[40px] xs:rounded-[10px] xs:bg-[#f5f2f2]
                          " />

                  
                   
                        <label className=" text-[17px] ">تکرار رمز عبور </label>
                        <Field type="password" name="phonenamber" placeholder="تکرار رمز عبور" className="lg:w-[500px]  lg:h-[70px]  lg:rounded-[10px] 
                          md:w-[250px] md:h-[60px] md:rounded-[10px] md:pr-[1rem] md:bg-[#ffff]
                         sm:w-[500px] sm:h-[60px] sm:rounded-[10px] sm:bg-[#f5f2f2]
                         xs:w-[300px] xs:h-[40px] xs:rounded-[10px] xs:bg-[#f5f2f2]
                         " />

                    </div>
                </Form>
            </Formik>
             </div>
        
      
    );
};

export {ForgotPassPageThree};
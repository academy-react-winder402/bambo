import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
const ForgotPassPageThree= () => {
    return(
        
             <div>
           <Formik>
                <Form>
                    
                < div dir="rtl" className=" lg:h-[500px]  lg:mt-[20px]  lg:flex lg:flex-col lg:gap-[10px]
                      sm:h-[400px] sm:mt-[2px]  sm:flex sm:flex-col sm:gap-[10px]
                      xs:h-[400px] xs:mt-[2px]  xs:flex xs:flex-col xs:gap-[10px]
                      
                     ">
                        <label className=" text-[20px] ">رمز عبور</label>
                        <Field type="password" name="phonenamber" placeholder="رمز عبور"  className="lg:w-[500px]  lg:h-[70px]  lg:rounded-[10px] 
                         sm:w-[500px] sm:h-[60px] sm:rounded-[10px]
                         xs:w-[350px] xs:h-[40px] xs:rounded-[10px]
                          " />

                  
                   
                        <label className=" text-[20px] ">تکرار رمز عبور </label>
                        <Field type="password" name="phonenamber" placeholder="تکرار رمز عبور" className="lg:w-[500px]  lg:h-[70px]  lg:rounded-[10px] 
                         sm:w-[500px] sm:h-[60px] sm:rounded-[10px]
                         xs:w-[350px] xs:h-[40px] xs:rounded-[10px]
                         " />

                    </div>
                </Form>
            </Formik>
             </div>
        
      
    );
};

export {ForgotPassPageThree};
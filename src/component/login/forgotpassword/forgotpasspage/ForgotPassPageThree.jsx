import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
const ForgotPassPageThree= () => {
    return(
        
             <div>
           <Formik>
                <Form>
                    
                    <div className="h-[4000px] mt-[80px] flex flex-col gap-[10px] pr-[150px]">
                        <label className=" text-[20px] ">رمز عبور</label>
                        <Field type="password" name="phonenamber" placeholder="رمز عبور"  className="w-[400px] h-[60px] rounded-[10px] " />

                  
                   
                        <label className=" text-[20px] ">تکرار رمز عبور </label>
                        <Field type="password" name="phonenamber" placeholder="تکرار رمز عبور" className="w-[400px] h-[60px] rounded-[10px]" />

                    </div>
                </Form>
            </Formik>
             </div>
        
      
    );
};

export {ForgotPassPageThree};
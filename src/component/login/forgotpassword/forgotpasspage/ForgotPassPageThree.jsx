import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
const ForgotPassPageThree= () => {
    return(
        
             <div>
           <Formik>
                <Form>
                    
                    <div className="h-[100px] mt-[20px] flex flex-col gap-[10px] ">
                        <label className="ml-[550px] text-[20px]">رمز عبور</label>
                        <Field type="password" name="phonenamber" placeholder="رمز عبور"  className="w-[400px] h-[60px] rounded-[10px] ml-[200px]" />

                    </div>
                    <div className="h-[100px] mt-[20px] flex flex-col gap-[10px] ">
                        <label className="ml-[500px] text-[20px]">تکرار رمز عبور </label>
                        <Field type="password" name="phonenamber" placeholder="تکرار رمز عبور" className="w-[400px] h-[60px] rounded-[10px] ml-[200px]" />

                    </div>
                </Form>
            </Formik>
             </div>
        
      
    );
};

export {ForgotPassPageThree};
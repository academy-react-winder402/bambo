import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
const RegisterLeftThird= () => {
    return(
        
             <div >
           <Formik>
                <Form>
                    <div className="h-[100px] mt-[20px] flex flex-col gap-[10px] ">
                        <label className="ml-[490px] text-[20px]">ایمیل</label>
                        <Field name="phonenamber" placeholder="ایمیل" className="w-[400px] h-[60px] rounded-[10px] ml-[150px]" />

                    </div>
                    <div className="h-[100px] mt-[20px] flex flex-col gap-[10px] ">
                        <label className="ml-[480px] text-[20px]">رمز عبور</label>
                        <Field type="password" name="phonenamber" placeholder="رمز عبور"  className="w-[400px] h-[60px] rounded-[10px] ml-[150px]" />

                    </div>
                    <div className="h-[100px] mt-[20px] flex flex-col gap-[10px] ">
                        <label className="ml-[440px] text-[20px]">تکرار رمز عبور </label>
                        <Field type="password" name="phonenamber" placeholder="تکرار رمز عبور" className="w-[400px] h-[60px] rounded-[10px] ml-[150px]" />

                    </div>
                </Form>
            </Formik>
             </div>
        
      
    );
};

export {RegisterLeftThird};
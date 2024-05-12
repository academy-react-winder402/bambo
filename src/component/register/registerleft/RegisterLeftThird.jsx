import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
const RegisterLeftThird= ({formData, setFormData}) => {
    return(
        
             <div >
           <Formik>
                <Form>
                    < div dir="rtl" className=" lg:h-[100px]  lg:mt-[20px]  lg:flex lg:flex-col lg:gap-[10px]
                      sm:h-[100px] sm:mt-[2px]  sm:flex sm:flex-col sm:gap-[10px]
                      xs:h-[100px] xs:mt-[2px]  xs:flex xs:flex-col xs:gap-[10px]
                     ">
                        <label className="   lg:text-[20px]">ایمیل</label>
                        <Field name="phonenamber" placeholder="ایمیل" className=" lg:w-[500px]  lg:h-[60px]  lg:rounded-[10px] lg:pr-[1rem]
                         sm:w-[500px] sm:h-[40px] sm:rounded-[10px] sm:pr-[1rem]
                         xs:w-[350px] xs:h-[40px] xs:rounded-[10px] xs:pr-[1rem]
                        " 
                                      value={formData.email}
                                      onChange ={(event) => setFormData({...formData,email:event.target.value})}
                        />

                    </div>
                    <div  className="lg:h-[100px]  lg:mt-[20px]  lg:flex  lg:flex-col  lg:gap-[10px] 
                      sm:h-[100px] sm:mt-[10px]  sm:flex sm:flex-col sm:gap-[10px] 
                      xs:h-[100px] xs:mt-[10px]  xs:flex xs:flex-col xs:gap-[10px]
                    ">
                        <label className="   lg:text-[20px]">رمز عبور</label>
                        <Field type="password" name="phonenamber" placeholder="رمز عبور"  className=" lg:w-[500px]  lg:h-[60px]  lg:rounded-[10px] lg:pr-[1rem]
                         sm:w-[500px] sm:h-[40px] sm:rounded-[10px] sm:pr-[1rem]
                         xs:w-[350px] xs:h-[40px] xs:rounded-[10px] xs:pr-[1rem]
                        " 
                                      value={formData.password}
                                      onChange ={(event) => setFormData({...formData,password:event.target.value})}
                        />

                    </div>
                    <div className=" lg:h-[100px]  lg:mt-[20px]  lg:flex  lg:flex-col  lg:gap-[10px] 
                      sm:h-[100px] sm:mt-[10px]  sm:flex sm:flex-col sm:gap-[10px]
                      xs:h-[100px] xs:mt-[10px]  xs:flex xs:flex-col xs:gap-[10px]
                    ">
                        <label className="  lg:text-[20px]">تکرار رمز عبور </label>
                        <Field type="password" name="phonenamber" placeholder="تکرار رمز عبور" className=" lg:w-[500px]  lg:h-[60px]  lg:rounded-[10px] lg:pr-[1rem]
                         sm:w-[500px] sm:h-[40px] sm:rounded-[10px] sm:pr-[1rem]
                         xs:w-[350px] xs:h-[40px] xs:rounded-[10px] xs:pr-[1rem]
                        "
                           value={formData.confirmPassword}
                           onChange ={(event) => setFormData({...formData,confirmPassword:event.target.value})}
                         />

                    </div>
                </Form>
            </Formik>
             </div>
        
      
    );
};

export {RegisterLeftThird};
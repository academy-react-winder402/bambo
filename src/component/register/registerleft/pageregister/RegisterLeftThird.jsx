import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
const RegisterLeftThird= ({formData, setFormData}) => {
    return(
        
             <div >
           <Formik>
                <Form>
                    < div dir="rtl" className=" lg:h-[100px]  lg:flex lg:flex-col lg:gap-[10px] lg:mt-[30px] 
                      sm:h-[100px] sm:mt-[30px]   sm:flex sm:flex-col sm:gap-[10px]
                      xs:h-[100px] xs:mt-[30px]  xs:flex xs:flex-col xs:gap-[7px]
                     ">
                        <label className="   lg:text-[17px]">ایمیل</label>
                        <Field name="phonenamber"  className=" lg:w-[90%]  lg:h-[50px]  lg:rounded-[10px] lg:pr-[1rem] 

                         sm:w-[500px] sm:h-[40px] sm:rounded-[10px] sm:pr-[1rem] 
                         xs:w-[90%] xs:h-[40px] xs:rounded-[10px] xs:pr-[1rem] 
                         lg:border-solid lg:border-[1px] lg:border-[black]
                        xs:border-solid xs:border-[1px] xs:border-[black]
                         sm:border-[1px] sm:border-[black] sm:border-solid
                         md:border-[1px] md:border-[black] md:border-solid
                        " 
                                      value={formData.email}
                                      onChange ={(event) => setFormData({...formData,email:event.target.value})}
                        />
 <ErrorMessage name="phonenumber" component={"p"} className="lg:text-[red]  sm:text-[red] xs:text-[red]" />
                    </div>
                    <div  className="lg:h-[100px]   lg:flex  lg:flex-col  lg:gap-[10px] 
                      sm:h-[100px] sm:mt-[10px]  sm:flex sm:flex-col sm:gap-[10px] 
                      xs:h-[100px] xs:mt-[2px]  xs:flex xs:flex-col xs:gap-[7px]
                    ">
                        <label className="   lg:text-[17px]">رمز عبور</label>
                        <Field type="password" name="phonenamber"   className=" lg:w-[90%]  lg:h-[50px]  lg:rounded-[10px] lg:pr-[1rem] 
                         sm:w-[500px] sm:h-[40px] sm:rounded-[10px] sm:pr-[1rem] 
                         xs:w-[90%] xs:h-[40px] xs:rounded-[10px] xs:pr-[1rem] 
                         lg:border-solid lg:border-[1px] lg:border-[black]
                         sm:border-[1px] sm:border-[black] sm:border-solid
                         md:border-[1px] md:border-[black] md:border-solid
                         xs:border-solid xs:border-[1px] xs:border-[black]
                        " 
                                      value={formData.password}
                                      onChange ={(event) => setFormData({...formData,password:event.target.value})}
                        />
 <ErrorMessage name="phonenumber" component={"p"} className="lg:text-[red]  sm:text-[red] xs:text-[red]" />
                    </div>

                    <div className=" lg:h-[100px]   lg:flex  lg:flex-col  lg:gap-[10px] 
                      sm:h-[100px] sm:mt-[10px]  sm:flex sm:flex-col sm:gap-[10px]
                      xs:h-[100px] xs:mt-[2px]  xs:flex xs:flex-col xs:gap-[7px]
                    ">
                        <label className="  lg:text-[17px]">تکرار رمز عبور </label>
                        <Field type="password" name="phonenamber"  className=" lg:w-[90%]  lg:h-[50px]  lg:rounded-[10px] lg:pr-[1rem] 
                                                lg:border-solid lg:border-[1px] lg:border-[black]
                                                sm:border-[1px] sm:border-[black] sm:border-solid
                                                md:border-[1px] md:border-[black] md:border-solid
                         sm:w-[500px] sm:h-[40px] sm:rounded-[10px] sm:pr-[1rem] 
                         xs:w-[90%] xs:h-[40px] xs:rounded-[10px] xs:pr-[1rem] 
                         xs:border-solid xs:border-[1px] xs:border-[black]
                        "
                           value={formData.confirmPassword}
                           onChange ={(event) => setFormData({...formData,confirmPassword:event.target.value})}
                         />

                    </div>
                    <ErrorMessage name="phonenumber" component={"p"} className="lg:text-[red]  sm:text-[red] xs:text-[red]" />
                </Form>
            </Formik>
             </div>
        
      
    );
};

export {RegisterLeftThird};
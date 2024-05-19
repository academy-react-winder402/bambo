import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
const ForgotPassPageThree= ({formData}) => {
    return(
      <div >
      <Formik>
        <Form>
         
          <div className="lg:h-[100px]   lg:flex  lg:flex-col  lg:gap-[10px] 
                     md:h-[100px]   md:flex  md:flex-col  md:gap-[10px] 
                      sm:h-[100px] sm:mt-[10px]  sm:flex sm:flex-col sm:gap-[10px] sm:mr-[7%]
                      xs:h-[100px] xs:mt-[2px]  xs:flex xs:flex-col xs:gap-[7px] xs:mr-[6%]
                      
                    ">
            <label className="   lg:text-[17px]">رمز عبور</label>
            <Field type="password" name="phonenamber" className=" lg:w-[88%]  lg:h-[50px]  lg:rounded-[10px] 
                         md:w-[90%]  md:h-[50px]  md:rounded-[10px]
                         sm:w-[80%] sm:h-[40px] sm:rounded-[10px] sm:pr-[1rem] 
                         xs:w-[82%] xs:h-[40px] xs:rounded-[10px] xs:pr-[1rem] 
                         lg:border-solid lg:border-[1px] lg:border-[black]
                         sm:border-[1px] sm:border-[black] sm:border-solid
                         md:border-[1px] md:border-[black] md:border-solid
                         xs:border-solid xs:border-[1px] xs:border-[black]
                        "
              value={formData.password}
              onChange={(event) => setFormData({ ...formData, password: event.target.value })}
            />
            {/* <ErrorMessage name="phonenumber" component={"p"} className="lg:text-[red]  sm:text-[red] xs:text-[red]" /> */}
          </div>

          <div className=" lg:h-[100px]   lg:flex  lg:flex-col  lg:gap-[10px] 
                    md:h-[100px]   md:flex  md:flex-col  md:gap-[10px] 
                      sm:h-[100px] sm:mt-[10px]  sm:flex sm:flex-col sm:gap-[10px] sm:mr-[7%]
                      xs:h-[100px] xs:mt-[2px]  xs:flex xs:flex-col xs:gap-[7px] xs:mr-[6%]
                    ">
            <label className="  lg:text-[17px]">تکرار رمز عبور </label>
            <Field type="password" name="phonenamber" className=" lg:w-[88%]  lg:h-[50px]  lg:rounded-[10px] 
                                                lg:border-solid lg:border-[1px] lg:border-[black]
                                                sm:border-[1px] sm:border-[black] sm:border-solid
                                                md:border-[1px] md:border-[black] md:border-solid
                                                md:w-[90%]  md:h-[50px]  md:rounded-[10px]
                         sm:w-[80%] sm:h-[40px] sm:rounded-[10px] sm:pr-[1rem] 
                         xs:w-[82%] xs:h-[40px] xs:rounded-[10px] xs:pr-[1rem] 
                         xs:border-solid xs:border-[1px] xs:border-[black] 
                        "
              value={formData.confirmPassword}
              onChange={(event) => setFormData({ ...formData, confirmPassword: event.target.value })}
            />

          </div>
          {/* <ErrorMessage name="phonenumber" component={"p"} className="lg:text-[red]  sm:text-[red] xs:text-[red]" /> */}
        </Form>
      </Formik>
    </div>


    );
};

export {ForgotPassPageThree};
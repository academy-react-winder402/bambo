import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Timer from "./Timer";
const RegisterLeftSecend= ({formData, setFormData}) => {
  
    return(
        
             <div >
          <Formik>
                <Form>
                    <div className="lg:h-[200px]   lg:flex flex-col lg:gap-[30px] lg:mt-[50px]
                    sm:h-[300px] sm:mt-[20px]  sm:flex sm:flex-col sm:gap-[20px] 
                    md:h-[300px] md:mt-[10px]  md:flex md:flex-col md:gap-[20px] 
                    xs:h-[300px] xs:mt-[10px]  xs:flex xs:flex-col xs:gap-[20px]
                    
                    ">
                        <label className=" text-[17px]">کد ارسال شده را وارد کنید</label>
                        <div className="lg:flex lg:gap-[15px] sm:flex sm:gap-[15px] xs:flex xs:gap-[15px] lg:w-[80%] lg:mt-[20px] lg:mx-[40px]
                        sm:mt-[20px] sm:mr-[80px] md:mt-[20px] md:mr-[80px] xs:mt-[20px] xs:mr-[80px]
                        ">
                            <ErrorMessage name="phonenumber" component={"p"} className="lg:text-[red]  sm:text-[red] xs:text-[red]" />
                        <Field name="code"   className="lg:w-[50px] lg:h-[60px] lg:rounded-[10px] 
                         md:w-[50px] md:h-[60px] md:rounded-[10px] 
                        sm:w-[50px] sm:h-[60px] sm:rounded-[10px] sm:pr-[1rem] 
                        xs:w-[50px] xs:h-[60px] xs:rounded-[10px] xs:pr-[1rem] 
                        lg:border-solid lg:border-[1px] lg:border-[black]
                        sm:border-[1px] sm:border-[black] sm:border-solid
                        md:border-[1px] md:border-[black] md:border-solid
                        "
                           value={formData.code}
                           onChange ={(event) => setFormData({...formData,code:event.target.value})}
                         />
                          <ErrorMessage name="phonenumber" component={"p"} className="lg:text-[red]  sm:text-[red] xs:text-[red]" />
                          <Field name="code"   className="lg:w-[50px] lg:h-[60px] lg:rounded-[10px] 
                           md:w-[50px] md:h-[60px] md:rounded-[10px] 
                        sm:w-[50px] sm:h-[60px] sm:rounded-[10px] 
                        xs:w-[50px] xs:h-[60px] xs:rounded-[10px] 
                        lg:border-solid lg:border-[1px] lg:border-[black]
                        sm:border-[1px] sm:border-[black] sm:border-solid
                        md:border-[1px] md:border-[black] md:border-solid
                        "
                           value={formData.code}
                           onChange ={(event) => setFormData({...formData,code:event.target.value})}
                         />
                          <ErrorMessage name="phonenumber" component={"p"} className="lg:text-[red]  sm:text-[red] xs:text-[red]" />
                          <Field name="code"   className="lg:w-[50px] lg:h-[60px] lg:rounded-[10px] 
                           md:w-[50px] md:h-[60px] md:rounded-[10px] 
                        sm:w-[50px] sm:h-[60px] sm:rounded-[10px] 
                        xs:w-[50px] xs:h-[60px] xs:rounded-[10px] 
                        lg:border-solid lg:border-[1px] lg:border-[black]
                        sm:border-[1px] sm:border-[black] sm:border-solid
                        md:border-[1px] md:border-[black] md:border-solid
                        "
                           value={formData.code}
                           onChange ={(event) => setFormData({...formData,code:event.target.value})}
                         />
                          <ErrorMessage name="phonenumber" component={"p"} className="lg:text-[red]  sm:text-[red] xs:text-[red]" />
                          <Field name="code"   className="lg:w-[50px] lg:h-[60px] lg:rounded-[10px] 
                           md:w-[50px] md:h-[60px] md:rounded-[10px] 
                        sm:w-[50px] sm:h-[60px] sm:rounded-[10px] sm:pr-[1rem] 
                        xs:w-[50px] xs:h-[60px] xs:rounded-[10px] xs:pr-[1rem] 
                        lg:border-solid lg:border-[1px] lg:border-[black]
                        sm:border-[1px] sm:border-[black] sm:border-solid
                        md:border-[1px] md:border-[black] md:border-solid
                        "
                           value={formData.code}
                           onChange ={(event) => setFormData({...formData,code:event.target.value})}
                         />
                          <ErrorMessage name="phonenumber" component={"p"} className="lg:text-[red]  sm:text-[red] xs:text-[red]" />
                          <ErrorMessage name="phonenumber" component={"p"} className="lg:text-[red]  sm:text-[red] xs:text-[red]" />
                          <Field name="code"   className="lg:w-[50px] lg:h-[60px] lg:rounded-[10px] 
                           md:w-[50px] md:h-[60px] md:rounded-[10px] 
                        sm:w-[50px] sm:h-[60px] sm:rounded-[10px]
                        xs:w-[50px] xs:h-[60px] xs:rounded-[10px] 
                        lg:border-solid lg:border-[1px] lg:border-[black]
                        sm:border-[1px] sm:border-[black] sm:border-solid
                        md:border-[1px] md:border-[black] md:border-solid
                        "
                           value={formData.code}
                           onChange ={(event) => setFormData({...formData,code:event.target.value})}
                         />
                          <ErrorMessage name="phonenumber" component={"p"} className="lg:text-[red]  sm:text-[red] xs:text-[red]" />
                        </div>
    

                    </div>
                </Form>
            </Formik>
            <div>
               <Timer/>
            </div>
             </div>
             
        
      
    );
};

export {RegisterLeftSecend};
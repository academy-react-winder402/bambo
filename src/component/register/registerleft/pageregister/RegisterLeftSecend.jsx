import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
const RegisterLeftSecend= ({formData, setFormData}) => {
    return(
        
             <div >
          <Formik>
                <Form>
                    <div className="lg:h-[300px]   lg:flex flex-col lg:gap-[30px]
                    sm:h-[300px] sm:mt-[20px]  sm:flex sm:flex-col sm:gap-[20px] 
                    md:h-[300px] md:mt-[10px]  md:flex md:flex-col md:gap-[20px] 
                    xs:h-[300px] xs:mt-[10px]  xs:flex xs:flex-col xs:gap-[20px]
                    
                    ">
                        <label className=" text-[17px]">کد موقت</label>
                        <div className="lg:flex lg:gap-[15px] sm:flex sm:gap-[15px] xs:flex xs:gap-[15px] lg:justify-center">
                        <Field name="code"   className="lg:w-[50px] lg:h-[60px] lg:rounded-[10px] lg:bg-[#ffff]
                         md:w-[50px] md:h-[60px] md:rounded-[10px] md:bg-[#ffff]
                        sm:w-[50px] sm:h-[60px] sm:rounded-[10px] sm:pr-[1rem] sm:bg-[#f5f2f2]
                        xs:w-[50px] xs:h-[60px] xs:rounded-[10px] xs:pr-[1rem] xs:bg-[#f5f2f2]
                        "
                           value={formData.code}
                           onChange ={(event) => setFormData({...formData,code:event.target.value})}
                         />
                          <Field name="code"   className="lg:w-[50px] lg:h-[60px] lg:rounded-[10px] lg:bg-[#ffff]
                           md:w-[50px] md:h-[60px] md:rounded-[10px] md:bg-[#ffff]
                        sm:w-[50px] sm:h-[60px] sm:rounded-[10px] sm:bg-[#f5f2f2]
                        xs:w-[50px] xs:h-[60px] xs:rounded-[10px] xs:bg-[#f5f2f2]
                        "
                           value={formData.code}
                           onChange ={(event) => setFormData({...formData,code:event.target.value})}
                         />
                          <Field name="code"   className="lg:w-[50px] lg:h-[60px] lg:rounded-[10px] lg:bg-[#ffff]
                           md:w-[50px] md:h-[60px] md:rounded-[10px] md:bg-[#ffff]
                        sm:w-[50px] sm:h-[60px] sm:rounded-[10px] sm:bg-[#f5f2f2]
                        xs:w-[50px] xs:h-[60px] xs:rounded-[10px] xs:bg-[#f5f2f2]
                        "
                           value={formData.code}
                           onChange ={(event) => setFormData({...formData,code:event.target.value})}
                         />
                          <Field name="code"   className="lg:w-[50px] lg:h-[60px] lg:rounded-[10px] lg:bg-[#ffff]
                           md:w-[50px] md:h-[60px] md:rounded-[10px] md:bg-[#ffff]
                        sm:w-[50px] sm:h-[60px] sm:rounded-[10px] sm:pr-[1rem] sm:bg-[#f5f2f2]
                        xs:w-[50px] xs:h-[60px] xs:rounded-[10px] xs:pr-[1rem] xs:bg-[#f5f2f2]
                        "
                           value={formData.code}
                           onChange ={(event) => setFormData({...formData,code:event.target.value})}
                         />
                          <Field name="code"   className="lg:w-[50px] lg:h-[60px] lg:rounded-[10px] lg:bg-[#ffff]
                           md:w-[50px] md:h-[60px] md:rounded-[10px] md:bg-[#ffff]
                        sm:w-[50px] sm:h-[60px] sm:rounded-[10px] sm:bg-[#f5f2f2]
                        xs:w-[50px] xs:h-[60px] xs:rounded-[10px] xs:bg-[#f5f2f2]
                        "
                           value={formData.code}
                           onChange ={(event) => setFormData({...formData,code:event.target.value})}
                         />
                        </div>
                   

                    </div>
                </Form>
            </Formik>
             </div>
        
      
    );
};

export {RegisterLeftSecend};
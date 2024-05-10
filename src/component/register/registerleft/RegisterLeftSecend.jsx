import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
const RegisterLeftSecend= ({formData, setFormData}) => {
    return(
        
             <div >
          <Formik>
                <Form>
                    <div className="lg:h-[300px] lg:mt-[100px]  lg:flex flex-col lg:gap-[30px]
                    sm:h-[300px] sm:mt-[20px]  sm:flex sm:flex-col sm:gap-[20px] ">
                        <label className=" text-[20px]">کد موقت</label>
                        <Field name="code" placeholder="کد موقت"  className="lg:w-[500px] lg:h-[60px] lg:rounded-[10px] 
                        sm:w-[500px] sm:h-[60px] sm:rounded-[10px] "
                           value={formData.code}
                           onChange ={(event) => setFormData({...formData,code:event.target.value})}
                         />

                    </div>
                </Form>
            </Formik>
             </div>
        
      
    );
};

export {RegisterLeftSecend};
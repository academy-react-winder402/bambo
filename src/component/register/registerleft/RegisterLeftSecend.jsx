import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
const RegisterLeftSecend= ({formData, setFormData}) => {
    return(
        
             <div >
          <Formik>
                <Form>
                    <div className="h-[300px] mt-[100px] flex flex-col gap-[30px] ">
                        <label className="ml-[540px] text-[20px]">کد موقت</label>
                        <Field name="code" placeholder="کد موقت"  className="w-[400px] h-[60px] rounded-[10px] ml-[250px]"
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
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
const RegisterLeftSecend= () => {
    return(
        
             <div >
          <Formik>
                <Form>
                    <div className="h-[300px] mt-[100px] flex flex-col gap-[30px] ">
                        <label className="ml-[400px] text-[20px]">کد موقت</label>
                        <Field name="code" placeholder="کد موقت" className="w-[400px] h-[60px] rounded-[10px] ml-[150px]" />

                    </div>
                </Form>
            </Formik>
             </div>
        
      
    );
};

export {RegisterLeftSecend};
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
const ForgotPassPageTwo= () => {
    return(
        
             <div >
          <Formik>
                <Form>
                    <div className="h-[300px] mt-[100px] flex flex-col gap-[30px] pr-[150px]">
                        <label className=" text-[20px]  ">کد موقت</label>
                        <Field name="code" placeholder="کد موقت" className="w-[400px] h-[60px] rounded-[10px] " />

                    </div>
                </Form>
            </Formik>
             </div>
        
      
    );
};

export {ForgotPassPageTwo};
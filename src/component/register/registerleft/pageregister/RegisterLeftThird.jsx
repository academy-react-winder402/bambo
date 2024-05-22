
import React, { useState,useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Validation } from "../../../../core/validation";
const RegisterLeftThird = () => {
//   const [formdata,setFormData]=useState(
//     {
//        gmail:"",
//         password:""
//     }
// );
//   const onSubmit =async(values) => {
//     const obj = {gmail:values.gmail,password: values.password}
//        const registerapistep = await Postregister(obj);
//        setPassword(registerapistep);
//        console.log(registerapistep);
//  };
  return (

    <div >
      <Formik
                initialValues={{phoneOrGmail: "",password: "" }}
                onSubmit={(values) => onSubmit(values)}
                validationSchema={ Validation }
      >
        <Form>
          < div dir="rtl" className=" lg:h-[100px]  lg:flex lg:flex-col lg:gap-[10px] lg:mt-[30px] 
                     md:h-[100px]   md:flex  md:flex-col  md:gap-[10px] md:mt-[30px] 
                     
                      sm:h-[100px] sm:mt-[30px]   sm:flex sm:flex-col sm:gap-[10px] sm:mr-[7%]
                      xs:h-[100px] xs:mt-[30px]  xs:flex xs:flex-col xs:gap-[7px]
                     ">
            <label className="   lg:text-[17px]">ایمیل</label>
            <Field name="gmail" className=" lg:w-[90%]  lg:h-[50px]  lg:rounded-[10px] lg:pr-[1rem] 
                        md:w-[90%]  md:h-[50px]  md:rounded-[10px] 
                         sm:w-[80%] sm:h-[40px] sm:rounded-[10px] sm:pr-[1rem] 
                         xs:w-[90%] xs:h-[40px] xs:rounded-[10px] xs:pr-[1rem] 
                         lg:border-solid lg:border-[1px] lg:border-[black]
                        xs:border-solid xs:border-[1px] xs:border-[black]
                         sm:border-[1px] sm:border-[black] sm:border-solid
                         md:border-[1px] md:border-[black] md:border-solid
                        "
            
            />
            <ErrorMessage name="gmail" component={"p"} className="lg:text-[red]  sm:text-[red] xs:text-[red]" />
          </div>
          <div className="lg:h-[100px]   lg:flex  lg:flex-col  lg:gap-[10px] 
                     md:h-[100px]   md:flex  md:flex-col  md:gap-[10px] 
                      sm:h-[100px] sm:mt-[10px]  sm:flex sm:flex-col sm:gap-[10px] sm:mr-[7%]
                      xs:h-[100px] xs:mt-[2px]  xs:flex xs:flex-col xs:gap-[7px]
                    ">
            <label className="   lg:text-[17px]">رمز عبور</label>
            <Field type="password" name="password" className=" lg:w-[90%]  lg:h-[50px]  lg:rounded-[10px] lg:pr-[1rem] 
                         md:w-[90%]  md:h-[50px]  md:rounded-[10px]
                         sm:w-[80%] sm:h-[40px] sm:rounded-[10px] sm:pr-[1rem] 
                         xs:w-[90%] xs:h-[40px] xs:rounded-[10px] xs:pr-[1rem] 
                         lg:border-solid lg:border-[1px] lg:border-[black]
                         sm:border-[1px] sm:border-[black] sm:border-solid
                         md:border-[1px] md:border-[black] md:border-solid
                         xs:border-solid xs:border-[1px] xs:border-[black]
                        "
          
            />
            <ErrorMessage name="password" component={"p"} className="lg:text-[red]  sm:text-[red] xs:text-[red]" />
          </div>

          <div className=" lg:h-[100px]   lg:flex  lg:flex-col  lg:gap-[10px] 
                    md:h-[100px]   md:flex  md:flex-col  md:gap-[10px] 
                      sm:h-[100px] sm:mt-[10px]  sm:flex sm:flex-col sm:gap-[10px] sm:mr-[7%]
                      xs:h-[100px] xs:mt-[2px]  xs:flex xs:flex-col xs:gap-[7px]
                    ">
            <label className="  lg:text-[17px]">تکرار رمز عبور </label>
            <Field type="password" name="password" className=" lg:w-[90%]  lg:h-[40px]  lg:rounded-[10px] lg:pr-[1rem] 
                                                lg:border-solid lg:border-[1px] lg:border-[black]
                                                sm:border-[1px] sm:border-[black] sm:border-solid
                                                md:border-[1px] md:border-[black] md:border-solid
                                                md:w-[90%]  md:h-[50px]  md:rounded-[10px]
                         sm:w-[80%] sm:h-[40px] sm:rounded-[10px] sm:pr-[1rem] 
                         xs:w-[90%] xs:h-[40px] xs:rounded-[10px] xs:pr-[1rem] 
                         xs:border-solid xs:border-[1px] xs:border-[black]
                        "
        
            />

          </div>
          <ErrorMessage name="password" component={"p"} className="lg:text-[red]  sm:text-[red] xs:text-[red] " />
        </Form>
      </Formik>
    </div>


  );
};

export { RegisterLeftThird };
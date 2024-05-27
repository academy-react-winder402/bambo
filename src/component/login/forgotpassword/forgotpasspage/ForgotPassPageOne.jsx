import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Postregister } from "../../../../core/services/api/auth/Register";
import { Postforgotpass } from "../../../../core/services/api/auth/Forgotpass";
import { Validationfoure } from "../../../../core/validation";
const ForgotPassPageOne = ({setFormData,step}) => {
    const onSubmit =async(values) => {
        const obj={phoneNumber:values.phoneNumber};
         
             const forgotapi = await Postregister(obj);
             setFormData=(forgotapi);
             console.log(forgotapi);
             if(forgotapi.success == true){
                 step();
             }
             else if (forgotapi.success == false){
errorr();
             }
       };
       const [error, setError]=useState([]);

        const errorr= async () => {
            const object ={error}
          const result = await Postforgotpass(object);
          setError(result);
      };
    return (
        <div>
               <Formik
                         initialValues={{phoneNumber: ""}}
                         onSubmit={onSubmit}
                     validationSchema={Validationfoure}
               >
                <Form>
                    <div className="lg:h-[140px]   lg:flex flex-col lg:gap-[10px]  lg:mr-[30px]
                    sm:h-[200px] s sm:flex sm:flex-col sm:gap-[20px] sm:m-auto sm:mr-[50px]
                    md:h-[200px]   md:flex md:flex-col md:gap-[20px] 
                    xs:h-[200px]   xs:flex xs:flex-col xs:gap-[20px] 
                    
                    ">
                        <label className="  lg:h-[40px] lg:text-[15px] lg:text-right lg:mt-[30px]  lg:text-[#004458]
                         sm:h-[30px] sm:text-[15px] sm:text-right sm:mt-[30px]
                         md:h-[30px] md:text-[15px] md:text-right md:mt-[30px]
                         xs:h-[30px] xs:text-[15px] xs:text-right  xs:mt-[30px]
                        
                        " > شماره موبایل خود را وارد کنید</label>
                        <Field name="phoneNumber" className="lg:w-[88%] lg:h-[50px] lg:rounded-[10px]  lg:bg-[#ffff]
                        sm:w-[79%] sm:h-[50px] sm:rounded-[10px] sm:bg-[#fff] 
                        md:w-[83%] md:h-[50px] md:rounded-[10px] md:bg-[#fff] 
                        lg:border-solid lg:border-[1px] lg:border-[black] 
                        sm:border-[1px] sm:border-[black] sm:border-solid
                        md:border-[1px] md:border-[black] md:border-solid
                        xs:border-[1px] xs:border-[black] xs:border-solid 
                        xs:w-[85%] xs:h-[40px] xs:rounded-[10px]  
                        "
                            // value={formData.phonenumber}
                        // onChange={(event) => setFormData({ ...formData, phonenumber: event.target.value })}
                        />
                       <ErrorMessage name="phoneNumber" component={"p"} className="lg:text-[red]  sm:text-[red] xs:text-[red]" />
                    </div>
                          
       <div className="lg:h-[50px] lg:w-[100%]  lg:mt-[40px]
        sm:h-[80px] sm:w-[70%] sm:m-auto
      xs:h-[110px] xs:w-[300px] xs:m-auto
      md:h-[50px] md:w-[100%] md:m-auto
       ">
      <button className="lg:h-[50px] lg:w-[80%] lg:block  lg:m-auto lg:hover:bg-gradient-to-b lg:from-[#004458] lg:to-[#1194bc]  lg:rounded-xl lg:bg-[#004458] lg:text-[#ffff]
                sm:h-[50px] sm:w-[100%] sm:m-auto sm:hover:bg-gradient-to-b sm:from-[#004458] sm:to-[#1194bc]  sm:rounded-xl sm:bg-[#004458] sm:text-[#ffff]
                md:h-[50px] md:w-[80%] md:block md:m-auto md:hover:bg-gradient-to-b md:from-[#004458] md:to-[#1194bc]  md:rounded-xl md:bg-[#004458] md:text-[#ffff]
                xs:h-[50px] xs:w-[100%] xs:mx-auto xs:hover:bg-gradient-to-b xs:from-[#004458] xs:to-[#1194bc]  xs:rounded-xl xs:bg-[#004458] xs:text-[#ffff] xs:mt-[30px]
                "
              >
                   بعدی
                </button>
       </div>
                </Form>
                
            </Formik>
        </div>

    );
}
export { ForgotPassPageOne }
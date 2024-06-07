import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Timer from "../../../register/registerleft/pageregister/Timer";
const ForgotPassPageTwo= ({step, setFormData}) => {
    return(
      <div >
      <Formik>
         <Form>
         <div className="lg:h-[200px]   lg:flex flex-col lg:gap-[30px] lg:mt-[50px]
                    sm:h-[200px] sm:mt-[50px]  sm:flex sm:flex-col sm:gap-[20px] 
                    md:h-[200px] md:mt-[40px]  md:flex md:flex-col md:gap-[20px] 
                    xs:h-[200px] xs:mt-[40px]  xs:flex xs:flex-col xs:gap-[20px]
                    
                    ">
                  <label className=" text-[17px]">کد ارسال شده را وارد کنید</label>
                  <div className="lg:flex lg:gap-[15px] sm:flex sm:gap-[15px] xs:flex xs:gap-[15px] lg:w-[88%] lg:mt-[20px] lg:mx-[5px]
                        sm:mt-[20px] sm:mx-[22px]  md:mt-[20px] md:mx-[30px] xs:mt-[20px] xs:mx-[5px]
                        ">
                  
                        <Field name="code" className="lg:w-[100%] lg:h-[50px] lg:rounded-[10px] 
                         md:w-[100%] md:h-[50px] md:rounded-[10px] 
                        sm:w-[100%] sm:h-[50px] sm:rounded-[10px] 
                        xs:w-[100%] xs:h-[50px] xs:rounded-[10px] xs:pr-[1rem] 
                        lg:border-solid lg:border-[1px] lg:border-[black]
                        sm:border-[1px] sm:border-[black] sm:border-solid
                        md:border-[1px] md:border-[black] md:border-solid
                        xs:border-[1px] xs:border-[black] xs:border-solid
                        "

                        />
                        </div>
                        </div>
                        <div>
         <Timer />
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
};

export {ForgotPassPageTwo};
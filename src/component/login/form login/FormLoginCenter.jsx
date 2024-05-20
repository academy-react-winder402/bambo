import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
const FormLoginCenter =({gotoforgotpass})=>{
    return(
        <>
          <div className="
        sm:border-solid sm:border-[transparent] sm:border-[1px] 
        xs:border-solid xs:border-[transparent] xs:border-[1px] 
        md:border-solid md:border-[transparent] md:border-[1px] 
 
   ">
       <Formik>
           <Form>
               <div className="lg:h-[150px] lg:w-[80%]   lg:flex lg:flex-col lg:gap-[20px]  lg:mt-[50px] 
               lg:m-auto
               md:h-[150px] md:w-[80%]   md:flex md:flex-col md:gap-[20px]   md:mt-[60px] 
               md:m-auto
               sm:h-[150px] sm:w-[80%]  sm:mt-[60px] sm:flex sm:flex-col sm:gap-[20px]  sm:m-auto
              xs:h-[150px] xs:w-[80%]   xs:flex xs:flex-col xs:gap-[20px] xs:mt-[50px] xs:mr-[13%]
               ">

                   <Field name="phonenamber" placeholder=" شماره موبایل" className=" lg:w-[100%]  lg:h-[50px]  lg:rounded-[10px]
                    
                       md:w-[100%]  md:h-[50px]  md:rounded-[10px] md:pr-[1rem] lg:pr-[1rem]
                        sm:w-[100%] sm:h-[40px] sm:rounded-[10px] sm:pr-[1rem] 
                        xs:w-[90%] xs:h-[40px] xs:rounded-[10px] xs:pr-[1rem] 
                        lg:border-solid lg:border-[1px] lg:border-[black]
                       xs:border-solid xs:border-[1px] xs:border-[black]
                        sm:border-[1px] sm:border-[black] sm:border-solid
                        md:border-[1px] md:border-[black] md:border-solid
                   " />

              

                   <Field name="phonenamber" placeholder="رمز عبور" className=" lg:w-[100%]  lg:h-[50px]  lg:rounded-[10px]  
                       md:w-[100%]  md:h-[50px]  md:rounded-[10px] md:pr-[1rem] lg:pr-[1rem]
                        sm:w-[100%] sm:h-[40px] sm:rounded-[10px] sm:pr-[1rem] 
                        xs:w-[90%] xs:h-[40px] xs:rounded-[10px]  xs:pr-[1rem] 
                        lg:border-solid lg:border-[1px] lg:border-[black]
                       xs:border-solid xs:border-[1px] xs:border-[black]
                        sm:border-[1px] sm:border-[black] sm:border-solid
                        md:border-[1px] md:border-[black] md:border-solid
                   " />

               </div>
           </Form>
       </Formik>
   </div>
   <div className="lg:h-[60px] lg:w-[100%] lg:flex lg:flex-row-reverse   lg:text-[15px]  lg:justify-center  
   md:h-[60px] md:w-[100%] md:flex md:flex-row-reverse md:text-[15px]  md:justify-center  md:mt-[10px] 
   sm:h-[60px] sm:w-[100%] sm:flex sm:flex-row-reverse sm:justify-center sm:mt-[10px] sm:text-[15px]
   xs:h-[90px] xs:w-[100%] xs:flex xs:flex-col  xs:m-auto xs:justify-between xs:text-[15px]
  
   ">
       <div  className="lg:w-[50%]  lg:cursor-pointer lg:text-left lg:hover:text-[#1194bc] 
      md:w-[35%]  md:cursor-pointer md:text-left md:hover:text-[#1194bc]
      sm:w-[35%]  sm:leading-[45px] sm:cursor-pointer sm:hover:text-[#1194bc] sm:text-left sm:ml-[50px]
       xs:w-[100%]  xs:h-[50px] xs:cursor-pointer  xs:text-right xs:hover:text-[#1194bc] xs:pr-[40px] xs:text-[15px]

       " onClick={ gotoforgotpass}>فراموشی رمز</div>
       <div dir="rtl" className=" lg:w-[60%] lg:flex lg:flex-row lg:justify-start lg:hover:text-[#004458] 
       md:w-[60%] md:flex md:flex-row md:justify-start md:hover:text-[#1194bc]
        sm:w-[40%] sm:flex sm:flex-row sm:justify-start sm:hover:text-[#1194bc]
        xs:w-[100%] xs:h-[50px] xs:flex xs:flex-row xs:justify-start xs:hover:text-[#1194bc]  xs:pr-[40px]
       ">
           <div className="  lg:leading-[45px] lg:w-[65%]  lg:cursor-pointer 
            md:leading-[45px]  md:w-[75%]   md:cursor-pointer 
           sm:leading-[45px] sm:w-[70%]  sm:cursor-pointer
            xs:leading-[45px] xs:w-[35%]  xs:cursor-pointer xs:h-[60px]

           ">مرا به خاطر بسپار</div>
          <input type="checkbox" className="lg:w-[20px] lg:h-[20px] lg:mt-[14px]
          md:w-[20px] md:h-[20px] md:mt-[14px]
          sm:w-[20px] sm:h-[20px] sm:mt-[14px]
          xs:w-[20px] xs:h-[20px] xs:mt-[14px]
          "></input>

       </div>
   </div>
 
        </>
    )
};
export {FormLoginCenter};

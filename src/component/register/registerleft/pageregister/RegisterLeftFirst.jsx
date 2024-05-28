import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useState, useEffect } from "react";
import { Validationfoure } from "../../../../core/validation/index";
import { Postregister } from "../../../../core/services/api/auth/Register";
import { NavLink } from "react-router-dom";
import { setItem } from "../../../../core/services/storage/Storage.Services";
const RegisterLeftFirst = ({ step, setPhoneNumber }) => {
  const onSubmit = async (values) => {
    setPhoneNumber(values?.phoneNumber);
    const obj = { phoneNumber: values?.phoneNumber };
    const registerapi = await Postregister(obj);
    if (registerapi.success == true) {
      step();
    }
  };

  return (
    <div>
      <Formik
        initialValues={{ phoneNumber: "" }}
        onSubmit={onSubmit}
        validationSchema={Validationfoure}
      >
        <Form>
          <div
            className="lg:h-[140px]   lg:flex flex-col lg:gap-[10px] lg:mt-[50px]
                    sm:h-[200px] sm:mt-[50px]  sm:flex sm:flex-col sm:gap-[20px] sm:m-auto
                    md:h-[200px]  md:mt-[40px]  md:flex md:flex-col md:gap-[20px] 
                    xs:h-[300px] xs:mt-[40px]  xs:flex xs:flex-col xs:gap-[20px] 
                    
                    "
          >
            <label
              className="  lg:h-[40px] lg:text-[15px] lg:text-right lg:mt-[30px] lg:pr-[10px] lg:text-[#004458]
                         sm:h-[30px] sm:text-[15px] sm:text-right sm:mt-[30px]
                         md:h-[30px] md:text-[15px] md:text-right md:mt-[30px]
                         xs:h-[30px] xs:text-[15px] xs:text-right  xs:mt-[30px]
                        "
            >
              {" "}
              شماره موبایل خود را وارد کنید
            </label>
            <Field
              name="phoneNumber"
              className="lg:w-[90%] lg:h-[50px] lg:rounded-[10px]  lg:bg-[#ffff]
                        sm:w-[79%] sm:h-[50px] sm:rounded-[10px] sm:bg-[#fff] 
                        md:w-[83%] md:h-[50px] md:rounded-[10px] md:bg-[#fff] 
                        lg:border-solid lg:border-[1px] lg:border-[black] 
                        sm:border-[1px] sm:border-[black] sm:border-solid
                        md:border-[1px] md:border-[black] md:border-solid
                        xs:border-[1px] xs:border-[black] xs:border-solid 
                        xs:w-[90%] xs:h-[40px] xs:rounded-[10px] xs:pr-[1rem] 
                        "
            />
            <ErrorMessage
              name="phoneNumber"
              component={"p"}
              className="lg:text-[red]  sm:text-[red] xs:text-[red]"
            />
          </div>
          <div
            className="lg:w-[120px] lg:h-[20px] lg:mr-[50px] lg:text-[20px] lg:mt-[10px] lg:text-[#1194bc]
        sm:w-[120px] sm:h-[40px] sm:mr-[40px] sm:text-[20px] sm:mt-[10px] sm:text-[#1194bc]
        xs:w-[120px] xs:h-[40px] xs:mr-[40px] xs:text-[20px] xs:mt-[10px] xs:text-[#1194bc]
        md:w-[120px] md:h-[40px] md:mr-[40px] md:text-[20px] md:mt-[10px] md:text-[#1194bc]
        "
          >
            <NavLink to="/login">ورود</NavLink>
          </div>
          <div
            dir="rtl"
            className="lg:h-[50px] lg:w-[100%]  lg:mt-[40px]
        sm:h-[80px] sm:w-[70%] sm:m-auto
      xs:h-[110px] xs:w-[300px] xs:m-auto
      md:h-[50px] md:w-[100%] md:m-auto
       "
          >
            <button
              className="lg:h-[50px] lg:w-[90%]   lg:m-auto lg:hover:bg-gradient-to-b lg:from-[#004458] lg:to-[#1194bc]  lg:rounded-xl lg:bg-[#004458] lg:text-[#ffff]
                sm:h-[50px] sm:w-[100%] sm:m-auto sm:hover:bg-gradient-to-b sm:from-[#004458] sm:to-[#1194bc]  sm:rounded-xl sm:bg-[#004458] sm:text-[#ffff]
                md:h-[50px] md:w-[80%] md:m-auto md:hover:bg-gradient-to-b md:from-[#004458] md:to-[#1194bc]  md:rounded-xl md:bg-[#004458] md:text-[#ffff]
                xs:h-[50px] xs:w-[100%] xs:mx-auto xs:hover:bg-gradient-to-b xs:from-[#004458] xs:to-[#1194bc]  xs:rounded-xl xs:bg-[#004458] xs:text-[#ffff]
                "
              type="submit"
            >
              بعدی
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export { RegisterLeftFirst };

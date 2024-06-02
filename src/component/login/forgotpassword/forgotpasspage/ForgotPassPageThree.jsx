import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Postnewpass } from "../../../../core/services/api/auth/Forgotpass";
import { Validatinew } from "../../../../core/validation";
import { useNavigate, useParams } from "react-router-dom";
import { getforgottwo } from "../../../../core/services/api/auth/Forgotpass";
const ForgotPassPageThree = () => {
  const [reset, setReset] = useState([]);
  const ConfigValue = useParams().ConfigValue;
  console.log(ConfigValue);
  console.log(ConfigValue);
  const getsteptwo = async() => {
    const getapi = await getforgottwo(ConfigValue);
    setReset(getapi);
  };
  const navigate =useNavigate();
  const onSubmit = async(values) => {
    const obj = {
      newPassword: values?.password,
      resetValue: reset?.resetpass,
      userId: reset?.id,
    };
    const newpassapi = await Postnewpass(obj);
    console.log(forgotapi);
    if (newpassapi.success == true) {
      navigate("/Login");
    }
  };
  useEffect(() => {
    getsteptwo();
  }, []);
  return (
    <div>
      <Formik
        initialValues={{ password: "" }}
        validationSchema={Validatinew}
        onSubmit={onSubmit}
      >
        <Form>
          <div
            className="lg:h-[100px]   lg:flex  lg:flex-col  lg:gap-[10px] 
                     md:h-[100px]   md:flex  md:flex-col  md:gap-[10px] 
                      sm:h-[100px] sm:mt-[10px]  sm:flex sm:flex-col sm:gap-[10px] sm:mr-[7%]
                      xs:h-[100px] xs:mt-[2px]  xs:flex xs:flex-col xs:gap-[7px] xs:mr-[6%]
                      
                    "
          >
            <label className="   lg:text-[17px]">رمز عبور</label>
            <Field
              type="password"
              name="password"
              className=" lg:w-[88%]  lg:h-[50px]  lg:rounded-[10px] 
                         md:w-[90%]  md:h-[50px]  md:rounded-[10px]
                         sm:w-[80%] sm:h-[40px] sm:rounded-[10px] sm:pr-[1rem] 
                         xs:w-[82%] xs:h-[40px] xs:rounded-[10px] xs:pr-[1rem] 
                         lg:border-solid lg:border-[1px] lg:border-[black]
                         sm:border-[1px] sm:border-[black] sm:border-solid
                         md:border-[1px] md:border-[black] md:border-solid
                         xs:border-solid xs:border-[1px] xs:border-[black]
                        "
            />
            <ErrorMessage
              name="password"
              component={"p"}
              className="lg:text-[red]  sm:text-[red] xs:text-[red]"
            />
          </div>

          <div
            className="lg:h-[50px] lg:w-[100%]  lg:mt-[40px]
        sm:h-[80px] sm:w-[70%] sm:m-auto
      xs:h-[110px] xs:w-[300px] xs:m-auto
      md:h-[50px] md:w-[100%] md:m-auto
       "
          >
            <button
              className="lg:h-[50px] lg:w-[80%] lg:block  lg:m-auto lg:hover:bg-gradient-to-b lg:from-[#004458] lg:to-[#1194bc]  lg:rounded-xl lg:bg-[#004458] lg:text-[#ffff]
                sm:h-[50px] sm:w-[100%] sm:m-auto sm:hover:bg-gradient-to-b sm:from-[#004458] sm:to-[#1194bc]  sm:rounded-xl sm:bg-[#004458] sm:text-[#ffff]
                md:h-[50px] md:w-[80%] md:block md:m-auto md:hover:bg-gradient-to-b md:from-[#004458] md:to-[#1194bc]  md:rounded-xl md:bg-[#004458] md:text-[#ffff]
                xs:h-[50px] xs:w-[100%] xs:mx-auto xs:hover:bg-gradient-to-b xs:from-[#004458] xs:to-[#1194bc]  xs:rounded-xl xs:bg-[#004458] xs:text-[#ffff] xs:mt-[30px]
                "
              type="submit"
            >
              ثبت تغییرات
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export { ForgotPassPageThree };


import React, { useState,useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Validationone} from "../../../../core/validation/index";

import { Postregisterthree } from "../../../../core/services/api/auth/Register";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;
const RegisterLeftThird = ({setPassword,setGmail,phoneNumber}) => {
  const [pass,setPass]=useState();

    const handlepass = (e) => { 
      setPass(e.target.value); 
   
   }; 
  const onSubmit =async(values) => {
    setPassword(values?.password);
    setGmail(values?.gmail);
   
    const obj={password:values?.password, gmail:values?.gmail,confirmPassword:pass,phoneNumber:phoneNumber};
    
      const registerapithree = await Postregisterthree(obj);
      console.log(registerapithree);
      if(registerapithree.success == true){
          gotohome();
      }
    
     
   };
   const navigator =useNavigate();
  const gotohome = () => {
    
        return (
            navigator("/")

        );
    }
    const [passwordShown, setPasswordShown] = useState(false);
    const [passShown, setPassShown] = useState(false);
    const togglePasswordVisiblity = () => {
      setPasswordShown(passwordShown ? false : true);
    };
    const togglePassVisiblity = () => {
      setPassShown(passShown ? false : true);
    };
  return (

    <div >
      <Formik
                initialValues={{gmail: "",password: "" }}
onSubmit={onSubmit}
                validationSchema={ Validationone }
      >
        <Form>
          < div dir="rtl" className=" lg:h-[100px]  lg:flex lg:flex-col lg:gap-[10px] lg:mt-[30px] 
                     md:h-[100px]   md:flex  md:flex-col  md:gap-[10px] md:mt-[30px] 
                     
                      sm:h-[100px] sm:mt-[30px]   sm:flex sm:flex-col sm:gap-[10px] sm:mr-[7%]
                      xs:h-[100px] xs:mt-[30px]  xs:flex xs:flex-col xs:gap-[7px]
                     ">
            <label className="   lg:text-[17px]">ایمیل</label>
            <Field name="gmail" type="gmail"
             className=" lg:w-[90%]  lg:h-[50px]  lg:rounded-[10px] lg:pr-[1rem] 
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
            <Field  type={passwordShown ? "text" : "password"} name="password" className=" lg:w-[90%]  lg:h-[50px]  lg:rounded-[10px] lg:pr-[1rem] 
                         md:w-[90%]  md:h-[50px]  md:rounded-[10px]
                         sm:w-[80%] sm:h-[40px] sm:rounded-[10px] sm:pr-[1rem] 
                         xs:w-[90%] xs:h-[40px] xs:rounded-[10px] xs:pr-[1rem] 
                         lg:border-solid lg:border-[1px] lg:border-[black]
                         sm:border-[1px] sm:border-[black] sm:border-solid
                         md:border-[1px] md:border-[black] md:border-solid
                         xs:border-solid xs:border-[1px] xs:border-[black]
                        "
                        
                        
                    
            />
               <i className="lg:absolute top-[335px] left-[240px]" onClick={togglePasswordVisiblity}>{eye}</i>    
            <ErrorMessage name="password" component={"p"} className="lg:text-[red]  sm:text-[red] xs:text-[red]" />
          
          </div>

          <div className=" lg:h-[100px]   lg:flex  lg:flex-col  lg:gap-[10px] 
                    md:h-[100px]   md:flex  md:flex-col  md:gap-[10px] 
                      sm:h-[100px] sm:mt-[10px]  sm:flex sm:flex-col sm:gap-[10px] sm:mr-[7%]
                      xs:h-[100px] xs:mt-[2px]  xs:flex xs:flex-col xs:gap-[7px]
                    ">
            
            <label className="  lg:text-[17px]">تکرار رمز عبور </label>
           
            <Field  type={passShown ? "text" : "password"} name="pass" className=" lg:w-[90%]  lg:h-[40px]  lg:rounded-[10px] lg:pr-[1rem] 
                                                lg:border-solid lg:border-[1px] lg:border-[black]
                                                sm:border-[1px] sm:border-[black] sm:border-solid
                                                md:border-[1px] md:border-[black] md:border-solid
                                                md:w-[90%]  md:h-[50px]  md:rounded-[10px]
                         sm:w-[80%] sm:h-[40px] sm:rounded-[10px] sm:pr-[1rem] 
                         xs:w-[90%] xs:h-[40px] xs:rounded-[10px] xs:pr-[1rem] 
                         xs:border-solid xs:border-[1px] xs:border-[black]
                        "
                  value={pass} onChang={handlepass}      
                
                  
            />
 

 <i className="lg:absolute top-[440px] left-[240px]" onClick={togglePassVisiblity}>{eye}</i> 
          </div>
          <ErrorMessage name="password" component={"p"} className="lg:text-[red]  sm:text-[red] xs:text-[red] " />
          <div className="lg:w-[120px] lg:h-[20px] lg:mr-[50px] lg:text-[20px] lg:mt-[10px] lg:text-[#1194bc]
        sm:w-[120px] sm:h-[40px] sm:mr-[40px] sm:text-[20px] sm:mt-[10px] sm:text-[#1194bc]
        xs:w-[120px] xs:h-[40px] xs:mr-[40px] xs:text-[20px] xs:mt-[10px] xs:text-[#1194bc]
        md:w-[120px] md:h-[40px] md:mr-[40px] md:text-[20px] md:mt-[10px] md:text-[#1194bc]
        "><NavLink to="/login" >ورود</NavLink></div>
       <div  dir="rtl" className="lg:h-[50px] lg:w-[100%]  lg:mt-[40px]
        sm:h-[80px] sm:w-[70%] sm:m-auto
      xs:h-[110px] xs:w-[300px] xs:m-auto
      md:h-[50px] md:w-[100%] md:m-auto
       ">
      <button className="lg:h-[50px] lg:w-[90%]   lg:m-auto lg:hover:bg-gradient-to-b lg:from-[#004458] lg:to-[#1194bc]  lg:rounded-xl lg:bg-[#004458] lg:text-[#ffff]
                sm:h-[50px] sm:w-[100%] sm:m-auto sm:hover:bg-gradient-to-b sm:from-[#004458] sm:to-[#1194bc]  sm:rounded-xl sm:bg-[#004458] sm:text-[#ffff]
                md:h-[50px] md:w-[80%] md:m-auto md:hover:bg-gradient-to-b md:from-[#004458] md:to-[#1194bc]  md:rounded-xl md:bg-[#004458] md:text-[#ffff]
                xs:h-[50px] xs:w-[100%] xs:mx-auto xs:hover:bg-gradient-to-b xs:from-[#004458] xs:to-[#1194bc]  xs:rounded-xl xs:bg-[#004458] xs:text-[#ffff]
                "
   type="submit" onClick={onSubmit}>
                   ثبت 
                    </button>
                    </div> 
        </Form>
      </Formik>
    </div>


  );
};

export { RegisterLeftThird };
import * as yup from "yup";

 export const Validationone = yup.object().shape({
    password: yup
    .string()
  .required("لطفا پر کنید"),
    gmail: yup
    .string()
    .email()
   .required("لطفا پر کنید"),
   
});

   export const Validationthree = yup.object().shape({
      code:yup.string().matches(5,"must be number").required("لطفا پر کنید"),
  })
export const Validationfoure = yup.object().shape({
   phoneNumber:yup.string().matches(/[0-11]/).required("لطفا پر کنید"),
});
export const Validationgmail = yup.object().shape({
   email: yup
   .string()
   .email()
  .required("لطفا پر کنید"),
});
export const  Validatinew = yup.object().shape({
   password: yup
   .string()
 .required("لطفا پر کنید"),
});
export const Validationsix = yup.object().shape({
   phoneOrGmail:yup.string().required("لطفا پر کنید"),
   password: yup
   .string()
 .required("لطفا پر کنید"),
});

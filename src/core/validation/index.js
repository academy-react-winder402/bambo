import * as yup from "yup";

 export const Validationone = yup.object().shape({
    password:yup.string().max(8,"must be 8 characters or less").required("لطفا پر کنید"),
    gmail:yup.string().email().required("لطفا پر کنید"),
   confirmPassword:yup.string().max(8,"must be 8 characters or less").required("لطفا پر کنید"),
});

   export const Validationthree = yup.object().shape({
      code:yup.string().max(5,"must be 5 characters or less").required("لطفا پر کنید"),
  })
export const Validationfoure = yup.object().shape({
   phoneNumber:yup.string().matches(/[0-11]/).required("لطفا پر کنید"),
});


export const Validationsix = yup.object().shape({
   phoneOrGmail:yup.string().required("لطفا پر کنید"),
   password:yup.string().matches(/[0-11], must be number/).required("لطفا پر کنید"),
});
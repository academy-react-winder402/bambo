import * as yup from "yup";

 export const Validationone = yup.object().shape({
    password: yup
    .string()
    .required('Please Enter your password')
    .matches(
      "/[0-11]/",
      "Must be number"
    ).required("لطفا پر کنید"),
    gmail: yup
    .string()
    .email()
    .required()
    .oneOf([yup.ref("email"), null], "Emails must match").required("لطفا پر کنید"),
   pass: yup
   .string()
   .required("لطفا پر کنید")
   .oneOf([yup.ref("password"), null], "Passwords must match")
});

   export const Validationthree = yup.object().shape({
      code:yup.string().matches(5,"must be number").required("لطفا پر کنید"),
  })
export const Validationfoure = yup.object().shape({
   phoneNumber:yup.string().matches(/[0-11]/).required("لطفا پر کنید"),
});


export const Validationsix = yup.object().shape({
   phoneOrGmail:yup.string().required("لطفا پر کنید"),
   password: yup
   .string()
   .required('Please Enter your password')
   .matches(
      "/[0-11]/",
      "Must be number"
   ).required("لطفا پر کنید").required("لطفا پر کنید"),
});

import * as yup from "yup";

 const Validation = yup.object().shape({
    password:yup.string().max(8,"must be 8 characters or less").required("لطفا پر کنید"),
    confirmPassword:yup.string().max(8,"must be 8 characters or less").required("لطفا پر کنید"),
    code:yup.string().max(5,"must be 5 characters or less").required("لطفا پر کنید"),
    phoneNumber:yup.string().matches(/[0-11]/).required("لطفا پر کنید"),
   email:yup.string().email().required("لطفا پر کنید"),
});
export {Validation};
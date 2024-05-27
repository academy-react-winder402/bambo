import { instance } from "../../interseptor/index.js";

export const Postforgotpass = async(object) => {

    try{
        console.log("fetching started ...");

        const result = await instance.post("Sign/ForgetPassword " , object);

        return result;
    }catch(error){
        console.log(error);
        return[];
    }
};
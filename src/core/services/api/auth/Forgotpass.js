import { instance } from "../../interseptor/index.js";

export const Postforgotpass = async(obj) => {

    try{
        console.log("fetching started ...");

        const result = await instance.post("Sign/ForgetPassword " , obj);

        return result;
    }catch(error){
        console.log(error);
        return[];
    }
};
export const getforgottwo = async(obj) => {

    try{
        console.log("fetching started ...");

        const result = await instance.get("/Sign/Reset/:ConfigValue" , obj);

        return result;
    }catch(error){
        console.log(error);
        return[];
    }
};
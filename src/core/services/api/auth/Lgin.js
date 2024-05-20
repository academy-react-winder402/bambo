import { instance } from "../../interseptor/index.js";

const Postlogin = async(obj) => {
    try{
        console.log("fetching started ...");

        const result = await instance.post("/Sign/Login", obj);

        return result;
    }catch(error){
        console.log(error);
        return[];
    }
};
export {Postlogin};
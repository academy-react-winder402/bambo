import { instance } from "../../interseptor/index.js";

const Postlogin = async() => {
    try{
        console.log("fetching started ...");

        const result = await instance.post("/");

        return result;
    }catch(error){
        console.log(error);
        return[];
    }
};
export {Postlogin};
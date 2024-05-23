import { instance } from "../../interseptor/index.js";

export const Postregister = async(obj) => {

    try{
        console.log("fetching started ...");

        const result = await instance.post("/Sign/SendVerifyMessage " , obj);

        return result;
    }catch(error){
        console.log(error);
        return[];
    }
};

export const Postregistertwo = async(obj) => {

    try{
        console.log("fetching started ...");

        const result = await instance.post("/Sign/VerifyMessage" , obj);

        return result;
    }catch(error){
        console.log(error);
        return[];
    }
};

export const Postregisterthree = async(obj) => {

    try{
        console.log("fetching started ...");

        const result = await instance.post("/Sign/Register" , obj);

        return result;
    }catch(error){
        console.log(error);
        return[];
    }
};


import { instance } from "../../interseptor/index.js";

const getname = async() => {
    try{
        console.log("fetching started ...");

        const result = await instance.put("/SharePanel/UpdateProfileInfo");

        return result;
    }catch(error){
        console.log(error);
        return[];
    }
};
export {getname};
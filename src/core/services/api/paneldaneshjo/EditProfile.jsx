import { instance } from "../../interseptor/index.js";

const getname = async(formdata) => {
    try{
        console.log("fetching started ...");

        const result = await instance.put("/SharePanel/UpdateProfileInfo" , formdata);

        return result;
    }catch(error){
        console.log(error);
        return[];
    }
};
export {getname};
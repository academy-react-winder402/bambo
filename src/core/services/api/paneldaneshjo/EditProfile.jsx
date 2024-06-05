import { instance } from "../../interseptor/index.js";

export const getname = async(formdata) => {
    try{
        console.log("fetching started ...");

        const result = await instance.put('/SharePanel/UpdateProfileInfo'+id ,formdata);

        return result;
    }catch(error){
        console.log(error);
        return[];
    }
};


export const SelectImg = async() => {
    try{
        console.log("fetching started ...");

        const result = await instance.put("/SharePanel/SelectProfileImage");

        return result;
    }catch(error){
        console.log(error);
        return[];
    }
};
export const DeleteImg = async() => {
    try{
        console.log("fetching started ...");

        const result = await instance.put("/SharePanel/DeleteProfileImage");

        return result;
    }catch(error){
        console.log(error);
        return[];
    }
};
export const AddImg = async() => {
    try{
        console.log("fetching started ...");

        const result = await instance.put("/SharePanel/AddProfileImage");

        return result;
    }catch(error){
        console.log(error);
        return[];
    }
};
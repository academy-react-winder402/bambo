import { instance } from "../../interseptor/index.js";

export const getname = async(formdata) => {
    try{
        console.log("fetching started ...");

        const result = await instance.put("/SharePanel/UpdateProfileInfo",formdata);

        return result;
    }catch(error){
        console.log(error);
        return[];
    }
};


export const SelectImg = async(formdata) => {
    try{
        console.log("fetching started ...");

        const result = await instance.post("/SharePanel/SelectProfileImage",formdata);

        return result;
    }catch(error){
        console.log(error);
        return[];
    }
};
export const DeleteImg = async() => {
    try{
        console.log("fetching started ...");

        const result = await instance.delete("/SharePanel/DeleteProfileImage");

        return result;
    }catch(error){
        console.log(error);
        return[];
    }
};
export const AddImg = async(imgdata) => {
    try{
        console.log("fetching started ...");

        const result = await instance.post("/SharePanel/AddProfileImage",imgdata);

        return result;
    }catch(error){
        console.log(error);
        return[];
    }
};
import { instance } from "../../interseptor";

const getfiltertechnologyid = async(
    ListTech=undefined,  
) => {
    try{
        
        const result = await instance.get(`/Home/GetCoursesWithPagination?${ListTech ? `&ListTech=${ListTech} ` : ""}`);
        return result;
        
    }catch(error){
        console.log(error);
        return[];
    }
};

export {getfiltertechnologyid};
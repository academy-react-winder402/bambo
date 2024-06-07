import { instance } from "../../interseptor";

const getfiltertechnologyid = async(
    ListTech=undefined,
    TechCount=1,  
) => {
    try{
        
        const result = await instance.get(`/Home/GetCoursesWithPagination?TechCount=${TechCount}&ListTech=${ListTech}`);
        return result;
        
    }catch(error){
        console.log(error);
        return[];
    }
};

export {getfiltertechnologyid};
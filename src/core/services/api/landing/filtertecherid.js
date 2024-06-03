import { instance } from "../../interseptor";

const getfilterteacherid = async(
    TeacherId=undefined,  
) => {
    try{
        
        const result = await instance.get(`/Home/GetCoursesWithPagination?TeacherId=${TeacherId}`);
        return result;
        
    }catch(error){
        console.log(error);
        return[];
    }
};

export {getfilterteacherid};
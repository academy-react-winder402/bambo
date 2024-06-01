import { instance } from "../../interseptor";

const getfiltersearch = async(
    Query=undefined,
    
) => {
    try{
        
        const result = await instance.get(`/Home/GetCoursesWithPagination?Query=${Query}`);
        return result;
        
    }catch(error){
        console.log(error);
        return[];
    }
};

export {getfiltersearch};
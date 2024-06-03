import { instance } from "../../interseptor";

const getfilterpricedown = async(
    CostDown=undefined,  
) => {
    try{
        
        const result = await instance.get(`/Home/GetCoursesWithPagination?CostDown=${CostDown}`);
        return result;
        
    }catch(error){
        console.log(error);
        return[];
    }
};

export {getfilterpricedown};
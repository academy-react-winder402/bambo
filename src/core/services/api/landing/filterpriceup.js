import { instance } from "../../interseptor";

const getfilterpriceup = async(
    CostUp=undefined,  
) => {
    try{
        
        const result = await instance.get(`/Home/GetCoursesWithPagination?CostUp=${CostUp}`);
        return result;
        
    }catch(error){
        console.log(error);
        return[];
    }
};

export {getfilterpriceup};
import { instance } from "../../interseptor";

const getfilterpriceup = async(
    CostUp=undefined,  
    CostDown=undefined,
) => {
    try{
        
        const result = await instance.get(`/Home/GetCoursesWithPagination?CostUp=${CostUp}&CostDown=${CostDown}`);
        return result;
        
    }catch(error){
        console.log(error);
        return[];
    }
};

export {getfilterpriceup};
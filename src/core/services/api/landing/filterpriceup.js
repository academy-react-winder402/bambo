import { instance } from "../../interseptor";

const getfilterpriceup = async(
    RowsOfPage=4,
    pageNumber=1,
    CostDown=undefined,
    CostUp=undefined,
) => {
    try{
        
        const result = await instance.get(`/Home/GetCoursesWithPagination?RowsOfPage=${RowsOfPage}&pageNumber=${pageNumber}&${CostDown ? `CostDown=${CostDown} ` : ""}&${CostUp ? `CostUp=${CostUp} ` : ""}`);
        return result;
        
    }catch(error){
        console.log(error);
        return[];
    }
};

export {getfilterpriceup};
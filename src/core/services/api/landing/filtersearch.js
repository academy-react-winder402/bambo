import { instance } from "../../interseptor";

const getfiltersearch = async(
    Query=undefined,
    RowsOfPage=4,
    
) => {
    try{
        
        const result = await instance.get(`/Home/GetCoursesWithPagination?RowsOfPage=${RowsOfPage}&${Query ? `&Query=${Query} ` : ""}`);
        return result;
        
    }catch(error){
        console.log(error);
        return[];
    }
};

export {getfiltersearch};
import { instance } from "../../interseptor";

const getcourse = async(
    PageNumber=1,
    RowsOfPage=4,  
) => {
    try{
        
        const result = await instance.get(`/Home/GetCoursesWithPagination?PageNumber=${PageNumber}&RowsOfPage=${RowsOfPage}`);
        return result;
        
    }catch(error){
        console.log(error);
        return[];
    }
};

export {getcourse};
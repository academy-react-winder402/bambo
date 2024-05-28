import { object } from "yup";
import { instance } from "../../interseptor";

const getcourse = async(
    
    PageNumber=1,
    RowsOfPage=3,
    
    
) => {
    const params = {CourseTypeId}
    try{
        
        const result = await instance.get(`/Home/GetCoursesWithPagination?
        PageNumber=${PageNumber}
        &RowsOfPage=${RowsOfPage}&
        `,{params:params});
        return result;
        
    }catch(error){
        console.log(error);
        return[];
    }
};

export {getcourse};
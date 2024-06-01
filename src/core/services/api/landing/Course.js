import { instance } from "../../interseptor";

const getcourse = async(
    PageNumber=1,
    RowsOfPage=4,
    Query=undefined,
    courseLevelId=undefined,
) => {
    try{
        
        const result = await instance.get(`/Home/GetCoursesWithPagination?PageNumber=${PageNumber}&RowsOfPage=${RowsOfPage}&Query=${Query}&CourseTypeId=${courseLevelId}`);
        return result;
        
    }catch(error){
        console.log(error);
        return[];
    }
};

export {getcourse};
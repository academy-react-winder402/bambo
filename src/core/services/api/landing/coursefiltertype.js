import { instance } from "../../interseptor";

const getfiltertype = async(
   CourseTypeId=undefined,  
) => {
    try{
        
        const result = await instance.get(`/Home/GetCoursesWithPagination?CourseTypeId=${CourseTypeId}`);
        return result;
        
    }catch(error){
        console.log(error);
        return[];
    }
};

export {getfiltertype};
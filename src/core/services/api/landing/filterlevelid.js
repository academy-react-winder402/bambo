import { instance } from "../../interseptor";

const getfilterlevelid = async(
    courseLevelId=undefined,  
) => {
    try{
        
        const result = await instance.get(`/Home/GetCoursesWithPagination?courseLevelId=${courseLevelId}`);
        return result;
        
    }catch(error){
        console.log(error);
        return[];
    }
};

export {getfilterlevelid};
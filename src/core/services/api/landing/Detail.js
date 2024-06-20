import { instance } from "../../interseptor";

const getcourseDetail = async(
    id=undefined,
) => {
    try{
        
        const result = await instance.get(`/Home/GetCourseDetails?CourseId=${id}`);
        return result;
        
    }catch(error){
        console.log(error);
        return[];
    }
};

export {getcourseDetail};
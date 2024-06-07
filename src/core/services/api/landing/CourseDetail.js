import { instance } from "../../interseptor";

const getcoursedetail = async(
        id
) => {
    try{
        
        const result = await instance.get(`/Home/GetCourseDetails?CourseId=${id}`);
        return result;
        
    }catch(error){
        console.log(error);
        return[];
    }
};

export {getcoursedetail};
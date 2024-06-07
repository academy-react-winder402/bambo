import { instance } from "../../interseptor/index.js";

const getcoursedetail = async(id) => {
    try{
        console.log("fetching started ...");

        const result = await instance.get( `/Home/GetCourseDetails?CourseId=${id}`);

        return result;
    }catch(error){
        console.log(error);
        return[];
    }
};
export {getcoursedetail};
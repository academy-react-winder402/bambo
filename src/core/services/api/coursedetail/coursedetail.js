import { instance } from "../../interseptor/index.js";

const getcoursedetail = async() => {
    try{
        console.log("fetching started ...");

        const result = await instance.get("/Home/GetCoursesTop?Count=5");

        return result;
    }catch(error){
        console.log(error);
        return[];
    }
};
export {getcoursedetail};
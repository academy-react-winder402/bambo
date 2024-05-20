
import { instance } from "../../interseptor";

const getcourselanding = async() => {
    try{
        console.log("fetching started ...");

        const result = await instance.get("/Home/GetCoursesTop?count=3");

        return result;
    }catch(error){
        console.log(error);
        return[];
    }
};

export {getcourselanding};
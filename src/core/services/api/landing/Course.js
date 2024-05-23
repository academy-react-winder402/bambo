import { instance } from "../../interseptor";

const getcourse = async() => {
    try{
        console.log("fetching started ...");

        const result = await instance.get("/Home/GetCoursesTop");

        return result;
    }catch(error){
        console.log(error);
        return[];
    }
};

export {getcourse};
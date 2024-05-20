import { instance } from "../../interseptor";

const getcourseid = async(courseid) => {
    try{
        console.log("fetching started ...");

        const result = await instance.get("/Home/GetCoursesTop/" + courseid);

        return result;
    }catch(error){
        console.log(error);
        return[];
    }
};

export {getcourseid};
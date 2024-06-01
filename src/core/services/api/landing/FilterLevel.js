import { instance } from "../../interseptor";

const getFilterlevel = async() => {
    try{
        console.log("fetching started ...");

        const result = await instance.get("/CourseLevel/GetAllCourseLevel" );

        return result;
    }catch(error){
        console.log(error);
        return[];
    }
};

export {getFilterlevel};
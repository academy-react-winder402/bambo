import { instance } from "../../interseptor";

const getFiltercourse = async() => {
    try{
        console.log("fetching started ...");

        const result = await instance.get("/CourseType/GetCourseTypes" );

        return result;
    }catch(error){
        console.log(error);
        return[];
    }
};

export {getFiltercourse};
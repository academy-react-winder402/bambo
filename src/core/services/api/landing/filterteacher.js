import { instance } from "../../interseptor";

const getFilterteacher = async() => {
    try{
        console.log("fetching started ...");

        const result = await instance.get("/Home/GetTeachers" );

        return result;
    }catch(error){
        console.log(error);
        return[];
    }
};

export {getFilterteacher};
import { instance } from "../../interseptor";

const getFiltertecnology = async() => {
    try{
        console.log("fetching started ...");

        const result = await instance.get("/Home/GetTechnologies" );

        return result;
    }catch(error){
        console.log(error);
        return[];
    }
};

export {getFiltertecnology};
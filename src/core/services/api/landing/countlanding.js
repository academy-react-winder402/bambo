import { instance } from "../../interseptor";

const getcountlanding = async() => {
    try{
        console.log("fetching started ...");

        const result = await instance.get("/Home/LandingReport");

        return result;
    }catch(error){
        console.log(error);
        return[];
    }
};

export {getcountlanding};
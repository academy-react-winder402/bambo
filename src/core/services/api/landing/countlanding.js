import axios from "axios";
import { instance } from "../../interseptor";

const getcountlanding = async() => {
    try{
        console.log("fetching started ...");

        const result = await axios.get("https://classapi.sepehracademy.ir/api/Home/LandingReport");

        return result.data;
    }catch(error){
        console.log(error);
        return[];
    }
};

export {getcountlanding};
import { instance } from "../../interseptor";

const addcomment = async(obj) => {
    try{
        
        const result = await instance.post("/Course/AddCommentCourse",obj);
        return result;
        
    }catch(error){
        console.log(error);
        return[];
    }
};

export {addcomment};
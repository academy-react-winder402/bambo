import { instance } from "../../interseptor";

const GetNews = async(
    PageNumber=1,
    RowsOfPage=4,
) => {
    try{
        
        const result = await instance.get(`/News?PageNumber=${PageNumber}&RowsOfPage=${RowsOfPage}`);
        return result;
        
    }catch(error){
        console.log(error);
        return[];
    }
};



export {GetNews};
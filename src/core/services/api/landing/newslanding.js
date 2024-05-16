
import { instance } from "../../interseptor";

const getnewslanding = async() => {
    try{
        console.log("fetching started ...");

        const result = await instance.get("/News?PageNumber=1&RowsOfPage=10&SortingCol=InsertDate&SortType=DESC");

        return result;
    }catch(error){
        console.log(error);
        return[];
    }
};

export {getnewslanding};
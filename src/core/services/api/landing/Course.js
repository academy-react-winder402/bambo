import { instance } from "../../interseptor";

const getcourse = async() => {
    try{
        const result = await instance.get('/Home/GetCoursesWithPagination?PageNumber=0&RowsOfPage=10');

        return result;
    }catch(error){
        console.log(error);
        return[];
    }
};

export {getcourse};
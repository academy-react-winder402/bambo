import { instance } from "../../interseptor";

const getcourse = async(
    PageNumber=1,
    RowsOfPage=8,
) => {
    try{
        const result = await instance.get(`/Home/GetCoursesWithPagination?
        PageNumber=${PageNumber}
        &RowsOfPage=${RowsOfPage}
        `);
        return result.courseFilterDtos;
        
    }catch(error){
        console.log(error);
        return[];
    }
};

export {getcourse};
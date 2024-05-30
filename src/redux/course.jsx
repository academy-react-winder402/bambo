import { createSlice } from "@reduxjs/toolkit";

const filterCourse = createSlice({
    name:"filterCourse",
    initialState:{
        RowsOfPage:4,
        CourseTypeId:undefined,
    },
    reducers:{
        
        setfilter:(state,action) =>{
           state.RowsOfPage=action.payload.RowsOfPage;
        },
        settypeid:(state,action) =>{
            state.CourseTypeId=action.payload;
        },
    },

    

});

export const{setfilter,settypeid}=filterCourse.actions;

export default filterCourse.reducer;
import { createSlice } from "@reduxjs/toolkit";

const filterCourse = createSlice({
    name:"filterCourse",
    initialState:{
        RowsOfPage:4,
        CourseTypeId:undefined,
        Query:undefined,
        courseLevelId:undefined,
   
    },
    reducers:{
        
        setfilter:(state,action) =>{
           state.RowsOfPage=action.payload.RowsOfPage;
        },
        setTypeid:(state,action) =>{
            state.CourseTypeId=action.payload;
        },
        setSearch:(state,action) =>{
            state.Query=action.payload;
        },
        setlevelid:(state,action) =>{
            state.courseLevelId=action.payload;
        },

    },

    

});

export const{setfilter,setSearch,setTypeid,setlevelid}=filterCourse.actions;

export default filterCourse.reducer;
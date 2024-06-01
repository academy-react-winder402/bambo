import { createSlice } from "@reduxjs/toolkit";

const filterCourse = createSlice({
    name:"filterCourse",
    initialState:{
        RowsOfPage:4,
        Query:undefined,
        courseLevelId:undefined,
    },
    reducers:{
        
        setfilter:(state,action) =>{
           state.RowsOfPage=action.payload.RowsOfPage;
        },
        setSearch:(state,action) =>{
            state.Query=action.payload;
        },
        setTypeid:(state,action) =>{
            state.courseLevelId=action.payload;
        },
    },

    

});

export const{setfilter,setSearch,setTypeid}=filterCourse.actions;

export default filterCourse.reducer;
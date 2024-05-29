import { createSlice } from "@reduxjs/toolkit";

const filterCourse = createSlice({
    name:"filterCourse",
    initialState:{
        RowsOfPage:3,
        PageNumber:1,
    },
    reducers:{
        
        setfilter:(state,action) =>{
           state.RowsOfPage=action.payload;
        },
        setpage:(state,action) => {
            state.PageNumber=action.payload;
        },

    },

    

});

export const{setfilter,setpage}=filterCourse.actions;

export default filterCourse.reducer;
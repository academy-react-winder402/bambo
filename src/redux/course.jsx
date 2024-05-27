import { createSlice } from "@reduxjs/toolkit";

const filterCourse = createSlice({
    name:"filterCourse",
    initialState:{
        RowsOfPage:4,
    },
    reducers:{
        
        setfilter:(state,action) =>{
           state.RowsOfPage=action.payload.RowsOfPage;
        }
    },

    

});

export const{setfilter}=filterCourse.actions;

export default filterCourse.reducer;
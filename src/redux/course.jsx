import { createSlice } from "@reduxjs/toolkit";



const filterCourse = createSlice({
    name:"filterCourse",
    initialState:{
       filter:"all",
    },
    reducers:{
        setfilter:(state,action) =>{
           state.filter=action.payload;
        }
    },

    

});

export const{setfilter}=filterCourse.actions;

export default filterCourse.reducer;
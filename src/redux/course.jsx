import { createSlice } from "@reduxjs/toolkit";

const filterCourse = createSlice({
    name:"filterCourse",
    initialState:{
        RowsOfPage:4,
        CourseTypeId:undefined,
        Query:undefined,
        courseLevelId:undefined,
        ListTech:undefined,
        TeacherId:undefined,
        CostDown:undefined,
        CostUp:undefined,
    },
    reducers:{
        
        setfilter:(state,action) =>{
           state.RowsOfPage=action.payload.RowsOfPage;
        },
        setTypeid:(state,action) =>{
            state.CourseTypeId=action.payload;
        },
        setSearch:(state,action) =>{
            state.Query=action.payload.Query;
        },
        setlevelid:(state,action) =>{
            state.courseLevelId=action.payload;
        },
        settechnology:(state,action) =>{
            state.ListTech=action.payload.ListTech;
        },
        setteacher:(state,action) =>{
            state.TeacherId=action.payload;
        },
        setpricedown:(state,action) =>{
            state.CostDown=action.payload;
        },
        setpriceup:(state,action) =>{
            state.CostUp=action.payload;
        },

    },

    

});

export const{setfilter,setSearch,setTypeid,setlevelid,settechnology,setteacher,setpricedown,setpriceup}=filterCourse.actions;

export default filterCourse.reducer;
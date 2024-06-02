import { createSlice } from "@reduxjs/toolkit";

const profile = createSlice ({
    name : "profile",
    initialState:{
LName : "reza",
FName : "karimi",
HomeAdderess:"sari",
PhoneNumber:"09386012036",
BirthDay:"24 mehr",
Gmail:"www.leilakarimi2015@gmail.com",
Gender:"animal"
    },
    reducers:{
setlname:(state,action) =>{
    state.LName=action.payload;
},
setfname:(state,action) =>{
    state.FName=action.payload;
},
    }
});
export const{setfname,setlname}=profile.actions;
export default profile.reducer
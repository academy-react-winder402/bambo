import React from "react";
const setItem =(key,value)=>{
    localStorage.setItem(key.JSON.stringify(value));
}
export {setItem};
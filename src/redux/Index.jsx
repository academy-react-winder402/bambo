import { configureStore } from "@reduxjs/toolkit";
import profile from "./profile";

const store = configureStore ({
    reducer:{
profile:profile,
    },
});
export {store};
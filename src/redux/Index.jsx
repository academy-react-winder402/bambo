import { configureStore } from "@reduxjs/toolkit";

import filterCourse from "./course";

const store = configureStore({
    reducer:{
        filterCourse:filterCourse,
    },
});


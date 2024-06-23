import { configureStore } from "@reduxjs/toolkit";

import filterCourse from "../course";

 const Store = configureStore({
    reducer:{
        filterCourse:filterCourse,
    },
});




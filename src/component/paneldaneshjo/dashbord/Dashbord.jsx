import React from "react";
import { Left } from "./dashbordLeft/DashbordLeft";
import { Right } from "./dashbordRight/DashbordRight";
const Dashbored =()=>{
    return(
        <div dir="rtl" className="lg:flex lg:w-[100%] lg:h-[100%] lg:justify-between lg:flex-row
        md:flex md:flex-row md:w-[100%] md:h-[100%] md:justify-between   sm:flex sm:w-[100%] sm:flex-row sm:h-[100%] sm:justify-between 
        xs:flex xs:flex-col xs:w-[100%]  xs:justify-between 
        ">
            <Right/>
<Left/>

        </div>
    )
}
export{Dashbored};
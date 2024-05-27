import React from "react";
import { Left } from "./dashbordLeft/DashbordLeft";
import { Right } from "./dashbordRight/DashbordRight";
const Dashbored =()=>{
    return(
        <div dir="rtl" className="lg:flex lg:w-[100%] lg:h-[100%] lg:justify-between ">
            <Right/>
<Left/>

        </div>
    )
}
export{Dashbored};
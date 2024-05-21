import React from "react";
import { Fragment } from "react";
import { DashbordLeft } from "./dashbordleft/DashbordLeft";
import { DashbordRight } from "./dashbordright/DashbordRight";
const PanelDashbordc =()=>{
    return(
        <div className="lg:flex lg:w-[100%] lg:h-[730px]">
          <DashbordLeft/>
          <DashbordRight/>
        </div>
    )
}
export {PanelDashbordc};
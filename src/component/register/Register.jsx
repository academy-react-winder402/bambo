import React, { Fragment } from "react";
import { RegisterRight } from "./RegisterRight";
import { FormRegister } from "./registerleft/RegisterLeft"

const Registerc = () => {
    return (


        <div className="lg:w-[100%] lg:h-[730px] lg:flex lg:flex-wrap
        md:flex  md:w-[100%]  md:h-[730px] md:flex-wrap
       sm:flex sm:flex-col-reverse sm:w-[100%]  sm:h-[915px]
       xs:flex xs:flex-col-reverse xs:w-[100%]  xs:h-[915px]
       
         ">
            <FormRegister />
            < RegisterRight />
        </div>


    );
};

export { Registerc };
import React, { Fragment } from "react";
import { RegisterRight } from "./RegisterRight";
import {FormRegister} from "./registerleft/RegisterLeft"

const Registerc= () => {
    return(
        
          
        <div className="lg:w-[100%] lg:h-[730px] lg:flex lg:flex-wrap
       sm:flex sm:flex-col-reverse sm:w-[100%]  sm:h-[873px]
         ">
                <FormRegister/>
                < RegisterRight/>
             </div>
        
      
    );
};

export {Registerc};
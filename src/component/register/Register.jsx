import React, { Fragment } from "react";
import { RegisterRight } from "./RegisterRight";
import {FormRegister} from "./registerleft/RegisterLeft"

const Registerc= () => {
    return(
        
             <div className="flex flex-row w-[100%] h-[730px]">
                <FormRegister/>
                < RegisterRight/>
             </div>
        
      
    );
};

export {Registerc};
import React from "react";
import { FormRight } from "./FormRight";
import {FormRegister} from "./registerleft/RegisterLeft"
const Registerc= () => {
    return(
        
             <div className="w-[1153px] h-[650px]   mx-[200px] my-[20px] flex flex-wrap rounded-xl">
                <FormRegister/>
                <FormRight/>
             </div>
        
      
    );
};

export {Registerc};
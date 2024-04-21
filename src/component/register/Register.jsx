import React from "react";
import { FormRight } from "./FormRight";
import {FormRegister} from "./RegisterLeft"
const Registerc= () => {
    return(
        <div className="bg-slate-200  w-[1535px] h-[730px] mt-0">
             <div className="w-[1153px] h-[700px]  border-black border-solid border mx-[200px] display-flex flex-wrap">
                <FormRight/>
                <FormRegister/>
             </div>
        </div>
      
    );
};

export {Registerc};
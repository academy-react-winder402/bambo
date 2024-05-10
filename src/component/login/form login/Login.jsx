import React from "react";
import {RegisterRight} from "../../register/RegisterRight"
import { FormLogin } from "./FormLogin"

const Loginc = () => {
    return (



        <div className="lg:w-[100%] lg:h-[730px] lg:flex lg:flex-wrap
        sm:flex sm:flex-col-reverse sm:w-[100%]  sm:h-[873px]
         ">
          
            <FormLogin />
            < RegisterRight />
        </div>

    );
};

export { Loginc };
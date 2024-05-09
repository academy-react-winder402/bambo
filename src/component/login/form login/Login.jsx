import React from "react";
import {RegisterRight} from "../../register/RegisterRight"
import { FormLogin } from "./FormLogin"

const Loginc = () => {
    return (



        <div className="w-[100%] h-[730px]    flex flex-wrap ">
          
            <FormLogin />
            < RegisterRight />
        </div>

    );
};

export { Loginc };
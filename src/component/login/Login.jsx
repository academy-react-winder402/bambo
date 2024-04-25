import React from "react";
import {RegisterRight} from "../register/RegisterRight"
import { FormLogin } from "./FormLogin";

const Loginc = () => {
    return (



        <div className="w-[1153px] h-[650px]   mx-[200px] my-[20px] flex flex-wrap rounded-xl">
            <FormLogin />
            < RegisterRight />
        </div>

    );
};

export { Loginc };
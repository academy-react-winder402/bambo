import React from "react";

import { Headerserach } from "./headersearch/Headerserach";
import { Inputsearch } from "./inputsearch/Inputsearch";
import { Contentsearch } from "./contentsearch/Contentsearch";

const SearchLanding = ({ isVisible, onclose }) => {
    if (!isVisible) return null;

    return (
        <div className="h-[46rem] w-[96rem]  fixed inset-0 bg-opacity-25 backdrop-blur-sm z-10  " >

            <div className="h-[35rem] w-[55rem]  m-auto mt-[6rem] rounded-md bg-[#fff]">
                <Headerserach onclose={onclose} />
                <Inputsearch />
                <Contentsearch />

            </div>
        </div>
    );
};

export { SearchLanding };
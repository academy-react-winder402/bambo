import React from "react";
import { Top } from './item/Top';
import { Main } from './item/Main';
import { Bottom } from './item/Bottom';
const Box4 = () => {
    return (
        <div className=" h-[46rem] w-[96rem] m-auto">
            <Top />
            <Main />
            <Bottom />
        </div>
    );
};

export { Box4 };
import React from "react";
import { Gridtop } from './gridtop/Gridtop';
import { Gridbottom } from './gridbottom/Gridbottom';


const Grid = ({ im, title }) => {
    return (
        <div className=" h-[14rem] w-[35rem] hover:scale-110 transition duration-300">
            <Gridtop im={im} />
            <Gridbottom title={title} />
        </div>
    );
};

export { Grid };
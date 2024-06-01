import React from "react";
import { Gridtop } from './gridtop/Gridtop';
import { Gridbottom } from './gridbottom/Gridbottom';


const Grid = ({ im, title,id,gtid }) => {
    return (
        <div className=" h-[14rem] w-[35rem] hover:scale-110 transition duration-300 font-sans">
            <Gridtop im={im} />
            <Gridbottom title={title} id={id} gtid={gtid} />
        </div>
    );
};

export { Grid };
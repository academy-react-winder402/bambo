import React from "react";
import { Grid2top } from './grid2top/Grid2top';
import { Grid2bottom } from './grid2bottom/Grid2bottom';

const Grid2 = ({ im, title }) => {
    return (
        <div className=" w-[16.5rem]  mb-[3rem] mr-7 hover:shadow-2xl hover:scale-110 transition duration-300 ">
            <Grid2top img={im} />
            <Grid2bottom title={title} />
        </div>
    );
};

export { Grid2 };
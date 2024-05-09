import React from "react";
import { Header } from '../../common/Header';
import { Boxsearch } from "../../common/boxsearch/Boxsearch";
import { Item3 } from './items/Item3'
import { Item1 } from "./items/Item1";
import { Item2 } from './items/Item2';

const Box1 = () => {
    return (
        <div className="h-[46rem] w-[96rem] bg-[url(./././assets/img/landing/back1.png)] bg-cover ">
            <div className="h-[46rem] bg-[#08856887] relative">
                <Header />

                <Item1 />
                <Item2 />
                <Item3 />

                <div className=" h-14 mt-[39rem]">
                    <Boxsearch styl={"bg-[#004458]"} />
                </div>

            </div>
        </div>
    );
};

export { Box1 };
import React from "react";
import { Header } from '../../common/Header';
import { Item3 } from './items/Item3'
import { Item1 } from "./items/Item1";
import { Item2 } from './items/Item2';
import { Search } from "./search/Search";

const Box1 = ({set}) => {
    return (
        <div className="h-[46rem] w-[96rem] bg-[url(./././assets/img/landing/back1.png)] bg-cover m-auto">
            <div className="h-[46rem] bg-[#08856887] relative">
                <Header />

                <Item1 />
                <Item2 />
                <Item3 />

                <Search set={set}/>

            </div>
        </div>
    );
};

export { Box1 };
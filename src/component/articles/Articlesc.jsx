import React from "react";
import {Headerarticle} from './headerarticle/Header';
import { Contentarticle } from "./contentarticle/Contentarticle";
const Articlesc = () => {
    return(
        <div className="bg-[#ededed] font-sans">
            <Headerarticle />
            <Contentarticle />
        </div>
    );
};

export {Articlesc};
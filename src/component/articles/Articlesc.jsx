import React from "react";
import {Header} from "../common/Header"
import {Footer} from "../common/Footer"
import { ArticleContent } from "./ArticleContent";
const Articlesc = () => {
    return(
        <div className="w-[1536px] h-[2648px] border-solid border-[1px] border-black">
            <Header/>
            <ArticleContent/>
            <Footer/>
        </div>
    );
};

export {Articlesc};
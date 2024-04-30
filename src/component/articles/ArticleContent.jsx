import React from "react";
import { ArticleContentLeft } from "./articlecontentmain/ArticleContentLeft";
import { ArticleContentRight } from "./articlecontentmain/ArticleContentRight";
import {ArticleContentBottom} from "./articlecontentbottom/ArticleContentBottom";

const ArticleContent = () => {
    return (
        <div className="h-[1470px]  bg-[#E9E9E9]">
            <div className="h-[160px] indent-[1120px] pt-[20px] text-[65px] text-[#004458]">اخبار و مقالات</div>
            <div className="h-[1150px]   flex flex-row gap-[26px]">
                <ArticleContentLeft />
                <ArticleContentRight />
            </div>
            <div className="h-[160px] border-solid border-[1px] border-[orange]">
                <ArticleContentBottom />
            </div>
        </div>

    );
};

export { ArticleContent };
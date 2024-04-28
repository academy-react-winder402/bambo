import React from "react";
import { ArticleContentLeft } from "./articlecontentmain/ArticleContentLeft";
import { ArticleContentRight } from "./articlecontentmain/ArticleContentRight";

const ArticleContent = () => {
    return (
        <div className="h-[1666px]  border-solid border-[1px] border-[red] bg-[#E9E9E9]">
            <div className="h-[160px] border-solid border-[1px] border-[blue] indent-[1050px] pt-[20px] text-[65px]">اخبار و مقالات</div>
            <div className="h-[1300px]  border-solid border-[1px] border-[green] flex flex-row gap-[26px]">
                <ArticleContentLeft />
                <ArticleContentRight />
            </div>
            <div className="h-[186px] border-solid border-[1px] border-[orange]"></div>
        </div>

    );
};

export { ArticleContent };
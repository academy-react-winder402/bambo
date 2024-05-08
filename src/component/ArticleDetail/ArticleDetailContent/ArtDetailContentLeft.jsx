import React from "react";
import { ContentCard } from "./ContentCard";
const ArticleDetailContentLeft = () => {
    return(
<div className="h-[900px] w-[500px] bg-[#F9F9F9] mt-[50px]">
    <div className="h-[80px] w-[400px] text-center text-[36px] text-[#004458] leading-[80px] m-auto border-b-solid border-b-[1px] border-b-[#004458]">مقالات پیشنهادی</div>
    <ContentCard/>
    <ContentCard/>
    <ContentCard/>
    <ContentCard/>
    <ContentCard/>
</div>
    );
};

export {ArticleDetailContentLeft };
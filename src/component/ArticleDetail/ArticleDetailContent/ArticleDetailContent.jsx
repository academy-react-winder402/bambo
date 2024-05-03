import React from "react";
import { ArticleDetailContentRight } from "./ArtDetailContentRight";
import { ArticleDetailContentLeft } from "./ArtDetailContentLeft";

const ArticleDetailContant= () => {
    return(
 <div className="h-[1200px] border-solid border-black border-[1px]">
    <div className="h-[80px] w-[1500px] text-[#004458] text-[50px] ml-[0px] mt-[30px] text-right">چطور یک پروژه برنامه نویسی را مرحله به مرحله بسازیم</div>
    <div className="h-[1200px] flex flex-row-reverse justify-around">
<ArticleDetailContentRight/>
<ArticleDetailContentLeft/>
    </div>
 </div>
    );
};

export {ArticleDetailContant};
import React, { useState } from "react";
import { ArticlesCardLeft } from "./ArticlesCardLeft";
import { ArticlesCardRight } from "./ArticlesCardRight";

const ArticlesCard =(toz,im)=>{
    return(
<div className="w-[688px] h-[220px] border-solid border-[1px] border-black mt-[30px] flex flex-row">
<ArticlesCardLeft  toz={toz}/>
<ArticlesCardRight im={im} />
</div>
    );
};
export {ArticlesCard}
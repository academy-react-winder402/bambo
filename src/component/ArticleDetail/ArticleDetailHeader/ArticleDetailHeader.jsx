import React from "react";
import {ArticleDetailHeaderTop} from "../ArticleDetailHeader/ArticleDetailHeaderTop"
import { ArticleDetailHeaderBottom } from "./ArticleDetailHeaderBottom";
const ArticleDetailHeader = () => {
    return(
 <div className="w-[100%] h-[600px] text-white bg-[url('assets/img/articledetail/coding-man.jpg')] bg-cover">
 
   <div className="w-[100%] h-[600px] bg-[#000000] opacity-[65%] absolute top-[0px] left-[0px]">
   <ArticleDetailHeaderTop/>
<ArticleDetailHeaderBottom/>
     </div>

 </div>

    );
};

export { ArticleDetailHeader};
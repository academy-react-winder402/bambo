import React, { useState } from "react";
import { CardArticles } from "./articlecard/CardArticles";
import maghale from "../../../assets/img/article/maghale.png"
const ArticleContentRight = () => {
    const [cardList, setCardList] = useState([
        { toz: " چطور یک پروژه برنامه نویسی بسازیم؟", im: maghale },
        { toz: " چطور یک پروژه برنامه نویسی بسازیم؟", im: maghale },
        { toz: " چطور یک پروژه برنامه نویسی بسازیم؟", im: maghale },
        { toz: " چطور یک پروژه برنامه نویسی بسازیم؟", im: maghale },
    ])
    return(
<div className="w-[688px]  ml-[54px]">
            <div className="h-[120px] border-b-solid border-b-[1px] border-b-black text-[50px] text-center leading-[100px] text-[#004458]">مقالات</div>
            <div className="h-[1000px]">
            <CardArticles cardList={cardList} />
            </div>
        </div>
      
    );
};

export {ArticleContentRight};
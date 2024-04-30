import React, { useState } from "react";
import { CardArticles } from "./articlecard/CardArticles";
import maghale from "../../../assets/img/article/maghale.png"
const ArticleContentLeft = () => {
    const [cardList, setCardList] = useState([
        { toz: " چطور یک پروژه برنامه نویسی بسازیم؟", im: maghale },
        { toz: " چطور یک پروژه برنامه نویسی بسازیم؟", im: maghale },
        { toz: " چطور یک پروژه برنامه نویسی بسازیم؟", im: maghale },
        { toz: " چطور یک پروژه برنامه نویسی بسازیم؟", im: maghale },
    ])

    return (
        <div className="w-[688px]  ml-[40px]">
            <div className="h-[120px] border-b-solid border-b-[1px] border-b-black text-[50px] text-center leading-[100px] text-[#004458]">اخبار</div>
            <div className="h-[1000px] ">

             
<CardArticles cardList={cardList} />
            </div>
        </div>

    );
};

export { ArticleContentLeft };
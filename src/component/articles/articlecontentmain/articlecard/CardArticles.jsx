import React, { useState } from "react";
import { ArticlesCard } from "../articlecard/ArticlesCard";

const CardArticles = ({cardList}) => {

    return <div className="h-[1000px] ">
        {cardList.map((item, index) => {
            return (
                <ArticlesCard
                    key={index}
                    toz={item.toz}
                    im={item.im}
                />
            );
        })}


    </div>

};
export { CardArticles }
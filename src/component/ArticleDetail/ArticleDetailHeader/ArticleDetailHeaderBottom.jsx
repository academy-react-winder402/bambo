import React from "react";
import star from "../../../assets/img/articledetail/star.jpg"
const ArticleDetailHeaderBottom = () => {
    return(
<div className="h-[150px] w-[1000px] m-auto mt-[60px]">
<div className="h-[90px] w-[1000px] border-b border-solid border-[#D1D1D1] text-[45px]">
چطور یک پروژه برنامه نویسی را مرحله به مرحله بسازیم
</div>
<div className="flex flex-row justify-between mt-[30px]">
  
    <div className="flex flex-row">
        <img src={star} className="w-[30px] h-[30px]"></img>
        <img src={star} className="w-[30px] h-[30px]"></img>
        <img src={star} className="w-[30px] h-[30px]"></img>
        <img src={star} className="w-[30px] h-[30px]"></img>
    </div>
    <div> مقالات #</div>
</div>
</div>

    );
};

export { ArticleDetailHeaderBottom};
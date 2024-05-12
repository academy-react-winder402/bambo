import React from "react";


const ContantTopLeft = () => {
    return(
<div className="h-[450px] w-[400px] mt-[100px] bg-[#F9F9F9]">
 <div className="h-[60px] w-[400px] border-b-solid border-b-black border-b-[1px] m-auto text-[26px] text-right text-[#004458] leading-[50px]" >
    دوره جاوا اسکریپت
    <img ></img>
    </div>   
    <div className="h-[40px] text-[20px] text-[#004458] flex flex-row-reverse gap-[100px] mt-[15px]">
        <div className="mr-[30px]"> :قیمت دوره</div>
        <div >200هزارتومان</div>
    </div>

    <div className="h-[40px] text-[20px] text-[#004458] flex flex-row-reverse gap-[220px] mt-[15px]">
    <div className="mr-[30px]">تخفیف</div>
    <div className="text-[red]">10٪</div>
</div>
<div className="h-[40px] text-[20px] text-[#004458] flex flex-row-reverse gap-[20px] mt-[15px]">
    <div className="mr-[30px]">:مبلغ قابل پرداخت</div>
    <div className="text-[#09B28B]">180000تومان</div>
</div>
<div className="h-[70px] flex flex-row mt-[20px] text-[35px]">
    <div className="h-[60px] w-[45px] bg-[#DBDBDB] ml-[64px]" ></div>
    <div className="h-[60px] w-[45px] bg-[#DBDBDB] ml-[5px] mr-[5px]" ></div>
    :
    <div className="h-[60px] w-[45px] bg-[#DBDBDB] ml-[5px]" ></div>
    <div className="h-[60px] w-[45px] bg-[#DBDBDB] ml-[5px] mr-[5px]" ></div>
    :
    <div className="h-[60px] w-[45px] bg-[#DBDBDB] ml-[5px]" ></div>
    <div className="h-[60px] w-[45px] bg-[#DBDBDB] ml-[5px]" ></div>
</div>
<div className="w-[300px] h-[72px] bg-[#09B28B] text-[30px] text-[#fff] text-center leading-[55px] mt-[28px] m-auto cursor-pointer">ثبت نام دوره</div>
</div>
    );
};

export {ContantTopLeft };
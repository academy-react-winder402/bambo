import React from "react";
import box1 from "../../../../assets/img/coursedetail/box1.jpg"
import box2 from "../../../../assets/img/coursedetail/box2.jpg"
import box3 from "../../../../assets/img/coursedetail/box3.jpg"

const DetailContantBottom = () => {
    return (
        <div className="h-[550px] flex flex-row-reverse">
            <div className="w-[600px] bg-[url('assets/img/coursedetail/bottomdetail.jpg')] bg-cover"></div>
            <div className="w-[950px] bg-[#F9F9F9]">
                <div className=" h-[80px] text-[45px] text-[#004458]   mt-[15px] indent-[38rem]">:مزایای این دوره</div>
                <div className="flex flex-col  text-[#004458] text-right">
                    <div className="flex flex-row gap-[15px] text-[30px] ml-[320px] mt-[20px]">
                        <span>آشنایی با زبان برنامه نویسی جاوا اسکریپت </span>
                        <img src={box1} className="w-[50px] h-[50px]"></img>
                    </div>
                    <span className="pr-[40px] pl-[40px] pt-[20px]">.در پایان این دوره ی آموزشی شما دانشجوی گرامی ُقادر به فهمی عمیق و مناسب نسبت به این زبان خواهید بود و به راحتی تسک های مربوط را انجام خواهی داد</span>
                </div>

                <div className="flex flex-col  text-[#004458] text-right">
                    <div className="flex flex-row gap-[15px] text-[30px] ml-[320px] mt-[20px]">
                        <span>آشنایی با زبان برنامه نویسی جاوا اسکریپت </span>
                        <img src={box2} className="w-[50px] h-[50px]"></img>
                    </div>
                    <span className="pr-[40px] pl-[40px] pt-[20px]">.در پایان این دوره ی آموزشی شما دانشجوی گرامی ُقادر به فهمی عمیق و مناسب نسبت به این زبان خواهید بود و به راحتی تسک های مربوط را انجام خواهی داد</span>
                </div>
                
                <div className="flex flex-col  text-[#004458] text-right">
                    <div className="flex flex-row gap-[15px] text-[30px] ml-[320px] mt-[20px]">
                        <span>آشنایی با زبان برنامه نویسی جاوا اسکریپت </span>
                        <img src={box3} className="w-[50px] h-[50px]"></img>
                    </div>
                    <span className="pr-[40px] pl-[40px] pt-[20px]">.در پایان این دوره ی آموزشی شما دانشجوی گرامی ُقادر به فهمی عمیق و مناسب نسبت به این زبان خواهید بود و به راحتی تسک های مربوط را انجام خواهی داد</span>
                </div>
            </div>
        </div>
    );
};

export { DetailContantBottom };
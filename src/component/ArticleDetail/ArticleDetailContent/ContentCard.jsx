import React from "react";
import layer from "../../../assets/img/articledetail/Layer 1.png"
const ContentCard =() => {
return(
<div className="w-[400px] h-[120px] m-auto mt-[30px] flex flex-row-reverse bg-[#ffff] font-sans">
    <div className="w-[110px] bg-[#FFC7F8]"><img src={layer} className="w-[50px] h-[70px] m-auto mt-[20px]"></img></div>
    <div>
        <div className="text-[15px] text-[#004458] text-right p-[20px]">چطور یک پروژه برنامه نویسی را
مرحله به مرحله بسازیم؟</div>
<div className="h-[25px] w-[80px] bg-[#DCF8F1] text-[12px] text-[#088568] text-center ml-[210px]">مقالات#</div>
    </div>
</div>
);
}
export {ContentCard};
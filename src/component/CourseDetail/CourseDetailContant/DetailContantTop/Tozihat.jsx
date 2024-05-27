import React from "react";
const Tozihat =({coursedetail})=>{
    const {describe} = coursedetail;
    return(  

          <div className=" h-[430px] w-[55rem] text-[20px] text-[#004458] text-right bg-[#F6F6F6] p-[30px] font-sans">

    <span>{describe}</span>
</div>
);

};
export {Tozihat}
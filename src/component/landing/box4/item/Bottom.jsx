import React from "react";
import box4img3 from '../../../../assets/img/landing/box4.3.png';

const Bottom = () => {
    return (
        <div className=" h-[15.3rem] bg-[#004458] flex gap-[19rem] dark:bg-[#1c1e21]">
            <img src={box4img3} className=" h-[15.3rem] w-[30rem]" />
            <div className="  h-[15.3rem] w-[25rem]">
                <span className="block text-5xl mt-14 text-right text-white "> همکاری در اموزش </span>
                <span className="block text-2xl  text-right text-[#D1D1D1] mt-[2rem] "> به اساتید اموزشی ما در بامبو بپیوندبد  </span>
            </div>
        </div>
    );
};

export { Bottom };
import React from "react";
import { Slide2 } from "../../../../common/slide2/Slide2";

const Rightt = ({ news }) => {
    return (
        <div className="border-8 border-solid border-[#004458] h-[26rem] mt-[10rem] ml-[6rem]">
            <Slide2 news={news} />
        </div>

    );
};

export { Rightt };
import React from "react";
import close from '../../../../assets/img/landing/close.png';

const Headerserach = ({onclose}) => {
    return (
        <div className=" h-[4rem] flex justify-between">
            <div className=" h-[2rem] w-[2rem] mt-[1rem] ml-[1rem]" >
                <img src={close} className="h-[2rem] w-[2rem] hover:cursor-pointer" onClick={() => { onclose() }} />
            </div>
            <div className="text-2xl mt-[1rem] mr-[1rem] text-[#004458] "> جستجو در سایت </div>
        </div>
    );
};

export { Headerserach };
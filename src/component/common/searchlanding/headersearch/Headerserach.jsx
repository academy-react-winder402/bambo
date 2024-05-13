import React from "react";
import close from '../../../../assets/img/landing/close.png';

const Headerserach = ({onclose}) => {
    return (
        <div className=" border border-solid border-transparent h-[4rem]">
            <div className=" h-[2rem] w-[2rem] mt-[1rem] ml-[1rem]" >
                <img src={close}  className="h-[2rem] w-[2rem] hover:cursor-pointer" onClick={() => { onclose() }} />
            </div>
            
        </div>
    );
};

export { Headerserach };
import React from "react";

const SearchLanding = () => {
    return (
        <div className="h-[46rem] w-[96rem] bg-[#333333ac] absolute top-0  left-0 z-10" >

            <div className="h-[35rem] w-[55rem] bg-[#fff] m-auto mt-[6rem] rounded-md">
                <div className="border border-solid border-red-500 h-[4rem] flex justify-between">
                    <div className="border border-solid border-red-500 h-[2rem] w-[2rem] mt-[1rem]">  </div>
                    <div className="text-2xl  "> جستجو در سایت </div>

                </div>
            </div>
        </div>
    );
};

export { SearchLanding };
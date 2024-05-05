import React from "react";

const Asatid = () => {

    return (
        <div>

            <div className=" h-[3rem] w-[16rem] m-auto mt-[1rem] rounded-md bg-[#004458]">
                <span className="block mr-[1.5rem] text-white text-right leading-10 text-xl"> اساتید</span>
            </div>

            <div className="mt-[1rem]">

                <div className=" text-right flex justify-end ">
                    <input type="checkbox" id="bahr" name="bahr" className="peer hidden" />
                    <label for="bahr" className="block mr-[0.5rem] hover:text-[#09B28B] hover:cursor-pointer">  استاد بحر العلوم </label>
                    <label for="bahr" v className="border border-solid border-[black] h-[1rem] w-[1rem] mt-[0.4rem] mr-[1rem] block 
            peer-checked:bg-[#09B28B] peer-checked:border-none bg-no-repeat bg-cover rounded-full hover:cursor-pointer">  </label>
                </div>

                <div className=" text-right flex justify-end mt-[0.5rem]">
                    <input type="checkbox" id="asghari" name="asghari" className="peer hidden" />
                    <label for="asghari" className="block mr-[0.5rem] hover:text-[#09B28B] hover:cursor-pointer" > استاد اصغری </label>
                    <label for="asghari" className="border border-solid border-[black] h-[1rem] w-[1rem] mt-[0.4rem] mr-[1rem] block 
             peer-checked:bg-[#09B28B] peer-checked:border-none bg-no-repeat bg-cover rounded-full hover:cursor-pointer">  </label>
                </div>
            </div>



        </div>
    );
};

export { Asatid }; 
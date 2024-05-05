import React from "react";

const Time = () => {



    return (
        <div>
            <div className=" h-[3rem] w-[16rem] m-auto mt-[1rem] rounded-md bg-[#004458]">
                <span className="block mr-[1.5rem] text-white text-right leading-10 text-xl"> زمان </span>
            </div>

            <div className="mt-[1rem]">

                <div className=" text-right flex justify-end ">
                    <input type="checkbox" id="t1" name="t1" className="peer hidden" />
                    <label for="t1" className="block mr-[0.5rem] hover:text-[#09B28B] hover:cursor-pointer" > ۱۵ دقیقه </label>
                    <label for="t1" v className="border border-solid border-[black] h-[1rem] w-[1rem] mt-[0.4rem] mr-[1rem] block 
            peer-checked:bg-[#09B28B] peer-checked:border-none bg-no-repeat bg-cover rounded-full hover:cursor-pointer">  </label>
                </div>

                <div className=" text-right flex justify-end mt-[0.5rem]">
                    <input type="checkbox" id="t2" name="t2" className="peer hidden" />
                    <label for="t2" className="block mr-[0.5rem] hover:text-[#09B28B] hover:cursor-pointer" > ۳۰ دقیقه </label>
                    <label for="t2" className="border border-solid border-[black] h-[1rem] w-[1rem] mt-[0.4rem] mr-[1rem] block 
             peer-checked:bg-[#09B28B] peer-checked:border-none bg-no-repeat bg-cover rounded-full hover:cursor-pointer">  </label>
                </div>

                <div className=" text-right flex justify-end mt-[0.5rem]">
                    <input type="checkbox" id="t3" name="t3" className="peer hidden" />
                    <label for="t3" className="block mr-[0.5rem] hover:text-[#09B28B] hover:cursor-pointer" > ۴۰ دقیقه </label>
                    <label for="t3" className="border border-solid border-[black] h-[1rem] w-[1rem] mt-[0.4rem] mr-[1rem] block 
             peer-checked:bg-[#09B28B] peer-checked:border-none bg-no-repeat bg-cover rounded-full hover:cursor-pointer">  </label>
                </div>

                <div className=" text-right flex justify-end mt-[0.5rem]">
                    <input type="checkbox" id="t4" name="t4" className="peer hidden" />
                    <label for="t4" className="block mr-[0.5rem] hover:text-[#09B28B] hover:cursor-pointer" > ۶۰ دقیقه </label>
                    <label for="t4" className="border border-solid border-[black] h-[1rem] w-[1rem] mt-[0.4rem] mr-[1rem] block 
             peer-checked:bg-[#09B28B] peer-checked:border-none bg-no-repeat bg-cover rounded-full hover:cursor-pointer">  </label>
                </div>

            </div>
        </div>
    );
};

export { Time }; 
import React from "react";

const Moratab = () => {

    return (
        <div>

            <div className=" h-[3rem] w-[16rem] m-auto mt-[1rem] rounded-md bg-[#004458]">
                <span className="block mr-[1.5rem] text-white text-right leading-10 text-xl"> مرتب سازی </span>
            </div>

            <div className="mt-[1rem]">

            <div className=" text-right flex justify-end mt-[0.5rem]">
                    <input type="checkbox" id="hame" name="hame" className="peer hidden" />
                    <label for="hame" className="block mr-[0.5rem] hover:text-[#09B28B] hover:cursor-pointer" > همه  </label>
                    <label for="hame" className="border border-solid border-[black] h-[1rem] w-[1rem] mt-[0.4rem] mr-[1rem] block 
             peer-checked:bg-[#09B28B] peer-checked:border-none bg-no-repeat bg-cover rounded-full hover:cursor-pointer">  </label>
                </div>

                <div className=" text-right flex justify-end ">
                    <input type="checkbox" id="jadid" name="jadid" className="peer hidden" />
                    <label for="jadid" className="block mr-[0.5rem] hover:text-[#09B28B] hover:cursor-pointer" > جدید ترین  </label>
                    <label for="jadid" v className="border border-solid border-[black] h-[1rem] w-[1rem] mt-[0.4rem] mr-[1rem] block 
            peer-checked:bg-[#09B28B] peer-checked:border-none  bg-no-repeat bg-cover rounded-full hover:cursor-pointer">  </label>
                </div>

                <div className=" text-right flex justify-end mt-[0.5rem]">
                    <input type="checkbox" id="mahbob" name="mahbob" className="peer hidden" />
                    <label for="mahbob" className="block mr-[0.5rem] hover:text-[#09B28B] hover:cursor-pointer" > محبوب ترین ها  </label>
                    <label for="mahbob" className="border border-solid border-[black] h-[1rem] w-[1rem] mt-[0.4rem] mr-[1rem] block 
             peer-checked:bg-[#09B28B] peer-checked:border-none bg-no-repeat bg-cover rounded-full hover:cursor-pointer">  </label>
                </div>

                <div className=" text-right flex justify-end mt-[0.5rem]">
                    <input type="checkbox" id="free" name="free" className="peer hidden" />
                    <label for="free" className="block mr-[0.5rem] hover:text-[#09B28B] hover:cursor-pointer" > رایگان  </label>
                    <label for="free" className="border border-solid border-[black] h-[1rem] w-[1rem] mt-[0.4rem] mr-[1rem] block 
             peer-checked:bg-[#09B28B] peer-checked:border-none bg-no-repeat bg-cover rounded-full hover:cursor-pointer">  </label>
                </div>

            </div>



        </div>
    );
};

export { Moratab }; 
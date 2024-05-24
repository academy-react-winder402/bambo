import React from "react";

const Moratab = () => {

    return (
        <div>

            <div className="relative w-[19rem] bg-[#fff] shadow-[6px,6px,10px,-1px,rgba(0,0,0.15),-6px,-6px,-10px,-1px,rgba(255,255,255,0.8)]
             rounded-xl mb-[1rem]">

                <input type="checkbox" id="inputmoratab" className="absolute peer opacity-0" />

                <label for="inputmoratab" className="font-bold tracking-[1px] mx-[20px] h-[50px] flex items-center"> product </label>
                <label for="inputmoratab" className="h-[1rem] w-[1rem] bg-[url('././././assets/img/courses/plus.png')] bg-no-repeat bg-cover absolute top-[17px] right-[30px]
                 peer-checked:bg-[url('././././assets/img/courses/negativ.png')] duration-300">  </label>

                <div className="max-h-0 overflow-hidden peer-checked:max-h-full" >
                    <div className="mt-[1rem] mb-[1rem]">

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
            </div>


        </div>
    );
};

export { Moratab }; 
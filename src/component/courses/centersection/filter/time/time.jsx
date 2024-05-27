import React from "react";

const Time = () => {



    return (
        <div>

            <div className="relative w-[19rem] bg-[#fff] shadow-[6px,6px,10px,-1px,rgba(0,0,0.15),-6px,-6px,-10px,-1px,rgba(255,255,255,0.8)]
             rounded-xl mb-[1rem]">

                <input type="checkbox" id="inputtime" className="absolute peer opacity-0" />

                <label for="inputtime" className="font-bold tracking-[1px] mx-[20px] h-[50px] flex items-center"> مدت زمان </label>
                <label for="inputtime" className="h-[1rem] w-[1rem] bg-[url('./././././assets/img/courses/plus.png')] bg-no-repeat bg-cover absolute top-[17px] right-[30px]
                 peer-checked:bg-[url('./././././assets/img/courses/negativ.png')] duration-300">  </label>

                <div className="max-h-0 overflow-hidden peer-checked:max-h-full" >

                    <div className="mt-[1rem] mb-[1rem]">

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
            </div>



        </div>
    );
};

export { Time }; 
import React from "react";

const Time = () => {



    return (
        <div>
            <input type="checkbox" id="time" name="time" className=" peer hidden" />

            <label className=" text-right text-lg h-[3rem] w-[15rem] block 
                leading-10  bg-[url(././././assets/img/courses/bottomm.webp)] bg-no-repeat  bg-[length:0.9rem_0.7rem] bg-[center_left_0.7rem] 
                peer-checked:bg-[url(././././assets/img/courses/top.webp)]" for="time">
                <span className="block mr-[1rem]"> مدت زمان </span>
            </label>

            <label for="time" className=" h-[10rem] w-[15rem] hidden peer-checked:block">

                <div className=" text-right flex justify-end ">
                    <input type="checkbox" id="t1" name="t1" className="peer hidden" />
                    <label className="block mr-[0.5rem]" >  15 دقیقه </label>
                    <label for="t1" v className="border border-solid border-[black] rounded-[0.2rem] h-[1rem] w-[1rem] mt-[0.4rem] mr-[1rem] block 
            peer-checked:bg-[url('././././assets/img/courses/checkbox.png')] bg-no-repeat bg-cover">  </label>
                </div>

                <div className=" text-right flex justify-end">
                    <input type="checkbox" id="t2" name="t2" className="peer hidden" />
                    <label className="block mr-[0.5rem] " >  20 دقیقه </label>
                    <label for="t2" className="border border-solid border-[black] rounded-[0.2rem] h-[1rem] w-[1rem] mt-[0.4rem] mr-[1rem] block 
             peer-checked:bg-[url('././././assets/img/courses/checkbox.png')] bg-no-repeat bg-cover ">  </label>
                </div>

                <div className=" text-right flex justify-end ">
                    <input type="checkbox" id="t3" name="t3" className="peer hidden" />
                    <label className="block mr-[0.5rem]" >  25 دقیقه </label>
                    <label for="t3" v className="border border-solid border-[black] rounded-[0.2rem] h-[1rem] w-[1rem] mt-[0.4rem] mr-[1rem] block 
            peer-checked:bg-[url('././././assets/img/courses/checkbox.png')] bg-no-repeat bg-cover">  </label>
                </div>

                <div className=" text-right flex justify-end">
                    <input type="checkbox" id="t4" name="t4" className="peer hidden" />
                    <label className="block mr-[0.5rem] " > 30 دقیقه </label>
                    <label for="t4" className="border border-solid border-[black] rounded-[0.2rem] h-[1rem] w-[1rem] mt-[0.4rem] mr-[1rem] block 
             peer-checked:bg-[url('././././assets/img/courses/checkbox.png')] bg-no-repeat bg-cover ">  </label>
                </div>

                <div className=" text-right flex justify-end ">
                    <input type="checkbox" id="t5" name="t5" className="peer hidden" />
                    <label className="block mr-[0.5rem]" >  35 دقیقه </label>
                    <label for="t5" v className="border border-solid border-[black] rounded-[0.2rem] h-[1rem] w-[1rem] mt-[0.4rem] mr-[1rem] block 
            peer-checked:bg-[url('././././assets/img/courses/checkbox.png')] bg-no-repeat bg-cover">  </label>
                </div>

                <div className=" text-right flex justify-end">
                    <input type="checkbox" id="t6" name="t6" className="peer hidden" />
                    <label className="block mr-[0.5rem] " > 45 دقیقه </label>
                    <label for="t6" className="border border-solid border-[black] rounded-[0.2rem] h-[1rem] w-[1rem] mt-[0.4rem] mr-[1rem] block 
             peer-checked:bg-[url('././././assets/img/courses/checkbox.png')] bg-no-repeat bg-cover ">  </label>
                </div>

            </label>
        </div>
    );
};

export { Time }; 
import React from "react";

const Asatid = () => {

    return (
        <div>
            <input type="checkbox" id="asatid" name="asatid" className=" peer hidden" />

            <label className=" text-right text-lg h-[3rem] w-[15rem] block 
                leading-10  bg-[url(././././assets/img/courses/bottomm.webp)] bg-no-repeat  bg-[length:0.9rem_0.7rem] bg-[center_left_0.7rem] 
                peer-checked:bg-[url(././././assets/img/courses/top.webp)]" for="asatid">
                <span className="block mr-[1rem]"> اساتید </span>
            </label>

            <label for="asatid"  className=" h-[5rem] w-[15rem] hidden peer-checked:block">

<div>  

<div className=" text-right flex justify-end ">
                    <input type="checkbox" id="bahr" name="bahr" className="peer hidden" />
                    <label className="block mr-[0.5rem]" > بهر </label>
                    <label for="bahr"  v className="border border-solid border-[black] rounded-[0.2rem] h-[1rem] w-[1rem] mt-[0.4rem] mr-[1rem] block 
            peer-checked:bg-[url('././././assets/img/courses/checkbox.png')] bg-no-repeat bg-cover">  </label>
                </div>

                <div className=" text-right flex justify-end">
                    <input type="checkbox" id="asghari" name="asghari" className="peer hidden" />
                    <label className="block mr-[0.5rem] " > اصغری </label>
                    <label for="asghari" className="border border-solid border-[black] rounded-[0.2rem] h-[1rem] w-[1rem] mt-[0.4rem] mr-[1rem] block 
             peer-checked:bg-[url('././././assets/img/courses/checkbox.png')] bg-no-repeat bg-cover ">  </label>
                </div>
</div>


            </label>
        </div>
    );
};

export { Asatid }; 
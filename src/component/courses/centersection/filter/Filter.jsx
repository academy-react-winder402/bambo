import React from "react";


const Filter = () => {
    return (
        <ul className="border border-solid border-[#D1D1D1]  w-[22rem] mr-5">

            <li className=" border-b border-solid border-[#D1D1D1] flex justify-between">
                <input type="checkbox" id="prices" name="prices" className=" peer hidden" />

                <label for="prices" className=" h-[1rem] w-[1rem] mt-[1rem] ml-[0.7rem]  
                bg-[url(././././assets/img/courses/bottomm.webp)] bg-no-repeat bg-cover bg-center
                peer-checked:bg-[url(././././assets/img/courses/top.webp)]">  </label>

                <label className=" text-right text-lg h-[3rem] w-[4rem] block peer-checked:h-[7rem] 
             leading-10 mr-[1rem]  " for="prices"> قیمت </label>
            </li>

            <li className=" border-b border-solid border-[#D1D1D1] flex justify-between">
                <input type="checkbox" id="dastebandi" name="dastebandi" className=" peer hidden" />

                <label for="dastebandi" className=" h-[1rem] w-[1rem] mt-[1rem] ml-[0.7rem]  
                bg-[url(././././assets/img/courses/bottomm.webp)] bg-no-repeat bg-cover bg-center
                peer-checked:bg-[url(././././assets/img/courses/top.webp)]">  </label>

                <label className=" text-right text-lg h-[3rem] w-[10rem] block peer-checked:h-[7rem] 
             leading-10 mr-[1rem]  " for="dastebandi"> دسته بندی </label>
            </li>

            <li className=" border-b border-solid border-[#D1D1D1] flex justify-between">
                <input type="checkbox" id="asatid" name="asatid" className=" peer hidden" />

                <label for="asatid" className=" h-[1rem] w-[1rem] mt-[1rem] ml-[0.7rem]  
                bg-[url(././././assets/img/courses/bottomm.webp)] bg-no-repeat bg-cover bg-center
                peer-checked:bg-[url(././././assets/img/courses/top.webp)]">  </label>

                <label className=" text-right text-lg h-[3rem] w-[10rem] block peer-checked:h-[7rem] 
             leading-10 mr-[1rem]  " for="asatid"> اساتید </label>
            </li>

            <li className=" border-b border-solid border-[#D1D1D1] flex justify-between">
                <input type="checkbox" id="time" name="time" className=" peer hidden" />

                <label for="time" className=" h-[1rem] w-[1rem] mt-[1rem] ml-[0.7rem]  
                bg-[url(././././assets/img/courses/bottomm.webp)] bg-no-repeat bg-cover bg-center
                peer-checked:bg-[url(././././assets/img/courses/top.webp)]">  </label>

                <label className=" text-right text-lg h-[3rem] w-[10rem] block peer-checked:h-[7rem] 
             leading-10 mr-[1rem]  " for="time"> مدت زمان </label>
            </li>

            <ul className=" ">
                <li className=" h-[3rem] w-[7rem] flex justify-between float-end ">
                    <input id="all" type="checkbox" name="all" className=" peer hidden" />
                    <label for="all" className="block border border-solid border-[#D1D1D1] h-[1.3rem] w-[1.3rem] rounded-lg ml-[2rem] mt-[0.7rem] 
                    peer-checked:bg-[#004458]">  </label>
                    <label for="all" className="text-lg text-right block mr-4 mt-[0.3rem]"> همه </label>
                </li>

                <li  className=" h-[3rem] w-[12rem] flex justify-between float-end">
                    <input id="jadid" type="checkbox" name="jadid" className="peer hidden" />
                    <label for="jadid" className="block border border-solid border-[#D1D1D1] h-[1.5rem] w-[1.5rem] rounded-lg ml-[2.5rem] mt-[0.7rem] 
                    peer-checked:bg-[#004458]">  </label>
                    <label for="jadid" className="text-lg text-right block mr-4 mt-[0.3rem]"> جدید ترین ها </label>
                </li>
                
                <li  className=" h-[3rem] w-[12rem] flex justify-between float-end">
                    <input id="mahbob" type="checkbox" name="mahbob" className="peer hidden" />
                    <label for="mahbob" className="block border border-solid border-[#D1D1D1] h-[1.5rem] w-[1.5rem] rounded-lg ml-[1.5rem] mt-[0.7rem] 
                    peer-checked:bg-[#004458]">  </label>
                    <label for="mahbob" className="text-lg text-right block mr-4 mt-[0.3rem]"> محبوب ترین ها </label>
                </li>
                
                <li  className=" h-[3rem] w-[8rem] flex justify-between float-end">
                    <input id="free" type="checkbox" name="free" className="peer hidden" />
                    <label for="free" className="block border border-solid border-[#D1D1D1] h-[1.5rem] w-[1.5rem] rounded-lg ml-[2rem] mt-[0.7rem] 
                    peer-checked:bg-[#004458]">  </label>
                    <label for="free" className="text-lg text-right block mr-4 mt-[0.3rem]"> رایگان </label>
                </li>
            </ul>


        </ul>
    );
};

export { Filter };
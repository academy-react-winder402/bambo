import React from "react";


const Filter = () => {
    return (
        <ul className="border border-solid border-[#D1D1D1]  w-[15rem] mr-4">

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
                <li className=" border border-solid border-[#D1D1D1] h-[3rem] w-[5rem]  mt-[0.5rem] 
                mr-[0.5rem]  float-end hover:bg-[#004458] hover:cursor-pointer">
                    <input id="all" type="checkbox" name="all" className=" peer hidden" />
                    <label for="all" className=" text-lg ml-[1.5rem] block mr-4 mt-[0.3rem] rounded-lg hover:cursor-pointer"> همه </label>
                </li>

                <li className=" border border-solid border-[#D1D1D1] h-[3rem] w-[8rem]  mt-[0.5rem] 
                mr-[0.5rem]  float-end hover:bg-[#004458] hover:cursor-pointer">
                    <input id="all" type="checkbox" name="all" className=" peer hidden" />
                    <label for="all" className=" text-lg ml-[1rem] block mr-4 mt-[0.3rem] rounded-lg hover:cursor-pointer"> جدید ترین ها </label>
                </li>
                
                <li className=" border border-solid border-[#D1D1D1] h-[3rem] w-[9rem]  mt-[0.5rem] 
                mr-[0.5rem]  float-end hover:bg-[#004458] hover:cursor-pointer">
                    <input id="all" type="checkbox" name="all" className=" peer hidden" />
                    <label for="all" className=" text-lg ml-[1rem] block mr-2 mt-[0.3rem] rounded-lg hover:cursor-pointer"> محبوب ترین ها </label>
                </li>
                
                <li className=" border border-solid border-[#D1D1D1] h-[3rem] w-[4rem]  mt-[0.5rem] 
                mr-[0.5rem]  float-end hover:bg-[#004458] hover:cursor-pointer">
                    <input id="all" type="checkbox" name="all" className=" peer hidden" />
                    <label for="all" className=" text-lg ml-[0.5rem] block mr-4 mt-[0.3rem] rounded-lg hover:cursor-pointer"> رایگان </label>
                </li>
            </ul>


        </ul>
    );
};

export { Filter };
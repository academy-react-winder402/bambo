import React from "react";

const Name = () => {

    return (
        <div>
            <li className=" border border-solid border-[#004458] h-[3rem] w-[5rem]  mt-[0.5rem] 
                mr-[0.5rem]  float-end hover:bg-[#004458] hover:cursor-pointer hover:text-white">
                <input id="all" type="checkbox" name="all" className=" peer hidden" />
                <label for="all" className=" text-lg ml-[1.5rem] block mr-4 mt-[0.3rem] rounded-lg hover:cursor-pointer
                     hover:text-white"> همه </label>
            </li>

            <li className=" border border-solid border-[#004458] h-[3rem] w-[8rem]  mt-[0.5rem] 
                mr-[0.5rem]  float-end hover:bg-[#004458] hover:cursor-pointer hover:text-white">
                <input id="all" type="checkbox" name="all" className=" peer hidden" />
                <label for="all" className=" text-lg ml-[1rem] block mr-4 mt-[0.3rem] rounded-lg hover:cursor-pointer 
                    hover:text-white"> جدید ترین ها </label>
            </li>

            <li className=" border border-solid border-[#004458] h-[3rem] w-[9rem]  mt-[0.5rem] 
                mr-[0.5rem]  float-end hover:bg-[#004458] hover:cursor-pointer hover:text-white">
                <input id="all" type="checkbox" name="all" className=" peer hidden" />
                <label for="all" className=" text-lg ml-[1rem] block mr-2 mt-[0.3rem] rounded-lg hover:cursor-pointer
                     "> محبوب ترین ها </label>
            </li>

            <li className=" border border-solid border-[#004458] h-[3rem] w-[4rem]  mt-[0.5rem] 
                mr-[0.5rem]  float-end hover:bg-[#004458] hover:cursor-pointer hover:text-white">
                <input id="all" type="checkbox" name="all" className=" peer hidden" />
                <label for="all" className=" text-lg ml-[0.5rem] block mr-4 mt-[0.3rem] rounded-lg hover:cursor-pointer
                     "> رایگان </label>
            </li>
        </div>
    );
};

export { Name }; 
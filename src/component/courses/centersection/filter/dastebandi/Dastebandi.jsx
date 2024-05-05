import React from "react";

const Dastebandi = () => {

    return (
        <div>
            <input type="checkbox" id="dastebandi" name="dastebandi" className=" peer hidden" />

            <label className=" text-right text-lg h-[3rem] w-[15rem] block 
                leading-10  bg-[url(././././assets/img/courses/bottomm.webp)] bg-no-repeat  bg-[length:0.9rem_0.7rem] bg-[center_left_0.7rem] 
                peer-checked:bg-[url(././././assets/img/courses/top.webp)]" for="dastebandi">
                <span className="block mr-[1rem]"> دسته بندی </span>
            </label>

            <label for="dastebandi" className=" h-[5rem] w-[15rem] hidden peer-checked:block">

            </label>
        </div>
    );
};

export { Dastebandi }; 
import React from "react";

const Content = () => {
    return(
        <div className="h-[6rem] w-full flex justify-between">

        <div className="  h-[3rem] w-[10rem] flex gap-[0.5rem] mt-[2rem] ml-[4rem]">
            <div className=" h-[3rem] w-[3rem] bg-[url(./././assets/img/courses/listamodi.png)]
bg-no-repeat bg-cover hover:cursor-pointer" onClick={() => updatetab(2)}> </div>
            <div className=" h-[3rem] w-[3rem] bg-[url(./././assets/img/courses/listofoghi.png)] 
bg-no-repeat bg-cover hover:cursor-pointer" onClick={() => updatetab(1)}> </div>
        </div>
        <h1 className="text-4xl inline-block mr-[4.5rem] mt-[1.5rem]"> اخبار و مقالات </h1>

    </div>
    );
};

export {Content};
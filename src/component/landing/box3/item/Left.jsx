import React from "react";

const Left = () => {
    return (
        <div className="  h-[33rem] w-[35rem] mt-[7rem] ml-[15rem] ">
            <div className="border border-solid border-[#09B28B] h-[25rem] w-96 m-auto  relative">
                <div className=" h-[18rem] w-56 absolute top-[-1rem] left-[-7rem] bg-[#F7DF1E]">
                    <div className=" h-32 text-8xl text-center font-bold mt-12"> JS </div>
                    <div className=" h-14 text-xl text-center"> دوره جاوا اسکریپت </div>
                </div>

                <div className=" h-40 w-[16.5rem] absolute top-[2rem] left-[8.5rem] bg-[#6A1577]">
                    <div className=" h-16 text-6xl text-center font-bold mt-7 "> C# </div>
                    <div className=" h-10 text-xl text-center mt-1">  دوره سی شارپ  </div>
                </div>


                <div className=" h-[14rem] w-[12rem] absolute top-[18rem] left-[-5rem] bg-[#CAB2EF] 
             text-[#7C3D72] ">
                    <div className=" h-16 text-4xl text-center font-bold mt-12 "> Bootstrap </div>
                    <div className=" h-10 text-xl text-center mt-2 text-black">  دوره بوت استرپ </div>
                </div>
                <div className="h-[14rem] w-[14rem] absolute top-[14rem] left-[8.5rem] bg-[#FFC7F8] 
         text-[#ED1E24]">
                    <div className=" h-16 text-6xl text-center font-bold mt-10 "> Java </div>
                    <div className=" h-10 text-xl text-center mt-7 text-black">  دوره جاوا </div>
                </div>
            </div>
        </div>
    );
};

export { Left };
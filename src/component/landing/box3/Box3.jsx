import React from "react";


const Box3 = () => {
    return (
        <div className=" h-[45rem] flex">
            <div className="border border-solid border-[#D1D1D1] h-[30rem] w-[35rem] relative">
                <div className=" h-[5rem] w-[25rem] m-auto mt-[9rem] text-4xl text-right">
                    دوره های اموزشی
                </div>
                <div className="text-gray-500 h-[10rem] w-[25rem] text-xl  text-right m-auto ">
                    دسترسی با کیفیت ترین دوره های اموزشی انلاین با تدریس برترین اساتید ایران
                    در دسته بندی های گوناگونی همچون طراحی برنامه نویسی اقتصاد فلسفه فیزیک شیمی ریاضی
                </div>
                <div className="border border-solid border-[#D1D1D1] h-[5rem] w-[12rem] absolute top-[27.3rem]
                left-[10rem] bg-[#004458] text-white leading-[5rem] text-lg text-center">
                    مشاهده دوره ها
                </div>
            </div>
            <div className=" h-[45rem] w-[56rem]">
                <div className="border border-solid border-[#09B28B] h-[25rem] w-96 m-auto mt-32 relative">
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
        </div>
    );
};

export { Box3 };
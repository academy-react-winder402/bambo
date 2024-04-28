import React from "react";
import box6back from '../../../assets/img/landing/box6back.png'
const Box6 = () => {
    return(
        <div className=" h-[25rem] w-[70rem] m-auto flex">  
            <div className=" h-[25rem] w-[50rem] bg-[#088568]">  
                <div className=" h-20 w-52 mt-[2rem] text-white text-3xl text-center leading-[4rem]  ml-[20rem]"> پیشنهاد و انتقاد </div>
                <div className=" h-[15rem] w-[30rem] mt-[1rem] ml-[2.5rem] ">  
                    <input type="text" placeholder="ایمیل خود را وارد کنید" className="block h-[3rem] ml-[8rem]
                     w-[22rem] bg-[#00775B] text-right placeholder:text-[#0CDBAB] outline-none pr-4 text-white
                      focus:border-b-2 border-solid border-[#0CDBAB] "/>
                    <input type="text" placeholder="متن خود را وارد کنید" className="block mt-[2.5rem] h-[3rem] w-[22rem] bg-[#00775B] ml-[8rem]
                     text-right placeholder:text-[#0CDBAB]
                     outline-none pr-4 text-white focus:border-b-2 border-solid border-[#0CDBAB]"/>

                     <button className="mt-[3rem] h-12 w-24 bg-[#004458] text-center text-2xl ml-[8rem] text-white">  ارسال </button>
                </div>
            </div>
            <div className="h-[25rem] w-{20rem}"> 
                <img src={box6back} className="h-[25rem] w-{20rem}"/> 
            </div>  
            
        </div>
    );
};

export {Box6};
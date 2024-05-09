import React from "react";
import box6back from '../../../assets/img/landing/box6back.png'
const Box6 = () => {
    return(
        <div className=" h-[30rem] w-[96rem] m-auto flex">  
            <div className=" h-[30rem] w-[66rem] bg-[#088568]">  
                <div className=" h-20 w-[15rem] mt-[4rem] text-white text-4xl text-center leading-[4rem]  ml-[25rem]"> پیشنهاد و انتقاد </div>
                <div className=" h-[15rem] w-[34rem] mt-[1.5rem] ml-[10rem] ">  
                    <input type="text" placeholder="ایمیل خود را وارد کنید" className="block h-[3rem] ml-[8rem]
                     w-[22rem] bg-[#00775B] text-right placeholder:text-[#0CDBAB] outline-none pr-4 text-white
                      focus:border-b-2 border-solid border-[#0CDBAB] "/>
                    <input type="text" placeholder="متن خود را وارد کنید" className="block mt-[2.5rem] h-[3rem] w-[22rem] bg-[#00775B] ml-[8rem]
                     text-right placeholder:text-[#0CDBAB]
                     outline-none pr-4 text-white focus:border-b-2 border-solid border-[#0CDBAB]"/>

                     <button className="mt-[3rem] h-12 w-24 bg-[#004458] text-center text-2xl ml-[8rem] text-white">  ارسال </button>
                </div>
            </div>
            <div className="h-[30rem] w-{20rem}"> 
                <img src={box6back} className="h-[30rem] w-{30rem}"/> 
            </div>  
            
        </div>
    );
};

export {Box6};
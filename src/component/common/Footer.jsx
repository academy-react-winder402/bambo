import React from "react";

import insta from '../../assets/img/landing/insta.png';
import telegram from '../../assets/img/landing/telegram.png';
import yotob from '../../assets/img/landing/yotob.png';
import whatsapp from '../../assets/img/landing/whatsapp.png';
import footer1 from '../../assets/img/landing/footer1.png';
import footer2 from '../../assets/img/landing/footer2.png';
import footer3 from '../../assets/img/landing/footer3.png';

const Footer = () => {
    return (
        <div className=" h-[25rem] w-[70rem] m-auto bg-[#004458] ">
            <div className=" border-b border-solid border-[#D1D1D1]  h-[10rem] w-[64rem] m-auto flex gap-[4rem]">
                <div className=" h-[10rem] w-[30rem]">
                    <h1 className="text-white text-2xl text-right mt-[1rem]"> خبرنامه </h1>
                    <div className=" h-[3.5rem]  mt-[1.5rem] flex">
                        <button className="h-[3.5rem] w-[6rem] bg-[#002B37] text-[#09B28B]" > عضویت </button>
                        <input type="text" placeholder=" ... ایمیل خود را وارد کنید " className="bg-[#003544] h-[3.5rem] w-[24rem]
                    text-right " />

                    </div>

                </div>
                <div className=" h-[10rem] w-[30rem]">
                    <h1 className="text-white text-2xl text-right mt-[1rem]"> درباره بامبو </h1>
                    <span className="text-white text-sm text-right block mt-[1rem]"> بامبو یکی از پرتلاش‌ترین و بروزترین وبسایت های آموزشی در سطح ایران
                        است که همیشه تلاش کرده تا بتواند جدیدترین و بروزترین مقالات و
                        دوره‌های آموزشی را در اختیار علاقه‌مندان ایرانی قرار دهد </span>
                </div>
            </div>
            <div className=" h-[10rem] w-[64rem] m-auto flex justify-between">
                <div className=" h-[10rem] w-[20rem] flex justify-end gap-[1.8rem]">
                    <img src={footer1} className="h-[6.5rem] w-[5.5rem] bg-white p-4 mt-[1.5rem]" />
                    <img src={footer2} className="h-[6.5rem] w-[5.5rem] bg-white p-3 mt-[1.5rem]" />
                    <img src={footer3} className="h-[6.5rem] w-[5.5rem] bg-white p-3 mt-[1.5rem]" />
                </div>
                <div className=" h-[10rem] w-[10rem]">
                    <h1 className="text-white text-xl text-right mt-[1rem]"> همراه باشید </h1>
                    <span className="text-white text-xs text-right block mt-[0.5rem]"> سوالات رایج </span>
                    <span className="text-white text-xs text-right block mt-[0.5rem]"> قوانین </span>
                    <span className="text-white text-xs text-right block mt-[0.5rem]"> خدمات </span>
                </div>
                <div className=" h-[10rem] w-[20rem]">
                    <h1 className="text-white text-xl text-right mt-[1rem]"> ارتباط با ما </h1>
                    <span className="text-white text-xs text-right block mt-[0.5rem]"> iwillbemyvision@gmail.com </span>
                    <span className="text-white text-xs text-right block mt-[0.5rem]"> amir.azhkan@yahoo.com </span>
                    <div className=" h-[1.5rem] mt-[1rem] flex justify-end gap-2 ">
                        <img src={insta} className="h-[1.5rem] w-[1.5rem]" />
                        <img src={telegram} className="h-[1.5rem] w-[1.5rem]" />
                        <img src={whatsapp} className="h-[1.5rem] w-[1.5rem]" />
                        <img src={yotob} className="h-[1.5rem] w-[1.5rem]" />
                    </div>
                </div>
            </div>
            <div className=" h-[5rem] bg-[#003544] text-white text-center leading-[5rem] text-sm">
                کليه حقوق محصولات و محتوای اين سایت متعلق به بامبو می باشد و هر گونه کپی برداری از محتوا و محصولات سایت غیر مجاز و بدون رضایت ماست
            </div>
        </div>
    );
};

export { Footer };
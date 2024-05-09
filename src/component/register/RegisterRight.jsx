import React from "react";
import Logoregister from "./../../assets/img/register/logoregister.jpg"
import insta from "./../../assets/img/register/img.icons8.png"
import tele from "./../../assets/img/register/tele.jpg"
import whats from "./../../assets/img/register/whats.png"
import yout from "./../../assets/img/register/yout.jpg"
import home from "./../../assets/img/register/home1.png"

const RegisterRight= () => {
    return(
        <div className=" w-[45%] h-[100%] relative " >
  <img src={Logoregister} className="w-[100%]  h-[100%] "></img>
  <div className=" w-[100%] h-[100%]  bg-[#004458] absolute bottom-0 left-0 opacity-90 "></div>
  <div className=" w-[250px] h-[100px]  absolute  bottom-[350px] left-[220px]" >
    <div className="h-[50px] border-b-2 border-[#ccc] text-[20px] text-[#ffff] text-center leading-[45px]"> آکادمی آموزشی بامبو</div>
    <div className="h-[50px] flex justify-between my-[5px]">
        <img src={insta} className="w-[40px] h-[40px]"></img>
        <img src={tele} className="w-[40px] h-[40px]"></img>
        <img src={whats} className="w-[35px] h-[35px]"></img>
        <img src={yout} className="w-[40px] h-[40px]"></img>
        <img src={home} className="w-[33px] h-[33px]"></img>
    </div>
  </div>
        </div>
      
    );
};

export { RegisterRight};
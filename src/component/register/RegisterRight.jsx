import React from "react";
import Logoregister from "./../../assets/img/logoregister.jpg"
import insta from "./../../assets/img/img.icons8.png"
import tele from "./../../assets/img/tele.jpg"
import whats from "./../../assets/img/whats.png"
import yout from "./../../assets/img/yout.jpg"

const RegisterRight= () => {
    return(
        <div className=" w-[550px] h-[650px] relative rounded-r-xl" >
  <img src={Logoregister} className="w-[550px]  h-[650px] rounded-r-xl"></img>
  <div className=" w-[550px] h-[650px]  bg-[#004458] absolute bottom-0 left-0 opacity-90 rounded-r-xl"></div>
  <div className=" w-[250px] h-[100px]  absolute  bottom-[300px] left-[150px]" >
    <div className="h-[50px] border-b-2 border-[#ccc] fontsize-[57px] text-[#ffff] text-center leading-[45px]"> آکادمی آموزشی بامبو</div>
    <div className="h-[50px] flex justify-between my-[5px]">
        <img src={insta} className="w-[40px] h-[40px]"></img>
        <img src={tele} className="w-[40px] h-[40px]"></img>
        <img src={whats} className="w-[35px] h-[35px]"></img>
        <img src={yout} className="w-[40px] h-[40px]"></img>
    </div>
  </div>
        </div>
      
    );
};

export { RegisterRight};
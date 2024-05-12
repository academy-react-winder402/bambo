import React from "react";
import logodetail from "../../../assets/img/coursedetail/logodetail.jpg"
import zarfiat from "../../../assets/img/coursedetail/zarfiat.png"
import daneshjo from "../../../assets/img/coursedetail/daneshjo.png"
const DetailHeaderContant = () => {

   return (
      <div className="lg:w-[700px] lg:h-[400px] lg:m-auto lg:flex lg:flex-col lg:mb-[2rem] lg:font-sans
 md:w-[400px] md:h-[200px] md:m-auto md:flex md:flex-col   
 xs:w-[200px] xs:h-[200px] xs:m-auto xs:flex xs:flex-col
 ">
         <div className="lg:w-[220px] lg:h-[180px] lg:ml-[250px] 

md:w-[100px] md:h-[120px] md:m-auto
xs:w-[80px] xs:h-[70px] xs:m-auto
"><img className="lg:w-[100%] lg:h-[100%]
md:w-[100%] md:h-[100%] xs:w-[100%] xs:h-[100%]
" src={logodetail}></img></div>

         <div className="lg:h-[80px] lg:w-[480px] lg:text-[50px] lg:ml-[100px] lg:text-center lg:border-b-solid lg:border-b-[1px] lg:border-b-[black]
md:h-[70px] md:w-[300px] md:text-[30px] md:ml-[50px] md:text-center md:border-b-solid md:border-b-[1px] md:border-b-[black]
xs:h-[70px] xs:w-[200px] xs:text-[20px] xs:ml-[5px] xs:text-center xs:border-b-solid xs:border-b-[1px] xs:border-b-[black]
">دوره جاوا اسکریپت</div>
         <div className="lg:h-[50px] lg:w-[480px] lg:ml-[130px]  lg:flex lg:flex-row-reverse lg:gap-[30px]
md:h-[50px] md:w-[300px] md:ml-[30px]  md:flex md:flex-row-reverse md:gap-[30px]
xs:h-[50px] xs:w-[200px] xs:ml-[5px]  xs:flex xs:flex-row-reverse xs:gap-[30px]
">
            <div className="lg:h-[50px] lg:w-[270px] lg:text-right lg:text-[20px] lg:flex lg:flex-row lg:gap-[5px]
   md:h-[40px] md:w-[170px] md:text-right md:text-[16px] md:flex md:flex-row md:gap-[5px]
   xs:h-[40px] xs:w-[100px] xs:text-right xs:text-[14px] xs:flex xs:flex-row xs:gap-[5px]
    ">
               ظرفیت 50 نفر
               <img className="lg:w-[30px] lg:h-[30px] md:w-[20px] md:h-[20px] xs:w-[15px] xs:h-[15px] md:mt-[3px] xs:mt-[3px]" src={zarfiat}></img>
            </div>
            <div className="lg:h-[50px] lg:w-[270px] lg:text-right lg:text-[20px] lg:flex lg:flex-row lg:gap-[5px]
   md:h-[40px] md:w-[170px] md:text-right md:text-[16px] md:flex md:flex-row md:gap-[5px]
   xs:h-[40px] xs:w-[100px] xs:text-right xs:text-[14px] xs:flex xs:flex-row xs:gap-[5px] ">
               دانشجو 50 نفر
               <img className="lg:w-[30px] lg:h-[30px] md:w-[20px] md:h-[20px] xs:w-[15px] xs:h-[15px] md:mt-[3px] xs:mt-[3px]" src={daneshjo}></img>
            </div>
         </div>
         <div className="lg:h-[40px] lg:w-[480px] lg:bg-[#ccc]  lg:ml-[100px] md:hidden xs:hidden"></div>
      </div>
   );

};

export { DetailHeaderContant };
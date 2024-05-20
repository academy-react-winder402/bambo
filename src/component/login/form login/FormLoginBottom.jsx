import React from "react";

const FormLoginBottom =({gotoregister}) =>{
    return(
        <div className="lg:h-[120px] lg:w-[100%] lg:flex lg:mt-[40px] lg:flex-col-reverse  lg:gap-[5px] 
        sm:h-[130px] sm:w-[70%] sm:m-auto sm:flex sm:flex-col-reverse  sm:gap-[5px] sm:mt-[10px]
      xs:h-[130px] xs:w-[70%] xs:m-auto  xs:flex xs:flex-col-reverse  xs:gap-[5px] xs:mt-[10px]
      md:h-[130px] md:w-[100%] md:m-auto md:flex md:flex-col-reverse  md:gap-[5px]
       ">
         <button className="lg:h-[40px] lg:w-[80%] lg:m-auto lg:hover:bg-gradient-to-b lg:from-[#004458] lg:to-[#1194bc]  lg:rounded-xl lg:bg-[#004458] lg:text-[#ffff] 
                sm:h-[40px] sm:w-[100%] sm:m-auto sm:hover:bg-gradient-to-b sm:from-[#004458] sm:to-[#1194bc]  sm:rounded-xl sm:bg-[#004458] sm:text-[#ffff]
                md:h-[40px] md:w-[80%] md:m-auto md:hover:bg-gradient-to-b md:from-[#004458] md:to-[#1194bc]  md:rounded-xl md:bg-[#004458] md:text-[#ffff]
                xs:h-[40px] xs:w-[100%] xs:m-auto xs:hover:bg-gradient-to-b xs:from-[#004458] xs:to-[#1194bc]  xs:rounded-xl xs:bg-[#004458] xs:text-[#ffff]
    "
        >ورود</button>
      <button className="lg:h-[40px] lg:w-[80%]  lg:m-auto lg:hover:bg-gradient-to-b lg:from-[#004458] lg:to-[#1194bc]  lg:rounded-xl lg:bg-[#004458] lg:text-[#ffff]
                sm:h-[40px] sm:w-[100%] sm:m-auto sm:hover:bg-gradient-to-b sm:from-[#004458] sm:to-[#1194bc]  sm:rounded-xl sm:bg-[#004458] sm:text-[#ffff]
                md:h-[40px] md:w-[80%] md:block md:m-auto md:hover:bg-gradient-to-b md:from-[#004458] md:to-[#1194bc]  md:rounded-xl md:bg-[#004458] md:text-[#ffff]
                xs:h-[40px] xs:w-[100%] xs:mx-auto xs:hover:bg-gradient-to-b xs:from-[#004458] xs:to-[#1194bc]  xs:rounded-xl xs:bg-[#004458] xs:text-[#ffff]
                "
                onClick={gotoregister}
                >ثبت نام</button>
       </div>
    
    );
};
export {FormLoginBottom};
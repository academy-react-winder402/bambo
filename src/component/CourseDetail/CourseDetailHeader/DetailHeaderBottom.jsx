import React from "react";
import teacher from "../../../assets/img/coursedetail/teacher.png"
import like from "../../../assets/img/coursedetail/like.png";
import dislike from "../../../assets/img/courses/dislike.png";
import like2 from "../../../assets/img/courses/likee.png";
import danesh from "../../../assets/img/coursedetail/danesh.png"

const DetailHeaderBottom = () => {
    return (
        <div className="lg:w-[100%] lg:h-[250px] lg:border-solid lg:border-[#DBDBDB] lg:border-[1px] lg:flex lg:flex-row-reverse lg:text-center lg:text-[25px] lg:leading-[30px] lg:font-sans
 md:w-[100%] md:h-[200px] md:border-solid md:border-[#DBDBDB] md:border-[1px] md:flex md:flex-row-reverse md:text-center md:text-[20px] md:leading-[30px]
 xs:w-[100%] xs:h-[200px] xs:border-solid xs:border-[#DBDBDB] xs:border-[1px] xs:flex xs:flex-row-reverse xs:text-center xs:text-[15px] xs:leading-[30px]
 ">
            <div className="
lg:w-[33.5%] lg:h-[250px] lg:border-solid lg:border-[#DBDBDB] lg:border-[1px] lg:flex lg:flex-col lg:justify-center lg:gap-[10px]
md:w-[33.5%] md:h-[200px] md:border-solid md:border-[#DBDBDB] md:border-[1px] md:flex md:flex-col md:justify-center md:gap-[10px]
xs:w-[33.5%] xs:h-[200px] xs:border-solid xs:border-[#DBDBDB] xs:border-[1px] xs:flex xs:flex-col xs:justify-center xs:gap-[10px]
">
                <img src={teacher} className="lg:w-[30px] lg:h-[30px] lg:ml-[250px] md:w-[20px] md:h-[20px] xs:w-[30px] xs:h-[30px] md:m-auto  xs:m-auto
    "></img>
                <div className="lg:w-[140px] lg:h-[130px]  lg:ml-[190px]
    md:w-[140px] md:h-[100px]  md:ml-[190px]
    xs:w-[140px] xs:h-[80px]  xs:ml-[190px]
     ">مدرس : دکتر بحرالعلومی</div>
            </div>
            <div className="lg:w-[33.5%] lg:h-[250px] lg:border-solid lg:border-[#DBDBDB] lg:border-[1px]
md:w-[33.5%] md:h-[200px] md:border-solid md:border-[#DBDBDB] md:border-[1px] 
xs:w-[33.5%] xs:h-[200px] xs:border-solid xs:border-[#DBDBDB] xs:border-[1px] ">
                <div className="lg:w-[30px] lg:h-[40px] lg:ml-[250px] lg:mt-[35px]
md:w-[20px] md:h-[20px] md:m-auto 
xs:w-[15px] xs:h-[15px] xs:m-auto 
" ><img src={danesh}></img></div>
                <div className=" mt-[3rem]"> تاریخ شروع : 1400/1/1</div>
                <div className=" mt-[1rem]"> تاریخ پایان : 1401/1/1</div>
            </div>
            <div className="wlg:w-[33.5%] lg:h-[250px] lg:border-solid lg:border-[#DBDBDB] lg:border-[1px] lg:flex lg:flex-col lg:justify-center lg:gap-[10px]
md:w-[33.5%] md:h-[220px] md:border-solid md:border-[#DBDBDB] md:border-[1px] md:flex md:flex-col md:justify-center md:gap-[10px]
xs:w-[33.5%] xs:h-[200px] xs:border-solid xs:border-[#DBDBDB] xs:border-[1px] xs:flex xs:flex-col xs:justify-center xs:gap-[10px] ">
                <div className="lg:w-[30px] lg:h-[30px] lg:m-auto lg:mt-[3rem]  
       md:w-[20px] md:h-[20px] md:m-auto md:mt-[3rem] 
        xs:w-[15px] xs-[15px] xs:m-auto xs:mt-[3rem] 
    "><img src={like}></img></div>
                <div >:رتبه</div>
                <div className="lg:w-[120px] lg:h-[30px] lg:flex lg:flex-row lg:m-auto lg:mt-[1rem] 
    md:w-[120px] md:h-[30px] md:flex md:flex-row md:m-auto md:mt-[1rem]
    xs:w-[120px] xs:h-[30px] xs:flex xs:flex-row xs:m-auto xs:mt-[1rem]
    ">

                    <div className=" h-[1.5rem]  mt-[0.5rem] flex justify-end ">
                        <div className=" h-[1.5rem] w-[4rem] mt-[0.3rem] flex justify-between">
                            <span className=" h-[1.5rem] w-[2.3rem] block text-right leading-4 text-sm" >  </span>
                            <div className=" h-[1.4rem] w-[1.4rem] hover:cursor-pointer">

                                <img src={dislike} />

                            </div>

                        </div>
                        <div className="   h-[1.5rem] w-[3.5rem] flex justify-between mr-[0.5rem]">
                            <span className=" h-[1.5rem] w-[1.5rem] block text-right leading-6 text-sm " > </span>
                            <div className="h-[1.5rem] w-[1.5rem] hover:cursor-pointer">
                                <img src={like2} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export { DetailHeaderBottom };
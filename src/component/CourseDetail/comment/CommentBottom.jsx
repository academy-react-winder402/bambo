import React from "react";
const CommentBottom = () => {
    return (
        
            <div className="w-[1100px] h-[520px] bg-[#fff] m-auto mt-[50px]  border-[transparent] border-[1px] border-solid">
                <div className="h-[100px] mt-[30px]  flex flex-row-reverse gap-[30px]">
                    <img className=" rounded-[100%] h-[50px] w-[50px] mr-[20px]"></img>
                    <div className="w-[400px] h-[80px] text-[20px] text-right " >leila karimi</div>
                </div>
                <div className="w-[900px] h-[400px] m-auto">
              <textarea className="bg-[#F9F9F9] w-[900px] h-[300px] p-[20px] text-[20px]"></textarea>
<button className="w-[160px] h-[50px] text-[20px] text-center text-[#fff] leading-[25px] rounded-[1em] bg-[#004458] mt-[10px] ">ثبت نظرات</button>
                </div>

            </div>
      
    )
}
export { CommentBottom }
import React,{useState} from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { RegisterLeftFirst } from "./RegisterLeftFirst";
import { RegisterLeftSecend } from "./RegisterLeftSecend";
import { RegisterLeftThird } from "./RegisterLeftThird";
const FormRegister =() =>{

    const [page,setPage]=useState(0);
    const PageDisplay =()=>{
        if (page == 0){
return <RegisterLeftFirst/>;
        }
else if(page !== 0){
return <RegisterLeftSecend/>;
}
else {
    return <RegisterLeftThird/>;
}
       
    };
    return(
         <div className="bg-[#f5f2f2] w-[600px] h-[650px] rounded-l-xl">
<div className="h-[50px] text-[30px] text-black leading-[45px] py-[10px] text-right px-[30px]">ثبت نام</div>
<div className="h-[450px] border-solid border-[transparent] border-[1px] ">{PageDisplay ()}</div>
<div className="h-[100px]">
    <button className="h-[60px] w-[90px] bg-[#edeaea]  my-[5px] ml-[60px]  rounded-xl hover:bg-[#004458] hover:text-[#ffff]"
    // disabled={page == 0}
    onClick={() => {
        setPage((currPage) => {currPage - 1});
    }}
    >Prev</button>
    <button  className="h-[60px] w-[90px] bg-[#edeaea] my-[5px] ml-[5px] rounded-xl hover:bg-[#004458] hover:text-[#ffff]" 
    //   disabled={page == 2}
    onClick={() => {
        setPage((currPage) => {currPage + 1});
    }}>Next</button>
</div>

         </div>
);
   
};
export {FormRegister}
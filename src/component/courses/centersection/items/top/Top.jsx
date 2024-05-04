import React from "react";


const Top = ({img}) => {
    console.log({img});
    return (
        <div className="  h-[13rem]  ">  
        
            <img src={img} className="h-[15rem] w-[17rem] rounded-t-lg "/>
        </div>
    );
};

export { Top };
import React from "react";


const Top = ({img,bg}) => {
    console.log({img});
    return (
        <div className={`h-[15rem] rounded-t-lg bg-[${bg}]`} >  
        
            <img src={img} className="h-[15rem] w-[17rem] rounded-t-lg "/>
        </div>
    );
};

export { Top };
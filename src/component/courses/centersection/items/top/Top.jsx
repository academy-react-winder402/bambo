import React from "react";


const Top = ({img}) => {
    return (
        <div className="h-[15rem] rounded-t-lg" >  
        
            <img src={img} className="h-[15rem] w-[17rem] rounded-t-lg "/>
        </div>
    );
};

export { Top };
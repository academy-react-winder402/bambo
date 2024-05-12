import React from "react";


const Grid2top = ({img}) => {
    return (
        <div className="h-[15rem] rounded-t-lg font-sans" >  
        
            <img src={img} className="h-[15rem] w-[17rem] rounded-t-lg "/>
        </div>
    );
};

export { Grid2top };
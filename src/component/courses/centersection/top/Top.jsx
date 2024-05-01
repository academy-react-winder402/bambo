import React from "react";
import js from '../../../../assets/img/courses/js.png';

const Top = ({img}) => {
    console.log({img});
    return (
        <div className="  h-[13rem]">  
        
            <img src={img} className="h-[15rem] w-[17rem]"/>
        </div>
    );
};

export { Top };
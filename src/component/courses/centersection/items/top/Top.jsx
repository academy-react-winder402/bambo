import React from "react";
import js from '../../../../../assets/img/courses/js.png';

const Top = ({img}) => {
    return (
        <div className="h-[15rem] rounded-t-lg" >  
        
            <img src={img} className="h-[15rem] w-[20rem] rounded-t-lg "/>
        </div>
    );
};

export { Top };
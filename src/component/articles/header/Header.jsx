import React from "react";
import {Header} from '../../common/Header';
import {Boxsearch} from '../../common/boxsearch/Boxsearch';

const Headerarticle = () => {
    return(
        <div className=" h-[7rem] bg-[url('./././assets/img/courses/headerback.png')] bg-no-repeat bg-cover bg-center ">

        <div className="bg-[#00435889] h-[7rem] w-full">
            <Header />
            <Boxsearch style={"bg-[red]"}/>
        </div>
    </div>
    );
};

export {Headerarticle};
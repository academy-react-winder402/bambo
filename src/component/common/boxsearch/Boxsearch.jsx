import React from "react";
import search from '../../../assets/img/landing/search.png'

const Boxsearch = ({ styl}) => {
    return (
        <div className={`h-14  flex justify-end ${styl}`}>
            <input type="text" placeholder="جستجو" className="h-8 mt-2 outline-none text-right bg-[#00435804] text-lg
             text-white placeholder:text-white" />
            <img src={search} className="h-7 w-7 ml-5 mt-3 mr-[4.5rem]" />

        </div>
    );
};

export { Boxsearch };
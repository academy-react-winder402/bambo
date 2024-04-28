import React from "react";
import search from '../../../assets/img/landing/search.png'

const Boxsearch = () => {
    return (
        <div className="h-14 bg-[#004358af] flex flex-row-reverse">
            <img src={search} className="h-7 w-7 ml-4 mt-3 mr-[10.5rem]" />
            <input type="text" placeholder="جستجو" className="h-8 mt-2 outline-none text-right bg-[#00435804] text-lg
             text-white placeholder:text-white" />

        </div>
    );
};

export { Boxsearch };
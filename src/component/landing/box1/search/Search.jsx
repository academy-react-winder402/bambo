import React from "react";
import search from '../../../../assets/img/landing/search.png';

const Search = ({set}) => {
    return (
        <button className=" h-14 w-full mt-[39rem] flex justify-end bg-[#004358d0] dark:bg-[#14151895]" onClick={() => {set(true)}}>
            <span className="block leading-[3rem] text-white text-lg dark:text-[#969faf]"> جستجو </span>
            <img src={search} className="  h-7 w-7 ml-5 mt-3 mr-[5rem] block" />

        </button>
    );
};

export { Search };
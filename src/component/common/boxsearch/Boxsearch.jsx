import React,{useState,useEffect} from "react";
import search from '../../../assets/img/landing/search.png';
import { useDispatch } from "react-redux";
import { setSearch } from "../../../redux/course";


const Boxsearch = () => {

    const dispatch = useDispatch();

    return (
        <div className="h-14  flex justify-end">
            <input type="text" placeholder="جستجو" className="h-8 mt-2 outline-none text-right bg-[#00435804] text-lg
             text-white placeholder:text-white" onChange={(e) => {
                dispatch(
                    setSearch(e.target.value),
                )
             }}/>
            <img src={search} className="h-7 w-7 ml-5 mt-3 mr-[4.5rem]" />

        </div>
    );
};

export { Boxsearch };
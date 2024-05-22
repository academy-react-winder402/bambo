import React,{useState,useEffect} from "react";
import search from '../../../assets/img/landing/search.png';
import { getcourse } from "../../../core/services/api/landing/Course";

const Boxsearch = ({typename}) => {


    const [coursefilter, setcoursefilter] = useState([]);

    const getCoursefilter = async () => {
        const courses = await getcourse();
        setcoursefilter(courses);
    };

    useEffect(() => {
        getCoursefilter();

    }, []);

    const handlechange = (value) => {
        
        const res = coursefilter.filter(f => f.title.toLowerCase().includs(value));
        typename(res);
    };


    return (
        <div className="h-14  flex justify-end">
            <input type="text" placeholder="جستجو" className="h-8 mt-2 outline-none text-right bg-[#00435804] text-lg
             text-white placeholder:text-white" onChange={(e) => { handlechange(e.target.value)}}/>
            <img src={search} className="h-7 w-7 ml-5 mt-3 mr-[4.5rem]" />

        </div>
    );
};

export { Boxsearch };
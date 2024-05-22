import React, { useEffect, useState } from "react";
import { getcourse } from "../../../../../core/services/api/landing/Course";
import { getFiltercourse } from "../../../../../core/services/api/landing/Filtercourse";

const Dastebandi = ({ typename, course }) => {


    const [coursefilter, setcoursefilter] = useState([]);

    const getCoursefilter = async () => {
        const courses = await getcourse();
        setcoursefilter(courses);
    };

    useEffect(() => {
        getCoursefilter();

    }, []);


const [coursetypename,setcoursetypename] = useState([]);

    const getCoursefiltertype = async () => {
        const courses = await getFiltercourse();
        setcoursetypename(courses);
    };

    useEffect(() => {
        getCoursefiltertype();

    }, []);


    

    const filterResult = (catItem) => {

        const result = coursefilter.filter((curData) => {
            return curData.typeName === catItem;
        });

        typename(result);
    };


    const handlechange = (e, index) => {
        console.log(e.target.value);
        const activedata = document.getElementById(index).checked
        
        if(activedata == true){
            filterResult(e.target.value);
        }
        else{
            typename(coursefilter);
        }
    };

    return (
        <div>
            <div className=" h-[3rem] w-[16rem] m-auto mt-[1rem] rounded-md bg-[#004458]">
                <span className="block mr-[1.5rem] text-white text-right leading-10 text-xl"> دسته بندی </span>
            </div>

            <div className="mt-[1rem]">

                {
                    coursetypename.map((item, index) => {
                        return (
                            <div className=" text-right flex justify-end " key={index}>
                                <input type="checkbox" id={index}  value={item.typeName}  onChange={(e) => handlechange(e, index)} /> <span> {item.typeName} </span>
                            </div>)
                    })

                }

            </div>
        </div>
    );
};

export { Dastebandi }; 
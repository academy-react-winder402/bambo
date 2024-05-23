import React, { useState,useEffect } from "react";
import { getcourse } from "../../../../../core/services/api/landing/Course";

const Range = ({typename}) => {

    const [maxdata, setmaxdata] = useState(10000000);

    const [mindata, setmindata] = useState(0);


    const [coursefilter, setcoursefilter] = useState([]);

    const getCoursefilter = async () => {
        const courses = await getcourse();
        setcoursefilter(courses);
    };

    useEffect(() => {
        getCoursefilter();

    }, []);

    


    const filterResult = () => {

        const result = coursefilter.filter((curData) => {
            return curData.cost <= maxdata && curData.cost >= mindata;
        });

        typename(result);
    };

    useEffect(() => {
        filterResult();

    }, []);


    return (
        <div>

            <div className=" h-[3rem] w-[16rem] m-auto rounded-md bg-[#004458]">
                <span className="block mr-[1.5rem] text-white text-right leading-10 text-xl"> قیمت </span>
            </div>

            <div className=" h-[5rem] mt-[1rem]">
                <h1 className="text-center "> {maxdata}</h1>
                <div className="flex ml-[2rem]">
                    <span className="inline-block ml-[0.3rem] mt-[0.3rem]"> 0 </span>
                    <input type="range" min="0" max="10000000" step="10" value={maxdata} onChange={e => setmaxdata(e.target.value)} 
                        className="w-[10rem] ml-[0.5rem] mr-[0.5rem] block appearance-none h-[0.2rem] rounded-md mt-[1rem] bg-[#004458]" />
                    <span className="mt-[0.1rem]"> 10000 </span>
                </div>
            </div>

            <div className=" h-[5rem] mt-[1rem]">
                <h1 className="text-center "> {mindata}</h1>
                <div className="flex ml-[2rem]">
                    <span className="inline-block ml-[0.3rem] mt-[0.3rem]"> 0 </span>
                    <input type="range" min="0" max="10000000" step="10" value={mindata} onChange={e => setmindata(e.target.value)} 
                        className="w-[10rem] ml-[0.5rem] mr-[0.5rem] block appearance-none h-[0.2rem] rounded-md mt-[1rem] bg-[#004458]" />
                    <span className="mt-[0.1rem]"> 10000 </span>
                </div>
            </div>



        </div>
    );
};

export { Range }; 
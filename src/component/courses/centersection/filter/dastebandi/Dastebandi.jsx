import React, { useEffect, useState } from "react";
import { getFiltercourse } from "../../../../../core/services/api/landing/Filtercourse";
import { useDispatch } from "react-redux";
import {settypeid} from '../../../../../redux/course';


const Dastebandi = () => {


    const [coursetypename, setcoursetypename] = useState([]);

    const getCoursefiltertype = async () => {
        const courses = await getFiltercourse();
        setcoursetypename(courses);
    };

    useEffect(() => {
        getCoursefiltertype();

    }, []);

    const dispatch = useDispatch();




    return (
        <div>

            <div className="relative w-[19rem] bg-[#fff] shadow-[6px,6px,10px,-1px,rgba(0,0,0.15),-6px,-6px,-10px,-1px,rgba(255,255,255,0.8)]
             rounded-xl mb-[1rem]">

                <input type="checkbox" id="inputdaste" className="absolute peer opacity-0" />

                <label for="inputdaste" className=" w-[6rem] font-bold tracking-[1px] mx-[200px] h-[50px] flex items-center"> دسته بندی </label>
                <label for="inputdaste" className="h-[1rem] w-[1rem] bg-[url('./././././assets/img/courses/plus.png')] bg-no-repeat bg-cover absolute top-[17px] left-[20px]
                 peer-checked:bg-[url('./././././assets/img/courses/negativ.png')] duration-300">  </label>

                <div className="max-h-0 overflow-hidden peer-checked:max-h-full" >
                    <div className="mt-[1rem] mb-[1rem]">

                        {
                            coursetypename.map((item, index) => {
                                return (
                                    <div className=" text-right flex justify-end " key={index}>
                                        <input type="checkbox" id={item.id} value={item.typeName} /> <span> {item.typeName} </span>
                                    </div>)
                            })

                        }

                    </div>
                </div>
            </div>



        </div>
    );
};

export { Dastebandi }; 
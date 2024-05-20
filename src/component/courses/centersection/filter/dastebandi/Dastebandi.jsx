import React,{useState,useEffect} from "react";
import { getFiltercourse } from "../../../../../core/services/api/landing/Filtercourse";

const Dastebandi = () => {

    const [coursetype, setcoursetype] = useState([]);

    const getCourseList = async () => {
        const courses = await getFiltercourse();
        setcoursetype(courses);
    };

    useEffect(() => {
        getCourseList();
      
    }, []);

    

    const {typeName} = coursetype;
    console.log(coursetype.typeName);

    return (
        <div>
            <div className=" h-[3rem] w-[16rem] m-auto mt-[1rem] rounded-md bg-[#004458]">
                <span className="block mr-[1.5rem] text-white text-right leading-10 text-xl"> دسته بندی </span>
            </div>

            <div className="mt-[1rem]">

                <div className=" text-right flex justify-end ">
                    <input type="checkbox" id="online" name="online" className="peer hidden" />
                    <label for="online" className="block mr-[0.5rem] hover:text-[#09B28B] hover:cursor-pointer" onClick={() => {
                        
                    }} > دوره انلاین</label>
                    <label for="online" v className="border border-solid border-[black] rounded-full h-[1rem] w-[1rem] mt-[0.4rem] mr-[1rem] block 
peer-checked:bg-[#09B28B] peer-checked:border-none bg-no-repeat bg-cover hover:cursor-pointer">  </label>
                </div>

                <div className=" text-right flex justify-end mt-[0.5rem]">
                    <input type="checkbox" id="web" name="web" className="peer hidden" />
                    <label for="web" className="block mr-[0.5rem] hover:text-[#09B28B] hover:cursor-pointer" > تحت وب </label>
                    <label for="web" className="border border-solid border-[black] rounded-full h-[1rem] w-[1rem] mt-[0.4rem] mr-[1rem] block 
peer-checked:bg-[#09B28B] peer-checked:border-none bg-no-repeat bg-cover hover:cursor-pointer">  </label>
                </div>

                <div className=" text-right flex justify-end mt-[0.5rem]">
                    <input type="checkbox" id="shabake" name="shabake" className="peer hidden" />
                    <label for="shabake" className="block mr-[0.5rem] hover:text-[#09B28B] hover:cursor-pointer" > شبکه </label>
                    <label for="shabake" className="border border-solid border-[black] rounded-full h-[1rem] w-[1rem] mt-[0.4rem] mr-[1rem] block 
peer-checked:bg-[#09B28B] peer-checked:border-none bg-no-repeat bg-cover hover:cursor-pointer">  </label>
                </div>

                <div className=" text-right flex justify-end mt-[0.5rem]">
                    <input type="checkbox" id="barname" name="barname" className="peer hidden" />
                    <label for="barname" className="block mr-[0.5rem] hover:text-[#09B28B] hover:cursor-pointer" > برنامه نویسی </label>
                    <label for="barname" className="border border-solid border-[black] rounded-full h-[1rem] w-[1rem] mt-[0.4rem] mr-[1rem] block 
peer-checked:bg-[#09B28B] peer-checked:border-none bg-no-repeat bg-cover hover:cursor-pointer">  </label>
                </div>

                <div className=" text-right flex justify-end mt-[0.5rem]">
                    <input type="checkbox" id="seo" name="seo" className="peer hidden" />
                    <label for="seo" className="block mr-[0.5rem] hover:text-[#09B28B] hover:cursor-pointer" > آموزش سئو </label>
                    <label for="seo" className="border border-solid border-[black] rounded-full h-[1rem] w-[1rem] mt-[0.4rem] mr-[1rem] block 
peer-checked:bg-[#09B28B] peer-checked:border-nonebg-no-repeat bg-cover hover:cursor-pointer">  </label>
                </div>
            </div>
        </div>
    );
};

export { Dastebandi }; 
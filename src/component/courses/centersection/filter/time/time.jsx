import React, { useState, useEffect } from "react";
import { getFiltertecnology } from "../../../../../core/services/api/landing/filtertecnology";
import { useDispatch } from "react-redux";
import { settechnology } from "../../../../../redux/course";

const Time = () => {
  const [coursetecnology, setcoursetecnology] = useState([]);

  const getCoursefiltertecnology = async () => {
    const courses = await getFiltertecnology();
    setcoursetecnology(courses);
  };

  useEffect(() => {
    getCoursefiltertecnology();
  }, []);

  const dispatch = useDispatch();

  return (
    <div>
      <div
        className="relative w-[19rem] bg-[#fff] shadow-[6px,6px,10px,-1px,rgba(0,0,0.15),-6px,-6px,-10px,-1px,rgba(255,255,255,0.8)]
             rounded-xl mb-[1rem]"
      >
        <input
          type="checkbox"
          id="inputtime"
          className="absolute peer opacity-0"
        />

        <label
          for="inputtime"
          className="font-bold tracking-[1px] w-[7rem] mx-[210px] h-[50px] flex items-center"
        >
          
          مدت زمان
        </label>
        <label
          for="inputtime"
          className="h-[1rem] w-[1rem] bg-[url('./././././assets/img/courses/plus.png')] bg-no-repeat bg-cover absolute top-[17px] left-[20px]
                 peer-checked:bg-[url('./././././assets/img/courses/negativ.png')] duration-300"
        >
          
        </label>

        <div className="max-h-0 overflow-hidden peer-checked:max-h-full">
          <div className="mt-[1rem] mb-[1rem]">
            {coursetecnology.map((item, index) => {
              return (
                <div
                  className=" text-right flex justify-end mt-[0.5rem]"
                  key={index}
                >
                  <input
                    type="radio"
                    id={item.techName}
                    name="filter"
                    value={item.techName}
                    className="peer hidden"
                  />
                  <label
                    for={item.techName}
                    className="block mr-[0.5rem] hover:text-[#09B28B] hover:cursor-pointer"
                    onClick={() => {
                      dispatch(settechnology({ListTech:item.techName}));
                    }}
                  >
                    {item.techName}
                  </label>
                  <label
                    for={item.techName}
                    className="border border-solid border-[black] h-[1rem] w-[1rem] mt-[0.4rem] mr-[1rem] block 
          peer-checked:bg-[#09B28B] peer-checked:border-none bg-no-repeat bg-cover rounded-full hover:cursor-pointer hover:bg-[#09B28B]"
                    onClick={() => {
                      dispatch(settechnology({ListTech:item.techName}));
                    }}
                  ></label>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export { Time };

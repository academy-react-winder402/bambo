import React, { useState, useEffect } from "react";
import { getFilterlevel } from "../../../../../core/services/api/landing/FilterLevel";
import { setlevelid } from "../../../../../redux/course";
import { useDispatch } from "react-redux";

const Moratab = () => {
  const [courselevel, setcourselevel] = useState([]);

  const getCoursefilterlevel = async () => {
    const courses = await getFilterlevel();
    setcourselevel(courses);
  };

  useEffect(() => {
    getCoursefilterlevel();
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
          id="inputmoratab"
          className="absolute peer opacity-0"
        />

        <label
          for="inputmoratab"
          className="font-bold tracking-[1px] w-[7rem] mx-[200px] h-[50px] flex items-center"
        >
          
          مرتب سازی
        </label>
        <label
          for="inputmoratab"
          className="h-[1rem] w-[1rem] bg-[url('././././assets/img/courses/plus.png')] bg-no-repeat bg-cover absolute top-[17px] left-[20px]
                 peer-checked:bg-[url('././././assets/img/courses/negativ.png')] duration-300"
        >
          
        </label>

        <div className="max-h-0 overflow-hidden peer-checked:max-h-full">
          <div className="mt-[1rem] mb-[1rem]">
            {courselevel.map((item, index) => {
              return (
                <div
                  className=" text-right flex justify-end mt-[0.5rem]"
                  key={index}
                >
                  <input
                    type="radio"
                    id={item.levelName}
                    name="filter"
                    value={item.levelName}
                    className="peer hidden"
                  />
                  <label
                    for={item.levelName}
                    className="block mr-[0.5rem] hover:text-[#09B28B] hover:cursor-pointer"
                    onClick={() => {
                      dispatch(setlevelid(item.id));
                    }}
                  >
                    {item.levelName}
                  </label>
                  <label
                    for={item.levelName}
                    className="border border-solid border-[black] h-[1rem] w-[1rem] mt-[0.4rem] mr-[1rem] block 
          peer-checked:bg-[#09B28B] peer-checked:border-none bg-no-repeat bg-cover rounded-full hover:cursor-pointer hover:bg-[#09B28B]"
                    onClick={() => {
                      dispatch(setlevelid(item.id));
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

export { Moratab };

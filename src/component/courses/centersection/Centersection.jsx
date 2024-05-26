import React, { useState } from "react";
import { Item } from "./items/Item";
import { Filter } from "./filter/Filter";
import { Item2 } from "./items2/items2";



const Centersection = ({ set, course, getid }) => {

    const [page, setpage] = useState(1);

    const updatetab = (id) => {
        setpage(id);
    };
    
const [getfilter, setgetfilter] = useState("");
console.log(getfilter.filter);

    return (
        <>


            <div className="h-[6rem] w-full flex justify-between">

                <div className="  h-[3rem] w-[10rem] flex gap-[0.5rem] mt-[2rem] ml-[4rem]">
                    <div className={page === 2 ? "h-[3rem] w-[3rem] bg-[url(./././assets/img/courses/listamodi.png)] bg-no-repeat bg-cover hover:cursor-pointer bg-[#fff]"
                        : "h-[3rem] w-[3rem] bg-[url(./././assets/img/courses/listamodi.png)] bg-no-repeat bg-cover hover:cursor-pointer "} onClick={() => updatetab(2)}> </div>
                    <div className={page === 1 ? " h-[3rem] w-[3rem] bg-[url(./././assets/img/courses/listofoghi.png)] bg-no-repeat bg-cover hover:cursor-pointer bg-[#fff]"
                        : " h-[3rem] w-[3rem] bg-[url(./././assets/img/courses/listofoghi.png)] bg-no-repeat bg-cover hover:cursor-pointer"} onClick={() => updatetab(1)}> </div>
                </div>
                <h1 className="text-4xl inline-block mr-[4.5rem] mt-[1.5rem]"> دوره های آموزشی </h1>

            </div>

            <div className="  mt-[3rem] flex justify-between">

                <div className=" w-[70rem] ml-[5rem] ">


                    <div className={page === 1 ? "flex flex-wrap" : "hidden"}>
                        {
                            course.filter((item) => {
                            if(item.levelName == getfilter.filter){return  item.levelName == getfilter.filter;}
                            else{
                                return item;
                            }
                            }).map((item, index) => {
                                return (<Item key={index} im={item.tumbImageAddress} title={item.title} modares={item.teacherName} level={item.levelName}
                                    price={item.cost} set={set} id={item.courseId} get={getid} />);
                            })
                        }


                    </div>

                    <div className={page === 2 ? "flex flex-wrap" : "hidden"}>
                        {
                            course.map((item, index) => {
                                return (<Item2 key={index} im={item.tumbImageAddress} title={item.title} modares={item.teacherName} level={item.levelName} 
                                    price={item.cost} set={set} id={item.courseId} get={getid}/>);
                            })
                        }
                    </div>

                </div>

                <Filter teacher={setgetfilter} />
            </div>

        </>




    );
};

export { Centersection };
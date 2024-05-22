import React,{useState,useEffect} from "react";
import { Headersection } from "./headersection/Headersection";
import {Centersection} from './centersection/Centersection';
import { ModalCourse } from "./modalcourse/ModalCourse";

import { getcourse } from "../../core/services/api/landing/Course";

const Coursesc = () => {
    const [showModal, setshowModal] = useState(false);


const [getid, setgetid] = useState();

const [getfilter,setgetfilter] = useState();



    const [course, setcourse] = useState([]);

    const getCourseList = async () => {
        const courses = await getcourse();
        setcourse(courses);
    };

    useEffect(() => {
        getCourseList();
      
    }, []);

    const [type, settype] = useState([]);

const gettype = course.filter((e) => {return(e.typeName === getfilter)});

settype(gettype);

   console.log(type);


    return (
        <div className="bg-[#ededed]">
            <ModalCourse isVisible={showModal} courseId={getid}  onclose={() => {setshowModal(false);}}/>
            <Headersection />
            <Centersection set={setshowModal} getid={setgetid} gettype={setgetfilter} course={course}/>
            
        </div>

    );
};

export { Coursesc };
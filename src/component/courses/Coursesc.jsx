import React,{useState,useEffect} from "react";
import { Headersection } from "./headersection/Headersection";
import {Centersection} from './centersection/Centersection';
import { ModalCourse } from "./modalcourse/ModalCourse";

import { getcourse } from "../../core/services/api/landing/Course";

const Coursesc = () => {
    const [showModal, setshowModal] = useState(false);
const [getid, setgetid] = useState();

    const [course, setcourse] = useState([]);

    const getCourseList = async () => {
        const courses = await getcourse();
        setcourse(courses);
    };

    useEffect(() => {
        getCourseList();
      
    }, []);

   


    return (
        <div className="bg-[#ededed]">
            <ModalCourse isVisible={showModal} courseId={getid}  onclose={() => {setshowModal(false);}}/>
            <Headersection />
            <Centersection set={setshowModal} get={setgetid} course={course}/>
            
        </div>

    );
};

export { Coursesc };
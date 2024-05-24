import React, { useState, useEffect } from "react";
import { Headersection } from "./headersection/Headersection";
import { Centersection } from './centersection/Centersection';
import { ModalCourse } from "./modalcourse/ModalCourse";
import { getcourse } from "../../core/services/api/landing/Course";
import { Pagination } from "flowbite-react";

const Coursesc = () => {

    const [showModal, setshowModal] = useState(false);

    const [getid, setgetid] = useState();



    const [course, setcourse] = useState([]);
    const [totalPages, settotalPages] = useState(7);
    const [currentPage, setCurrentPage] = useState(1);



console.log(totalPages);
    const getCourseList = async () => {
        const courses = await getcourse();
        setcourse(courses.courseFilterDtos);
        settotalPages(courses.totalCount);
    };

    useEffect(() => {
        getCourseList();

    }, []);

    

    const onPageChange = (n) => setCurrentPage(n);

    return (
        <div className="bg-[#ededed]">
            <ModalCourse isVisible={showModal} courseId={getid} onclose={() => { setshowModal(false); }} />
            <Headersection typename={setcourse} />
            <Centersection set={setshowModal} getid={setgetid} course={course} />

            <div className="flex overflow-x-auto sm:justify-center">
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange}/>
            </div>
        </div>

    );
};

export { Coursesc };
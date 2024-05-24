import React, { useState, useEffect } from "react";
import { Headersection } from "./headersection/Headersection";
import { Centersection } from './centersection/Centersection';
import { ModalCourse } from "./modalcourse/ModalCourse";
import { getcourse } from "../../core/services/api/landing/Course";
import ReactPaginate from 'react-paginate';

const Coursesc = () => {

    const [showModal, setshowModal] = useState(false);

    const [getid, setgetid] = useState();



    const [course, setcourse] = useState([]);

    const getCourseList = async () => {
        const courses = await getcourse();
        setcourse(courses.courseFilterDtos);
    };

    useEffect(() => {
        getCourseList();

    }, []);

    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + 2;
    const currentItems = course.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(course.length / 2);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * 2) % course.length;
        setItemOffset(newOffset);
    };

    return (
        <div className="bg-[#ededed]">
            <ModalCourse isVisible={showModal} courseId={getid} onclose={() => { setshowModal(false); }} />
            <Headersection typename={setcourse} />
            <Centersection set={setshowModal} getid={setgetid} course={currentItems} />

            
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
            />

        </div>

    );
};

export { Coursesc };
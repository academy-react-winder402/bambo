import React, { useState, useEffect } from "react";
import { Headersection } from "./headersection/Headersection";
import { ModalCourse } from "./modalcourse/ModalCourse";
import { getcourse } from "../../core/services/api/landing/Course";
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";
import { Item } from "./centersection/items/Item";
import { Item2 } from "./centersection/items2/items2";
import { Filter } from "./centersection/filter/Filter";
import { getfilterlevelid } from "../../core/services/api/landing/filterlevelid";
import { getfiltersearch } from "../../core/services/api/landing/filtersearch";
import { getfiltertype } from "../../core/services/api/landing/coursefiltertype";
import { getfiltertechnologyid } from "../../core/services/api/landing/filtertechnologyid";
import { getfilterteacherid } from "../../core/services/api/landing/filtertecherid";
import { getfilterpriceup } from "../../core/services/api/landing/filterpriceup";

const Coursesc = () => {
  const [showModal, setshowModal] = useState(false);

  const [getid, setgetid] = useState();

  const { RowsOfPage,CourseTypeId,Query,courseLevelId,ListTech,TeacherId,CostDown,CostUp} = useSelector((state) => state.filterCourse);

console.log(ListTech);
  const [data, setData] = useState([]);
const [pageNumber, setPageNumber] = useState();
  const [totalPages, setTotalPages] = useState();

  const getCourseList = async () => {
    const courses = await getcourse(pageNumber, RowsOfPage);
    setTotalPages(Math.ceil(courses?.totalCount / RowsOfPage));
    setData(courses);
  };

  useEffect(() => {
    getCourseList();
  }, [RowsOfPage, pageNumber]);




  const getfiltersearchlist = async () => {
    const courses = await getfiltersearch(Query,RowsOfPage);
    setData(courses);
  };

  useEffect(() => {
    getfiltersearchlist();
  }, [Query,RowsOfPage]);


  const getfilterList = async () => {
    const courses = await getfiltertype(CourseTypeId);
    setData(courses);
  };

  useEffect(() => {
    getfilterList();
  }, [CourseTypeId]);

  const getfilterlevelList = async () => {
    const courses = await getfilterlevelid(courseLevelId);
    setData(courses);
  };

  useEffect(() => {
    getfilterlevelList();
  }, [courseLevelId]);

  const getfiltertechnologyList = async () => {
    const courses = await getfiltertechnologyid(ListTech);
    setData(courses);
  };

  useEffect(() => {
    getfiltertechnologyList();
  }, [ListTech]);

  const getfilterteacherList = async () => {
    const courses = await getfilterteacherid(TeacherId);
    setData(courses);
  };

  useEffect(() => {
    getfilterteacherList();
  }, [TeacherId]);


  const getfilterpriceupList = async () => {
    const courses = await getfilterpriceup(CostUp,CostDown);
    setData(courses);
  };

  useEffect(() => {
    getfilterpriceupList();
  }, [CostUp,CostDown]);


  const [page, setpage] = useState(1);

  const updatetab = (id) => {
    setpage(id);
  };

  const handlePageClick = (e) => {
    setPageNumber(e.selected + 1);
  };


  return (
    <div className="bg-[#ededed] dark:bg-[#242424ed]">
      <ModalCourse
        isVisible={showModal}
        courseId={getid}
        onclose={() => {
          setshowModal(false);
        }}
      />
      <Headersection  />

      <div className="h-[6rem] w-full flex justify-between ">
        <div className="  h-[3rem] w-[10rem] flex gap-[0.5rem] mt-[2rem] ml-[4rem]">
          <div
            className={
              page === 2
                ? "h-[3rem] w-[3rem] bg-[url(./././assets/img/courses/listamodi.png)] bg-no-repeat bg-cover hover:cursor-pointer bg-[#fff]"
                : "h-[3rem] w-[3rem] bg-[url(./././assets/img/courses/listamodi.png)] bg-no-repeat bg-cover hover:cursor-pointer "
            }
            onClick={() => updatetab(2)}
          >
            {" "}
          </div>
          <div
            className={
              page === 1
                ? " h-[3rem] w-[3rem] bg-[url(./././assets/img/courses/listofoghi.png)] bg-no-repeat bg-cover hover:cursor-pointer bg-[#fff]"
                : " h-[3rem] w-[3rem] bg-[url(./././assets/img/courses/listofoghi.png)] bg-no-repeat bg-cover hover:cursor-pointer"
            }
            onClick={() => updatetab(1)}
          >
            {" "}
          </div>
        </div>
        <h1 className="text-4xl inline-block mr-[4.5rem] mt-[1.5rem] dark:text-white">
          {" "}
          دوره های آموزشی{" "}
        </h1>
      </div>

      <div className="  mt-[3rem] flex justify-between">
        <div className=" w-[70rem] ml-[5rem] ">
          <div className={page === 1 ? "flex flex-wrap" : "hidden"}>
            {data.courseFilterDtos?.map((item, index) => {
              return (
                <Item
                  key={index}
                  im={item.tumbImageAddress}
                  title={item.title}
                  modares={item.teacherName}
                  price={item.cost}
                  courseid={item.courseId}
                  showmodal={() => {
                    setshowModal(true);
                  }}
                />
              );
            })}
          </div>

          <div className={page === 2 ? "flex flex-wrap" : "hidden"}>
            {data.courseFilterDtos?.map((item, index) => {
              return (
                <Item2
                  key={index}
                  im={item.tumbImageAddress}
                  title={item.title}
                  modares={item.teacherName}
                  courseid={item.courseId}
                  price={item.cost}
                />
              );
            })}
          </div>
        </div>

        <Filter />
      </div>

      {totalPages > 1 && (
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={totalPages}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          className=" h-[3rem] w-[77%] flex gap-4 justify-center"
          pageClassName="border border-solid border-[#004458] h-[2rem] w-[2rem] text-center hover:bg-[#004458] hover:text-white"
          activeClassName="text-[red]"
          previousClassName="border border-solid border-[#004458] h-[2rem] w-[6rem] text-center hover:bg-[#004458] hover:text-white"
          nextClassName="border border-solid border-[#004458] h-[2rem] w-[4rem] text-center hover:bg-[#004458] hover:text-white"
        />
      )}
    </div>
  );
};

export { Coursesc };

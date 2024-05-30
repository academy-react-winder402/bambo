import React, { useState, useEffect } from "react";
import { Headersection } from "./headersection/Headersection";
import { Centersection } from "./centersection/Centersection";
import { ModalCourse } from "./modalcourse/ModalCourse";
import { getcourse } from "../../core/services/api/landing/Course";
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";
import { Item } from "./centersection/items/Item";
import { Item2 } from "./centersection/items2/items2";
import { Filter } from "./centersection/filter/Filter";

const Coursesc = () => {
  const [showModal, setshowModal] = useState(false);

  const [getid, setgetid] = useState();

  const { RowsOfPage } = useSelector((state) => state.filterCourse);

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
      <Headersection typename={setData} />

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
          pageClassName="border border-solid border-[#004458] "
          activeClassName="text-[red]"
        />
      )}
    </div>
  );
};

export { Coursesc };

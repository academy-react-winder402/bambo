import React, { useState, useEffect } from "react";
import { Grid } from "./grid/Grid";
import { Grid2 } from "./grid2/Grid2";
import { GetNews } from "../../../core/services/api/landing/News";
import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";

const Contentarticle = () => {
  const { RowsOfPage } = useSelector((state) => state.filterCourse);

  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState();
  const [totalPages, setTotalPages] = useState();

  const getNewsList = async () => {
    const news = await GetNews(pageNumber, RowsOfPage);
    setTotalPages(Math.ceil(news?.totalCount / RowsOfPage));
    setData(news);
  };

  useEffect(() => {
    getNewsList();
  }, [RowsOfPage, pageNumber]);

  const handlePageClick = (e) => {
    setPageNumber(e.selected + 1);
  };

  const [itemm, setitem] = useState(2);

  const updateitem = (id) => {
    setitem(id);
  };

  const [page, setpage] = useState(1);

  const updatetab = (id) => {
    setpage(id);
  };



const [getid, setgetid] = useState();
console.log(getid);


  return (
    <>
      <div className="h-[6rem] w-full flex justify-between font-sans">
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
        <h1 className="text-4xl inline-block mr-[4.5rem] mt-[1.5rem]">
          {" "}
          اخبار و مقالات{" "}
        </h1>
      </div>

      <div className=" h-[3rem] w-[60rem] m-auto flex font-sans">
        <div
          className={
            itemm === 2
              ? " border-b-4 border-solid border-[#004458] h-[3rem] w-[30rem] text-center text-[#004458] text-3xl leading-10 hover:cursor-pointer"
              : " border-b-2 border-solid border-[#004458] h-[3rem] w-[30rem] text-center text-[#004458] text-2xl leading-10 hover:cursor-pointer"
          }
          onClick={() => {
            updateitem(2);
          }}
        >
          {" "}
          اخبار{" "}
        </div>
        <div
          className={
            itemm === 1
              ? " border-b-4 border-solid border-[#004458] h-[3rem] w-[30rem] text-center text-[#004458] text-3xl leading-10 hover:cursor-pointer"
              : " border-b-2 border-solid border-[#004458] h-[3rem] w-[30rem] text-center text-[#004458] text-2xl leading-10 hover:cursor-pointer"
          }
          onClick={() => {
            updateitem(1);
          }}
        >
          {" "}
          مقالات{" "}
        </div>
      </div>

      <div className={itemm === 2 ? "mt-[3rem] pb-[1rem] font-sans" : "hidden"}>
        <div className=" w-[74rem] m-auto">
          <div className={page === 1 ? "flex flex-wrap" : "hidden"}>
            {data.news?.map((item, index) => {
              return (
                <Grid2
                  key={index}
                  im={item.currentImageAddressTumb}
                  title={item.title}
                  id={item.id}
                  gtid={setgetid}
                />
              );
            })}
          </div>

          <div className={page === 2 ? "flex flex-wrap" : "hidden"}>
            {data.news?.map((item, index) => {
              return (
                <Grid
                  key={index}
                  im={item.currentImageAddressTumb}
                  title={item.title}
                  id={item.id}
                  gtid={setgetid}
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className={itemm === 1 ? "mt-[3rem] pb-[1rem] font-sans" : "hidden"}>
        <div className=" w-[74rem] m-auto">
          <div className={page === 1 ? "flex flex-wrap" : "hidden"}>
            {data.news?.map((item, index) => {
              return (
                <Grid2
                  key={index}
                  im={item.currentImageAddressTumb}
                  title={item.title}
                />
              );
            })}
          </div>

          <div className={page === 2 ? "flex flex-wrap" : "hidden"}>
            {data.news?.map((item, index) => {
              return (
                <Grid
                  key={index}
                  im={item.currentImageAddressTumb}
                  title={item.title}
                />
              );
            })}
          </div>


        </div>
      </div>
      {totalPages >= 1 && (
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={totalPages}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          className=" h-[3rem] w-[full] flex gap-4 justify-center"
          pageClassName="border border-solid border-[#004458] h-[2rem] w-[2rem] text-center hover:bg-[#004458] hover:text-white"
          activeClassName="text-[red]"
          previousClassName="border border-solid border-[#004458] h-[2rem] w-[5.5rem] text-center hover:bg-[#004458] hover:text-white"
          nextClassName="border border-solid border-[#004458] h-[2rem] w-[4rem] text-center hover:bg-[#004458] hover:text-white"
        />
      )}

    </>
  );
};

export { Contentarticle };

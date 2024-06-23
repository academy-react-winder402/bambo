import { Formik, Form, Field } from "formik";
import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import { getname } from "../../../core/services/api/paneldaneshjo/EditProfile";
import { useParams } from "react-router-dom";
import { AddImg } from "../../../core/services/api/paneldaneshjo/EditProfile";
import { SelectImg } from "../../../core/services/api/paneldaneshjo/EditProfile";
import { UserInfo } from "../../../core/services/api/paneldaneshjo/EditProfile";
const EditProfile = () => {
  const [info, setInfo] = useState({});

  const getData = async () => {
    const result = await UserInfo();
    setInfo(result);
  };
  useEffect(() => {
    getData();
  }, []);

  const onSubmit = async (values) => {
    const formdata = new FormData();
    formdata.append("LName", values.lName);
    formdata.append("FName", values.fName);
    formdata.append("UserAbout", values.about);
    formdata.append(
      "LinkdinProfile",
      "https://www.linkedin.com/&ved=2ahUKEwiQz42J6ZaGAxWmfqQEHQAqA6wQFnoECAYQAQ&usg=AOvVaw2Fx3jReOOmKj1CUsWZkKns"
    );
    formdata.append(
      "TelegramLink",
      "https://telegram.org/&ved=2ahUKEwjyg5Lu6JaGAxVd_rsIHUOWC-sQFnoECAcQAQ&usg=AOvVaw3t0dfZX-RyWOWxyb6xMKLv"
    );
    formdata.append("ReceiveMessageEvent", false);
    formdata.append("HomeAdderess", values.homeAddress);
    formdata.append("NationalCode", values.code);
    formdata.append("Gender", false);
    formdata.append("BirthDay", values.data);
    formdata.append("Latitude", "25");
    formdata.append("Longitude", "35");

    const editapi = await getname(formdata);
    console.log(editapi);

    const imgdata = new FormData();
    imgdata.append("formFile", values.formFile);
    const editimg = await AddImg(imgdata ? imgdata : null);
    console.log(editimg);
  };

  const selectimg = async () => {
    const formdata = new FormData();
    formdata.append("ImageId", Id);
    const selectapi = await SelectImg(formdata);
    if (selectapi) {
      alert("تصویر با موفقیت انتخاب شد");
    } else {
      alert(" عملیات ناموفق   ");
    }
    console.log("select", selectapi);
  };
  const [select, setSelect] = useState(0);
  return (
    <Fragment>
    <div
      className=" lg:w-[90%] lg:h-[13%] lg:m-auto lg:border-b-solid lg:border-b-[1px] lg:border-b-[#088568] lg:text-[#088568] lg:text-[20px]
 lg:pt-[30px] 
 md:w-[90%] md:h-[13%] md:m-auto md:border-b-solid md:border-b-[1px] md:border-b-[#088568] md:text-[#088568] md:text-[20px]
md:pt-[30px] 
 sm:w-[90%] sm:h-[13%] sm:m-auto sm:border-b-solid sm:border-b-[1px] sm:border-b-[#088568] sm:text-[#088568] sm:text-[20px]
sm:pt-[30px]
xs:w-[90%] xs:h-[13%] xs:m-auto xs:border-b-solid xs:border-b-[1px] xs:border-b-[#088568] xs:text-[#088568] xs:text-[20px]
xs:py-[10px]
  "
    >
      ویرایش پروفایل
    </div>

   
    <div className="lg:w-[90%] lg:m-auto  md:w-[90%]  md:m-auto sm:w-[90%] sm:m-auto xs:w-[90%]  xs:m-auto ">
    {info.email ? (
      <Formik
        initialValues={{
          formFile: null,
          fName: info.fName ? info.fName : "",
          lName: info.lName ? info.lName : "",
          about: info.userAbout ? info.userAbout : "",
          code: info.nationalCode ? info.nationalCode :"",
          data: info.birthDay ?  info.birthDay : "",
          homeAddress: info.homeAdderess ? info.homeAdderess : "",
        }}
        onSubmit={onSubmit}
      >
        {({ setFieldValue }) => {
          return (
            <Form>
              <div className="lg:flex lg:flex-row-reverse gap-[130px] lg:w-[100%] mt-[20px]">
                <div className="lg:w-[300px]  flex flex-col gap-[10px] items-center border-[1px] border-solid border-black ">
                  {/* <img src={pic}></img> */}
                  <input
                    // type="file"
                    className="w-[300px] h-[300px] border-[1px] border-black border-solid rounded-[100%]"
                    onChange={(e) =>
                      setFieldValue("formFile", e.target.file[0])
                    }
                    onClick={setSelect}
                  />
                  <div
                    className={
                      select === 0
                        ? "hidden"
                        : "w-[800px] h-[400px] bg-[#ccc] absolute top-[200px] left-[500px]"
                    }
                  >
                    <div>close</div>
                    <button
                      onClick={selectimg}
                      className="border-[red] w-[100px] h-[50px] border-[1px] border-solid"
                    >
                      select
                    </button>
                  </div>
                </div>

                <div className="lg:w-[500px] flex flex-col gap-[5px] items-start text-[#202142] ">
                  <div className="lg:flex lg:gap-[20px] items-center w-[100%]  sm:flex-row  ">
                    <div className="w-[50%]">
                      <label
                        htmlFor="lName"
                        className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                      >
                        نام
                      </label>
                      <Field
                        type="text"
                        name="lName"
                        className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                      />
                    </div>

                    <div className="w-[50%]">
                      <label
                        htmlFor="fName"
                        className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                      >
                        نام خانوادگی
                      </label>
                      <Field
                        type="text"
                        name="fName"
                        className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                      />
                    </div>
                  </div>

                  <div className="w-[100%] flex gap-[20px] items-center mt-[30px] ">
                    <div className="w-[50%]">
                      <label
                        htmlFor="about"
                        className=" mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                      >
                        about
                      </label>
                      <Field
                        className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                        name="about"
                      />
                    </div>

                    <div className="w-[50%]">
                      <label
                        htmlFor="date"
                        className=" mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                      >
                        تاریخ تولد
                      </label>
                      <Field
                        type="date"
                        className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                        name="data"
                      />
                    </div>
                  </div>
                  <div className="w-[100%] flex gap-[20px] items-center  mt-[10px] ">
                    <div className="w-[50%]">
                      <label
                        htmlFor="code"
                        className=" mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                      >
                        کدملی
                      </label>
                      <Field
                        name="code"
                        className="w-[100%] bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block p-2.5 "
                      />
                    </div>
                  </div>
                  <div className="w-[100%]  mt-[30px]  ">
                    <label
                      htmlFor="homeAddress"
                      className=" mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                    >
                      آدرس
                    </label>
                    <Field
                      name="homeAddress"
                      type="text"
                      className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                    />
                  </div>
                  <div
                    className="lg:w-[100%]  lg:flex lg:justify-end lg:gap-[30px] lg:text-center lg:text-[17px] lg:mt-[30px] lg:text-[#fff]
                md:w-[100%]  md:flex md:justify-end md:gap-[30px] md:text-center md:text-[17px] md:mt-[30px] md:text-[#fff]
                sm:w-[100%] sm:flex sm:justify-end sm:gap-[30px] sm:text-center sm:text-[17px] sm:mt-[30px] sm:text-[#fff]
                xs:w-[100%]  xs:flex xs:justify-end xs:gap-[30px] xs:text-center xs:text-[17px] xs:mt-[30px] xs:text-[#fff]
                "
                  >
                    <button
                      className="lg:bg-[#F83333] lg:w-[50%] lg:h-[50px] rounded-[0.5em]
                md:bg-[#F83333] md:w-[50%] md:h-[50px]
                sm:bg-[#F83333] sm:w-[50%] sm:h-[50px]
                xs:bg-[#F83333] xs:w-[30%] xs:h-[50px]
"
                    >
                      لغوتغییرات
                    </button>
                    <button
                      className="lg:bg-[#09B28B] lg:w-[50%] lg:h-[50px]  rounded-[0.5em]
                md:bg-[#09B28B] md:w-[50%] md:h-[50px]
                sm:bg-[#09B28B] sm:w-[50%] sm:h-[50px]
                xs:bg-[#09B28B] xs:w-[30%] xs:h-[50px]
"
                      type="onsubmit"
                    >
                      ثبت تغییرات
                    </button>
                  </div>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
        ) : (
          ""
        )}
    </div>
  </Fragment>
  );
};
export { EditProfile };

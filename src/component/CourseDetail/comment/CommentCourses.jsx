import React, { useState } from "react";
import { Mention, MentionsInput } from "react-mentions";
import { addcomment } from "../../../core/services/api/comment/AddComment";
import { Field, Form, Formik } from "formik";
import { useParams } from "react-router-dom";
import { get } from "react-hook-form";
import toast from "react-hot-toast";
const CommentCourses = () => {

// const [comments, setcomments] = useState({

// });
const CourseId = useParams().id;


  const onSubmit = async (values) => {

    const formdata = new FormData();
    formdata.append("CourseId",CourseId);
    formdata.append("title",values.title);
    formdata.append("Describe",values.Describe);
   
    const commentapi = await addcomment(formdata);
    // const token = getItem("token"); 
    // if(!token){toast.error("لطفا ثبت نام کنید")}
   console.log(commentapi);
  };

  
 
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  return (
    <div className="flex flex-col justify-center align-middle w-[55rem]  bg-[#f9f9f9] font-sans">
      <Formik initialValues={{Describe: "" ,title: ""  }}
      onSubmit={onSubmit}>
        <Form>
          <section className="flex flex-col p-[1rem] w-[56rem] bg-[#F6F6F6]">
          <Field
              name="Describe"
              placeholder="Add Comment"
              className="h-[7rem] w-[54rem] mb-[1rem] p-[1rem] text-[18px] bg-[#fff] rounded-[25px]"
            ></Field>
            <Field
              name="title"
              placeholder=" Your Name"
              className="h-[3rem] w-[54rem] mb-[1rem] p-[1rem] text-[18px] bg-[#fff] rounded-[25px]"
            ></Field>


            {/* <input
                    type="text"
                    value={formState.title}
                    onChange={(e) =>
                        setFormState({ ...formState, title: e.target.value })
                    }
                    placeholder=" Your Name"
                    className="h-[3rem] w-[54rem] mb-[1rem] p-[1rem] text-[18px] bg-[#fff] rounded-[25px]"
                />
                <MentionsInput
                    placeholder="Add Comment"
                    className="h-[7rem] w-[54rem] mb-[1rem] p-[1rem] text-[18px] bg-[#fff] rounded-[25px]"
                    value={formState.Describe}
                    onChange={(e) =>
                        setFormState({ ...formState, Describe: e.target.value })
                    }
                >
                    <Mention data={users} />
                </MentionsInput> */}
            <button
              type="submit"
              className="text-white bg-[#004458]  text-[1.2rem] p-[10px] mt-[1rem]  rounded-[20px]"
            >
              ثبت نظرات
            </button>
          </section>
        </Form>
      </Formik>
      
      {/* {comments.length === 0 ? (
                null
            ) : (
                <section className="flex flex-col">
                    {comments.map((comment, i) => (
                        <div dir="rtl" className="  mt-[ 1.5rem] mb-[1.5rem] ml-[1rem] text-[1rem] p-[1rem] w-[53rem] lg:border-b-[1px] lg:border-b-solid lg:border-b-[#ebebeb] " key={i}>
                            <div className="lg:flex lg:justify-between lg:e-[50rem] lg:text-[#004458] lg:mb-[1rem]">

                                <p>
                                    {comment.title}
                                </p>
                                <p>{date}</p>
                            </div>

                            <h2>{comment.Describe}</h2>

                            <div className="lg:bg-[#004458] lg:w-[70px] lg:h-[40px] lg:text-[#fff] lg:text-center lg:rounded-[20px] lg:leading-8 lg:mt-[10px]">پاسخ</div>
                        </div>
                    ))}

                </section>
            )} */}
    </div>
  );
};
export { CommentCourses };

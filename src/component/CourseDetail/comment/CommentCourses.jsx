import React, { useState } from "react";
import { Mention, MentionsInput } from 'react-mentions';
const CommentCourses = () => {
    const [formState, setFormState] = useState({
        username: '',
        comment: '',

    });
    const [comments, setComments] = useState([]);
    const users = [
        {
            id: 'isaac',
            display: 'Isaac Newton',
        },
        {
            id: 'sam',
            display: 'Sam Victor',
        },
        {
            id: 'emma',
            display: 'emmanuel@nobody.com',
        },
    ];
    const submit = () => {
        if (formState.username === '' || formState.comment === '') {
            alert('Please fill in all fields');
            return;
        }
        setComments((comments) => [
            ...comments,
            {
                username: formState.username,
                comment: formState.comment,

            },
        ]);
        setFormState({
            username: '',
            comment: '',

        });
    };
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1
        }/${current.getFullYear()}`;

    return (

        <div className="flex flex-col justify-center align-middle w-[55rem]  bg-[#f9f9f9] font-sans">

            <section className="flex flex-col p-[1rem] w-[56rem] bg-[#F6F6F6]">
                <input
                    type="text"
                    value={formState.username}
                    onChange={(e) =>
                        setFormState({ ...formState, username: e.target.value })
                    }
                    placeholder=" Your Name"
                    className="h-[3rem] w-[54rem] mb-[1rem] p-[1rem] text-[18px] bg-[#fff] rounded-[25px]"
                />
                <MentionsInput
                    placeholder="Add Comment"
                    className="h-[7rem] w-[54rem] mb-[1rem] p-[1rem] text-[18px] bg-[#fff] rounded-[25px]"
                    value={formState.comment}
                    onChange={(e) =>
                        setFormState({ ...formState, comment: e.target.value })
                    }
                >
                    <Mention data={users} />
                </MentionsInput>
                <button className="text-white bg-[#004458]  text-[1.2rem] p-[10px] mt-[1rem]  rounded-[20px]" onClick={submit}>ثبت نظرات</button>
            </section>
            {comments.length === 0 ? (
                null
            ) : (
                <section className="flex flex-col">
                    {comments.map((comment, i) => (
                        <div dir="rtl" className="  mt-[ 1.5rem] mb-[1.5rem] ml-[1rem] text-[1rem] p-[1rem] w-[53rem] lg:border-b-[1px] lg:border-b-solid lg:border-b-[#ebebeb] " key={i}>
                            <div className="lg:flex lg:justify-between lg:e-[50rem] lg:text-[#004458] lg:mb-[1rem]">

                                <p>
                                    {comment.username}
                                </p>
                                <p>{date}</p>
                            </div>

                            <h2>{comment.comment}</h2>

                            <div className="lg:bg-[#004458] lg:w-[70px] lg:h-[40px] lg:text-[#fff] lg:text-center lg:rounded-[20px] lg:leading-8 lg:mt-[10px]">پاسخ</div>
                        </div>
                    ))}

                </section>
            )}

        </div>
    );
};
export { CommentCourses };
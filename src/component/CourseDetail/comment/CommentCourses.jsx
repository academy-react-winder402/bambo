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
        <div className="flex flex-col justify-center align-middle w-[500px]  bg-[#f9f9f9]">
            <section className="flex flex-col p-[1rem] w-[27rem]">
                <h2 className="bg-[#004458] text-[2rem] mb-[1rem] text-[#fff] text-center">نظرات</h2>
                <input
                    type="text"
                    value={formState.username}
                    onChange={(e) =>
                        setFormState({ ...formState, username: e.target.value })
                    }
                    placeholder=" Your Name"
                    className="h-[3rem] w-[25rem] mb-[1rem] p-[1rem] text-[18px] bg-[#eae8e8]"
                />
                <MentionsInput
                    placeholder="Add Comment"
                    className="h-[3rem] w-[25rem] mb-[1rem] p-[1rem] text-[18px] bg-[#eae8e8]"
                    value={formState.comment}
                    onChange={(e) =>
                        setFormState({ ...formState, comment: e.target.value })
                    }
                    >
                    <Mention data={users} />
                </MentionsInput>
                <button className="text-white bg-[#004458]  text-[1.2rem] p-[10px] mt-[1rem]" onClick={submit}>ثبت نظرات</button>
            </section>
            {comments.length === 0 ? (
                null
            ) : (
                <section>
                    {comments.map((comment, i) => (
                        <div className="  mt-[ 1.5rem] mb-[1.5rem] ml-[1rem] text-[1rem] p-[1rem] w-[25rem] bg-[#eae8e8] " key={i}>
                            <p >
                                {comment.username} on {date}
                            </p>
                            <h2>{comment.comment}</h2>
                           <button className="bg-[#004458] w-[70px] h-[40px] text-[#fff]">پاسخ</button>
                        </div>
                    ))}
                </section>
            )}
        </div>
    );
};
export { CommentCourses};
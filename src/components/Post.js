import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link, useParams} from "react-router-dom";

import Comment from "./Comment";
import FormComment from "./FormComment";
import {isActiveModal, isFormPost} from "../store/actions";

const Post = () => {

    const commentsList = useSelector(state => state.commentsList);
    const postList = useSelector(state => state.postList);
    const dispatch = useDispatch();

    const { id } = useParams();
    const idPost = Number (id);

    let commentsCurrentPost = commentsList.filter(comment => comment.postId === idPost);

    const isActive = () => {
        dispatch(isActiveModal(true))
    }

    return (
        <div className="post-page">
            <div className='full-post'>
                <h2 className="post-full-title">{postList[id].title}</h2>
                <p className="post-full-body">{postList[id].body}</p>
            </div>
            <h3 className="post-comments-title">Comments</h3>
            <div className="post-comments">
                {commentsCurrentPost.map(comment => {
                    return <Comment comment={comment} key={comment.id}/>
                })}
                <button className={"btn-add-comment"} onClick={isActive}>Add comment</button>
            </div>
            <FormComment idPost={idPost}/>
        </div>
    );
};

export default Post;
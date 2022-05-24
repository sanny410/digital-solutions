import React from 'react';

const Comment = ({comment}) => {
    return (
        <div className="post-comment">
            <h4 className="post-comment-title">Name: {comment.name}</h4>
            <p className="post-comment-email">Email: {comment.email}</p>
            <p className="post-comment-body">{comment.body}</p>
        </div>
    );
};

export default Comment;
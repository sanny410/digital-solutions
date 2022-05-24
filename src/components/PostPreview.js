import React from 'react';
import {Link} from "react-router-dom";

const PostPreview = ({post}) => {
    return (
            <div className="post-promo" key={post.id}>
                <h3 className='post-title'>{post.title}</h3>
                <div className="post-body">{post.body.slice(0, 80) + '...'}</div>
                <Link to={`/post/${post.id}`} className={"post_link"}>Полный пост</Link>
            </div>
    );
};

export default PostPreview;
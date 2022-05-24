import React from 'react';
import {useSelector} from "react-redux";
import PostPreview from "../ProfileUser/PostPreview";
import './style.scss'

const PostsList = () => {

    const postPreview = useSelector(state => state.postsCurrentUser);

    return (
        <div className="post-list">
            {postPreview.map(post => {
                return <PostPreview key={post.id} post={post}/>
            })}
        </div>

    );
};

export default PostsList;
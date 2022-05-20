import React from 'react';
import {Link, useParams} from "react-router-dom";
import './style.scss'
import {useEffect} from "react";
import Post from "./Post";

const ProfileUser = ({list, posts}) => {

    const { id } = useParams();
    const idUser = Number (id);

    const user = list[idUser - 1];
    const promoPosts = []

    const postCurrentUser = posts.filter(post => post.userId === idUser);

    for (let i = 0; i < 3; i++) {
        promoPosts.push(postCurrentUser[i])
    }

    useEffect(() => {
        console.log(postCurrentUser)
    },[]);

    return (
        <div className="profile">
            <div className="profile-user" key={user.id}>
                <h3 className="user-username">{user.username}</h3>
                <div className="user-info">
                    <div className="info-item">{user.name}</div>
                    <div className="info-item">{user.email}</div>
                    <div className="info-item">{user.phone}</div>
                    <div className="info-item">{user.website}</div>
                </div>
                <div className="user-company">
                    <p className="info-item"><span className="company-title">Company: </span> {user.company.name}</p>
                    <p className="info-item">BS: {user.company.bs}</p>
                </div>
            </div>
            <div className="user-posts">
                {promoPosts.map(post => {
                    return(
                        <div className="post-promo" key={post.id}>
                           <h3 className='post-title'>{post.title}</h3>
                            <div className="post-body">{post.body.slice(0, 80) + '...'}</div>
                            <Link to={`/post/${post.id}`} className={"post_link"}>Полный пост</Link>
                        </div>
                    )
                })
                }
                <Link to={`/posts/`} className={"posts_link"}>Все посты пользователя</Link>
            </div>
        </div>
    );
};

export default ProfileUser;
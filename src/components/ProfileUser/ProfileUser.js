import React, {useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import './style.scss'
import PostPreview from "./PostPreview";
import {useDispatch } from "react-redux";
import {idUserLoad, postCurrentUserLoad} from "../../store/actions";

const ProfileUser = ({list, posts}) => {

    const dispatch = useDispatch();

    const { id } = useParams();
    const idUser = Number (id);

    const user = list[idUser - 1];
    const promoPosts = [];
    let postCurrentUser = posts.filter(post => post.userId === idUser);

    for (let i = 0; i < 3; i++) {
        promoPosts.push(postCurrentUser[i])
    }

    const currentUserPostList = () => {
        dispatch(postCurrentUserLoad(postCurrentUser))
    }

    const currentIdUser = () => {
        dispatch(idUserLoad(id))
    }

    useEffect(() => {
        currentUserPostList(postCurrentUser)
    }, [])

    useEffect(() => {
        currentIdUser(idUser - 1)
    }, [])


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
                    return <PostPreview post={post} key={post.id}/>
                })
                }
                <Link to={`/posts`} className={"posts_link"}>Все посты пользователя</Link>
            </div>
        </div>
    );
};

export default ProfileUser;
import React from 'react';
import {Link} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import './style.scss'
import {listUserLoad} from "../store/actions";
import axios from "axios";



const UserLIst = () => {

    const dispatch = useDispatch();
    const list = useSelector(state => state.userList);


    const loadUserList = async() => {
        const response = await axios
            .get("https://jsonplaceholder.typicode.com/users")

        dispatch(listUserLoad(response.data))
    }

    useEffect(() => {
        loadUserList()
    },[]);

    return (
        <div className="app-user-list">
            {list.map(user => {

                return (
                    <div className="list-user" key={user.id} id={user.id}>
                        <div>
                            <p>{user.name}</p>
                            <p>{user.surname}</p>
                        </div>
                        <div>
                            <Link to={`/profile/${user.id}`} className={"about_user_link"}>Перейти в профиль</Link>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default UserLIst;
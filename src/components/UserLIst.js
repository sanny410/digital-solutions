import React from 'react';
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import './style.scss'



const UserLIst = () => {

    const [list, setList] = useState({list: []})

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(resp => setList({list: resp}))
    },[]);

    return (
        <div className="app-user-list">
            {list.list.map(user => {

                return (
                    <div className="list-user" key={user.id}>
                        <div>
                            <p>{user.name}</p>
                            <p>{user.surname}</p>
                        </div>
                        <div>
                            <Link to={`/profile/:id`} className={"about_user_link"}>Перейти в профиль</Link>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default UserLIst;
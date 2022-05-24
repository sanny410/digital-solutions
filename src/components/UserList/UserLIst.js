import React from 'react';
import {Link} from "react-router-dom";
import './style.scss'

const UserLIst = ({list}) => {

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
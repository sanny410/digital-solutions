import React from 'react';
import {Link} from "react-router-dom";
import './style.scss'

const Header = () => {
    return (
        <div className="app-header">
            <Link className="header-link" to={`/`}>Список пользователей</Link>
        </div>
    );
};

export default Header;
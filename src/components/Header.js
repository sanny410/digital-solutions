import React from 'react';
import {Link} from "react-router-dom";
import './style.scss'

const Header = () => {
    return (
        <div className="app-header">
            <div className="header-link"><Link to={`/`} />Список пользователей</div>
        </div>
    );
};

export default Header;
import React, { useContext } from 'react';
import logo from '../../images/logo.png';
import './Header.css';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';

const Header = () => {
    const [loggedInUser , setLoggedInUser] = useContext(userContext);
    return (
        <div className = 'header'>
            <img src={logo} alt=""/>
            <nav>
                <Link to="/shop"> Shop </Link>
                <Link to="/reviwe"> Reviwe </Link>
                <Link to="/manage"> manage inventory </Link>
                <button onClick ={() => setLoggedInUser({})}>Sign Out</button>
            </nav>
        </div>
    );
};

export default Header;
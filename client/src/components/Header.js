import React from 'react';
import { Link } from "react-router-dom";


const Header = () => {

  
    return (
        <header className="header">
            <h3 className="header__title">Tecnical test</h3>
            <nav className="header__nav">
                <Link className="header__nav__link" to="/">Fetch</Link>
                <Link className="header__nav__link" to="/fastest-ship">Fastest ship</Link>
                <Link className="header__nav__link" to="/planet-terrain">Planet by terrain</Link>
            </nav>
        </header>
    );
}

export default Header;
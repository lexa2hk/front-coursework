import {Link} from "react-router-dom";
import React from "react";

function NavBar() {
    return (
        <header>
            <nav>
                <div className="nav-container">
                    <div className="logo">
                        <Link to="/">GANGRATUA SPACE</Link>
                    </div>
                    <div className="nav-links">
                        <ul>
                            <li>
                                <Link to="/">Исследовать</Link>
                            </li>
                            <li>
                                <Link to="/">Главная</Link>
                            </li>
                            <li>
                                <Link to="/about">О нас</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="nav-line"></div>

            </nav>
        </header>
    )
}

export default NavBar;

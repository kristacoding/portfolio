import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function nav() {
    return (
        <div className="body">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to="/portfolio-react"
                            className={
                                window.location.pathname === "/portfolio-react" || window.location.pathname === "/about"
                                    ? "nav-link active"
                                    : "navbar-brand"
                            }>
                            Meet Krista
                    </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/portfolio"
                            className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
                        >
                            Portfolio
                    </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/contactme"
                            className={window.location.pathname === "/contactme" ? "nav-link active" : "nav-link"}
                        >
                            Contact Me
                    </Link>
                    </li>
                    <li className="nav-item">
                    <a class="nav-link" href="https://drive.google.com/file/d/1kxCb5pak5TvL3kl2wBEaHllCjW4YqAt0/view?usp=sharing">View Resume</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default nav;
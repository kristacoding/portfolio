import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function nav() {
    return (
        <div className="body">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <img src="images/examples/profile/swirl.png" width="30" height="30"
                    className="d-inline-block align-top" alt="Krista" loading="lazy"></img>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to="/"
                            className={
                                window.location.pathname === "/" || window.location.pathname === "/about"
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
                        <Link
                            to="https://drive.google.com/file/d/1kxCb5pak5TvL3kl2wBEaHllCjW4YqAt0/view?usp=sharing"
                            className={window.location.replace === "https://drive.google.com/file/d/1kxCb5pak5TvL3kl2wBEaHllCjW4YqAt0/view?usp=sharing" ? "nav-link active" : "nav-link"}
                        >
                            View Resume
                    </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default nav;
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/"
                className={
                window.location.pathname === "/" || window.location.pathname === "/about"
                    ? "nav-link active"
                    : "navbar-brand"
                }>
                <img src="images/examples/profile/swirl.png" width="30" height="30"
                    className="d-inline-block align-top" alt="Krista Brand" loading="lazy"></img>
            Meet Krista
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
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
                        >
                            View Resume
                    </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default nav;
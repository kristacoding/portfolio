import React from "react";
import "./style.css";
import Col from "components/Core/Col";
import Row from "components/Core/Row";
import { Link } from "react-router-dom";

function Button() {
    <div>
        <Row>
            <Col class="col=md-3">
               <Link to="/portfolio">
                    <button className="btn btn">Portfolio</button>
                </Link> 
            </Col>
            <Col class="col=md-3">
                <Link to="/contactme">
                    <button className="btn btn">Contact Me</button>
                </Link> 

            </Col>
            <Col class="col=md-3">
            <button className="btn btn" href="https://drive.google.com/file/d/1kxCb5pak5TvL3kl2wBEaHllCjW4YqAt0/view?usp=sharing">View my Resume
            </button>
            </Col>
        </Row>
    </div>
}

export default Button; 

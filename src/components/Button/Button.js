import React from "react";
import "./style.css";
import Col from "../Col/Col";
import Row from "../Row/Row";
import { Link } from "react-router-dom";

function Button() {
    return(
    <div>
        <Row>
            <Col class="col=md-3">
               <Link to="/portfolio">
                    <button className="button btn-outline">Portfolio</button>
                </Link> 
            </Col>
            <Col class="col=md-3">
                <Link to="/contactme">
                    <button className="button btn-outline">Contact Me</button>
                </Link> 

            </Col>
            <Col class="col=md-3">
            <button className="button btn-outline" href="https://drive.google.com/file/d/1kxCb5pak5TvL3kl2wBEaHllCjW4YqAt0/view?usp=sharing">View my Resume
            </button>
            </Col>
            
        </Row>
    </div>
    );
}


export default Button; 

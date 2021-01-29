import React from "react";
import Container from "../components/Container/Container";
import Row from "../components/Row/Row";
import Col from "../components/Col/Col";
import Button from "../components/Button/Button";
import "./style.css";

function About() {
    return (
        <div className="body">
            <Container>
                <Row>
                    <div className="col-md">

                        <img className="img"
                            src={process.env.PUBLIC_URL + "/images/examples/Krista.jpg"}
                            alt="Krista Meiers" height="650" width="500">
                        </img>
                    </div>
                    <div className="col-md">
                        <h1>Hi! I'm Krista Meiers.</h1>
                        <h2> I am a Search Engine Optimization Specialist (SEO) and Junior Full Stack Developer.</h2>
                        <br></br>
                        <p>
                            Currently, I work at Project Management Institute (PMI) as an SEO Specialist. Since starting at
                            PMI in September 2019, I have been re-building their digital presence and creating a regional SEO
                            strategy. I truly enjoy the high paced, ever-evolving life of SEO, and am hoping to take my
                            technical website knowledge to the next step as a Junior Full-Stack Developer.
                        </p>
                        <p>
                            Beyond staring at a computer, I enjoy hiking, kayaking and traveling. My friends and I have traveled
                            to mulitple states to enjoy beautiful mountain hikes such as West Virginia, Virginia and Colorado.
                            If you have any hiking recommendations or looking for a SEO/Full Stack Developer, please reach out
                            through my contact me!
                        </p>
                        <Button />
                    </div>
                </Row>
            </Container>
        </div>
    );
}

export default About
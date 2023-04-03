import React from "react";
import { AttentionSeeker } from "react-awesome-reveal";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";
import profile from "../media/profile.png";
const Home = () => {
  return (
    <div>
      <AttentionSeeker shakeX>
        <Row>
          <Container align="center">
            <Col lg={14} xs={10}>
              <div className="img">
                <img src={profile} alt="divya_image" />
              </div>
            </Col>
          </Container>
        </Row>
        <Row>
          <Col lg={12} xs={12}>
            <h1 className="display-3 hello" align="center">
              <code> I'm Divya </code>
            </h1>
            <h2 className="lead" align="center">
              I am a React Frontend Developer
            </h2>
            <p className="lead" align="center">
              Currently working as a Frontend Developer at Knorex the
              in Pune, Maharashtra, India · Remote, I have been working
              on HTML, CSS, React, Redux, Bootstrap (other UI
              libraries) since sepetember 2022.
            </p>
          </Col>
        </Row>
      </AttentionSeeker>
    </div>
  );
};

export default Home;

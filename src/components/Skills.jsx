import React from "react";
import { Slide } from "react-awesome-reveal";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/esm/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3Alt,
  faHtml5,
  faJs,
  faReact,
  faRedux,

} from "@fortawesome/free-brands-svg-icons";
import skillimg from "../media/bg.jpg"
const Skills = ({ darkMode }) => {
  return (
    <div data-theme={darkMode ? "dark" : "light"}>
      <br></br>
      <Slide>
        <Container>
          <Row>
            <Col lg={4} xs={8}>
              <h1 className="display-3 skill-h">
                I can work <p className="with">with</p>{" "}
              </h1>
              <img
                src={skillimg}
                alt="skills"
                className="skills-img img-fluid animated"
              />
            </Col>
            <Col lg={2} xs={4}>
              <br></br>
              <Card className="nbcard">
                <Button
                  variant={darkMode ? "outline-light" : "outline-dark"}
                  className="skills-btn"
                >
                  <FontAwesomeIcon className="skill" size="2x" icon={faHtml5} />
                </Button>
                <br />

                <Button
                  variant={darkMode ? "outline-light" : "outline-dark"}
                  className="skills-btn"
                >
                  <FontAwesomeIcon
                    className="skill"
                    size="2x"
                    icon={faCss3Alt}
                  />
                </Button>
                <br />
                <Button
                  variant={darkMode ? "outline-light" : "outline-dark"}
                  className="skills-btn"
                >
                  <FontAwesomeIcon className="skill" size="2x" icon={faJs} />
                </Button>
                <br />
                <Button
                  variant={darkMode ? "outline-light" : "outline-dark"}
                  className="skills-btn"
                >
                  <FontAwesomeIcon className="skill" size="2x" icon={faReact} />
                </Button>
                <br />
                 
              </Card>
            </Col>
            <Col lg={6} xs={12}>
              <br></br>
              <Card className="skill-nbcard">
                <Card.Body>
                  <Card.Title>Front End</Card.Title>
                  <Card.Text>
                    HTML, CSS, JavaScript, ReactJs, Redux
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="skill-nbcard">
                <Card.Body>
                  <Card.Title>Tools</Card.Title>
                  <Card.Text>Git & Github, PostMan</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <br></br>
          <hr></hr>
        </Container>
      </Slide>
    </div>
  );
};

export default Skills;

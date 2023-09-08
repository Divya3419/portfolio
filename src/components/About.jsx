import React from "react";
import { Fade } from "react-awesome-reveal";
import "./styles.css";
import resume from "../media/Divya's Resume.pdf";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagramSquare,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const About = ({ darkMode }) => {
  var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
  };

  TxtRotate.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

    var that = this;
    var delta = 300 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  };

  window.onload = function () {
    var elements = document.getElementsByClassName("txt-rotate");
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute("data-rotate");
      var period = elements[i].getAttribute("data-period");
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }

    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.09em solid #666 }";
    document.body.appendChild(css);
  };

  return (
    <div className="about">
      <br></br>
      <br></br>
      <Fade>
        <Container align="center">
          <Row>
            <Col lg={8} align="center">
              <Card className="nbcard">
                <Card.Body>
                  <Card.Title>
                    <h2 className="lead">Let's have an introduction!</h2>
                  </Card.Title>
                  <br></br>
                  <Card.Text>
                    <p style={{ fontSize: "17px", fontWeight: "500" }}>
                      Experienced frontend engineer skilled in HTML, CSS,
                      JavaScript, and React. Proven track record in
                      collaborating with cross-functional teams, testing,
                      debugging, and optimizing website performance. Stay
                      up-to-date with the latest industry trends and best
                      practices. Strong communication and problem-solving
                      skills, consistently delivering high-quality products on
                      time and on budget.
                    </p>
                  </Card.Text>

                  <a href={resume} target="_blank" rel="noreferrer noopener">
                    <Button
                      variant={darkMode ? "outline-light" : "outline-dark"}
                      className="a"
                    >
                      <FontAwesomeIcon
                        className="dark"
                        size="lg"
                        icon={faFile}
                      />{" "}
                      View Resume
                    </Button>
                  </a>

                  <a href={resume} download>
                    <Button
                      variant={darkMode ? "outline-light" : "outline-dark"}
                      className="a"
                    >
                      <FontAwesomeIcon
                        className="dark"
                        size="lg"
                        icon={faFile}
                      />{" "}
                      Download Resume
                    </Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} align="center">
              <Card className="nbcard">
                <Card.Body>
                  <Card.Title>
                    <h2 className="lead">Let's Connect!</h2>
                  </Card.Title>
                  <br></br>

                  <div>
                    <p>
                      Divya
                      <br /> Jagriti,Vihar,Meerut
                      <br />{" "}
                      <strong style={{ fontWeight: "600" }}>8439637030</strong>
                      <br />
                      <strong style={{ fontWeight: "600" }}>
                        divyajain3419@gmail.com
                      </strong>
                    </p>
                  </div>

                  <br />

                  <a
                    className="social-icons"
                    href="https://linkedin.com/in/divya-jain-456a50197"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Button
                      variant={darkMode ? "outline-light" : "outline-dark"}
                    >
                      <FontAwesomeIcon
                        className="dark"
                        size="lg"
                        icon={faLinkedinIn}
                      />
                    </Button>
                  </a>

                  <a
                    className="social-icons"
                    href="https://github.com/Divya3419"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Button
                      variant={darkMode ? "outline-light" : "outline-dark"}
                    >
                      <FontAwesomeIcon
                        className="dark"
                        size="lg"
                        icon={faGithub}
                      />
                    </Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <br></br>
          <hr></hr>
        </Container>
      </Fade>
    </div>
  );
};

export default About;

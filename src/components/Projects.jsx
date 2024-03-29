import { React } from "react";
import { Zoom, Fade } from "react-awesome-reveal";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/esm/Button";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/esm/Card";
import bluemercury from "../media/bluemercury.png";
import potterybarn from "../media/potterybarn.png";
import lumen5 from "../media/lumen5.png";

const Experience = ({ darkMode }) => {
  return (
    <div data-theme={darkMode ? "dark" : "light"}>
      <br></br>
      <Fade>
        <Container>
          <br></br>
          <h2 className="lead" align="center">
            <b>- Projects -</b>
          </h2>
          <br></br>
          <Zoom>
            <Row>
              <Col lg={4} sm={12}>
                <Card
                  align="center"
                  className="exp"
                  data-theme={darkMode ? "dark" : "light"}
                >
                  <br></br>
                  <center style={{ height: "336px" }}>
                    <div className="flip-card" class="flip-card">
                      <div class="flip-card-inner">
                        <div className="flip-card-front">
                          <Card.Img variant="top" src={bluemercury} />
                          <Card.Body>
                            <Card.Title align="center">
                              -Clone Of Bluemercury-
                            </Card.Title>
                            <Card.Text>
                              <td style={{ fontSize: "14px" }}>
                                <p>Tech Stack: HTML, CSS, JavaScript, React, Redux</p>
                                <p align="center">Features:</p>
                                <tr>Fully dynamic products page, Cart Feature, Product Filtering, Social Sign-in/Sign-up</tr>
                              </td>
                            </Card.Text>
                          </Card.Body>
                        </div>
                        <div className="flip-card-back">
                          <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                            alt="html5"
                            width="40"
                            height="40"
                          />

                          <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                            alt="css3"
                            width="40"
                            height="40"
                          />

                          <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                            alt="javascript"
                            width="40"
                            height="40"
                          />

                          <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                            alt="react"
                            width="40"
                            height="40"
                          />
                          
                          
                        </div>
                      </div>
                    </div>
                  </center>
                  <br></br>
                  <br />
                  <div>
                    <a
                      href="https://bluemercury.netlify.app/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Button
                        variant={darkMode ? "outline-light" : "outline-dark"}
                        className="sbtn"
                      >
                        View Project
                      </Button>
                    </a>
                    <a
                      href="https://github.com/Divya3419/native-fog-9540"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Button
                        variant={darkMode ? "outline-light" : "outline-dark"}
                        className="sbtn"
                      >
                        View Github Repo
                      </Button>
                    </a>
                  </div>
                  <br></br>
                </Card>
              </Col>
              <Col lg={4} sm={12}>
                <Card
                  align="center"
                  className="exp"
                  data-theme={darkMode ? "dark" : "light"}
                >
                  <br></br>
                  <center>
                    <div class="flip-card">
                      <div class="flip-card-inner">
                        <div className="flip-card-front">
                          <Card.Img variant="top" src={potterybarn} />
                          <Card.Body>
                            <Card.Title align="center">
                              -Clone Of Pottery-Barn-
                            </Card.Title>
                            <Card.Text>
                              <td style={{ fontSize: "14px" }}>
                                <p>Tech Stack: HTML, CSS, JavaScript</p>
                                <p align="center">Features:</p>
                                <tr>
                                  Sign-in/Sign-up page with OTP verification, Categorization of products with carousel, Various filter functionalities.
                                  effect, Product page with Pincode verification
                                </tr>
                              </td>
                            </Card.Text>
                          </Card.Body>
                        </div>
                        <div className="flip-card-back">
                          <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                            alt="css3"
                            width="40"
                            height="40"
                          />
                          <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                            alt="html5"
                            width="40"
                            height="40"
                          />

                          <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                            alt="javascript"
                            width="40"
                            height="40"
                          />
                        </div>
                      </div>
                    </div>
                  </center>
                  <br></br>
                  <div>
                    <a
                      href="https://ephemeral-liger-c209b7.netlify.app/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Button
                        variant={darkMode ? "outline-light" : "outline-dark"}
                        className="sbtn"
                      >
                        View Project
                      </Button>
                    </a>

                    <a
                      href="https://github.com/Divya3419/Pottery-barn"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Button
                        variant={darkMode ? "outline-light" : "outline-dark"}
                        className="sbtn"
                      >
                        View Github Repo
                      </Button>
                    </a>
                  </div>
                  <br></br>
                </Card>
              </Col>
              <Col lg={4} sm={12}>
                <Card
                  align="center"
                  className="exp"
                  data-theme={darkMode ? "dark" : "light"}
                >
                  <br></br>
                  <center>
                    <div class="flip-card">
                      <div class="flip-card-inner">
                        <div className="flip-card-front">
                          <Card.Img variant="top" src={lumen5} />
                          <Card.Body>
                            <Card.Title align="center">
                              -Clone of Lumen5-
                            </Card.Title>
                            <Card.Text>
                              <td style={{ fontSize: "14px" }}>
                                <p>Tech Stack: HTML, CSS, JavaScript</p>
                                <p align="center">Features:</p>
                                <tr>Landing page with CSS effects, Social Sign-in/Sign-up, User authentication, contact-us and review page</tr>
                              </td>
                            </Card.Text>
                          </Card.Body>
                        </div>
                        <div className="flip-card-back">
                          <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                            alt="css3"
                            width="40"
                            height="40"
                          />
                          <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                            alt="html5"
                            width="40"
                            height="40"
                          />

                          <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                            alt="javascript"
                            width="40"
                            height="40"
                          />
                        </div>
                      </div>
                    </div>
                  </center>
                  <br></br>
                  <div>
                    <a
                      href="https://upbeat-saha-f5b7a4.netlify.app/index.html"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Button
                        variant={darkMode ? "outline-light" : "outline-dark"}
                        className="sbtn"
                      >
                        View Project
                      </Button>
                    </a>
                    <a
                      href="https://github.com/Divya3419/lumen5"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Button
                        variant={darkMode ? "outline-light" : "outline-dark"}
                        className="sbtn"
                      >
                        View Github Repo
                      </Button>
                    </a>
                  </div>
                  <br></br>
                </Card>
              </Col>
            </Row>
          </Zoom>
          <br></br>
          <Zoom>
            <Row>
              <Col lg={4} sm={12}></Col>
              <Col lg={4} sm={12}></Col>
              <Col lg={4} sm={12}></Col>
            </Row>
          </Zoom>
        </Container>
      </Fade>
      <br></br>
    </div>
  );
};

export default Experience;

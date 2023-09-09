import { useState, React } from "react";
import emailjs from "@emailjs/browser";
import swal from "sweetalert";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Contact = ({ darkMode }) => {
  const [templateParams, setTemplateParams] = useState({
    from_name: "",
    message: "",
  });

  const onInputChange = (e) => {
    setTemplateParams({ ...templateParams, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_dbhai8b",
        "template_kvyxjtb",
        templateParams,
        "MVSoBMyZ3TujCVjmS"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
    swal({
      title: "Sent Successfully!",
      text: "Glad to hear from you! I will get back to you as soon possible",
      icon: "success",
    });
    setTemplateParams({
      from_name: "",
      message: "",
    });
  };

  return (
    <div data-theme={darkMode ? "dark" : "light"}>
      <br></br>
      <Container>
        <Row>
          <Col lg={4}>
            <br></br>
            <h2 className="lead">Contact me!</h2>
            <p className="contact-text">
              Drop a suggestion, feedback, opportunities or we can colaborate on
              a project. Please mention your contact details if you are
              expecting a reply.
            </p>

            <h2 className="lead">Contact Details</h2>
            <div className="contact-text">
              <p>
                Divya <br />
                Jagriti,Vihar,Meerut <br />{" "}
                <strong style={{ fontWeight: "600" }}>8439637030</strong>
                <br />
                <strong style={{ fontWeight: "600" }}>
                  divyajain3419@gmail.com
                </strong>
              </p>
            </div>

            <div>
              <a
                className="social-icons"
                href="https://linkedin.com/in/divya-jain-456a50197"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Button variant={darkMode ? "outline-light" : "outline-dark"}>
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
                <Button variant={darkMode ? "outline-light" : "outline-dark"}>
                  <FontAwesomeIcon className="dark" size="lg" icon={faGithub} />
                </Button>
              </a>
            </div>
          </Col>
          <Col lg={8}>
            <br></br>

            <Form onSubmit={(e) => onSubmit(e)}>
              <Form.Group>
                <Form.Control
                  onChange={(e) => onInputChange(e)}
                  value={templateParams.from_name}
                  name="from_name"
                  className="ph name"
                  type="name"
                  placeholder="Enter your name"
                />
              </Form.Group>
              <br />
              <Form.Group>
                <Form.Control
                  onChange={(e) => onInputChange(e)}
                  value={templateParams.message}
                  name="message"
                  as="textarea"
                  rows={8}
                  className="ph msg"
                  placeholder="Enter your message"
                />
              </Form.Group>
              <Button
                style={{ marginTop: "1.3%" }}
                variant={darkMode ? "outline-light" : "outline-dark"}
                type="submit"
              >
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
        <img
          src="https://sagarmude.netlify.app/static/media/avatar.711110cc.svg"
          alt="contact"
          className="contact-img img-fluid"
        />
      </Container>
    </div>
  );
};

export default Contact;

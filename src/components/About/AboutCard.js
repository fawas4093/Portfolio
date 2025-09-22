import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Fawas A Shemeer </span>
            from <span className="purple"> kerala, India.</span>
            <br />
            I am currently employed as a software developer at BirdEye Technologies Llp, NIT Calicut.
            <br /> 
            <br />
            <br />
            <h3 className="education-underline">Education</h3>
            <br />
            <h4 className="purple">*Integrated MCA              (2020-2025)</h4>
             DePaul Institute Of Science and Technology, Kerala
            <br />
            <br />
            <h4 className="purple">*Plus Two(2019-2020)</h4>
            St Joseph EMHSS, Kerala
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> developing templates
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Fawas</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

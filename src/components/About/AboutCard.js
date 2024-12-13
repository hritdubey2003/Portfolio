import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Hritik Dubey </span>
            from <span className="purple"> Jaunpur, India.</span>
            <br />
            I was previously employed as a Software Engineer Intern with two companies SuperBolter Private Limited Technologies ( Bengaluru ) and UMID INFOTECH ( Remote )!
            <br />
            I will complete my B.Tech in Electronics and Communication Engineering from Indian Institute of Information Technology, Kalyani by Jul 2025.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Singing
            </li>
            <li className="about-activity">
              <ImPointRight /> Discussing New Topics
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Hritik</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

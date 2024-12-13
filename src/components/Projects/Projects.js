import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion (2).png";
import editor from "../../Assets/Projects/codeEditor (2).png";
import chatify from "../../Assets/Projects/chatigy.jpg";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="LinkTree"
              description="Developed an engaging and responsive user interface with HTML and CSS while implementing a robust backend using Ruby on Rails. This project ensured efficient data management and seamless platform interaction."
              ghLink="https://github.com/hritdubey2003/Linker"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bulk Email Scraper and Mail Sender"
              description="Designed an intuitive front-end with React and built a backend for keyword-based email scraping, bulk email sending via SMTP, and efficient data handling using Django, Scrapy, and Scrapyd API. This project highlights expertise in automation and efficient communication tools."
              ghLink="https://github.com/hritdubey2003/Email_Scraper_BackEnd"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="AI-Based Personal Travel Itinerary Generator"
              description="Utilized technologies like Google O-Authentication, Google Gemini, Firebase, and Location IQ to create a dynamic tool that generates day-wise plans, budgets, and companion details. By replacing the Google Places API with Location IQ, this project achieved enhanced trip insights through JSON-based results."
              ghLink="https://github.com/hritdubey2003/AITPIG"
              demoLink="https://aitpig.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Protein Classification into Enzymes"
              description="This project classifies proteins as enzymes using GCNs, GINs, and their ensemble, leveraging graph-based data for enhanced accuracy. GCNs excel in feature aggregation but face over-smoothing, a limitation addressed by GINs' robust aggregation. Combining these models improves predictions, with plans to integrate GATs for further accuracy and interpretability."
              ghLink="https://github.com/hritdubey2003/Protein_Classification"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Multi-Server Architecture Implementation"
              description="Engineered pub-sub architecture using redis for multi-server architecture impolementation in a group project in our college. Worked along with my buddy Arya Rai over this implementation!"
              ghLink="https://github.com/hritdubey2003/socket_upscaling"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="PG Finder Website"
              description="Developed during my Internshala training, this web platform enables users to search for PG accommodations across cities. Built with HTML, CSS, and JavaScript for a responsive frontend, and PHP with MySQL for robust backend and database management, the project highlights my full-stack development skills and efficient integration of technologies."
              ghLink="https://github.com/hritdubey2003/PG_Life"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

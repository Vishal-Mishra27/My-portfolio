import React from 'react'
import Container from "react-bootstrap/Container";
import Accordion from "react-bootstrap/Accordion";
export default function Faq() {
  return (
    <Container fluid>
      <div className="card mb-3" style={{ maxWidth: "100%" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="https://img.freepik.com/premium-vector/yellow-light-bulb-with-smile-it_410516-80048.jpg"
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title text-center">
                <span style={{ textAlign: "center", background: "aqua" }}>
                  FAQ
                </span>

                <h1
                  style={{ textAlign: "center", fontSize: "25px" }}
                  className="mt-2"
                >
                  Have any questions?
                </h1>
              </h5>
              <p className="card-text">
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Why we hire you?</Accordion.Header>
                    <Accordion.Body>
                      I bring a unique blend of creativity, technical expertise,
                      and a passion for problem-solving. With a strong
                      background in web development and design, I deliver
                      high-quality solutions that are not only functional but
                      also user-friendly. My dedication to continuous learning
                      ensures that I stay updated with industry trends, always
                      delivering cutting-edge results.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>How can i help you?</Accordion.Header>
                    <Accordion.Body>
                      I can help you by transforming your ideas into reality
                      through custom web development, responsive design, and
                      optimized solutions. Whether you need a full-fledged
                      website, a web app, or assistance in improving existing
                      platforms, I focus on creating seamless user experiences
                      that align with your goals and needs.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      Simple process for workflow
                    </Accordion.Header>
                    <Accordion.Body>
                      My workflow starts with understanding your vision,
                      followed by careful planning and design. I collaborate
                      closely with you throughout the development process,
                      ensuring your feedback is incorporated at every stage.
                      Once the project is ready, I focus on testing and refining
                      before delivering the final product and providing support
                      if needed.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>Why react is good?</Accordion.Header>
                    <Accordion.Body>
                      React is excellent for building dynamic, fast, and
                      scalable user interfaces. It allows for efficient updates
                      and rendering of components, making web apps more
                      responsive. With a large community, reusable components,
                      and easy integration with other tools, React ensures a
                      seamless development process and a high-performing
                      product.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header>
                      How will you handle workload?
                    </Accordion.Header>
                    <Accordion.Body>
                      I prioritize tasks effectively, breaking them into
                      manageable milestones to ensure consistent progress. By
                      staying organized, communicating regularly, and using
                      project management tools, I handle multiple tasks
                      efficiently while maintaining quality and meeting
                      deadlines.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

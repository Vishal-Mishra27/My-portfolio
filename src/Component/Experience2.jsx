import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Experience2() {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <Container>
      <Row>
        <Col sm={4}></Col>
        <Col sm={4}>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={textVariants}
            className="mt-1"
          >
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Code Alpha</h5>
                <h6>Virtual Internship</h6>
                <ul style={{ listStyleType: "disc" }}>
                  <li>
                    Assisted in coding, testing, and debugging applications
                    using C, JavaScript, HTML/CSS.
                  </li>
                  <li>
                    Participated in daily stand-up meetings and contributed to
                    project planning and sprint reviews.
                  </li>
                </ul>
                <div className="flex items-center justify-between mt-3">
                  <span
                    style={{
                      background: "#0d6efd",
                      fontWeight: "bold",
                      color: "white",
                      borderRadius: "5px",
                    }}
                    className="p-1"
                  >
                    Intern
                  </span>
                  <span
                    style={{
                      background: "#0d6efd",
                      fontWeight: "bold",
                      color: "white",
                      borderRadius: "5px",
                    }}
                    className="p-1"
                  >
                    Recommendation
                  </span>
                </div>
                <div className="card-footer my-1.5">
                  <small className="text-muted">
                    October, 2024 to November, 2024
                  </small>
                </div>
              </div>
            </div>
          </motion.div>
        </Col>
        <Col sm={4}></Col>
      </Row>
    </Container>
  );
}

export default Experience2;

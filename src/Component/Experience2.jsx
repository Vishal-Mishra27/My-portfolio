import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Experience2() {
  return (
    <Container>
      <Row>
        <Col sm={4}></Col>
        <Col sm={4}>
          {" "}
          <div className="mt-1">
            <div className="card ">
              <div className="card-body">
                <h5 className="card-title">Code Alpha</h5>
                <h6>Virtual Internship</h6>
                <p className="card-text">
                  <ul style={{ listStyleType: "disc" }}>
                    <li>
                      Assisted in coding, testing, and debugging applications
                      using [technologies/languages used, e.g., C,JAVASCRIPT,
                      HTML/CSS].
                    </li>
                    <li>
                      Participated in daily stand-up meetings and contributed to
                      project planning and sprint reviews.
                    </li>
                  </ul>
                </p>
                <div className="flex items-center justify-between">
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
                  <small className="text-muted ">
                    October,2024 to November,2024
                  </small>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col sm={4}></Col>
      </Row>
    </Container>
  );
}

export default Experience2;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyFooter = () => {
  return (
    <footer className="text-center text-lg-start text-white position-fixed bottom-0">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <strong>Get connected with us on social networks:</strong>
        </div>

        <div className="d-flex gap-3">
          <Link className="footer-link" to="/">
            <i className="bi bi-facebook"></i>
          </Link>
          <Link className="footer-link" to="/">
            <i className="bi bi-twitter-x"></i>
          </Link>
          <Link className="footer-link" to="/">
            <i className="bi bi-google"></i>
          </Link>
          <Link className="footer-link" to="/">
            <i className="bi bi-instagram"></i>
          </Link>
          <Link className="footer-link" to="/">
            <i className="bi bi-linkedin"></i>
          </Link>
          <Link className="footer-link" to="/">
            <i className="bi bi-github"></i>
          </Link>
        </div>
      </section>

      <section>
        <Container className="text-center text-md-start">
          <Row className="mt-3">
            <Col className="mx-auto mb-4">
              <div className="d-flex flex-column gap-2">
                <h6 className=" text-warning fw-bold">
                  <i className="bi bi-gem"></i> SkySense
                </h6>
                <p>
                  SkySense is a weather app that provides you with the latest
                  weather of your favorite cities.
                </p>
              </div>
            </Col>

            <Col  className="mx-auto">
              <div className="d-flex flex-column gap-2">
                <h6 className=" text-warning fw-bold">Q&A</h6>
                <Link className="footer-link" to="/">
                  Pricing
                </Link>
                <Link className="footer-link" to="/">
                  Settings
                </Link>

                <Link className="footer-link" to="/">
                  Help
                </Link>
              </div>
            </Col>

            <Col  className="mx-auto mb-md-0 mt-2 mt-md-0">
              <div className="d-flex flex-column gap-2">
                <h6 className=" text-warning fw-bold">Contact</h6>
                <p>
                  <i className="bi bi-house-door-fill"></i> New York, NY 10012,
                  US
                </p>
                <p>
                  <i className="bi bi-envelope-fill"></i> info@SkySense.com
                </p>
                <p>
                  <i className="bi bi-telephone"> </i>+ 01 234 567 88
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="text-center p-3">
          © {new Date().getFullYear()} Copyright SkySense
        </div>
      </section>
    </footer>
  );
};

export default MyFooter;

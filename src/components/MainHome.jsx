import { useState } from "react";
import { Button, Col, Container, Row, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const MyMain = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/home/:${search}`);
  };

  return (
    <Container className="d-flex flex-column align-items-center justify-content-center mt-5">
      <Row>
        <Col lg={12}>
          <div className="d-flex flex-column align-items-center justify-content-center">
            <h1 className="display-2 text-white fw-bold">
              <span className="text-warning">Sky</span> on screen
            </h1>
            <Form className="d-flex" onSubmit={handleSubmit}>
              <Form.Control
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search"
                className="me-2 rounded rounded-0 border-top-0 border-end-0 border-start-0 text-white custom-placeholder"
                aria-label="Search"
                style={{
                  backgroundColor: "transparent",
                }}
              />
              <Button variant="warning" type="submit">
                <i className="bi bi-search"></i>
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MyMain;

import { useState } from "react";
import {
  Button,
  Col,
  Container,
  Row,
  Form,
  Alert,
  Spinner,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const MyMain = () => {
  const myKey = "bf3d8ddb4e74c37efd82c130596a96e3";

  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/home/${search}`);
  };

  const handleGeolocation = () => {
    setIsLoading(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log("Position:", position);
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log("Latitude:", latitude);
        console.log("Longitude:", longitude);
        fetchCityName(latitude, longitude);
      });
    } else {
      console.error("Geolocation is not supported by this browser.");
      <Alert variant="danger">
        Geolocation is not supported by this browser.
      </Alert>;
    }
  };

  const fetchCityName = (latitude, longitude) => {
    fetch(
      `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${myKey}`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw Error(response.statusText);
        }
      })
      .then((data) => {
        const cityName = data[0].name;
        console.log("City Name:", cityName);
        navigate(`/home/:${cityName}`);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <Container className="d-flex flex-column align-items-center justify-content-center mt-5">
      <Row >
        <Col lg={12}>
          <div className="d-flex flex-column align-items-center justify-content-center">
            <h1 className="display-2 text-white fw-bold">
              <span className="text-warning">Sky</span> on screen
            </h1>
            <Form className="d-flex gap-2" onSubmit={handleSubmit}>
              <Form.Control
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search"
                className="me-2 rounded rounded-0 border-top-0 border-end-0 border-start-0 rounded rounded-2 custom-placeholder"
                aria-label="Search"
                
              />
              <Button variant="warning" type="submit">
                <i className="bi bi-search"></i>
              </Button>
              <Button className="btn-geo" onClick={handleGeolocation}>
                <i className="bi bi-crosshair"></i>
              </Button>
              <span>
                {isLoading && <Spinner animation="border" variant="warning" />}
              </span>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MyMain;

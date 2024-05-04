import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import NotFound from "./NotFoundPage";

const MyMainCityPage = (props) => {
  const myKey = "bf3d8ddb4e74c37efd82c130596a96e3";

  const [weatherCity, setWeatherCity] = useState();
  const [coordinates, setCoordinates] = useState();
  const [weather5days, setWeather5days] = useState();
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  const fetchCityLatLon = () => {
    fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${props.cityName}&appid=${myKey}`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw Error(response.statusText);
        }
      })
      .then((data) => {
        fetchWeather(data[0].lat, data[0].lon);
        setCoordinates(data[0]);
        fetch5days(data[0].lat, data[0].lon);
      })
      .catch((error) => {
        console.log(error);
        navigate("*");
      })
      .finally(() => setIsLoading(false));
  };

  const fetchWeather = (latParams, lonParams) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latParams}&lon=${lonParams}&appid=${myKey}`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw Error(response.statusText);
        }
      })
      .then((data) => {
        setWeatherCity(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetch5days = (latParams, lonParams) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${latParams}&lon=${lonParams}&appid=${myKey}`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw Error(response.statusText);
        }
      })
      .then((data) => {
        console.log(data);
        const fiveDaysForecast = data.list.filter((item) => {
          return item.dt_txt.includes("12:00:00");
        });
        setWeather5days(fiveDaysForecast);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //   const fiveDaysForecast = weather5days.list.filter((item) => {
  //     return item.dt_txt.includes("12:00:00");
  //   })

  //   const fiveDaysForecast =
  //     weather5days.list &&
  //     weather5days.list.filter((item) => {
  //       return item.dt_txt.includes("12:00:00");
  //     });
  //   console.log(fiveDaysForecast);

  const fromKelvinToCelsius = (temp) => {
    return Math.round(temp - 273.15);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/home/:${search}`);
    setSearch("");
  };

  useEffect(() => {
    fetchCityLatLon();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.cityName]);

  return (
    <div>
      {isLoading && (
        <Spinner
          style={{ position: "absolute", top: "50%", left: "50%" }}
          size="xl"
          animation="border"
          variant="warning"
        />
      )}
      {!coordinates && !isLoading && <NotFound />}
      {weatherCity && (
        <Container>
          <Row lg={2} xs={1}>
            <Col>
              <div className="d-flex flex-column align-items-start back-color p-3 rounded rounded-2">
                <div className="d-flex flex-column justify-content-between align-items-start mt-4">
                  <h1>Search a new city</h1>
                  <Form className="d-flex mt-2" onSubmit={handleSearch}>
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2 rounded rounded-0 border-top-0 border-end-0 border-start-0 text-white custom-placeholder"
                      aria-label="Search"
                      value={search}
                      onChange={(event) => setSearch(event.target.value)}
                      style={{
                        backgroundColor: "transparent",
                      }}
                    />
                    <Button variant="warning" type="submit">
                      <i className="bi bi-search"></i>
                    </Button>
                  </Form>
                </div>
              </div>
              <div className="d-flex flex-column align-items-start back-color p-3 rounded rounded-2 mt-4">
                <div className="d-flex justify-content-start align-items-end">
                  <h1 className="display-1">
                    {fromKelvinToCelsius(weatherCity.main.temp)}°
                  </h1>
                  <img
                    src={`https://openweathermap.org/img/w/${weatherCity.weather[0].icon}.png`}
                    alt=""
                    width="100"
                    height="100"
                  />
                </div>

                <h3 className="fw-bold "> {coordinates.name}</h3>

                <p className="fs-5">
                  {new Date(weatherCity.dt * 1000).toDateString()} | H:
                  {fromKelvinToCelsius(weatherCity.main.temp_max)}° | L:
                  {fromKelvinToCelsius(weatherCity.main.temp_min)}°
                </p>
              </div>
            </Col>
            <Col>
              <div className="back-color p-3 rounded rounded-2 mt-4 mt-lg-0">
                <h3 className="fw-bold">5 days forecast</h3>
                <hr />
                {weather5days && (
                  <div>
                    <Container>
                      {weather5days.map((item) => (
                        <Row
                          key={item.dt}
                          className="d-flex justify-content-between align-items-center"
                        >
                          <Col>
                            <p className="fw-bold">
                              {
                                new Date(item.dt_txt)
                                  .toDateString()
                                  .split(" ")[0]
                              }
                            </p>
                          </Col>
                          <Col className="text-center text-md-start">
                            <img
                              src={`https://openweathermap.org/img/w/${item.weather[0].icon}.png`}
                              alt="weather icon"
                              width="50"
                              height="50"
                            />
                          </Col>
                          <Col className="text-center text-md-start">
                            <p>{fromKelvinToCelsius(item.main.temp)}°</p>
                          </Col>
                          <Col className="d-none d-md-block">
                            <p>Humidity: {item.main.humidity}%</p>
                          </Col>
                          <Col className="d-none d-md-block">
                            <p>{item.weather[0].description}</p>
                          </Col>
                        </Row>
                      ))}
                    </Container>
                  </div>
                )}
              </div>

              <div></div>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default MyMainCityPage;

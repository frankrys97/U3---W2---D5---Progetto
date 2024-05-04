import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

function MyNavBar() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to={"/"}>
          <img src={logo} width="150" height="75" alt="SkySense logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto d-flex flex-row gap-3"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink to={"/"} className="nav-link">
              Home
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavBar;

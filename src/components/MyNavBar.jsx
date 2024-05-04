import Container from "react-bootstrap/Container";
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
      </Container>
    </Navbar>
  );
}

export default MyNavBar;

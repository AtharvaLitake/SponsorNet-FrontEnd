import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./NavbarC.css";
import logo from '../Images/SponsorNet Logo.png'
function NavbarC() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg">
      <Container>
        {/*<Navbar.Brand className="b" href="#home">*/}
        <img src={logo} className="image" />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto nav_header">
            SPONSORNET
          </Nav>
          <Nav>
            <Nav.Link className="b" href="#">
              HOME
            </Nav.Link>
            <Nav.Link className="b" href="#">
              MAIN
            </Nav.Link>
            <Nav.Link className="b" href="#">
              EVENTS
            </Nav.Link>
            <Nav.Link className="b" href="#">
              APPLY
            </Nav.Link>
            <Nav.Link className="b" href="#">
              ABOUT
            </Nav.Link>
            <NavDropdown
              className="ba"
              title="MENU"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item className="back" id="new" href="#action/3.1">
                Sponsornet
              </NavDropdown.Item>
              <NavDropdown.Item className="back" href="#action/3.2">
                Sponsornet
              </NavDropdown.Item>
              <NavDropdown.Item className="back" href="#action/3.3">
                Sponsornet
              </NavDropdown.Item>

              <NavDropdown.Item className="back" href="#action/3.4">
                Sponsornet links
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarC;

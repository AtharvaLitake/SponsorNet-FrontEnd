import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./NavbarC.css";
import logo from "../Images/SponsorNet Logo.png";
import { useCookies } from "react-cookie";
import { useNavigate, Link } from "react-router-dom";
function NavbarC() {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const LogOutHandler = () => {
    removeCookie("Id");
    removeCookie("AuthToken");
    navigate("/");
  };
  return (
    <Navbar collapseOnSelect expand="lg" className="bg">
      <Container>
        {/*<Navbar.Brand className="b" href="#home">*/}
        <img src={logo} className="image" />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto nav_header">SPONSORNET</Nav>
          <Nav>
            <Nav.Link className="b">
              <Link to="/" className="Link">
                HOME
              </Link>
            </Nav.Link>
            <Nav.Link className="b" href="#">
              <Link to="/main" className="Link">
                MAIN
              </Link>
            </Nav.Link>
            <Nav.Link className="b" href="#">
              <Link to="/eventDetails" className="Link">
                EVENT
              </Link>
            </Nav.Link>
            <Nav.Link className="b" href="#">
              <Link to="/eventDisplay" className="Link">
                SPONSOR
              </Link>
            </Nav.Link>
            {cookies.AuthToken ? (
              <NavDropdown
                className="ba"
                title="MENU"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item className="back" id="new">
                  <Link to="/myevents" className="Link">
                    MyEvents
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item className="back">
                  {" "}
                  <Link to="/application" className="Link">
                    Applications
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item className="back" onClick={LogOutHandler}>
                  LogOut
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link className="b">
                <Link to="/login" className="Link">
                  LOGIN{" "}
                </Link>
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarC;

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
            {cookies.AuthToken ? (
              <NavDropdown
                className="ba"
                title="MENU"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item className="back" id="new">
                  Sponsornet
                </NavDropdown.Item>
                <NavDropdown.Item className="back">Sponsornet</NavDropdown.Item>

                <NavDropdown.Item className="back" onClick={LogOutHandler}>
                  LogOut
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link className="b"  >
                <Link to='/login' className="Link">LOGIN </Link>
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarC;

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../assets/img/logo/logo-DTS-header.png"
import "./Navbar.css"
import "../../index.css"

function NavbarHeader() {
  return (
    <>
      <Navbar className="contNav" variant="dark" expand="md" style={{backgroundColor:"#066285"}}>
        <Navbar.Brand href="#">
            <img
              src={logo}
              className="d-inline-block align-top logo"
              alt="React Bootstrap logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle className="burguer" aria-controls="navbar-nav" />
        <Navbar.Collapse className="burguer" id="navbar-nav">
          <Nav className="ml-auto burguer">
            <Nav.Link href="#">Inicio</Nav.Link>
            <Nav.Link href="#">Quiénes somos</Nav.Link>
            <Nav.Link href="#">Servicios</Nav.Link>
            <Nav.Link href="#">Súmate</Nav.Link>
            <Nav.Link href="#">Nuestros casos</Nav.Link>
            <Nav.Link href="#">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}


export default NavbarHeader;
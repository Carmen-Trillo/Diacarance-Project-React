import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../assets/img/logo/logo-DTS-header.png"
import "./Navbar.css"

function NavbarHeader() {
  return (
    <>
      <Navbar  variant="dark" style={{backgroundColor:"#066285"}}>
      <Container className="contNav" style={{color: "#ffffff"}}>
          <Navbar.Brand href="#">
            <img
              src={logo}
              className="d-inline-block align-top logo"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#">Inicio</Nav.Link>
            <Nav.Link href="#">Quiénes somos</Nav.Link>
            <Nav.Link href="#">Servicios</Nav.Link>
            <Nav.Link href="#">Súmate</Nav.Link>
            <Nav.Link href="#">Nuestros casos</Nav.Link>
            <Nav.Link href="#">Contacto</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarHeader;
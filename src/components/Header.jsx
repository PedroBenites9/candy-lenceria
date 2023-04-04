import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Header() {
  return (
    <header className="App-header">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/home">Candy lenceria</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Hombres" id="basic-nav-dropdown">
                <NavDropdown.Header>Underwear</NavDropdown.Header>
                <NavDropdown.Item href="/underwear/boxers">
                  Boxers
                </NavDropdown.Item>
                <NavDropdown.Item href="/underwear/slip">Slip</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Header>Pijamas</NavDropdown.Header>
                <NavDropdown.Item href="/pijamas/camisas">
                  Camisas
                </NavDropdown.Item>
                <NavDropdown.Item href="/pijamas/short">
                  Shorts
                </NavDropdown.Item>
                <NavDropdown.Item href="/pijamas/batas">Batas</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Mujeres" id="basic-nav-dropdown">
                <NavDropdown.Item href="/tangas">Tangas</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#home">Nosotras</Nav.Link>
              <Nav.Link href="#link">Redes</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;

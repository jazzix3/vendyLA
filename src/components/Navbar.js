import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function TopNav() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/" className="mx-auto">VendyLA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto"> 
                
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#login">Guides</Nav.Link>
                <NavDropdown title="Neighborhoods" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Koreatown</NavDropdown.Item> {/* https://maps.latimes.com/neighborhoods/population/density/neighborhood/list/*/}
                <NavDropdown.Item href="#action/3.2">Westlake</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">East Hollywood</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Pico-Union</NavDropdown.Item>
                </NavDropdown>
          </Nav>
          <Nav className="ms-auto">
            <a class="btn btn-primary" href="#login" role="button">Login</a>
          </Nav>
         

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNav;
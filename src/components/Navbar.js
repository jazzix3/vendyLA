import { Container, Nav, Navbar } from 'react-bootstrap';
import Authentication from './Authentication';



function TopNav() {
  return (
    <Navbar bg="light" expand="sm" style={{ display: "flex", alignItems: "center" }}>
      <Container>
        <Navbar.Brand href="/" className="mx-auto">VendyLA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto"> 
                
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/reviews">Reviews</Nav.Link>

            </Nav>
            <Authentication />
            
        </Navbar.Collapse>


      </Container>
    </Navbar>
  );
}

export default TopNav;
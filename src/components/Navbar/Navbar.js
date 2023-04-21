import { Container, Nav, Navbar } from 'react-bootstrap';



function TopNav() {
  return (
    <Navbar bg="light" expand="sm">
      <Container>
        <Navbar.Brand href="/" className="mx-auto">VendyLA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto"> 
                
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/reviews">Reviews</Nav.Link>

            </Nav>
            <Nav className="ms-auto">
            <a className="btn btn-primary" href="/login" role="button">Login</a>
            </Nav>
        </Navbar.Collapse>


      </Container>
    </Navbar>
  );
}

export default TopNav;
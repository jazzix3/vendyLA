import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { AuthContext } from './Authentication';

function TopNav() {
    const { authUser, logOut } = useContext(AuthContext);

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
                    {authUser ? (
                        
                        <Nav className="ms-auto" style={{ display: "flex", alignItems: "center" }}>
                           <Link to="/Dashboard">Logged in as {authUser.email}</Link>
                            <Button className="btn btn-primary" style={{marginLeft: "15px"}} onClick={logOut}>Log Out</Button>
                        </Nav>
                            

                        ) 
                        
                    : (
                        <Nav className="ms-auto" style={{ display: "flex", alignItems: "center" }}>
                            <Link to="/Login"><button className="btn btn-primary">Log In</button></Link>
                        </Nav>
                        )
                    }
                </Navbar.Collapse>
            </Container>
    </Navbar>
  );
}

export default TopNav;

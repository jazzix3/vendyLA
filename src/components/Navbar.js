import { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { AuthContext, AuthContextProvider } from './Authentication';


function TopNav() {
    const { authUser, logOutListener } = useContext(AuthContext);

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
          
                {authUser === null ? (
                    <Nav className="ms-auto" style={{ display: "flex", alignItems: "center" }}>
                    <a className="btn btn-primary" href="/login" role="button">Log In</a>
                    </Nav>
                ) : (
                    <Nav className="ms-auto" style={{ display: "flex", alignItems: "center" }}>
                    <span>Logged in as {authUser.email}</span>
                    <a className="btn btn-primary" href="/" role="button" 
                        style={{marginLeft: "15px"}}  onClick={logOutListener}>Log Out</a>
                    </Nav>
                )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default function WrappedTopNav() {
    return (
        <AuthContextProvider>
            <TopNav />
        </AuthContextProvider>
    );
}

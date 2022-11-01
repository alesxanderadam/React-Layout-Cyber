import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <Navbar bg="dark" className='navbar-dark' expand="lg">
            <Container >
                <Navbar.Brand href="#">Start Bootsrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse className='justify-content-end' id="navbarScroll">
                    <Nav
                        className=" text-light my-2 my-lg-0 "
                        style={{ maxHeight: '100px', marginLeft: 'auto' }}
                        navbarScroll
                    >
                        <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link href="#">About</Nav.Link>
                        <Nav.Link href='#'>Contact</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
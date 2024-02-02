import { Col,Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import HeaderData from './HeaderData';
import './header.css';
function Header() {
    var header = ['HOME', 'COURSE', 'ACTIVIECS', 'BLOG', 'KNOW US', 'GET IN TOUCH', 'SUTDNET ZONE']

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">
                       
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Col lg={5}></Col>
                        <Nav>
                        {
                            header.map((ele)=>{
                                return(
                                    <Nav.Link className='fw-bold text-start Header-nav'>{ele}</Nav.Link>
                                );
                            })
                        }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}
export default Header;
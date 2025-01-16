import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import PagesCss from './Components.module.css';


export default function AppNavbar() {
  const token = localStorage.getItem('token')



  return (
    <div className=''>
      <Navbar bg="light" variant="light" expand="lg">
        <Container className="px-lg-5">
          <Navbar.Brand as={Link} to="/">
            <img src="./CompanyLogo-transparen.png" alt="Company Logo" width="100px" height="auto"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-center">
              <Nav.Link as={NavLink} to="/" exact className="px-3"><h4 className="text-dark">Home</h4></Nav.Link>
              <Nav.Link as={NavLink} to="/AboutUs" exact className={`${PagesCss.overflowy} px-3`}><h4 className="text-dark">About us</h4></Nav.Link>
              <Nav.Link as={NavLink} to="/ForTeachers" exact className={`${PagesCss.overflowy} px-3`}><h4 className="text-dark">For Teachers</h4></Nav.Link>
              <Nav.Link as={NavLink} to="/ForSchools" exact className={`${PagesCss.overflowy} px-3`}><h4 className="text-dark">For Schools</h4></Nav.Link>
              {(token !== null)?
                <>
                <Nav.Link as={NavLink} to="/users" exact className={`${PagesCss.overflowy} px-3`}><h4 className="text-dark">Users</h4></Nav.Link>
                <Nav.Link as={NavLink} to="/logout" exact className={`${PagesCss.overflowy} px-3`}><h4 className="text-dark">Log-out</h4></Nav.Link>
                </>
                :
                <>
                </>
              }  
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>

  );
}



import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css'

function Bar() {
  return (
   <>
   
    <Navbar expand="lg"  className="bg-transparents position-absolute top-0 start-0 w-100 z-3 text-white p-4 "  >
      <Container fluid className='d-flex justfiy-content-space-around '>



        <div>


        <Navbar.Brand href="#" className='text-white fs-1 fw-bold'>KOOPEE</Navbar.Brand>


        </div>


<div>


        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="Home"  className='text-white fs-5 m-1 hv'>Home</Nav.Link>
            <Nav.Link href="About"  className='text-white fs-5 m-1 hv'>About</Nav.Link>
            <Nav.Link href="Services"  className='text-white fs-5 m-1 hv'>service</Nav.Link>
            <Nav.Link href="Menu"  className='text-white fs-5 m-1 hv'>Menu</Nav.Link>
            <Nav.Link href="Contact"  className='text-white fs-5 m-1 hv'>contact</Nav.Link>
          </Nav>
         
        </Navbar.Collapse>
</div>

      </Container>
    </Navbar>
   </>
  )
}

export default Bar
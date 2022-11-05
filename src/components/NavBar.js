import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export const NavBar = ({filterSearch}) => {
  const [SearchValue,setSearchValue] = useState('')
  const Searchfun = ()=>{
    filterSearch(SearchValue)
    setSearchValue('')
  }

  return (
        <Navbar bg="dark" expand="lg" variant='dark'>
      <Container >
        <Navbar.Brand href="#" className='brand-color'>مطعم جديد</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <Form className="d-flex">s
            <Form.Control
              type="text"
              placeholder="ابحث"
              className="me-2"
              onChange={(e)=>{setSearchValue(e.target.value)}}
            />
            <Button onClick={()=>{Searchfun()}} variant="outline-success" className='btn-search'>ابحث</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
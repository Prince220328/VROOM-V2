
import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom'; 

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>
            <p>VROOM &copy; {currentYear}</p>
          </Col>
          <Col className='text-center py-3'> 
            <Link to="/about">About Us</Link> 
          </Col>
          <Col className='text-center py-3'> 
            <Link to="/FAQ">FAQ</Link> 
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
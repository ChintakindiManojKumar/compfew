import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MoodTracker from '../features/MoodTracker';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigationbar = () => {
  const [activeTab, setActiveTab] = useState(null);

  return (
    <>
    <Navbar bg="primary">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Container>
    </Navbar>

    
  </>
  );
};


export default Navigationbar
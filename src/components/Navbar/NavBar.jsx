import React, { useState } from "react";
import { FiList, FiBell, FiUser } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Navbar bg="white" expand="lg" className="shadow-sm">
      <Container>
        {/* Brand */}
        <Navbar.Brand href="/" className="text-primary">
          <Image src="./public/logo.png" fluid />
        </Navbar.Brand>

        {/* Toggle Button */}
        <Navbar.Toggle aria-controls="navbarContent" />

        {/* Collapsible Content */}
        <Navbar.Collapse id="navbarContent">
          <Nav className="me-auto">{/* Placeholder for future links */}</Nav>

          {/* Login Button or Icon Group */}
          {!isLoggedIn ? (
            <Button
              variant="primary"
              style={{
                backgroundColor: "#7126B5",
                borderColor: "#7126B5",
              }}
              className="d-flex align-items-center"
              onClick={handleLogin}
            >
              <FaUser className="me-2" />
              Masuk
            </Button>
          ) : (
            <div className="d-flex align-items-center">
              <FiList size={20} className="me-3" />
              <FiBell size={20} className="me-3" />
              <FiUser size={20} />
            </div>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

import React from "react";
import { Container, Row, Col, Navbar, Nav, NavDropdown } from "react-bootstrap";
import Link from "next/link";
import { BsSearch,BsFillCartFill } from "react-icons/bs";
import Image from "next/image";
import logo from "/public/images/CG Herbals Logo.png";

function Header() {
  return (
    <>
      <div >
        <Navbar className="main-haeder" collapseOnSelect expand="lg" bg="light" >
          <Container>
            <Navbar.Brand href="#home">
              <div>
                <Image src={logo} width={107} height={63} />
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className=" mx-auto mb-2 mb-lg-0 ">
                <Link href="/"><a className="nav-link mx-3">HOME</a></Link>
                <Link href="#pricing"><a className="nav-link mx-3">PRODUCTS</a></Link>
                <Link href="/"><a className="nav-link mx-3">ABOUT</a></Link>
                <Link href="#pricing"><a className="nav-link mx-3">CORPORATE</a></Link>
                <Link href="/"><a className="nav-link mx-3">NEWS</a></Link>
                <Link eventKey={3} href="#memes">
                 <a className="nav-link mx-3"> CONTACT</a>
                </Link>
              </Nav>
              <Nav>
                <NavDropdown title="INR" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
                &nbsp; &nbsp; 
               <div className="pt-1">
               <Link href="/"><BsSearch className/></Link>&nbsp; &nbsp; 
                <Link href="#pricing"><BsFillCartFill/></Link>
               </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
       
      </div>
      
    </>
  );
}

export default Header;

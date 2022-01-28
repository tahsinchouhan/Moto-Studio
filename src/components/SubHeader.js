import React from 'react'
import { Container, Row, Col, Navbar, Nav, NavDropdown } from "react-bootstrap";
import Link from "next/link";


function SubHeader() {
    return (
        <>
            <div>
            <Navbar className="sub-haeder" collapseOnSelect expand="lg" bg="" >
          <Container>           
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
               
              <Nav className=" me-auto mb-2 mb-lg-0 ">
                <Link href="/"><a className="sub-nav-link mx-3">Shop All</a></Link>
                <Link href="#pricing"><a className="sub-nav-link mx-3">Gourmet Foods</a></Link>
                <Link href="/"><a className="sub-nav-link mx-3">Beauty Products</a></Link>
                <Link href="#pricing"><a className="sub-nav-link mx-3">Alternative Medicine</a></Link>
                <Link href="/"><a className="sub-nav-link mx-3">Health & Personal Care</a></Link>
             
              </Nav>
              <Nav>
              <Link eventKey={3} href="#memes">
                 <a className="sub-nav-link mx-2">  Gift Boxes</a>
                </Link>
                <Link eventKey={3} href="#memes">
                 <a className="sub-nav-new">NEW!</a>
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
            </div>
        </>
    )
}

export default SubHeader

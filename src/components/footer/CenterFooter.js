import React from 'react'
import { Container, Row, Col, Navbar, Nav, NavDropdown } from "react-bootstrap";

import Image from 'next/image';
import footerlogo from "../../../public/images/footerlogo.png"
import { GrFacebook,GrInstagram,GrAmazon } from "react-icons/gr";

function CenterFooter() {
    return (
        <>
          <div className='center-footer pt-5'>
              <Container>
                  <Row>
                      <Col sm={12} lg={3}>
                          <div>
                              <Image src={footerlogo} alt="footerlogo" />
                          </div>
                      </Col>
                      <Col sm={12} lg={2}>dkjbljas</Col>

                      <Col sm={12} lg={2}>dkjbljas</Col>
                      <Col sm={12} lg={2}>dkjbljas</Col>
                      <Col sm={12} lg={3}>
                          <div>
                              <h6>DIGITAL PRESENCE</h6>
                              <div>
                                  <GrFacebook/> &nbsp;  &nbsp;  &nbsp; 
                                  <GrInstagram/> &nbsp;  &nbsp;  &nbsp; 
                                  <GrAmazon/>
                              </div>
                          </div>
                      </Col>

                  </Row>
              </Container>
          </div>
        </>
    )
}

export default CenterFooter

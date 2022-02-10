import React from "react";
import { Container, Row, Col, Navbar, Nav, NavDropdown } from "react-bootstrap";

import Image from "next/image";
import footerlogo from "../../../public/images/footerlogo.png";
import { GrFacebook, GrInstagram, GrAmazon } from "react-icons/gr";
import LastFooter from "./LastFooter";

function CenterFooter() {
  return (
    <>
      <div className="center-footer ">
        <Container>
        <div className="cg-center-div">
          <Row>
            <Col sm={12} lg={3} className="text-center">
              <div>
                <Image src={footerlogo} alt="footerlogo" />
              </div>
            </Col>
            <Col sm={12} md={12} lg={6}>
                <Row>
                <Col sm={4} md={4} lg={4}>
              <div className="footer-cg-herbal">
                <h6 className="footer-center-header ">SHOP</h6>
                <div>
                  <div className="footer-cg-para">Sweets</div>
                  
                  <div className="footer-cg-para">Cookies</div>
                  
                  <div className="footer-cg-para">Honey</div>
                  
                  <div className="footer-cg-para">Ayurvedic</div>
                  
                </div>
              </div>
            </Col>

            <Col sm={4} md={4} lg={4}>
            <div className="footer-cg-herbal">
                <h6 className="footer-center-header">SUPPORT</h6>
                <div>
                  <div className="footer-cg-para">Contact Us</div>
               
                  <div className="footer-cg-para">FAQ</div>
               
                  <div className="footer-cg-para">Privacy Policy</div>
               
                  <div className="footer-cg-para">Terms of Use</div>
               
                </div>
              </div>
            </Col>
            <Col sm={4} md={4}  lg={4}>
            <div className="footer-cg-herbal">
                <h6 className="footer-center-header">MY ACCOUNT</h6>
                <div>
                  <div className="footer-cg-para">Sign In</div>
                  <div className="footer-cg-para">My Cart</div>
                  <div className="footer-cg-para">Checkout</div>
                </div>
              </div>
            </Col>
                </Row>
            </Col>
            <Col sm={12} lg={3}>
              <div className="footer-cg-herbal ">
                <h6 className="footer-center-header text-lg-start text-center">DIGITAL PRESENCE</h6>
                <div className="footer-center-icon  text-lg-start text-center mt-4">
                  <GrFacebook className="cg-footer-icon" /> &nbsp; &nbsp; &nbsp;
                  <GrInstagram className="cg-footer-icon"/> &nbsp; &nbsp; &nbsp;
                  <GrAmazon className="cg-footer-icon"/>
                </div>
              </div>
            </Col>
          </Row>
          </div>
        </Container>
        </div>
      <LastFooter/>

    
    </>
  );
}

export default CenterFooter;

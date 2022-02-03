import React from "react";
import { Container, Row, Col, Navbar, Nav, NavDropdown } from "react-bootstrap";

import Image from "next/image";
import footerlogo from "../../../public/images/footerlogo.png";
import { GrFacebook, GrInstagram, GrAmazon } from "react-icons/gr";
import LastFooter from "./LastFooter";

function CenterFooter() {
  return (
    <>
      <div className="center-footer pt-5">
        <Container>
          <Row>
            <Col sm={12} lg={4} className="text-center">
              <div>
                <Image src={footerlogo} alt="footerlogo" />
              </div>
            </Col>
            <Col sm={12} md={4} lg={4}>
                <Row>
                <Col sm={12} lg={4}>
              <div className="footer-cg-herbal">
                <h6 className="footer-center-header">SHOP</h6>
                <div>
                  <span className="footer-cg-para">Sweets</span>
                  <br />
                  <span className="footer-cg-para">Cookies</span>
                  <br />
                  <span className="footer-cg-para">Honey</span>
                  <br />
                  <span className="footer-cg-para">Ayurvedic</span>
                  <br />
                </div>
              </div>
            </Col>

            <Col sm={12} lg={4}>
            <div className="footer-cg-herbal">
                <h6 className="footer-center-header">SUPPORT</h6>
                <div>
                  <span className="footer-cg-para">Contact Us</span>
                  <br />
                  <span className="footer-cg-para">FAQ</span>
                  <br />
                  <span className="footer-cg-para">Privacy Policy</span>
                  <br />
                  <span className="footer-cg-para">Terms of Use</span>
                  <br />
                </div>
              </div>
            </Col>
            <Col sm={12} lg={4}>
            <div className="footer-cg-herbal">
                <h6 className="footer-center-header">MY ACCOUNT</h6>
                <div>
                  <span>Sign In</span>
                  <br />
                  <span>My Cart</span>
                  <br />
                  <span>Checkout</span>
                </div>
              </div>
            </Col>
                </Row>
            </Col>
            <Col sm={12} lg={4}>
              <div className="footer-cg-herbal">
                <h6 className="footer-center-header">DIGITAL PRESENCE</h6>
                <div className="footer-center-icon mt-4">
                  <GrFacebook /> &nbsp; &nbsp; &nbsp;
                  <GrInstagram /> &nbsp; &nbsp; &nbsp;
                  <GrAmazon />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      <LastFooter/>

      </div>
    </>
  );
}

export default CenterFooter;

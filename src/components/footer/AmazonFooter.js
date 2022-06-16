import React from "react";
import { Container, Row, Col, Navbar, Nav, NavDropdown } from "react-bootstrap";
import Image from "next/image";
import amazonlogo from "../../../public/images/amazon.png";
import flipkartlogo from "../../../public/images/flipkart.png";

function AmazonFooter() {
  return (
    <div className="amazon-div">
      <Container>
        <Row>
          <Col sm={12} lg={8}>
            <div className="amazon-wrapper">
              <p className="amazon-product">
                Your favourite Chhattisgarh Herbals products also available on
              </p>
            </div>
          </Col>

          <Col sm={5} lg={2} className="wrapper-mobile-fix">
            <div className="amazon-wrapper footer-logo-img">
              <Image
                src={amazonlogo}
                alt="amazonlogo"
                className="footer-logo"
              />
            </div>
          </Col>
          <Col sm={5} lg={2} className="wrapper-mobile-fix">
            <div className="amazon-wrapper footer-logo-img flipkart">
              <Image
                src={flipkartlogo}
                alt="amazonlogo"
                className="footer-logo"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AmazonFooter;

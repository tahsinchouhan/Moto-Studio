import React from "react";
import { Container, Row, Col, Navbar, Nav, NavDropdown } from "react-bootstrap";
import Image from "next/image";
import amazonlogo from "../../../public/images/amazon.png";

function AmazonFooter() {
  return (
    
      <div className="amazon-div">
        <Container>
          <Row>
            <Col sm={12} lg={8}>
             <div className="text-center pt-5">
             <p>
                Buy all your favourite products from the world’s largest online
                store
              </p>
             </div>
            </Col>
            <Col sm={12} lg={4}>
              <div  className="text-center pt-4">
                <Image src={amazonlogo} alt="amazonlogo" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    
  );
}

export default AmazonFooter;

import React from "react";
import { Container, Row, Col, Navbar, Nav, NavDropdown } from "react-bootstrap";
import Image from "next/image";
import HairShampoos from "../../../public/images/hairShampoos.png";
import HairMarks from "../../../public/images/hairMarks.png";
import skincare from "../../../public/images/skincare.png";

function BeautyProducts() {
  return (
    <div>
      <div className="container-fluid">
        <div className="container">
          <div className="all-shop-list p-3 m-3">
            <Row className="offset-sm-3">
              {/* <Col > */}
              <Row>
                <Col md={4} lg={4}>
                  <div className="text-center">
                    <div>
                      <Image src={HairMarks} alt="HairMarks" />
                    </div>
                    <span className="Wildforest">Hair Masks</span>
                  </div>
                </Col>

                <Col md={4} lg={4}>
                  <div className="text-center">
                    <div>
                      <Image src={HairShampoos} alt="shampoos" />
                    </div>
                    <span className="Wildforest">Shampoos</span>
                  </div>
                </Col>
                <Col md={4} lg={4}>
                  <div className="text-center">
                    <div>
                      <Image src={skincare} alt="skincare" />
                    </div>
                    <span className="Wildforest">Skin Care</span>
                  </div>
                </Col>
              </Row>
              {/* </Col> */}
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BeautyProducts;

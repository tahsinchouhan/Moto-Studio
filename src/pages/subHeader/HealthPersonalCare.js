import React from "react";
import { Container, Row, Col, Navbar, Nav, NavDropdown } from "react-bootstrap";

import Image from "next/image";
import six from "../../../public/images/six.png";
import Seekpng from "../../../public/images/SeekPng.png";

function HealthPersonalCare() {
  return (
    <div>
      <div className="container-fluid">
        <div className="container">
          <div className="all-shop-list p-3 m-3">
            <Row className="offset-sm-1">
              <Row>
                <Col md={3} lg={3} className="text-center">
                  <div className="six-list">
                    <Image src={Seekpng} alt="Seekpng" />
                  </div>
                </Col>

                <Col md={3} lg={3} className="text-center">
                  <div className="">
                    <div className="six-list">
                      <h6 className="Grocery-foods">Herbal Soaps</h6>
                    </div>
                    <div>
                      <span className="Wildforest">Aloe Vera Soap</span>
                      <br />
                      <span className="Wildforest">Goat Milk Soap</span>
                      <br />
                      <span className="Wildforest">Lemon Soap</span>
                      <br />
                    </div>
                  </div>
                </Col>
                <Col md={3} lg={3} className="text-center">
                  <div>
                    <Image src={six} alt="six" />
                  </div>
                </Col>
                <Col md={3} lg={3} className="text-center">
                  <div className="six-list">
                    <div>
                      <h6 className="Grocery-foods">Other Products</h6>
                    </div>
                    <div>
                      <span className="Wildforest">Clear Skin Face Pack</span>
                      <br />
                      <span className="Wildforest">Handmade Green Tea</span>
                      <br />
                      <span className="Wildforest">Ayurvedic Powders</span>
                      <br />
                    </div>
                  </div>
                </Col>
              </Row>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HealthPersonalCare;

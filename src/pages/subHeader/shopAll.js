import React from "react";
import { Container, Row, Col, Navbar, Nav, NavDropdown } from "react-bootstrap";

function ShopAll() {
  return (
    <div>
      <div className="container-fluid">
        <div className="container">
          <div className="all-shop-list p-3 m-3">
            <Row>
              <Col md={4} lg={4}>
                <div className="grocery-gourmet-foods">
                  <h6 className="Grocery-foods">Grocery & Gourmet Foods</h6>
                  <div>
                    <Row>
                      <Col md={6} lg={6}>
                        <div>
                          <span className="Wildforest">Wildforest Honey</span>
                          <br />
                          <span className="Wildforest">Chiroji Seeds</span>
                          <br />
                          <span className="Wildforest">Premium Organic Rice</span>
                          <br />
                          <span className="Wildforest">Premium Organic Pulses</span>
                          <br />
                          <span className="Wildforest">Premium Powders & Mixes</span>
                          <br />
                        </div>
                      </Col>
                      <Col md={6} lg={6}>
                        <div>
                          <span className="Wildforest">Amla Products</span>
                          <br />
                          <span className="Wildforest">Organic Green Tea</span>
                          <br />
                          <span className="Wildforest">Sweets</span>
                          <br />
                          <span className="Wildforest">Cashews</span>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
              {/* <div>
                  <div className="stret-line"></div>
              </div> */}
              <Col md={3} lg={3}>
                <div className="grocery-gourmet-foods">
                  <h6 className="Grocery-foods">Beauty  Products</h6>
                  <div>
                    <span  className="Wildforest">Wildforest Honey</span>
                    <br />
                    <span  className="Wildforest">Chiroji Seeds</span>
                    <br />
                    <span  className="Wildforest">Premium Organic Rice</span>
                    <br />
                    <span  className="Wildforest">Premium Organic Pulses</span>
                    <br />
                    <span  className="Wildforest">Premium Powders & Mixes</span>
                    <br />
                  </div>
                </div>
              </Col>
              <Col md={3} lg={3}>
                <div className="grocery-gourmet-foods">
                  <h6 className="Grocery-foods">Alternative Medicine</h6>
                  <div>
                    <span  className="Wildforest">Wildforest Honey</span>
                    <br />
                    <span  className="Wildforest">Chiroji Seeds</span>
                    <br />
                    <span  className="Wildforest">Premium Organic Rice</span>
                    <br />
                    <span  className="Wildforest">Premium Organic Pulses</span>
                    <br />
                    <span  className="Wildforest">Premium Powders & Mixes</span>
                    <br />
                  </div>
                </div>
              </Col>
              <Col md={2} lg={2}>
                <div>
                  <h6 className="Grocery-foods">Health&Personal Care</h6>
                  <div>
                    <span  className="Wildforest">Wildforest Honey</span>
                    <br />
                    <span  className="Wildforest">Chiroji Seeds</span>
                    <br />
                    <span  className="Wildforest">Premium Organic Rice</span>
                    <br />
                    <span  className="Wildforest">Premium Organic Pulses</span>
                    <br />
                    <span  className="Wildforest">Premium Powders & Mixes</span>
                    <br />
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopAll;

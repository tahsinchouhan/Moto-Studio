import React from "react";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import image1 from "../../assets/images/shoppingCart/image1.png";
import image2 from "../../assets/images/shoppingCart/image2.png";
import Link from "next/link";

function Shopping() {
  return (
    <div>
      <Container className="shopping-container">
        <Row>
          <Col lg={8} md={12} className="mb-4">
            <h1 className="shopping-cart-heading mb-4">Shopping Cart</h1>
            <hr />
            <Row>
              <Col>
                <p className="m-0 shopping-p-size">PRODUCT DETAILS</p>
              </Col>
              <Col xs lg="2">
                <p className="m-0 shopping-p-size">QUANTITY</p>
              </Col>
              <Col xs lg="2">
                <p className="m-0 shopping-p-size">TOTAL</p>
              </Col>
              <Col xs lg="2">
                <p className="m-0 shopping-p-size">TOTAL</p>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col xs lg="6">
                <Row>
                  <Col xs lg="6" md="12" sm="12">
                    <Image src={image1} alt="image1" />
                  </Col>
                  <Col xs lg="6" md="12">
                    <p className="fw-bold shopping-p2-size">
                      Lemongrass Green Tea
                    </p>
                    <p className="shopping-p3-size">
                      QUANTITY &nbsp; <span className="fw-bold ">500g</span>
                    </p>
                    <p className="shopping-p3-size">
                      Product Code &nbsp;{" "}
                      <span className="fw-bold ">192150</span>
                    </p>
                  </Col>
                </Row>
              </Col>

              <Col xs lg="2" className="mt-3">
                <p className="m-0 shopping-p3-size">
                  <span className="fw-bold text-danger">REMOVE</span>
                </p>
              </Col>
              <Col xs lg="2" className="mt-5">
                <p className="fw-bold shopping-p4-size">₹450.00</p>
              </Col>
              <Col xs lg="2" className="mt-5">
                <p className="fw-bold shopping-p4-size">₹900.00</p>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col xs lg="6">
                <Row>
                  <Col xs lg="6" md="12" sm="12">
                    <Image src={image2} alt="image1" />
                  </Col>
                  <Col xs lg="6" md="12">
                    <p className="fw-bold shopping-p2-size">
                      Lemongrass Green Tea
                    </p>
                    <p className="shopping-p3-size">
                      QUANTITY &nbsp; <span className="fw-bold ">500g</span>
                    </p>
                    <p className="shopping-p3-size">
                      Product Code &nbsp;
                      <span className="fw-bold ">192150</span>
                    </p>
                  </Col>
                </Row>
              </Col>

              <Col xs lg="2" className="mt-3">
                <p className="m-0 shopping-p3-size">
                  <span className="fw-bold text-danger">REMOVE</span>
                </p>
              </Col>
              <Col xs lg="2" className="mt-5">
                <p className="fw-bold shopping-p4-size">₹450.00</p>
              </Col>
              <Col xs lg="2" className="mt-5">
                <p className="fw-bold shopping-p4-size">₹900.00</p>
              </Col>
            </Row>
            <hr />

            <Link href="/" className="continue-shopping-text">
              CONTINUE SHOPPING
            </Link>
          </Col>

          <Col lg={4} md={12}>
            <div className="order-summary-card p-4">
              <h6 className="fw-bold order-summary-text">ORDER SUMMARY</h6>
              <hr />

              <div className="d-flex justify-content-between">
                <div>
                  <p className="order-summary-p1">ITEMS-2</p>
                </div>
                <div>
                  <p className="fw-bold order-summary-p2"> ₹1150.00</p>
                </div>
              </div>
              <p className="order-summary-p1">SHIPPING</p>
              <div className="free-home-delivery-div">
                {" "}
                <p className=" m-0 px-2 pt-1 free-home-delivery-p">
                  FREE HOME DELIVERY{" "}
                  <span className="fw-bold free-home-delivery-p2 ps-5">
                    ₹0.00
                  </span>
                </p>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <div>
                  <p className="order-summary-p1">TOTAL COST</p>
                </div>
                <div>
                  <p className="fw-bold order-summary-p2"> ₹1150.00</p>
                </div>
              </div>
              <div className="text-center ">
                <button className="w-100 border-0 checkout-button">
                  CHECKOUT
                </button>
              </div>
              <p className="order-summary-p1 mt-3">ADD PROMO CODE</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Shopping;

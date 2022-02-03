import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Shopping() {
  return (
    <div>
      <Container>
        <Row>
          <Col lg={8} md={12}>
            <h1>Shopping Cart</h1>
            <hr />
            <div className="d-flex justify-content-around">
              <div><p className="m-0 shopping-p-size">PRODUCT DETAILS</p></div>
              <div><p className="m-0 shopping-p-size">QUANTITY</p></div>
              <div><p className="m-0 shopping-p-size" >TOTAL</p></div>
            </div>
            <hr />
          </Col>

          <Col lg={4} md={12}></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Shopping;

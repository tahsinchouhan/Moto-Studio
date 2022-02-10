import { useState } from "react";
import ButtonDark from '../../components/button/ButtonDark'
import Image from "next/image";
import { Button, Col, Container, Row } from "react-bootstrap";
import image1 from "../../assets/images/shoppingCart/image1.png";
import image2 from "../../assets/images/shoppingCart/image2.png";
import Link from "next/link";

function Shopping() {
  const [increment, setIncrement] = useState();
  const [decrement, setDecrement] = useState();
  const [counter, setCounter] = useState(0);

  const incrementHandler = () => {
    setCounter(counter + 1);
    console.log("setIncrement");
  };
  const decrementHandler = () => {
    setCounter(counter - 1);
    console.log("setDecrement");
  };

  return (
    <div>
      <Container className="shopping-container">
        <Row className="p-3">
          <Col lg={8} md={12} className="mb-4 ">
            <h1 className="shopping-cart-heading mb-4">Shopping Cart</h1>
            <hr />
            <Row>
              <Col>
                <p className="m-0 shopping-p-size">PRODUCT DETAILS</p>
              </Col>
              <Col lg="2">
                <p className="m-0 shopping-p-size">QUANTITY</p>
              </Col>
              <Col lg="2">
                <p className="m-0 shopping-p-size">TOTAL</p>
              </Col>
              <Col lg="2">
                <p className="m-0 shopping-p-size">TOTAL</p>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col lg="6">
                <Row className="san">
                  <Col lg="6" md="12" sm="12">
                    <Image src={image1} alt="image1" />
                  </Col>
                  <Col className="margin-shop-toggle" lg="6" md="12">
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

              <Col lg="2" className="mt-3">
                <div className="d-flex">
                  <button className="btn-shopping-counter" onClick={decrementHandler}> - </button>
                  <div className="shopping-counter" id="counter">{counter}</div>
                  <button className="btn-shopping-counter" onClick={incrementHandler}> + </button>
                </div>
                <p className=" shop-remove shopping-p3-size">
                  <span className="fw-bold text-danger">REMOVE</span>
                </p>
              </Col>
              <Col lg="2" className="mt-5">
                <p className="fw-bold shopping-p4-size">₹450.00</p>
              </Col>
              <Col lg="2" className="mt-5">
                <p className="fw-bold shopping-p4-size">₹900.00</p>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col lg="6">
                <Row>
                  <Col lg="6" md="12" sm="12">
                    <Image src={image2} alt="image1" />
                  </Col>
                  <Col  className="margin-shop-toggle" lg="6" md="12">
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

              <Col lg="2" className="mt-3">
              <div className="d-flex">
                  <button className="btn-shopping-counter" onClick={decrementHandler}> - </button>
                  <div className="shopping-counter" id="counter">{counter}</div>
                  <button className="btn-shopping-counter" onClick={incrementHandler}> + </button>
                </div>
                <p className=" shop-remove shopping-p3-size">
                  <span className="fw-bold shop-remove text-danger">REMOVE</span>
                </p>
              </Col>
              <Col lg="2" className="mt-5">
                <p className="fw-bold shopping-p4-size">₹450.00</p>
              </Col>
              <Col lg="2" className="mt-5">
                <p className="fw-bold shopping-p4-size">₹900.00</p>
              </Col>
            </Row>
            <hr />

            <a href="/Product/Products" className="continue-shopping-text ">
              CONTINUE SHOPPING
            </a>
          </Col>

          <Col lg={4} md={12}>
            <div className="order-summary-card p-4">
              <h6 className="fw-bold order-summary-text">ORDER SUMMARY</h6>
              <hr className="my-4"  />

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
                  <span className="fw-bold free-home-delivery-p2 ">
                    ₹0.00
                  </span>
                </p>
              </div>
              <hr className="my-4" />
              <div className="d-flex justify-content-between">
                <div>
                  <p className="order-summary-p1">TOTAL COST</p>
                </div>
                <div>
                  <p className="fw-bold order-summary-p2"> ₹1150.00</p>
                </div>
              </div>
              <div className="text-center ">
               
                <div className="w-100 border-0 checkout-button"> <ButtonDark text="CHECKOUT"/></div>
               
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

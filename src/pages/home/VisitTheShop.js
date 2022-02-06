import React from "react";
import Image from "next/image";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import ProductImageOne from "../../assets/images/product/productImageOne.png";
import ProductImageTwo from "../../assets/images/product/productImageTwo.png";
import WildforestHoney from "../../../src/assets/images/home/333.png";
import ProductImageFour from "../../assets/images/product/productImageFour.png";
import ProductImageFive from "../../assets/images/product/productImageFive.png";
import { FaEye, FaHeart, FaShoppingCart } from "react-icons/fa";

function VisitTheShop() {
  return (
    <>
      <Container className=" mt-5 ">
        <Row>
          <Col lg={3}>
            <Card className=" VisitTheShop-cards mt-3 hover-div1">
              <Image src={ProductImageOne} alt="AmlaMurabba" />
              <div className=" row hover-div bg-light">
                <Row>
                  <Col xs={4}>
                    <FaEye className="icon1-hover d-inline" />
                  </Col>
                  <Col xs={4}>
                    <FaHeart className="icon2-hover d-inline" />
                  </Col>
                  <Col xs={4}>
                    <FaShoppingCart className="icon3-hover d-inline" />
                  </Col>
                </Row>
              </div>

              <Card.Body className="p-3">
                <Card.Title>Amla Murabba</Card.Title>
                <div className="d-flex justify-content-between">
                  <Card.Text>500g</Card.Text>
                  <Card.Text>₹360</Card.Text>
                </div>
              </Card.Body>
            </Card>

            <Card className="mt-3 VisitTheShop-cards">
              <Image src={ProductImageTwo} alt="MahuaLaddu" />
              <Card.Body>
                <Card.Title>Mahua Laddu</Card.Title>
                <div className="d-flex justify-content-between">
                  <Card.Text>500g</Card.Text>
                  <Card.Text>₹360</Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={6}>
            <Card className="WildforestHoney-card mt-3 ">
              <div className="text-center">
                <Image
                  src={WildforestHoney}
                  alt="WildforestHoney"
                  className="WildforestHoney-card-img1"
                />
              </div>
              <Card.Body className="p-1 mx-2 ">
                <Card.Title>Wildforest Honey</Card.Title>
                <div className="d-flex justify-content-between">
                  <Card.Text>500g</Card.Text>
                  <Card.Text>₹360</Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={3}>
            {" "}
            <Card className=" mt-3  VisitTheShop-cards">
              <Image src={ProductImageFour} alt="MahuaCookies" />
              <Card.Body>
                <Card.Title>Mahua Cookies</Card.Title>
                <div className="d-flex justify-content-between">
                  <Card.Text>500g</Card.Text>
                  <Card.Text>₹360</Card.Text>
                </div>
              </Card.Body>
            </Card>
            <Card className="mt-3 VisitTheShop-cards">
              <Image src={ProductImageFive} alt="Chyawanprash" />
              <Card.Body>
                <Card.Title>Chyawanprash</Card.Title>
                <div className="d-flex justify-content-between">
                  <Card.Text>500g</Card.Text>
                  <Card.Text>₹360</Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <div className="text-center my-5">
          <button>VISIT THE SHOP &gt;</button>
        </div>
      </Container>
    </>
  );
}

export default VisitTheShop;

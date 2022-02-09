import React from "react";
import Image from "next/image";
import Button from "../../components/button/ButtonLight"
import { Card, Col, Container, Row } from "react-bootstrap";
import ProductImageOne from "../../assets/images/product/productImageOne.png";
import ProductImageTwo from "../../assets/images/product/productImageTwo.png";
import WildforestHoney from "../../../src/assets/images/home/333.png";
import ProductImageFour from "../../assets/images/product/productImageFour.png";
import ProductImageFive from "../../assets/images/product/productImageFive.png";
import { FaEye, FaHeart, FaShoppingCart } from "react-icons/fa";

function VisitTheShop() {
  return (
    <>
      <Container>
        <div className="visit-the-shop-div ">
          <hr className="visit-the-shop-hr mb-5" />
          <Row>
            <Col lg={3}>
              <Card className=" VisitTheShop-cards  hover-div1">
                <Image src={ProductImageOne} alt="AmlaMurabba" />
                <div className="pe-0 row hover-div bg-light">
                  <Row className="">
                    <Col className="ps-2 pe-4 border-end" xs={4}>
                      <FaEye className="icon1-hover d-inline" />
                    </Col>
                    <Col className="ps-2 pe-4 border-end"  xs={4}>
                      <FaHeart className="icon2-hover d-inline" />
                    </Col>
                    <Col className="ps-2 pe-0"  xs={4}>
                      <FaShoppingCart className="icon3-hover d-inline" />
                    </Col>
                  </Row>
                </div>

                <Card.Body className="p-3 pb-0">
                  <Card.Title className="m-0 visit-card-title">
                    Amla Murabba
                  </Card.Title>
                  <div className="d-flex justify-content-between">
                    <Card.Text className="visit-card-weight">500g</Card.Text>
                    <Card.Text className="visit-card-weight">₹360</Card.Text>
                  </div>
                </Card.Body>
              </Card>

              <Card className=" VisitTheShop-cards mt-3 hover-div1">
                <Image src={ProductImageTwo} alt="MahuaLaddu" />
                <div className=" row hover-div bg-light">
                  <Row>
                    <Col className="ps-2 pe-4 border-end" xs={4}>
                      <FaEye className="icon1-hover d-inline" />
                    </Col>
                    <Col className="ps-2 pe-4 border-end" xs={4}>
                      <FaHeart className="icon2-hover d-inline" />
                    </Col>
                    <Col className="ps-2 pe-0" xs={4}>
                      <FaShoppingCart className="icon3-hover d-inline" />
                    </Col>
                  </Row>
                </div>
                <Card.Body className="p-3 pb-0">
                  <Card.Title className="m-0 visit-card-title">
                    Mahua Laddu
                  </Card.Title>
                  <div className="d-flex justify-content-between">
                    <Card.Text className="visit-card-weight">500g</Card.Text>
                    <Card.Text className="visit-card-weight">₹360</Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={6}>
              <Card className="WildforestHoney-card hover-div1 ">
                <div className="text-center">
                  <Image
                    src={WildforestHoney}
                    alt="WildforestHoney"
                    className="WildforestHoney-card-img1"
                  />
                  <div className=" row hover-div bg-light">
                    <Row>
                      <Col className="ps-2 pe-4 border-end"   xs={4}>
                        <FaEye className="icon1-hover d-inline" />
                      </Col>
                      <Col className="ps-2 pe-4 border-end"   xs={4}>
                        <FaHeart className="icon2-hover d-inline" />
                      </Col>
                      <Col className="ps-2 pe-0"   xs={4}>
                        <FaShoppingCart className="icon3-hover d-inline" />
                      </Col>
                    </Row>
                  </div>
                </div>
                <Card.Body className="p-3 pb-0 mx-2 ">
                  <Card.Title className="m-0 visit-card-title">
                    Wildforest Honey
                  </Card.Title>
                  <div className="d-flex justify-content-between">
                    <Card.Text className="visit-card-weight">500g</Card.Text>
                    <Card.Text className="visit-card-weight">₹360</Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={3}>
              {" "}
              <Card className="   VisitTheShop-cards hover-div1">
                <Image src={ProductImageFour} alt="MahuaCookies" />
                <div className=" row hover-div bg-light">
                  <Row>
                    <Col className="ps-2 pe-4 border-end"   xs={4}>
                      <FaEye className="icon1-hover d-inline" />
                    </Col>
                    <Col className="ps-2 pe-4 border-end"   xs={4}>
                      <FaHeart className="icon2-hover d-inline" />
                    </Col>
                    <Col className="ps-2 pe-0"   xs={4}>
                      <FaShoppingCart className="icon3-hover d-inline" />
                    </Col>
                  </Row>
                </div>
                <Card.Body className="p-3 pb-0">
                  <Card.Title className="m-0 visit-card-title">
                    Mahua Cookies
                  </Card.Title>
                  <div className="d-flex justify-content-between">
                    <Card.Text className="visit-card-weight">500g</Card.Text>
                    <Card.Text className="visit-card-weight">₹360</Card.Text>
                  </div>
                </Card.Body>
              </Card>
              <Card className=" VisitTheShop-cards mt-3 hover-div1">
                <Image src={ProductImageFive} alt="Chyawanprash" />
                <div className=" row hover-div bg-light">
                  <Row>
                    <Col className="ps-2 pe-4 border-end" xs={4}>
                      <FaEye className="icon1-hover d-inline" />
                    </Col>
                    <Col className="ps-2 pe-4 border-end" xs={4}>
                      <FaHeart className="icon2-hover d-inline" />
                    </Col>
                    <Col className="ps-2 pe-0" xs={4}>
                      <FaShoppingCart className="icon3-hover d-inline" />
                    </Col>
                  </Row>
                </div>
                <Card.Body className="p-3 pb-0">
                  <Card.Title className="m-0 visit-card-title">
                    Chyawanprash
                  </Card.Title>
                  <div className="d-flex justify-content-between">
                    <Card.Text className="visit-card-weight">500g</Card.Text>
                    <Card.Text className="visit-card-weight">₹360</Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <div className="text-center my-5">
          <Button className="home-visit-shop" text="VISIT THE SHOP &nbsp; &gt;" />
          </div>
        </div>
      </Container>
    </>
  );
}

export default VisitTheShop;

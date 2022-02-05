import React from "react";
import Image from "next/image";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import AmlaMurabba from "../../assets/images/home/111.png";
import MahuaLaddu from "../../assets/images/home/222.png";
import WildforestHoney from "../../assets/images/home/333.png";
import MahuaCookies from "../../assets/images/home/444.png";
import Chyawanprash from "../../assets/images/home/555.png";

function VisitTheShop() {
  return (
    <>
      <Container className=" mt-5 ">
        <Row>
          <Col lg={3}>
            <Card className=" VisitTheShop-cards mt-3 ">
              <Image src={AmlaMurabba} alt="AmlaMurabba" height={257} />
              <Card.Body>
                <Card.Title>Amla Murabba</Card.Title>
                <div className="d-flex justify-content-between">
                  <Card.Text>500g</Card.Text>
                  <Card.Text>₹360</Card.Text>
                </div>
              </Card.Body>
            </Card>

            <Card className="mt-3 VisitTheShop-cards">
              <Image src={MahuaLaddu} alt="MahuaLaddu" height={257} />
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
              <Image src={MahuaCookies} alt="MahuaCookies" height={257} />
              <Card.Body>
                <Card.Title>Mahua Cookies</Card.Title>
                <div className="d-flex justify-content-between">
                  <Card.Text>500g</Card.Text>
                  <Card.Text>₹360</Card.Text>
                </div>
              </Card.Body>
            </Card>
            <Card className="mt-3 VisitTheShop-cards">
              <Image src={Chyawanprash} alt="Chyawanprash" height={257} />
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

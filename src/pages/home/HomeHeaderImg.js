import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "../../components/button/ButtonLight"
import HomeHeader from "../../assets/images/home/homeHeaderMobile.png";

function HomeHeaderImg() {
  return (
    <>
      <div className="home-head-img-mobile">
        <Image src={HomeHeader} className="w-100" alt="ss" />
        <Container>
          <Row className=" justify-content-md-start justify-content-center">
            <Col md={8} lg={6} className="col-10">
              <Row className="">
                <Col md={9} className="py-md-5 my-2 ">
                  <p className="home-header-head-mobile mt-md-5 mt-4 mb-0 ">
                    Purity that is Priceless
                  </p>
                  <p className="home-header-para-mobile mt-3 ">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large language ocean
                  </p>
                  <div className="col-10">
                    <div className="mb-md-5  mt-md-3 mt-4 mb-0">
                    <Button className="home-header-button" text="SHOP NOW &nbsp; &nbsp; &gt;" />
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="home-head-img">
        <div className="cg-herbal-container">
          <Row className=" justify-content-md-start justify-content-center">
            <Col md={8} lg={6} className="col-10">
              <Row className="">
                <Col md={12} className=" my-2 ">
                  <p className="home-header-head mt-md-5 mb-0 text-center text-md-start">
                    Purity that
                  </p>
                  <p className="home-header-head text-center mb-0 text-md-start">
                    is Priceless
                  </p>
                  <p className="home-header-para text-center text-md-start">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large language ocean
                  </p>

                  <div className=" col-10 text-center text-md-start mx-auto ms-md-0 mb-md-5  mt-md-4 mb-0">
                    <Button className="home-header-button" text="SHOP NOW &nbsp; &nbsp; &gt;" />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
export default HomeHeaderImg;

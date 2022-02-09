import React from "react";
import Image from "next/image";
import Button from "../../components/button/ButtonLight"
import { Row, Col, Container } from "react-bootstrap";
import CollaborateHeaderImg from "../../assets/images/collaborate/CollaborateBanner.png";

function CollaborateHeader() {
  return (
    <>
      <div className="collaborate-header-img-mobile">
        <Image
          src={CollaborateHeaderImg}
          className="w-100"
          alt="CollaborateHeaderImg"
        />
        <Container className="mt-4">
          <Row className=" justify-content-md-start gutter-collaborate-fix justify-content-center">
            <Col md={8} lg={6} className="col-10">
              <Row className="gutter-collaborate-fix">
                <Col md={9} className="py-md-3 my-2 ">
                  <p className="collaborate-heads-head-mobile  mb-0 ">
                    Collaborate
                  </p>
                  <p className="collaborate-heads-head-mobile ">with Us</p>
                  <p className="collaborate-heads-para-mobile ">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large language ocean.
                  </p>
                  <div className=" col-10 mt-4">
                    <div className="mb-md-5  mt-md-3 mb-3 me-3">
                    <Button className="collaborate-header-contact-button" text="CONTACT US &nbsp; &gt;" />
                    </div>
                    <div className="mb-md-5  mt-md-3 mb-3 me-3">
                    <Button className="collaborate-header-shop-now-button" text="SHOP NOW &nbsp; &gt;" />
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="collaborate-header-img">
        <Container className="mt-4">
          <Row className=" justify-content-md-end justify-content-center gutter-collaborate-fix">
            <Col  md={6} className="col-10">
              <Row className="gutter-collaborate-fix">
                <Col md={10} className="py-md-4 my-2 ">
                  <p className="collaborate-heads-head  mb-0 text-center text-md-start">
                    Collaborate
                  </p>
                  <p className="collaborate-heads-head  mb-0 text-center text-md-start">
                    with Us
                  </p>

                  <p className="collaborate-heads-para text-center text-md-start">
                  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.   
                  </p>

                  <div className=" col-12">
                    <span className="mb-lg-5 mt-md-2 mb-0 me-5 d-inline-block">
                    <a href="/contact/Contact"><Button className="collaborate-header-contact-button" text="CONTACT US &nbsp; &gt;" /></a>
                    </span>
                    
                    <span className="mb-lg-5 mt-md-4 mb-0 d-inline-block">
                    <a href="/Product/Products"><Button className="collaborate-header-shop-now-button" text="SHOP NOW &nbsp; &gt;" /></a>
                    </span>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default CollaborateHeader;

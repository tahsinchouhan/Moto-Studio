import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import Image from "next/image";
import aboutWhoFirst from "../../styles/assets/images/aboutWhoFirst.jpg";
import aboutWhoSecond from "../../styles/assets/images/aboutWhoSecond.jpg";

function WhoWeAre() {
  return (
  <>
      <Container fluid>
        <Row className = " justify-content-center my-5">
         
            <Col xxl={4} lg={5} md={6} sm={8} xs={10}  className="order-md-first order-sm-last">
                <Image src={aboutWhoFirst} width="100%" alt=""/>
            </Col>

            <Col xxl={4} lg={5} md={6} sm={8} xs={10} className="text-md-start  text-center">
                <p className="about-second-heading mt-lg-4 mt-md-2">Who we are</p>
                <hr className="about-who-first-hr about-who-hr-center" />
                <p className="about-second-para">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live
                    the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large
                    language ocean. A small river named Duden flows by their place and supplies it with the necessary
                    regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                    Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic
                    life.</p>
            </Col>
        </Row>


        <Row className="my-5 justify-content-center">
           
            <Col xxl={4} lg={5} md={6} sm={8} xs={10} className="text-md-end text-center">
                <p className="about-second-heading mt-lg-4 mt-md-2">What we do</p>
                <hr className="about-who-first-hr ms-md-auto about-who-hr-center" />
                <p className="about-second-para">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live
                    the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large
                    language ocean. A small river named Duden flows by their place and supplies it with the necessary
                    regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                    Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic
                    life.</p>
            </Col>

            <Col xxl={4} lg={5} md={6} sm={8} xs={10}>
                <Image src={aboutWhoSecond} width="100%" alt=""/>
            </Col>
          
        </Row>
        </Container>
  </>)
}

export default WhoWeAre;

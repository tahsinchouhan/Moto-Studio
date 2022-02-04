import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import image1 from "../../assets/images/home/image1.png"; 
import image2 from "../../assets/images/home/image2.png"; 
import image3 from "../../assets/images/home/image3.png"; 
import image4 from "../../assets/images/home/image4.png"; 
import image5 from "../../assets/images/home/image5.png"; 
import image6 from "../../assets/images/home/image6.png"; 




function CommunityPage() {
  return (
    <>
      <Container>
        <div className="main-community">
          <h1 className="Text text-center">The Community</h1>
          <hr className="Line my-4 " />
          <div className="para-div">
          <div className="d-flex">
          <p className="content mx-auto">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean. A small river named Duden flows by their
              place and supplies it with the necessary regelialia.
            </p>
          </div>
         
          
          </div>
        </div>

        <Row>
          <Col lg={4} md={6} className="image1 Gallery">
            <Image
              src={image1}
              alt="Picture of the author"
              width={572}
              height={381}
            />

            <div className="overlay">
              <p className="Text-name">Pure <br/> Wildforest <br/> Honey</p>
            </div>
          </Col>
          <Col lg={4} md={6} className="image1 Gallery">
            <Image
              src={image2}
              
              alt="Picture of the author"
              width={572}
              height={381}
            />
            <div className="overlay">
              <p className="Text-name">Premium  <br/> Cashews</p>
            </div>
          </Col>

          <Col lg={4} md={6} className="image1 Gallery">
            <Image
              src={image3}
              alt="Picture of the author"
              width={572}
              height={381}
            />
            <div className="overlay">
              <p className="Text-name">Chyawan <br/> Prash </p>
            </div>
          </Col>

          <Col lg={4} md={6} className="image1 Gallery">
            <Image
              src={image4}
              alt="Picture of the author"
              width={572}
              height={381}
            />
            <div className="overlay">
              <p className="Text-name">Mahua  <br/> Laddu</p>
            </div>
          </Col>
          <Col lg={4} md={6} className="image1 Gallery">
            <Image
              src={image5}
              alt="Picture of the author"
              width={572}
              height={381}
            />
            <div className="  overlay">
              <p className="Text-name">Mahua Cookies</p>
            </div>
          </Col>

          <Col lg={4} md={6} className="image1 Gallery">
            <Image
              src={image6}
              alt="Picture of the author"
              width={572}
              height={381}
              // className="img-fluid "
            />

            <div className="overlay align-items-center">
              <p className="Text-name ">Amla  <br/> Murabba </p>
              
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CommunityPage;

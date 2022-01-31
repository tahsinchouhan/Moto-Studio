import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import img1 from "../../../public/Picture/picture.png";
function CommunityPage() {
  return (
    <>
      <Container>
        <div className="main-community">
          <h1 className="Text text-center">The Community</h1>
          <hr className="Line " />
          <div className="para-div">
            <p className="Content ">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean. A small river named Duden flows by their
              place and supplies it with the necessary regelialia.
            </p>
          </div>
        </div>
        <div>
          <Row>
            <Col md={4} sm={12} className="image1 Gallery">
              <Image
                src="/Image/image1.png"
                alt="Picture of the author"
                width={572}
                height={381}
              />
              <div className="overlay">
                <h1 className="d-flex flex-column align-items-center fw-bold"></h1>
                <span></span>
              </div>
            </Col>
            <Col md={4} sm={12} className="image2 Gallery">
              <Image
                src="/Image/image2.png "
                alt="Picture of the author"
                width={572}
                height={381}
              />
              <div className="overlay">
                <h1 className="d-flex flex-column align-items-center fw-bold"></h1>
                <span></span>
              </div>
            </Col>

            <Col md={4} sm={12} className="image3 Gallery">
              <Image
                src="/Image/image3.png "
                alt="Picture of the author"
                width={572}
                height={381}
              />
              <div className="overlay">
                <h1 className="d-flex flex-column align-items-center fw-bold"></h1>
                <span></span>
              </div>
            </Col>
          </Row>
        </div>

        <div className="image-gap">
          <Row>
            <Col md={4} sm={12} className="image4 Gallery">
              <Image
                src="/Image/image4.png"
                alt="Picture of the author"
                width={572}
                height={381}
              />
              <div className="overlay">
                <h1 className="d-flex flex-column align-items-center fw-bold"></h1>
                <span></span>
              </div>
            </Col>
            <Col md={4} sm={12} className="image5 Gallery">
              <Image
                src="/Image/image5.png "
                alt="Picture of the author"
                width={572}
                height={381}
              />
              <div className="overlay">
                <h1 className="d-flex flex-column align-items-center fw-bold"></h1>
                <span></span>
              </div>
            </Col>

            <Col md={4} sm={12} className="image6 Gallery">
              <Image
                src="/Image/image6.png "
                alt="Picture of the author"
                width={572}
                height={381}
                className="img-fluid"
              />

              <div className="overlay">
                <h1 className="d-flex flex-column align-items-center fw-bold"></h1>
                <span>Amla Murabba</span>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      {/* <div className="FollowW"> <Image
        src={img1}
        alt="Picture of the author"
        className="mt-sm-3 mt-md-5  "
      />
      </div> */}

      <div className="Frame1">
        <Image src={img1} alt="Picture of the author" className="img-fluid" />
        <a className="Follow">FOLLOW US</a>
      </div>

      {/* <div className="Footer">
        <p>
          Buy all your favourite products from the world’s largest online store
        </p>
      </div> */}
    </>
  );
}

export default CommunityPage;

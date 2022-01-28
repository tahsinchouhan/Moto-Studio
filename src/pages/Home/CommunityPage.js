import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
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
            <Col className="image1">
              <Image
                src="/Image/image1.png"
                alt="Picture of the author"
                width={572}
                height={381}
                
              />
            </Col>
            <Col className="image2">
              <Image
                src="/Image/image2.png "
                alt="Picture of the author"
                width={572}
                height={381}
              />
            </Col>

            <Col  className="image3">
              <Image
                src="/Image/image3.png "
                alt="Picture of the author"
                width={572}
                height={381}
              />
            </Col>
           
          </Row>
        </div>

        <div>
          <Row className="mt-3">
            <Col className="image4">
              <Image
                src="/Image/image4.png"
                alt="Picture of the author"
                width={428}
                height={418}
              />
            </Col>
            <Col className="image5">
              <Image
                src="/Image/image5.png "
                alt="Picture of the author"
                width={412}
                height={422}
              />
            </Col>

            <Col className="image6">
              <Image
                src="/Image/image6.png "
                alt="Picture of the author"
                width={431}
                height={554}
              />
            </Col>
           
          </Row>
        </div>
      </Container>
    </>
  );
}

export default CommunityPage;

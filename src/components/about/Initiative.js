import Image from "next/image";
import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import initiativeImage from "../../assets/images/about/initiative.svg";

const Initiative = () => {
  return (
    <Container>
      <Row className="my-5 initiative-image-and-content">
        <Col></Col>
        <Col xxl={5} lg={5} md={6}>
          <Image
            src={initiativeImage}
            className="w-100"
            alt=""
            width={432}
            height={365}
            unoptimized={true}
            loading="eager"
          />
        </Col>
        <Col xxl={4} lg={5} md={6} style={{ padding: "0 2.2rem" }}>
          <p className="about-second-heading">
            An Initiative by the <br /> Govt. of Chhattisgarh
          </p>
          <hr className="about-who-first-hr" />
          <p>
            A Govt of Chhattisgarh and Tribal Co-operative Venture, dedicated to
            Tribal Development And Forest Resource Conservation through
            Sustainable Harvesting of Minor Forest Produce. With 74% Forest
            Cover of the country, CGMFP Federation accounts for 72% of the Minor
            Forest Produce procured across India.{" "} The ecommerce store - is  managed. By Avani Ayurved Pvt Lt- Authorised distributor of Chhattisgarh Herbals
          </p>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Initiative;

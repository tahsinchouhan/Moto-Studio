import { Col, Container, Row } from 'react-bootstrap';
import AboutNewsroom from "../../components/about/AboutNewsroom";
import EmpoweredGroup from "../../components/about/EmpoweredGroup";
import WhoWeAre from "../../components/about/WhoWeAre";

function About() {
  return (
    <>
      <div className="about-header-img">
        <div className="about-header-img-distance">
          <p className="about-header-img-text">About Us</p>
          <div className="d-flex">
            <hr className="about-header-hr mx-auto" />
          </div>
        </div>
      </div>
      <WhoWeAre />
      <div className="about-happy-customer">
        <Container>
          <Row className="py-5">
            <Col lg={3} md={6} className="py-4">
              <p className="about-happy-customer-head">6000+</p>
              <p className="about-happy-customer-para">HAPPY CUSTOMERS</p>
            </Col>
            <Col lg={3} md={6} className="py-4">
              <p className="about-happy-customer-head">1500+</p>
              <p className="about-happy-customer-para">TRIBAL FAMILIES</p>
            </Col>
            <Col lg={3} md={6} className="py-4">
              <p className="about-happy-customer-head">65</p>
              <p className="about-happy-customer-para">PRODUCTS IN STORE</p>
            </Col>
            <Col lg={3} md={6} className="py-4">
              <p className="about-happy-customer-head">9</p>
              <p className="about-happy-customer-para">YEARS OF EXPERIENCE</p>
            </Col>
          </Row>
        </Container>
      </div>
      <EmpoweredGroup />
      <AboutNewsroom />
    </>
  );
}

export default About;

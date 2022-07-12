import { Col, Container, Row } from "react-bootstrap";
import AboutNewsroom from "../../components/about/AboutNewsroom";
import EmpoweredGroup from "../../components/about/EmpoweredGroup";
import WhoWeAre from "../../components/about/WhoWeAre";
function About() {
  return (
    <>
      <div className="d-none d-lg-block about-header-img">
        <div className="about-header-text">
          <h2>
            About <br /> Chhattisgarh Herbals
          </h2>
          <p>
            Chhattisgarh Herbals is a premium product brand that works towards
            empowering tribal women.
            <br />
            All products are powered by Chhattisgarh Minor Forest Produce
            Cooperative Federation, an institution dedicated to uplifting more
            than 1.2 million forest dwellers of Chhattisgarh state.
          </p>
          {/*
          <div className="d-flex">
            <hr className="about-header-hr mx-auto" />
          </div>
         */}
        </div>
      </div>

      <div className="d-block d-lg-none .d-xl-none about-header-img"></div>
      <div className="d-block d-lg-none .d-xl-none about-header-text">
        <h2>About CG Herbals</h2>
        <p>
          Chhattisgarh Herbals is a premium product brand that works towards
          empowering tribal women.
        </p>
        <p>
          All products are powered by Chhattisgarh Minor Forest Produce
          Cooperative Federation, an institution dedicated to uplifting more
          than 1.2 million forest dwellers of Chhattisgarh state.
        </p>
        {/*
        <div className="d-flex">
          <hr className="about-header-hr mx-auto" />
        </div>
       */}
      </div>

      <WhoWeAre />
      <div className="about-happy-customer">
        <Container>
          <Row className="py-5">
            <Col lg={3} md={6} className="py-4">
              <p className="about-happy-customer-head">6 lakh+</p>
              <p className="about-happy-customer-para">GATHERER FAMILIES BENEFITED</p>
            </Col>
            <Col lg={3} md={6} className="py-4">
              <p className="about-happy-customer-head">71000+</p>
              <p className="about-happy-customer-para">MEMBERS</p>
            </Col>
            <Col lg={3} md={6} className="py-4">
              <p className="about-happy-customer-head">6000+</p>
              <p className="about-happy-customer-para">WOMEN SELF HELP GROUP</p>
            </Col>
            <Col lg={3} md={6} className="py-4">
              <p className="about-happy-customer-head">1500+</p>
              <p className="about-happy-customer-para">RETAIL STORES</p>
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

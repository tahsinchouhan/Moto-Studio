import React from "react";
import { Row, Col, Container} from "react-bootstrap";
import Image from "next/image";
import Skill from "../../assets/images/about/skill.png";
import Cultivation from "../../assets/images/about/cultivation.png";
import Microenterprises from "../../assets/images/about/microenterprises.png";



function AboutNewsroom() {
  return (
    <>
      <Row className="d-flex justify-content-center">
        <Col xs={12} className="mx-auto">
          <p className="about-newsroom-heading">Newsroom</p>
          <hr className="about-newsroom-hr " />
        </Col>
      </Row>

      <Container>
      <Row className=" row-cols-1 row-cols-md-3 g-4 mt-5 justify-content-center">
  <div className="col-lg-4 col-md-6">
    <div className="card h-100">
    <Image src={Microenterprises} className="w-100 card-img-top" alt="Microinterprises"/>
      <div className="card-body">
        <h5 classNameName="card-title">Lac Cultivation and Processing</h5>
        <small className="about-newsroom-date">Sep 09, 2020</small>
        <p className="card-text about-newsroom-card-para mt-3">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <button className="mb-2">READ MORE</button>
      </div>
    </div>
  </div>
  <div className="col-lg-4 col-md-6">
    <div className="card h-100">
    <Image src={Cultivation} className="w-100 card-img-top" alt="Cultivation"/>
      <div className="card-body">
        <h5 className="card-title">Microenterprises on the rise</h5>
        <small className="about-newsroom-date">Aug 24, 2020</small>
        <p className="card-text about-newsroom-card-para mt-3 ">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <button className="mb-2">READ MORE</button>
      </div>
    </div>
  </div>
  <div className="col-lg-4 col-md-6">
    <div className="card h-100">
    <Image src={Skill} className="w-100 card-img-top" alt="Skill"/>
      <div className="card-body">
        <h5 className="card-title">Skill Upgradation Training</h5>
        <small className="about-newsroom-date ">Sep 09, 2020</small>
        <p className="card-text about-newsroom-card-para mt-3">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
        <button className="mb-2">READ MORE</button>
      </div>
    </div>
  </div>
  
     </Row>
      </Container>
    </>
  );
}

export default AboutNewsroom;

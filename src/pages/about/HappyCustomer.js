import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function HappyCustomer() {
  return <>
  <div className="about-happy-customer">
      <Container>
      <Row className='py-5'>
          <Col lg={3} md={6} className="py-4">
              <p className='about-happy-customer-head'>6000+</p>
              <p className='about-happy-customer-para'>HAPPY CUSTOMERS</p>
          </Col>
          <Col lg={3} md={6} className="py-4">
              <p className='about-happy-customer-head'>1500+</p>
              <p className='about-happy-customer-para'>TRIBAL FAMILIES</p>
          </Col>
          <Col lg={3} md={6} className="py-4">
              <p className='about-happy-customer-head'>65</p>
              <p className='about-happy-customer-para'>PRODUCTS IN STORE</p>
          </Col>
          <Col lg={3} md={6} className="py-4">
              <p className='about-happy-customer-head'>9</p>
              <p className='about-happy-customer-para'>YEARS OF EXPERIENCE</p>
          </Col>
      </Row>
      </Container>
  </div>
  </>;
}

export default HappyCustomer;

import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';

function CollaborateForm() {
  return <>
         <div>
     <div className="container-fluid collaborats-form-container collaborate-form-container">
     <Container className="collaborate-demo collaborate-Us-form">
        <div className="">
          <h1 className="collaborate-Us-heading ">Business Enquiries</h1>
          <hr className="collaborate-hr mb-4 " />
        </div>
        <Form className=" pt-5">
          <Row>
            <Col md={12} lg={6}>
              <Form.Control
                className=" collaborate-Us-form-input mb-3 "
                placeholder="Name"
              />
            </Col>
            <Col md={12} lg={6}>
              <Form.Control
                className=" collaborate-Us-form-input mb-3 "
                placeholder="Email"
              />
            </Col>
          </Row>
          <Row>
            <Col md={12} lg={6}>
              <Form.Control
                className=" collaborate-Us-form-input mb-3 "
                placeholder="Phone"
              />
            </Col>
            <Col md={12} lg={6}>
              <Form.Control
                className=" collaborate-Us-form-input mb-3 "
                placeholder="Organization"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Control
                as="textarea"
                className=" collaborate-Us-form-input  "
                placeholder="Message"
                style={{ height: "181px" }}
              />
            </Col>
          </Row>
          <div className="collaborate-sent-message text-center ">
            <button className="collaborate-button">SEND MESSAGE</button>
          </div>
        </Form>
      </Container>
     </div>
    </div>
  </>;
}

export default CollaborateForm;
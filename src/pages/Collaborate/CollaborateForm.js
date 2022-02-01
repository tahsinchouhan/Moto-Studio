
import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';

function CollaborateForm() {
  return <>
         <div>
     <div className="container-fluid">
     <Container className="demo1 Contact-Us-form">
        <div className="">
          <h1 className="Contact-Us-heading ">Business Enquiries</h1>
          <hr className="contact-form-hr mb-4" />
        </div>
        <Form className=" pt-5">
          <Row>
            <Col md={12} lg={6}>
              <Form.Control
                className=" Contact-Us-form-input mb-3 "
                placeholder="Name"
              />
            </Col>
            <Col md={12} lg={6}>
              <Form.Control
                className=" Contact-Us-form-input mb-3 "
                placeholder="Email"
              />
            </Col>
          </Row>
          <Row>
            <Col md={12} lg={6}>
              <Form.Control
                className=" Contact-Us-form-input mb-3 "
                placeholder="Phone"
              />
            </Col>
            <Col md={12} lg={6}>
              <Form.Control
                className=" Contact-Us-form-input mb-3 "
                placeholder="Organization"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Control
                as="textarea"
                className=" Contact-Us-form-input  "
                placeholder="Message"
                style={{ height: "229px" }}
              />
            </Col>
          </Row>
          <div className="contac-sent-message text-center mt-3">
            <button className="collaborate-button">SEND MESSAGE</button>
          </div>
        </Form>
      </Container>
     </div>
    </div>
  </>;
}

export default CollaborateForm;


import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';

function ContactForm() {
  return <>
         <div>
     <div className="container-fluid">
     <Container className="demo1">
        <div className="text-center">
          <h1 className="Contact-Us-heading ">Contact Us</h1>
          <hr className="contact-form-hr mx-auto mb-4" />
          <span className="contact-para">
            If you have any questions, or are looking to collaborate, we are all
            ears!
          </span>
        </div>
        <Form className="Contact-Us-form pt-5">
          <Row>
            <Col md={12} lg={6}>
              <Form.Label className=" fw-bold ">First name</Form.Label>
              <Form.Control
                className=" Contact-Us-form-input  "
                placeholder="Enter your first name here"
              />
            </Col>
            <Col md={12} lg={6}>
              <Form.Label className=" fw-bold ">Last name</Form.Label>
              <Form.Control
                className=" Contact-Us-form-input  "
                placeholder="Enter your last name here"
              />
            </Col>
          </Row>
          <Row>
            <Col md={12} lg={6}>
              <Form.Label className=" fw-bold pt-3">Email Address</Form.Label>
              <Form.Control
                className=" Contact-Us-form-input  "
                placeholder="Enter your email address here"
              />
            </Col>
            <Col md={12} lg={6}>
              <Form.Label className=" fw-bold pt-3">Subject</Form.Label>
              <Form.Control
                className=" Contact-Us-form-input  "
                placeholder="Enter your subject here"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label className=" fw-bold pt-3">Message</Form.Label>
              <Form.Control
                as="textarea"
                className=" Contact-Us-form-input  "
                placeholder="Write your messages in here"
                style={{ height: "229px" }}
              />
            </Col>
          </Row>
          <div className="contac-sent-message text-center mt-3">
            <button>SEND MESSAGE</button>
          </div>
        </Form>
      </Container>
     </div>
    </div>
  </>;
}

export default ContactForm;

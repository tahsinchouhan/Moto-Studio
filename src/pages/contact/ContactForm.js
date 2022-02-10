import { useState } from 'react'
import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import ButtonLight from '../../components/button/ButtonLight';
import { apipath } from '../api/apiPath';

function ContactForm() {
  const [msg, setMsg] = useState('');
  const [inputText, setInputText] = useState({
    first_name: "",
    last_name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const {first_name, last_name, email, subject, message} = inputText

  const changeHandler = e => {
    const { name, value } = e.target
    setInputText(prev => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  const submitEvent = async (e) => {
    e.preventDefault()
    try {
      if (first_name && last_name && email && subject && message) {
        const response = await fetch(apipath + '/api/v1/contact/create', {
          method: "post",
          headers: {
            'Content-Type': "application/json",
          },
          body: JSON.stringify(inputText)
        })
        const jsonData = await response.json()
        console.log(jsonData);
        if (jsonData.data) {
          setMsg("Your Query has been Sent Successfully")
          setInputText({
            first_name: "",
            last_name: "",
            email: "",
            subject: "",
            message: ""
          })
        }
      } else {
        alert('All field is required')
        return false;
      }     
    }
    catch (error) {
      console.log(error);
    }
  }

  return <>
         <div className="contact-container">
     <div className="container-fluid">
     <Container className="demo1 ">
        <div className="text-center">
          <h1 className="Contact-Us-heading ">Contact Us</h1>
          <hr className="contact-form-hr mx-auto mb-4" />
          <span className="contact-para">
            If you have any questions, or are looking to collaborate, we are all
            ears!
          </span>
        </div>
        <div className="text-center text-success text-bold fw-bold my-3">{msg}</div>
        <Form className="Contact-Us-form pt-5">
          <Row>
            <Col md={12} lg={6}>
              <Form.Label className=" fw-bold ">First name</Form.Label>
              <Form.Control
                className=" Contact-Us-form-input  "
                placeholder="Enter your first name here"
                name='first_name'
                value={first_name}
                onChange={changeHandler}
              />
            </Col>
            <Col md={12} lg={6}>
              <Form.Label className=" fw-bold ">Last name</Form.Label>
              <Form.Control
                className=" Contact-Us-form-input  "
                placeholder="Enter your last name here"
                name='last_name'
                value={last_name}
                onChange={changeHandler}
              />
            </Col>
          </Row>
          <Row>
            <Col md={12} lg={6}>
              <Form.Label className=" fw-bold pt-3">Email Address</Form.Label>
              <Form.Control
                className=" Contact-Us-form-input  "
                placeholder="Enter your email address here"
                name='email'
                value={email}
                onChange={changeHandler}
              />
            </Col>
            <Col md={12} lg={6}>
              <Form.Label className=" fw-bold pt-3">Subject</Form.Label>
              <Form.Control
                className=" Contact-Us-form-input  "
                placeholder="Enter your subject here"
                name='subject'
                value={subject}
                onChange={changeHandler}
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
                name='message'
                value={message}
                onChange={changeHandler}
                style={{ height: "229px" }}
              />
            </Col>
          </Row>
          <div className="contac-sent-message text-center mt-3" onClick={submitEvent}>
            <ButtonLight onClick={submitEvent} text="SEND MESSAGE"/>
          </div>
        </Form>
      </Container>
     </div>
    </div>
  </>;
}

export default ContactForm;
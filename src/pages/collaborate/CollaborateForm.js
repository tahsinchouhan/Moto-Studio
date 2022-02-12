import { useState } from 'react'
import { Col, Container, Form, Row } from "react-bootstrap";
import { apipath } from '../api/apiPath';

function CollaborateForm() {

  const [msg, setMsg] = useState('');
  const [inputText, setInputText] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    message: ""
  });
  
  const {name, email, phone, organization, message} = inputText

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
      if (name && phone && email && organization && message) {
        const response = await fetch(apipath + '/api/v1/corporate/enquiry/create', {
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
            name: "",
            phone: "",
            email: "",
            organization: "",
            message: ""
          })
        }
      } else {
        return false;
      }     
    }
    catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div>
        <div className="container-fluid collaborats-form-container collaborate-form-container">
          <Container className="collaborate-demo collaborate-Us-form">
            <div className="">
              <h1 className="collaborate-Us-heading ">Business Enquiries</h1>
              <hr className="collaborate-hr mb-4 " />
            </div>
            <div className="text-center text-success text-bold">{msg}</div>
            <Form className="pt-5">
              <Row>
                <Col md={12} lg={6}>
                  <Form.Control
                    className=" collaborate-Us-form-input mb-3 "
                    placeholder="Name"
                    name='name'
                    value={name}
                    onChange={changeHandler}
                  />
                </Col>
                <Col md={12} lg={6}>
                  <Form.Control
                    className="collaborate-Us-form-input mb-3 "
                    placeholder="Email"
                    name='email'
                    value={email}
                    onChange={changeHandler}
                  />
                </Col>
              </Row>
              <Row>
                <Col md={12} lg={6}>
                  <Form.Control
                    className=" collaborate-Us-form-input mb-3 "
                    placeholder="Phone"
                    name='phone'
                    value={phone}
                    onChange={changeHandler}
                  />
                </Col>
                <Col md={12} lg={6}>
                  <Form.Control
                    className=" collaborate-Us-form-input mb-3 "
                    placeholder="Organization"
                    name='organization'
                    value={organization}
                    onChange={changeHandler}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Control
                    as="textarea"
                    className=" collaborate-Us-form-input  "
                    placeholder="Message"
                    name='message'
                    value={message}
                    onChange={changeHandler}
                    style={{ height: "181px" }}
                  />
                </Col>
              </Row>
              <div className="collaborate-sent-message text-center ">
                <button onClick={submitEvent} className="collaborate-button">SEND MESSAGE</button>
              </div>
            </Form>
          </Container>
        </div>
      </div>
    </>
  );
}

export default CollaborateForm;

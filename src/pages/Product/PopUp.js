import React from "react";
import Image from "next/image";
import { BsXLg } from "react-icons/bs";
import { Col, Container, Form, Row, Modal } from "react-bootstrap";
import image1 from "../../assets/images/product/image1.png";

function PopUp({ setShowPopUp, data }) {
  // console.log("data :>> ", data);
  return (
    <>
      <Modal show={true}>
        {/* <Modal.Header closeButton></Modal.Header> */}
        <Modal.Body>
          <Container>
            <div className="popup-div m-auto">
              <Row className="popup-modal-main p-0">
                <Col xs={12} md={7}>
                  <div className="p-5">
                    <h1 className="product-name-text">
                      {data?.title || "Product Name"}
                    </h1>
                    <p className="popup-paragraph1">{data?.sub_title || ''}</p>
                    <p className="popup-paragraph2 fw-bold">
                      PRODUCT INFORMATION
                    </p>
                    <div
                      className="popup-ul fw-bold mb-5"
                      style={{ whiteSpace: "pre-wrap" }}
                    >
                      {data?.description || "description"}
                    </div>
                    
                    <Form.Select
                      className="w-75  select-quantity-text"
                      size="lg"
                    >
                      <option>Select Quantity</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </div>
                </Col>
                <Col xs={6} md={5} className="popup-modal-img p-0">
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowPopUp(false);
                    }}
                  >
                    {" "}
                    <button className="btn-popup">
                      <BsXLg />
                    </button>
                  </div>
                  <div style={{ width: "349px", height: "482px" }}>
                    <Image src={image1} width={349} height={482} alt="image1" />
                  </div>
                </Col>
                {/* <Col xs={6} md={1}>x</Col> */}
              </Row>
            </div>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default PopUp;

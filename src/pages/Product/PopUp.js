import React,{useState} from "react";
import Image from "next/image";

import { Col, Container, Form, Row,Modal,Button} from "react-bootstrap";
import image1 from "../../assets/images/product/image1.png";

function PopUp({showPopuUp,close}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    
      <Modal show={showPopuUp} onHide={close} animation={false}>
        {/* <Modal.Header closeButton>
        </Modal.Header> */}
        <Modal.Body>
       <Container>
         <div className="popup-div m-auto">
       <Row className="popup-modal-main">
            <Col xs={12} md={7}>
            <div className="p-5">
            <h1 className="product-name-text">Product Name</h1>
                <p className="popup-paragraph1">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <p className="popup-paragraph2 fw-bold">PRODUCT INFORMATION</p>
                <ul className="popup-ul fw-bold">
                  <li>Tea Variety Green</li>
                  <li>Unflavoured Loose Leaves</li>
                  <li>Package Dimensions (LxWxH) : 20 x 20 x 20 Centimeters</li>
                  <li>Units : 100.0 gram</li>
                </ul>

                <p className="popup-paragraph2 fw-bold">PRODUCT INFORMATION</p>
                <ul className="popup-ul fw-bold">
                  <li>Tea Variety Green</li>
                  <li>Unflavoured Loose Leaves</li>
                  <li>Package Dimensions (LxWxH) : 20 x 20 x 20 Centimeters</li>
                  <li>Units : 100.0 gram</li>
                </ul>
                <Form.Select className="w-75  select-quantity-text" size="lg">
                  <option>Select Quantity</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
            </div>
            </Col>
            <Col xs={6} md={5} className="popup-modal-img">
            <div>
              <Image src={image1} alt="image1" width={349} height={482} />
              </div>
            </Col>
          </Row>
          </div>
       </Container>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={close}>
            Close
          </Button>
          <Button variant="primary" onClick={close}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
      {/* <div className="modal-body">
        <Container>
          <div className="popup-div m-auto">
            <Row className="popup-row w-75 m-auto">
              <Col Col={8} className="p-4">
                <h1 className="product-name-text">Product Name</h1>
                <p className="popup-paragraph1">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <p className="popup-paragraph2 fw-bold">PRODUCT INFORMATION</p>
                <ul className="popup-ul fw-bold">
                  <li>Tea Variety Green</li>
                  <li>Unflavoured Loose Leaves</li>
                  <li>Package Dimensions (LxWxH) : 20 x 20 x 20 Centimeters</li>
                  <li>Units : 100.0 gram</li>
                </ul>

                <p className="popup-paragraph2 fw-bold">PRODUCT INFORMATION</p>
                <ul className="popup-ul fw-bold">
                  <li>Tea Variety Green</li>
                  <li>Unflavoured Loose Leaves</li>
                  <li>Package Dimensions (LxWxH) : 20 x 20 x 20 Centimeters</li>
                  <li>Units : 100.0 gram</li>
                </ul>
                <Form.Select className="w-75  select-quantity-text" size="lg">
                  <option>Select Quantity</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Col>
              <Col Col={6}>
              <Image src={image1} alt="image1" width={349} height={482} />
              </Col>
            </Row>
          </div>
        </Container>
      </div> */}
    </>
  );
}

export default PopUp;

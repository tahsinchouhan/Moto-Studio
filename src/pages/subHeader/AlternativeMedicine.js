import React from 'react'
import { Container, Row, Col, Navbar, Nav, NavDropdown } from "react-bootstrap";
import Image from 'next/image';
import kissyurveda from "../../../public/images/kisspngyurveda.png"
import BrahmiChurna from "../../../public/images/BrahmiChurna.png"
import Group from "../../../public/images/Group.png"

function AlternativeMedicine() {
    return (
        <div>
         <div className="container-fluid">
        <div className="container">
          <div className="all-shop-list p-3 m-3">
            <Row >
              <Row>
                <Col sm={12} md={6} lg={6}>
                  <div className="">
                    <Row>
                        <Col>
                       <div>
                       <div>
                      <Image src={BrahmiChurna} alt="BrahmiChurna" />
                        </div>
                        <div className='kissyurveda'>
                      <Image src={kissyurveda} alt="kissyurveda" />
                        </div>
                       </div>
                        </Col>
                        <Col>
                        <div>
                  <h6 className="Grocery-foods">Ayurvedic Powders</h6>
                  <div>
                    <Row>
                      <Col md={6} lg={6}>
                        <div>
                          <span className="Wildforest">Ashwagandha Churn</span>
                          <br />
                          <span className="Wildforest">Amla Powder</span>
                          <br />
                          <span className="Wildforest">Brahmi Powder</span>
                          <br />
                          <span className="Wildforest">Madhumeh Nashak Churn</span>
                          <br />
                        </div>
                      </Col>
                      <Col md={6} lg={6}>
                        <div>
                          <span className="Wildforest">Tikhur Powder</span>
                          <br />
                          <span className="Wildforest">Avipattikar Churn</span>
                          <br />
                          <span className="Wildforest">Vilwadi Churn</span>
                          <br />
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
                        </Col>
                    </Row>
                  </div>
                </Col>

                <Col sm={12} md={6} lg={6}>
                  <div>
                   <Row>
                       <Col>
                       <div>
                      <Image src={Group} alt="Group" />
                    </div>
                       </Col>
                       <Col>
                       <div>
                       <div>
                  <h6 className="Grocery-foods">Ayurvedic Oils</h6>
                  </div>
                  <div>
                          <span className="Wildforest">Mahavishgarbh Oil</span>
                          <br />
                          <span className="Wildforest">Bhringraj Oil</span>
                          <br />
                        </div>
                    </div>
                       </Col>
                   </Row>
                  </div>
                </Col>
                
              </Row>
            </Row>
          </div>
        </div>
      </div>
        </div>
    )
}

export default AlternativeMedicine

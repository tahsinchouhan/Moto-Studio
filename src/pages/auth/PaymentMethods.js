import React from "react";
import { Row, Col, Container, Card } from "react-bootstrap";
import Image from "next/image";
import Link from 'next/link'
import { BsPlus } from "react-icons/bs";
import Visa from "../../../public/images/visa.png";

function PaymentMethods() {
  return (
    <div>
      <div className="">
        <Row>
          {/* <Col md={3}>jdg</Col> */}
          <Col sm={12} md={12}>
            <h3 className="">Preferred Methods</h3>
            <Row>
              <Col sm={12} md={6} lg={6} className="pt-3">
                <Card style={{borderRadius:" 12.5565px"}} >
                 <div className="bank-card">
                 <Row>
                    <Col xs={6} sm={6}>
                      <span className="bank-card-detail">HDFC Bank Debit Card</span><br/><br/>
                      <p className="bank-card-detail">4532-XXXXXXXX-8692</p>
                    </Col>
                    <Col xs={6} sm={6}>
                      <div style={{paddingTop:'10px',paddingLeft:"3rem"}}>
                        <Image src={Visa} alt="visa" />
                      </div>
                    </Col>
                  </Row>
                 </div>
                </Card>
              </Col>
              <Col sm={12} md={6} lg={6}className="pt-3">
                <Card style={{borderRadius:" 12.5565px"}}>
                <div className="bank-card">
                  <Row>
                    <Col xs={6} sm={6}>
                      <span className="bank-card-detail">Kotak Bank Credit Card</span><br/>
                      <span className="bank-card-detail">4532-XXXXXXXX-8692</span>
                    </Col>
                    <Col xs={6} sm={6}>
                      <div style={{paddingTop:'10px',paddingLeft:"3rem"}}>
                        <Image src={Visa} alt="visa" />
                      </div>
                    </Col>
                  </Row>
                 </div>
                </Card>
              </Col>
            </Row>
            <div className="pt-4">
                <Link href="/"><a className="Add-New">ADD NEW +</a></Link>
            </div>
            <h4 className="cg-Other-Methods">Other Methods</h4>
            <Row>
              <Col sm={12}md={6}  className="pt-3">
                <Card style={{borderRadius:" 12.5565px"}}>
                 <div className="p-3">
                 <Row>
                    <Col>
                     <div className="d-flex justify-content-between">
                     <span className="bank-card-detail">Debit / Credit Cards</span><br/><br/>
                      <p className="bank-card-detail"><BsPlus/></p>
                     </div>
                    </Col>
                  </Row>
                 </div>
                </Card>
              </Col>
              <Col sm={12}md={6} className="pt-3">
              <Card style={{borderRadius:" 12.5565px"}} >
                 <div className="p-3">
                 <Row>
                    <Col >
                     <div className="d-flex justify-content-between">
                     <span className="bank-card-detail">Debit / Credit Cards</span><br/><br/>
                      <p className="bank-card-detail"><BsPlus/></p>
                     </div>
                    </Col>
                  </Row>
                 </div>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="pt-3 pb-4">
        <Col sm={12}md={6}>
                <Card style={{borderRadius:" 12.5565px"}}>
                 <div className="p-3">
                 <Row>
                    <Col>
                     <div className="d-flex justify-content-between">
                     <span className="bank-card-detail">Debit / Credit Cards</span><br/><br/>
                      <p className="bank-card-detail"><BsPlus/></p>
                     </div>
                    </Col>
                  </Row>
                 </div>
                </Card>
              </Col>
        </Row>
      </div>
    </div>
  );
}

export default PaymentMethods;

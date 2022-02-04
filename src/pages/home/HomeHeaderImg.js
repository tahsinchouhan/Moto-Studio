import Image from 'next/image';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import HomeHeaderImg from "../../assets/images/home/homeHeaderMobile.png";


function HomeHeaderImg() {

  return( <>

<div className="home-head-img-mobile">
        <Image src={HomeHeaderImg} className='w-100' alt="ss" />
        <Container>
          <Row className=" justify-content-md-start justify-content-center">
            <Col md={8} lg={6}className="col-10">
              <Row className="">
                <Col md={9} className="py-md-5 my-2 ">
                  <p className="home-header-head-mobile mt-md-5 mb-0 ">
                  Purity that 
                  </p>
                  <p className="home-header-head-mobile ">
                  is Priceless
                  </p>
                  <p className="home-header-para-mobile ">
                  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean
                  </p>
                      <div className='col-10'>
                  <button className='mb-md-5  mt-md-3 mb-0'>SHOP NOW  &gt;</button>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
            </div>
            
            <div className="home-head-img">
        <Container>
          <Row className=" justify-content-md-start justify-content-center">
            <Col md={8} lg={6}className="col-10">
              <Row className="">
                <Col md={9} className="py-md-5 my-2 ">
                  <p className="home-header-head mt-md-5 mb-0 text-center text-md-start">
                  Purity that 
                  </p>
                  <p className="home-header-head text-center mb-0 text-md-start">
                  is Priceless
                  </p>
                  <p className="home-header-para text-center text-md-start">
                  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean
                  </p>


                      <div className=' col-10 text-center text-md-start mx-auto ms-md-0'>
                  <button className='mb-md-5  mt-md-3 mb-0'>SHOP NOW  &gt;</button>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
            </div>
  </>
            )
}
export default HomeHeaderImg;

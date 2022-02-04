import React from "react";
import Image from 'next/image';
import { Row, Col, Container } from "react-bootstrap";
import CollaborateForestImg from '../../assets/images/collaborate/collaborateForest.png'

function CollaborateForestProduce() {
  return (
    <>
      <div className="collaborate-forest-img-mobile">
        <Image src={CollaborateForestImg} className='w-100' alt="CollaborateForestImg" />
        <Container className="mt-4">
          <Row className=" justify-content-md-start gutter-collaborate-fix justify-content-center">
            <Col md={8} lg={6}className="col-10">
              <Row className="gutter-collaborate-fix">
                <Col md={9} className="py-md-5 my-2 ">
                  <p className="collaborate-forest-head-mobile mt-md-5 mb-0 ">
                  Chhattisgarh Minor 
                  </p>
                  <p className="collaborate-forest-head-mobile ">
                  Forest Produce 
                  </p>
                  <p className="collaborate-forest-head-mobile  mt-md-5 mb-4 ">
                 Cooperative Federation
                  </p>

                  <hr className="collaborate-forest-hr"/>


                  <p className="collaborate-header-para-mobile ">
                  All products of Chhattisgarh Herbals are powered by Chhattisgarh Minor Forest Produce Cooperative Federation, an institution dedicated to uplifting more than 1.2 million forest dwellers of Chhattisgarh state.  
                  </p>
                  <p className="collaborate-header-para-mobile ">
                  These pure natural forest products are collected by forest-dwelling tribals and manufactured by Women Self-help Groups in Van Dhan Kendras under the banner of CG Herbals brand.
                  </p>
                  <p className="collaborate-header-para-mobile ">
                  The Federation ensures that all profits from the sale of these products are ploughed back to these forest dwellers and SHGs as bonus payments, scholarships and insurance, providing a sustainable livelihood for the tribal community of Chhattisgarh.
                  </p>
                      <div className=' col-10'>
                  <button className='mb-md-5  mt-md-3 mb-0'>SHOP NOW  &gt;</button>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
            </div>
            
            <div className="collaborate-forest-img">
        <Container className="mt-4">
          <Row className=" justify-content-md-start justify-content-center gutter-collaborate-fix">
            <Col md={8} lg={6}className="col-10">
              <Row className="gutter-collaborate-fix">
                <Col md={10} className="py-md-5 my-2 ">
                  <p className="collaborate-forest-head mt-md-5 mb-0 text-center text-md-start">
                  Chhattisgarh Minor 
                  </p>
                  <p className="collaborate-forest-head text-center mb-0 text-md-start">
                  Forest Produce 
                  </p>
                  <p className="collaborate-forest-head text-center mb-3 text-md-start">
                  Cooperative Federation
                  </p>

                   
                  <p className="collaborate-forest-para text-center text-md-start">
                  All products of Chhattisgarh Herbals are powered by Chhattisgarh Minor Forest Produce Cooperative Federation, an institution dedicated to uplifting more than 1.2 million forest dwellers of Chhattisgarh state.
                  </p>
                  <p className="collaborate-forest-para text-center text-md-start">
                  These pure natural forest products are collected by forest-dwelling tribals and manufactured by Women Self-help Groups in Van Dhan Kendras under the banner of CG Herbals brand.
                  </p>
                  <p className="collaborate-forest-para text-center text-md-start">
                  The Federation ensures that all profits from the sale of these products are ploughed back to these forest dwellers and SHGs as bonus payments, scholarships and insurance, providing a sustainable livelihood for the tribal community of Chhattisgarh.
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
  );
}

export default CollaborateForestProduce;
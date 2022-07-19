import React from "react";
import Image from "next/image";
import { Row, Col, Container } from "react-bootstrap";
import CollaborateForestImg from "../../assets/images/collaborate/CollaborateForest.svg";

function CollaborateForestProduce() {
  return (
    <>
      <div className="collaborate-forest-img-mobile">
        <Image
          src={CollaborateForestImg}
          className="w-100"
          alt="CollaborateForestImg"
          unoptimized={true}
          loading="eager"
        />
        <Container className="mt-4">
          <Row className=" justify-content-md-start gutter-collaborate-fix justify-content-center">
            <Col md={8} lg={6} className="col-10">
              <Row className="gutter-collaborate-fix">
                <Col md={9} className="py-md-3 my-2 ">
                  <p className="collaborate-forest-head-mobile mt-md-5 mb-0 ">
                    Chhattisgarh Minor
                  </p>
                  <p className="collaborate-forest-head-mobile ">
                    Forest Produce
                  </p>
                  <p className="collaborate-forest-head-mobile  mb-4 ">
                    Cooperative Federation
                  </p>
                  <hr className="collaborate-forest-hr mt-5" />
                  <p className="collaborate-header-para-mobile ">
                    All products of Chhattisgarh Herbals are powered by
                    Chhattisgarh Minor Forest Produce Cooperative Federation, an
                    institution dedicated to uplifting more than 1.2 million
                    forest dwellers of Chhattisgarh state.
                  </p>
                  <p className="collaborate-header-para-mobile ">
                    These pure natural forest products are collected by
                    forest-dwelling tribals and manufactured by Women Self-help
                    Groups in Van Dhan Kendras under the banner of CG Herbals
                    brand.
                  </p>
                  <p className="collaborate-header-para-mobile ">
                    The Federation ensures that all profits from the sale of
                    these products are ploughed back to these forest dwellers
                    and SHGs as bonus payments, scholarships and insurance,
                    providing a sustainable livelihood for the tribal community
                    of Chhattisgarh.
                  </p>
                  <div className=" col-10 mb-5"></div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="collaborate-forest-img">
        <Container>
          <Row className=" justify-content-md-start justify-content-center gutter-collaborate-fix">
            <Col md={8} lg={6} className="col-10">
              <Row className="gutter-collaborate-fix">
                <Col md={9} className="py-md-4 my-2" style={{textAlign:"justify"}}>
                  <p className="collaborate-forest-head mt-md-5 mb-0 text-center text-md-start">
                    Chhattisgarh Minor
                  </p>
                  <p className="collaborate-forest-head text-center mb-0 text-md-start">
                    Forest Produce
                  </p>
                  <p className="collaborate-forest-head text-center  text-md-start">
                    Cooperative Federation
                  </p>

                  <hr className="collaborate-forest-hr mt-4" />
                  <p className="collaborate-forest-para">
                  ‘Chhattisgarh Herbals’ brand is owned by Chhattisgarh State Minor Forest
                   Produce (Trading & Development) Co-operative Federation Ltd. 
                   (CGMFP Federation), Nava Raipur.
                  </p>
                  <p className="collaborate-forest-para">
                    CGMFP Fed is a three tier Co-operative organization created with an objective
                     to promote the trade and development of Minor Forest Produce in the interest 
                     of forest dwelling gatherers, on co-operative pattern. 
                  </p>
                  <p className="collaborate-forest-para">
                    The CGMFP Federation is one of the largest employment generation efforts
                     of the Govt. of Chhattisgarh with approximately 13.5 Lakh Sangrahaks 
                     (MFP Gatherers) earning livelihood from collection of Minor Forest Produce. 
                  </p>
                  <p className="collaborate-forest-para">
                    More than 6,000 Women Self Help Groups with 71,000+ members, engaged 
                    in the process of Collection, Procurement and Processing makes the Federation, 
                    one of the largest Women empowerment efforts in the world.
                  </p>
                </Col>
              </Row>
            </Col>
            <Col md={8} lg={6} className="col-10" style={{margin:"60px 0 110px"}}>
              <Image
                src={CollaborateForestImg}
                className="w-100 h-100  "
                alt="CollaborateForestImg"
                unoptimized={true}
                loading="eager"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default CollaborateForestProduce;

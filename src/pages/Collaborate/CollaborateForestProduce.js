import React from "react";
import { Row, Col, Container } from "react-bootstrap";

function CollaborateForestProduce() {
  return (
    <>
      <div className="cllaborate-head-img">
        <Container>
          <Row className=" justify-content-md-start justify-content-center">
            <Col md={8} lg={6}className="col-10">
              <Row className="">
                <Col md={9} className="py-md-5 ">
                  <p className="collaborate-header-head mt-md-5 mb-0 text-center text-md-start">
                    Chhattisgarh Minor
                  </p>
                  <p className="collaborate-header-head text-center mb-0 text-md-start">
                    Forest Produce
                  </p>
                  <p className="collaborate-header-head text-center mb-4 text-md-start">
                    Cooperative Federation
                  </p>
                  <div className="d-flex">
                  <hr className="collaborate-forest-hr mx-auto mx-md-0" />
                  </div>
                  <p className="collaborate-header-para text-center text-md-start">
                    All products of Chhattisgarh Herbals are powered by
                    Chhattisgarh Minor Forest Produce Cooperative Federation, an
                    institution dedicated to uplifting more than 1.2 million
                    forest dwellers of Chhattisgarh state.
                    </p>
                    <p className="collaborate-header-para text-center text-md-start">
                      These pure natural forest products are collected by
                      forest-dwelling tribals and manufactured by Women
                      Self-help Groups in Van Dhan Kendras under the banner of
                      CG Herbals brand.
                    </p>
                    <p className="collaborate-header-para text-center text-md-start">
                      The Federation ensures that all profits from the sale of
                      these products are ploughed back to these forest dwellers
                      and SHGs as bonus payments, scholarships and insurance,
                      providing a sustainable livelihood for the tribal
                      community of Chhattisgarh.
                    </p>
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

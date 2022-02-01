import React from "react";
import { Row, Col } from "react-bootstrap";

function collaborateHeader() {
  return (
    <>
      <Row className="cllaborate-head-img justify-content-md-end  justify-content-center">
        <Col md={6} className="col-10">
          <Row className="">
            <Col md={9} className="py-md-5 ">
              <p className="collaborate-header-head mt-md-5 mb-0 text-center text-md-start">
                Collaborate
              </p>
              <p className="collaborate-header-head text-center text-md-start">
                {" "}
                with Us
              </p>
              <p className="collaborate-header-para text-center text-md-start">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>
              <div className="my-md-5 d-flex mb-5">
                <div className="mx-auto mx-md-0">
                  <button className="d-inline-block me-3">
                    CONTACT US &nbsp; &gt;
                  </button>
                  <button className="d-inline-block">
                    TENDERS &nbsp; &gt;
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default collaborateHeader;

import React from "react";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  NavDropdown,
  Dropdown,
  Card,
  Button,
} from "react-bootstrap";
import { BsFillCaretRightFill } from "react-icons/bs";

import Image from "next/image";
import newsroom from "../../../public/images/newsroomimage.png";

function IntoNewsroom() {
  return (
    <>
      <div>
        <Container>
          <div className="row">
            <div className="col-lg-12">
              <h1 className="newsroom-header mt-4 text-center">
                Into the Newsroom
              </h1>
              <div>
                <div className="news-header-div">
                  <hr className="news-header-hr" />
                </div>
              </div>
            </div>
          </div>

          <div>
            <Row>
              <Col md={3} lg={3}>
                <div>
                  <div>
                    <h6 className="browse-news-articles">BROWSE NEWS ARTICLES</h6>
                  </div>
                  <div className="News-Articles-div">
                    <hr className="News-Articles"/>
                  </div>
                  <div>
                    <Dropdown className="d-inline mx-2">
                      <Dropdown.Toggle id="dropdown-autoclose-true">
                        <span>
                          <BsFillCaretRightFill />
                        </span>
                        2021
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#">
                          <span>
                            <BsFillCaretRightFill className="news-icon"/>
                          </span>
                          December
                        </Dropdown.Item>
                        <Dropdown.Item href="#">
                          <span>
                            <BsFillCaretRightFill className="news-icon"/>
                          </span>
                          Novemer
                        </Dropdown.Item>
                        <Dropdown.Item href="#">
                          <span>
                            <BsFillCaretRightFill className="news-icon"/>
                          </span>
                          October
                        </Dropdown.Item>
                        <Dropdown.Item href="#">
                          <span>
                            <BsFillCaretRightFill className="news-icon"/>
                          </span>
                          September
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
              </Col>
              <Col md={9} lg={9}>
                <div className="news-room-card">
                  <Card style={{ width: "100% !important" }}>
                    <Card.Img variant="top" src="/images/newsroomimage.png" />
                    <Card.Body>
                      <Card.Title className="news-card-title">
                        Lac Cultivation and Processing
                      </Card.Title>
                      <Card.Text>
                        <span className="news-date-title">Sep 09, 2020</span>
                        <p className="news-card-para">
                          Etiam at varius diam, id blandit erat. Suspendisse
                          eget volutpat risus, id venenatis justo. Fusce
                          elementum ligula elit. Duis ultricies ultrices nibh, a
                          tincidunt risus pretium eleifend.
                        </p>
                      </Card.Text>
                      <Button className="news-card-btn">
                        <span className="news-read-more">READ MORE</span>
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
                <div className="news-room-card">
                  <Card style={{ width: "100% !important" }}>
                    <Card.Img variant="top" src="/images/newsroomimage.png" />
                    <Card.Body className="news-body">
                      <Card.Title className="news-card-title">
                        Lac Cultivation and Processing
                      </Card.Title>
                      <Card.Text>
                        <span className="news-date-title">Sep 09, 2020</span>
                        <p className="news-card-para">
                          Etiam at varius diam, id blandit erat. Suspendisse
                          eget volutpat risus, id venenatis justo. Fusce
                          elementum ligula elit. Duis ultricies ultrices nibh, a
                          tincidunt risus pretium eleifend.
                        </p>
                      </Card.Text>
                      <Button className="news-card-btn">
                        <span className="news-read-more">READ MORE</span>
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default IntoNewsroom;

import React from "react";
import Image from "next/image";
import { Container, Row, Col, Dropdown, Card } from "react-bootstrap";
import { BsFillCaretRightFill } from "react-icons/bs";
import Honey from "../../assets/images/blogs/Honey.png";
import Women from "../../assets/images/blogs/women.png";
import Tea from "../../assets/images/blogs/tea.png";
import Table from "../../assets/images/blogs/table.png";

function Blogs() {
  return (
    <>
      <div id="blogs-page">
        {/* -----------blogs-header------------ */}
        <div className="my-3">
          <p className="blogs-heading-para">The CG Herbals Blog</p>
          <hr className="blogs-heading-hr" />
        </div>

        {/* -----------blogs-container------------- */}

        <Container>
          <Row>
            <Col xs={12} sm={12} lg={3}>
              <div>
                <p>BROWSE BLOGS</p>
                <hr className="blogs-calender-hr" />
              </div>

              <div className="blog-calender-2022">
                <Dropdown className="d-inline ">
                  <Dropdown.Toggle id="dropdown-autoclose-true">
                    <span>
                      <BsFillCaretRightFill className="blogs-calender-arrow" />
                    </span>
                    2022
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#" className="calender-filter-months">
                      <span>
                        <BsFillCaretRightFill className="blogs-calender-icon" />
                      </span>
                      February
                    </Dropdown.Item>
                    <Dropdown.Item href="#" className="calender-filter-months">
                      <span>
                        <BsFillCaretRightFill className="blogs-calender-icon" />
                      </span>
                      January
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>

              <div className="blog-calender-2021">
                <Dropdown className="d-inline ">
                  <Dropdown.Toggle id="dropdown-autoclose-true">
                    <span>
                      <BsFillCaretRightFill className="blogs-calender-arrow" />
                    </span>
                    2021
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#" className="calender-filter-months">
                      <span>
                        <BsFillCaretRightFill className="blogs-calender-icon" />
                      </span>
                      December
                    </Dropdown.Item>
                    <Dropdown.Item href="#" className="calender-filter-months">
                      <span>
                        <BsFillCaretRightFill className="blogs-calender-icon" />
                      </span>
                      November
                    </Dropdown.Item>
                    <Dropdown.Item href="#" className="calender-filter-months">
                      <span>
                        <BsFillCaretRightFill className="blogs-calender-icon" />
                      </span>
                      October
                    </Dropdown.Item>
                    <Dropdown.Item href="#" className="calender-filter-months">
                      <span>
                        <BsFillCaretRightFill className="blogs-calender-icon" />
                      </span>
                      September
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </Col>

            <Col xs={12} sm={12} lg={8} >
              <Row className="g-4">
                <Col xs={12} md={6} className="mt-5">
                  <Card className="h-100 border-0 px-2">
                    <Image variant="top" src={Honey} />
                    <Card.Body className="blog-card-padding">
                      <p className="herbal-blogs-card-date">
                        &minus;&minus; &nbsp; February 02, 2022
                      </p>
                      <p className="herbal-blogs-card-title ">
                        How honey is sourced across the world
                      </p>
                      <p className="herbal-blogs-card-text">
                        Etiam at varius diam, id blandit erat. Suspendisse eget
                        volutpat risus, id venenatis justo. Fusce elementum
                        ligula elit. Duis ultricies ultrices nibh, a tincidunt
                        risus pretium eleifend.
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12} md={6} className="mt-5">
                  <Card className="h-100 border-0 px-2">
                    <Image variant="top" src={Women} />
                    <Card.Body className="blog-card-padding">
                      <p className="herbal-blogs-card-date">
                        &minus;&minus; &nbsp; January 25, 2022
                      </p>
                      <p className="herbal-blogs-card-title">
                        10 Tips for natural skincare that will boost your summer
                        skin regime
                      </p>
                      <p className="herbal-blogs-card-text">
                        Etiam at varius diam, id blandit erat. Suspendisse eget
                        volutpat risus, id venenatis justo. Fusce elementum
                        ligula elit. Duis ultricies ultrices nibh, a tincidunt
                        risus pretium eleifend.
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12} md={6} className="mt-5">
                  <Card className="h-100 border-0 px-2">
                    <Image variant="top" src={Tea} />
                    <Card.Body className="blog-card-padding">
                      <p className="herbal-blogs-card-date">
                        &minus;&minus; &nbsp; January 16, 2022
                      </p>
                      <p className="herbal-blogs-card-title">
                        Herbal ingredients you can add to your daily cup of tea
                      </p>
                      <p className="herbal-blogs-card-text">
                        Etiam at varius diam, id blandit erat. Suspendisse eget
                        volutpat risus, id venenatis justo. Fusce elementum
                        ligula elit. Duis ultricies ultrices nibh, a tincidunt
                        risus pretium eleifend.
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12} md={6} className="mt-5">
                  <Card className="h-100 border-0 px-2">
                    <Image variant="top" src={Table} />
                    <Card.Body className="blog-card-padding">
                      <p className="herbal-blogs-card-date">
                        &minus;&minus; &nbsp; December 19, 2021
                      </p>
                      <p className="herbal-blogs-card-title">
                        Ayurveda in Everyday life
                      </p>
                      <p className="herbal-blogs-card-text">
                        Etiam at varius diam, id blandit erat. Suspendisse eget
                        volutpat risus, id venenatis justo. Fusce elementum
                        ligula elit. Duis ultricies ultrices nibh, a tincidunt
                        risus pretium eleifend.
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12} md={6} className="mt-5">
                  <Card className="h-100 border-0 px-2">
                    <Image variant="top" src={Honey} />
                    <Card.Body className="blog-card-padding">
                      <p className="herbal-blogs-card-date">
                        &minus;&minus; &nbsp; February 02, 2022
                      </p>
                      <p className="herbal-blogs-card-title">
                        How honey is sourced across the world
                      </p>
                      <p className="herbal-blogs-card-text">
                        Etiam at varius diam, id blandit erat. Suspendisse eget
                        volutpat risus, id venenatis justo. Fusce elementum
                        ligula elit. Duis ultricies ultrices nibh, a tincidunt
                        risus pretium eleifend.
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12} md={6} className="mt-5">
                  <Card className="h-100 border-0 px-2">
                    <Image variant="top" src={Women} />
                    <Card.Body className="blog-card-padding">
                      <p className="herbal-blogs-card-date">
                        &minus;&minus; &nbsp; January 25, 2022
                      </p>
                      <p className="herbal-blogs-card-title">
                        10 Tips for natural skincare that will boost your summer
                        skin regime
                      </p>
                      <p className="herbal-blogs-card-text">
                        Etiam at varius diam, id blandit erat. Suspendisse eget
                        volutpat risus, id venenatis justo. Fusce elementum
                        ligula elit. Duis ultricies ultrices nibh, a tincidunt
                        risus pretium eleifend.
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12} md={6} className="mt-5">
                  <Card className="h-100 border-0 px-2">
                    <Image variant="top" src={Tea} />
                    <Card.Body className="blog-card-padding">
                      <p className="herbal-blogs-card-date">
                        &minus;&minus; &nbsp; January 16, 2022
                      </p>
                      <p className="herbal-blogs-card-title">
                        Herbal ingredients you can add to your daily cup of tea
                      </p>
                      <p className="herbal-blogs-card-text">
                        Etiam at varius diam, id blandit erat. Suspendisse eget
                        volutpat risus, id venenatis justo. Fusce elementum
                        ligula elit. Duis ultricies ultrices nibh, a tincidunt
                        risus pretium eleifend.
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12} md={6} className="mt-5">
                  <Card className="h-100 border-0 px-2">
                    <Image variant="top" src={Table} />
                    <Card.Body className="blog-card-padding">
                      <p className="herbal-blogs-card-date">
                        &minus;&minus; &nbsp; December 19, 2021
                      </p>
                      <p className="herbal-blogs-card-title">
                      Ayurveda in Everyday life
                      </p>
                      <p className="herbal-blogs-card-text">
                        Etiam at varius diam, id blandit erat. Suspendisse eget
                        volutpat risus, id venenatis justo. Fusce elementum
                        ligula elit. Duis ultricies ultrices nibh, a tincidunt
                        risus pretium eleifend.
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Blogs;
